'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Tag, DollarSign, User, Mail, Shield, ArrowLeft, Heart, Share, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../../components/Footer';
import SearchHeroSection from '../../components/SearchHeroSection';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import { auth } from "../../firebase";


type Listing = {
  id: number;
  title: string;
  description: string;
  city: string;
  address: string;
  category: string;
  availableForRent: boolean;
  availableForSale: boolean;
  price1Day: number;
  price3Days: number;
  price7Days: number;
  owner: {
    id: number;
    username: string;
    email: string;
    kycVerified: boolean;
  };
};

const ProductPage = ({ params }: { params: Promise<{ Id: string }> }) => {
  const { Id } = use(params); // ✅ unwrap the params
  const id = Id;


  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Calendar states
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/listings/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setListing(data);
        // Simulate image loading
        setTimeout(() => setImageLoaded(true), 600);
      } catch (err: any) {
        console.error('Error fetching listing:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  // Calculate number of days and total price when dates change
  useEffect(() => {
    if (startDate && endDate && listing) {
      // Calculate the difference in days
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Include both start and end days
      setNumberOfDays(diffDays);
      
      // Calculate price based on the rental duration logic
      let calculatedPrice = 0;
      
      if (diffDays <= 2) {
        // First 2 days: price per day
        calculatedPrice = diffDays * listing.price1Day;
      } else if (diffDays <= 6) {
        // 3-6 days: 3-day price logic
        const threeDayPeriods = Math.floor(diffDays / 3);
        const remainingDays = diffDays % 3;
        calculatedPrice = (threeDayPeriods * listing.price3Days) + (remainingDays * listing.price1Day);
      } else {
        // 7+ days: weekly price logic
        const weekPeriods = Math.floor(diffDays / 7);
        const remainingDays = diffDays % 7;
        
        if (remainingDays <= 2) {
          // For remaining days ≤ 2, use daily rate
          calculatedPrice = (weekPeriods * listing.price7Days) + (remainingDays * listing.price1Day);
        } else {
          // For remaining days > 2, use 3-day rate + daily rate for any additional days
          const threeDayPeriods = Math.floor(remainingDays / 3);
          const extraDays = remainingDays % 3;
          calculatedPrice = (weekPeriods * listing.price7Days) + 
                           (threeDayPeriods * listing.price3Days) + 
                           (extraDays * listing.price1Day);
        }
      }
      
      // Calculate service fee and total price
      const serviceFee = calculatedPrice * 0.05; // No rounding here
      const total = calculatedPrice + serviceFee;
      
      setTotalPrice(Math.round(total)); // Round only the final total price
    }
  }, [startDate, endDate, listing]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

// Initialize tomorrow - FIXED: Actually set to tomorrow
const today = new Date();
today.setHours(0, 0, 0, 0); // Reset time to start of day
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1); // ✅ Fixed: Add 1 day

// Calendar functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const goToPreviousMonth = () => {
  const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
  const isBeforeTomorrowMonth =
    prevMonth.getFullYear() < tomorrow.getFullYear() ||
    (prevMonth.getFullYear() === tomorrow.getFullYear() && prevMonth.getMonth() < tomorrow.getMonth());

  if (!isBeforeTomorrowMonth) {
    setCurrentMonth(prevMonth);
  }
};

const goToNextMonth = () => {
  setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
};

const handleDateClick = (day: number) => {
  const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

  if (selectedDate < tomorrow) return;

  if (!startDate || (startDate && endDate)) {
    setStartDate(selectedDate);
    setEndDate(null);
  } else if (selectedDate < startDate) {
    setStartDate(selectedDate);
    setEndDate(null);
  } else {
    setEndDate(selectedDate);
  }
};

const isDateInRange = (day: number) => {
  if (!startDate || !endDate) return false;

  const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
  return currentDate >= startDate && currentDate <= endDate;
};

const isStartDate = (day: number) => {
  if (!startDate) return false;

  const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
  return currentDate.getTime() === startDate.getTime();
};

const isEndDate = (day: number) => {
  if (!endDate) return false;

  const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
  return currentDate.getTime() === endDate.getTime();
};
const handleRequestToRent = async () => {
  if (!startDate || !endDate || !listing) {
    alert("Please select valid dates and ensure the listing is loaded.");
    return;
  }

  // Check if the user is logged in using Firebase auth
  const user = auth.currentUser;
  if (!user) {
    alert("You must be logged in to make a booking.");
    return;
  }

  // ✅ FIXED: Validate dates before sending
  if (endDate <= startDate) {
    alert("End date must be after start date.");
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (startDate <= today) {
    alert("Start date must be in the future.");
    return;
  }

  try {
    // Retrieve the token from Firebase
    const token = await user.getIdToken();
    console.log("Token being sent:", token);

    // ✅ FIXED: Remove renterId - backend will get it from the authenticated user token
    const requestData = {
      listingId: listing.id,
      startDate: startDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
      endDate: endDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
    };

    const response = await fetch("http://localhost:8080/api/bookings/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      // ✅ Improved error handling - extract text or JSON
      let errorMessage = "Failed to send booking request";
      try {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData;
        } else {
          errorMessage = await response.text();
        }
      } catch (e) {
        errorMessage = `Server error: ${response.status} ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }

    // ✅ Handle both text and JSON responses
    const contentType = response.headers.get("content-type");
    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    alert(`Booking request submitted successfully!\n\n${responseData}`);
    console.log("Booking response:", responseData);

    // Reset the selected dates after successful booking
    setStartDate(null);
    setEndDate(null);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      alert(`❌ Booking Failed\n\n${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  }
};

const renderCalendar = () => {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const monthName = currentMonth.toLocaleString('default', { month: 'long' });

  const days = [];
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Add weekday headers
  for (let i = 0; i < 7; i++) {
    days.push(
      <div key={`weekday-${i}`} className="text-center text-xs font-medium text-gray-500 py-2">
        {weekdays[i]}
      </div>
    );
  }

  // Add empty cells before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  // Add cells for each day of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(year, month, i);
    const isDisabled = currentDate < tomorrow;

    const isStart = isStartDate(i);
    const isEnd = isEndDate(i);
    const isInRange = isDateInRange(i);

    let className = "cursor-pointer text-center rounded-md p-2 hover:bg-blue-50";

    if (isDisabled) {
      className = "text-center rounded-md p-2 text-gray-400 cursor-not-allowed";
    } else if (isStart && isEnd) {
      className = "cursor-pointer text-center rounded-md bg-blue-600 text-white p-2";
    } else if (isStart) {
      className = "cursor-pointer text-center rounded-l-md bg-blue-600 text-white p-2";
    } else if (isEnd) {
      className = "cursor-pointer text-center rounded-r-md bg-blue-600 text-white p-2";
    } else if (isInRange) {
      className = "cursor-pointer text-center bg-blue-100 p-2";
    }

    days.push(
      <div 
        key={`day-${i}`} 
        className={className}
        onClick={() => !isDisabled && handleDateClick(i)}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={goToPreviousMonth}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="font-medium">
          {monthName} {year}
        </h3>
        <button 
          onClick={goToNextMonth}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>
    </div>
  );
};


  // Loading skeleton
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        <SearchHeroSection query={query} setQuery={setQuery} setPage={() => {}} />
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 w-1/3 bg-gray-200 mb-6 rounded-lg"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-200 h-96 rounded-2xl"></div>
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded-lg w-1/2"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-40 bg-gray-200 rounded-lg"></div>
                <div className="h-12 bg-gray-200 rounded-lg w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        <SearchHeroSection query={query} setQuery={setQuery} setPage={() => {}} />
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center max-w-lg">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-red-500 text-2xl">!</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link href="/listings" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft size={16} className="mr-1" /> Go back to listings
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Not found state
  if (!listing) {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        <SearchHeroSection query={query} setQuery={setQuery} setPage={() => {}} />
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center max-w-lg">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl">?</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Listing not found</h2>
            <p className="text-gray-600 mb-4">The item you're looking for doesn't seem to exist or has been removed.</p>
            <Link href="/listings" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft size={16} className="mr-1" /> Browse other listings
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <SearchHeroSection query={query} setQuery={setQuery} setPage={() => {}} />

      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/listings" className="hover:text-blue-600">Listings</Link>
            <span className="mx-2">/</span>
            <Link href={`/category/${listing.category}`} className="hover:text-blue-600">{listing.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium truncate">{listing.title}</span>
          </div>
        </div>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-7 gap-8">
          {/* Image Section - 4/7 of the grid */}
          <motion.div className="md:col-span-4" variants={itemVariants}>
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-96 shadow-lg">
              {!imageLoaded ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : null}
              <div className={`absolute inset-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Image 
                  src="/api/placeholder/800/600" 
                  alt={listing.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Image overlay actions */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all shadow-md">
                  <Heart size={20} className="text-gray-700" />
                </button>
                <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all shadow-md">
                  <Share size={20} className="text-gray-700" />
                </button>
              </div>
              {/* Category badge */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {listing.category}
                </span>
              </div>
            </div>

            {/* Description Section */}
            <motion.div className="mt-8 bg-white p-6 rounded-2xl shadow-sm" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                About this item
              </h2>
              <p className="text-gray-700 leading-relaxed">{listing.description}</p>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{listing.city}, {listing.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-50 p-2 rounded-lg mr-3">
                    <Tag size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{listing.category}</p>
                  </div>
                </div>
              </div>
              
              {/* Pricing Info Section */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Pricing Structure</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-gray-600 text-sm mb-1">1-2 Days</p>
                    <p className="text-blue-600 font-semibold">₹{listing.price1Day}/day</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-gray-600 text-sm mb-1">3-6 Days</p>
                    <p className="text-blue-600 font-semibold">₹{listing.price3Days}/3 days</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-gray-600 text-sm mb-1">7+ Days</p>
                    <p className="text-blue-600 font-semibold">₹{listing.price7Days}/week</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * The system automatically calculates the best price based on your selected dates.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Info & Booking Section - 3/7 of the grid */}
          <motion.div className="md:col-span-3" variants={itemVariants}>
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-4">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{listing.title}</h1>
              </div>

              {/* Availability badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {listing.availableForRent && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    Available for Rent
                  </span>
                )}
                {listing.availableForSale && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    Available for Sale
                  </span>
                )}
              </div>

              {/* Calendar */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Select Rental Dates</h3>
                {renderCalendar()}
              </div>

              {/* Selected Dates Summary */}
              {startDate && (
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Selected Period</h4>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Start Date:</span>
                    <span className="font-medium">{startDate.toLocaleDateString()}</span>
                  </div>
                  {endDate && (
                    <>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">End Date:</span>
                        <span className="font-medium">{endDate.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{numberOfDays} days</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Total Price */}
              {startDate && endDate && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Rental Cost</span>
                    <span className="font-medium">₹{Math.round(totalPrice * 0.95)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Service fee (5%)</span>
                    <span className="font-medium">₹{Math.round(totalPrice * 0.05)}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div>
              )}

                

              {/* Book Now Button */}
              <button 
  className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${(!startDate || !endDate) ? 'opacity-70 cursor-not-allowed' : ''}`}
  disabled={!startDate || !endDate}
  onClick={handleRequestToRent}
>
  {(!startDate || !endDate) ? 'Select Dates to Book' : 'Request to Rent'}
</button>

              {/* Owner Info */}
              <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <User size={24} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">{listing.owner.username}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail size={14} className="mr-1" />
                      <span>{listing.owner.email}</span>
                    </div>
                    {listing.owner.kycVerified && (
                      <div className="flex items-center text-sm text-green-600 mt-1">
                        <Shield size={14} className="mr-1" />
                        <span>KYC Verified</span>
                      </div>
                    )}
                  </div>
                </div>
                <button className="w-full mt-4 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                  Contact Owner
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Similar Listings Section */}
        {/* <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="Similar listing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">Similar {listing.category}</h3>
                  <p className="text-sm text-gray-500 mb-2">{listing.city}</p>
                  <p className="font-semibold">₹{Math.round(listing.price1Day * (0.8 + i * 0.1))}/day</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>

      {/* Footer */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;