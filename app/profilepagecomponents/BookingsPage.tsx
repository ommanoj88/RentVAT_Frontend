"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../context/AuthContext";

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

  useEffect(() => {
    if (!user || !listingId) return;

    const fetchBookings = async () => {
      try {
        const token = await user.getIdToken(); // Get Firebase auth token
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
      }
    };

    fetchBookings();
  }, [user, listingId]);

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Bookings for Listing #{listingId}</h1>
      {bookings && bookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="border rounded-lg p-4 shadow-md bg-white">
              <p className="text-sm text-gray-600">
                <strong>Renter:</strong> {booking.renterName} ({booking.renterEmail})
              </p>
              <p className="text-sm text-gray-600">
                <strong>Start Date:</strong> {new Date(booking.startDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>End Date:</strong> {new Date(booking.endDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> {booking.status}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Total Price:</strong> ${booking.totalPrice.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Rental Price:</strong> ${booking.rentalPrice.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Platform Commission:</strong> ${booking.platformCommission.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                <strong>KYC Verified:</strong> {booking.kycVerified ? "Yes" : "No"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No bookings found for this listing.</p>
        </div>
      )}
    </div>
  );
}