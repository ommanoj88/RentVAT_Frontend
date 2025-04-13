"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Calendar, Clock, DollarSign, CheckCircle, XCircle, AlertTriangle, User, Shield, FileText, ArrowLeft } from "lucide-react";

interface Booking {
  id: number;
  renterId: number;
  renterName: string;
  renterEmail: string;
  startDate: string;
  endDate: string;
  status: string;
  totalPrice: number;
  rentalPrice: number;
  platformCommission: number;
  kycVerified: boolean;
  createdAt: string;
}

export default function BookingsPage() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const listingId = searchParams.get("listingId");
  const [bookings, setBookings] = useState<Booking[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  useEffect(() => {
    if (!user || !listingId) return;

    const fetchBookings = async () => {
      try {
        const token = await user.getIdToken();
        const response = await fetch(`http://localhost:8080/api/bookings/listing/${listingId}/bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();
        setBookings(data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user, listingId]);

  const handleAction = async (bookingId: number, action: "accept" | "reject" | "complete" | "cancel") => {
    try {
      const token = await user?.getIdToken();
      const response = await fetch(`http://localhost:8080/api/bookings/${bookingId}/${action}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to ${action} booking`);
      }

      const updatedBookings = bookings?.map((booking) =>
        booking.id === bookingId
          ? { ...booking, status: action === "accept" ? "ACCEPTED" : action === "reject" ? "REJECTED" : action === "complete" ? "COMPLETED" : "CANCELLED_BY_RENTER" }
          : booking
      );
      setBookings(updatedBookings || null);
    } catch (err: any) {
      alert(err.message || `Failed to ${action} booking`);
    }
  };

  const filteredBookings = bookings?.filter(booking => 
    selectedFilter === "ALL" || booking.status === selectedFilter
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case "PENDING": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "ACCEPTED": return "bg-green-50 text-green-700 border-green-200";
      case "REJECTED": return "bg-red-50 text-red-700 border-red-200";
      case "COMPLETED": return "bg-blue-50 text-blue-700 border-blue-200";
      case "CANCELLED_BY_RENTER": return "bg-gray-50 text-gray-700 border-gray-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "PENDING": return <Clock size={14} className="mr-1" />;
      case "ACCEPTED": return <CheckCircle size={14} className="mr-1" />;
      case "REJECTED": return <XCircle size={14} className="mr-1" />;
      case "COMPLETED": return <CheckCircle size={14} className="mr-1" />;
      case "CANCELLED_BY_RENTER": return <AlertTriangle size={14} className="mr-1" />;
      default: return <Clock size={14} className="mr-1" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 mt-4">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle size={32} className="text-red-500" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Error Loading Bookings</h2>
          <p className="text-gray-600 text-center mb-6">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center"
          >
            <ArrowLeft size={16} className="mr-2" /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </button>
          
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Bookings for Listing #{listingId}</h1>
            <div className="mt-4 sm:mt-0">
                <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
                  <button 
                    onClick={() => setSelectedFilter("ALL")}
                    className={`px-4 py-2 text-sm rounded-md ${selectedFilter === "ALL" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setSelectedFilter("PENDING")}
                    className={`px-4 py-2 text-sm rounded-md ${selectedFilter === "PENDING" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Pending
                  </button>
                  <button 
                    onClick={() => setSelectedFilter("ACCEPTED")}
                    className={`px-4 py-2 text-sm rounded-md ${selectedFilter === "ACCEPTED" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Accepted
                  </button>
                  <button 
                    onClick={() => setSelectedFilter("COMPLETED")}
                    className={`px-4 py-2 text-sm rounded-md ${selectedFilter === "COMPLETED" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Completed
                  </button>
                </div>
            </div>
          </div>
        </div>

        {filteredBookings && filteredBookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-md">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <User size={16} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{booking.renterName}</h3>
                        <p className="text-sm text-gray-500">{booking.renterEmail}</p>
                      </div>
                    </div>
                    <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      <span className="font-medium mr-1">From:</span>
                      {new Date(booking.startDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      <span className="font-medium mr-1">To:</span>
                      {new Date(booking.endDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <DollarSign size={16} className="mr-2 text-gray-400" />
                      <span className="font-medium mr-1">Total:</span>
                      ${booking.totalPrice.toFixed(2)}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Shield size={16} className="mr-2 text-gray-400" />
                      <span className="font-medium mr-1">KYC Status:</span>
                      {booking.kycVerified ? (
                        <span className="inline-flex items-center text-green-600">
                          <CheckCircle size={14} className="mr-1" /> Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-red-600">
                          <XCircle size={14} className="mr-1" /> Not Verified
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>
                        <span className="block text-gray-500">Rental Price</span>
                        <span className="font-medium">${booking.rentalPrice.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Platform Fee</span>
                        <span className="font-medium">${booking.platformCommission.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {booking.status === "PENDING" && (
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleAction(booking.id, "accept")}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex justify-center items-center"
                      >
                        <CheckCircle size={14} className="mr-1" /> Accept
                      </button>
                      <button
                        onClick={() => handleAction(booking.id, "reject")}
                        className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition flex justify-center items-center"
                      >
                        <XCircle size={14} className="mr-1" /> Reject
                      </button>
                      <button
                        onClick={() => handleAction(booking.id, "cancel")}
                        className="col-span-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition flex justify-center items-center"
                      >
                        <AlertTriangle size={14} className="mr-1" /> Cancel
                      </button>
                    </div>
                  )}
                  
                  {booking.status === "ACCEPTED" && (
                    <div className="mt-4">
                      <button
                        onClick={() => handleAction(booking.id, "complete")}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex justify-center items-center"
                      >
                        <CheckCircle size={14} className="mr-1" /> Mark as Complete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-sm">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileText size={24} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-medium text-gray-800 mb-2">No bookings found</h2>
            <p className="text-gray-500 mb-6">No bookings are currently available for this listing.</p>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition"
            >
              <ArrowLeft size={16} className="mr-2" /> Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}