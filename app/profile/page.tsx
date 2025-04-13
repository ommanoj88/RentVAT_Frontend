"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ListingCard from "../components/Listingcard";
import { ListingsResponse } from "../types/Listings";
import Navigation from "../profilepagecomponents/Navigation";
import ProfileTab from "../profilepagecomponents/ProfileTab";
import SettingsTab from "../profilepagecomponents/SettingsTab";
import MyListingsTab from "../profilepagecomponents/MyListingsTab";
import { ListingProfilePage } from "../types/Listings";
import { FiUser, FiGrid, FiShoppingBag, FiSettings, FiEdit2, FiChevronRight, FiCamera, FiStar, FiMapPin, FiCalendar, FiMail, FiPhone } from "react-icons/fi";

export default function UserProfile() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [userListings, setUserListings] = useState<ListingProfilePage[] | null>(null);
  const [rentedItems, setRentedItems] = useState<ListingsResponse | null>(null);
  const [profileData, setProfileData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    bio: ""
  });
  
  const [loading, setLoading] = useState(true);
  const currentDate = "2025-04-12"; // Using the date from user's message

  useEffect(() => {
    if (!user) {
      // router.push("/login");
      return;
    }
  
    setLoading(true);
    
    // Fetch user's listings
    fetch(`http://localhost:8080/api/listings/user/3`, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      console.log("User Listings Response:", data);
      setUserListings(data);
    })
    .catch((error) => console.error("Error fetching user listings:", error))
    .finally(() => setLoading(false));
  
    // Fetch items the user is renting
    fetch(`http://localhost:8080/api/listings/user/3`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Rented Items Response:", data);
        setRentedItems(data.content);
      })
      .catch((error) => console.error("Error fetching rented items:", error));
  
    // Update profile data
    setProfileData((prev) => ({
      ...prev,
      displayName: user.displayName || "",
      email: user.email || "",
    }));
  }, [user, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileUpdate = () => {
    // Here you would send the updated profile data to your backend
    console.log("Updating profile with data:", profileData);
    // Simulate successful update
    setIsEditing(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
          <div className="h-3 w-24 bg-gray-100 rounded"></div>
        </div>
      </div>
    );
  }

  // Calculate stats for the hero section
  const stats = [
    { label: "Listings", value: userListings?.length || 0 },
    { label: "Rentals", value: rentedItems?.length || 0 },
    { label: "Rating", value: "4.9", icon: <FiStar className="text-yellow-400" /> }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="py-8 md:py-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Profile Photo Section */}
              <div className="relative">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center border-4 border-white shadow-lg">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full font-bold text-4xl md:text-5xl relative overflow-hidden">
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md border border-gray-100 text-blue-500 hover:text-blue-600 transition-colors">
                  <FiCamera size={20} />
                </button>
              </div>

              {/* Profile Info Section */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                      {user.displayName || "ommanoj88"}
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                      <FiMapPin size={16} />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
                    >
                      <FiEdit2 size={16} />
                      Edit Profile
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-4 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full flex items-center gap-1">
                    <FiCalendar size={12} />
                    Joined {new Date(user.metadata.creationTime || Date.now()).toLocaleDateString()}
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full flex items-center gap-1">
                    <FiStar size={12} />
                    Verified User
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full flex items-center gap-1">
                    <FiUser size={12} />
                    Premium Member
                  </span>
                </div>

                <div className="hidden md:flex mb-4 space-x-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <FiMail className="text-gray-400" size={16} />
                    <span>{user.email || "user@example.com"}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <FiPhone className="text-gray-400" size={16} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                
                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0 mt-4 md:mt-2">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg py-3 px-2 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xl font-bold text-gray-800">{stat.value}</span>
                        {stat.icon}
                      </div>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto p-4 md:p-6 max-w-6xl">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide bg-white border-b border-gray-100">
            <button 
              onClick={() => setActiveTab("profile")}
              className={`px-6 py-4 flex items-center gap-2 text-sm font-medium transition-colors ${
                activeTab === "profile" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FiUser size={18} />
              <span>Profile</span>
            </button>
            <button 
              onClick={() => setActiveTab("listings")}
              className={`px-6 py-4 flex items-center gap-2 text-sm font-medium transition-colors ${
                activeTab === "listings" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FiGrid size={18} />
              <span>My Listings</span>
            </button>
            <button 
              onClick={() => setActiveTab("rentals")}
              className={`px-6 py-4 flex items-center gap-2 text-sm font-medium transition-colors ${
                activeTab === "rentals" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FiShoppingBag size={18} />
              <span>Items I'm Renting</span>
            </button>
            <button 
              onClick={() => setActiveTab("settings")}
              className={`px-6 py-4 flex items-center gap-2 text-sm font-medium transition-colors ${
                activeTab === "settings" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FiSettings size={18} />
              <span>Settings</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8 bg-white min-h-[500px]">
            {activeTab === "profile" && (
              <ProfileTab
                isEditing={isEditing}
                profileData={profileData}
                setIsEditing={setIsEditing}
                handleInputChange={handleInputChange}
                handleProfileUpdate={handleProfileUpdate}
              />
            )}

            {/* My Listings Tab */}
            {activeTab === "listings" && (
              loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-4">
                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-100 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : userListings ? (
                <MyListingsTab userListings={userListings} />
              ) : (
                <div className="text-center py-16 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <FiGrid className="text-blue-500" size={24} />
                  </div>
                  <p className="text-gray-600 mb-4">You don't have any listings yet</p>
                  <button
                    onClick={() => router.push("/create-listing")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                  >
                    Create Your First Listing
                    <FiChevronRight />
                  </button>
                </div>
              )
            )}

            {/* Rentals Tab */}
            {activeTab === "rentals" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Items I'm Renting</h2>
                
                {rentedItems?.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rentedItems?.map((listing: ListingProfilePage) => (
                      <div key={listing.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                      <div>
                        <ListingCard listing={{ ...listing, price: listing.price || 0, photoUrl: listing.photoUrl || "" }} />
                      </div>
                      <div className="p-4 bg-blue-50 border-t border-blue-100">
                        <p className="text-sm font-medium text-blue-800">Rental Period</p>
                        <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-blue-700">Apr 10 - Apr 17, 2025</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                        </div>
                      </div>
                      </div>
                    ))}
                    </div>
                ) : (
                  <div className="text-center py-16 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <FiShoppingBag className="text-blue-500" size={24} />
                    </div>
                    <p className="text-gray-600 mb-4">You're not currently renting any items</p>
                    <button
                      onClick={() => router.push("/")}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                    >
                      Explore Items to Rent
                      <FiChevronRight />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && <SettingsTab />}
            
          </div>
        </div>
        
        {/* Mobile Sign Out Button */}
        <div className="md:hidden mt-6 flex justify-center">
          <button
            onClick={handleLogout}
            className="w-full max-w-xs px-4 py-3 border border-gray-200 rounded-lg text-center font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      <Footer />
      
      {/* Custom CSS for switch toggle */}
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
        
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #e2e8f0;
          transition: .2s;
          border-radius: 24px;
        }
        
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .2s;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        input:checked + .slider {
          background-color: #3b82f6;
        }
        
        input:checked + .slider:before {
          transform: translateX(20px);
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}