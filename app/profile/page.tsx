"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ListingCard from "../components/Listingcard";
import { ListingsResponse } from "../types/Listings";

export default function UserProfile() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [userListings, setUserListings] = useState<ListingsResponse | null>(null);
  const [rentedItems, setRentedItems] = useState<ListingsResponse | null>(null);
  const [profileData, setProfileData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    bio: ""
  });

  useEffect(() => {
    // Redirect if not logged in
    if (!user) {
      
      return;
    }

    // Fetch user's listings
    fetch(`http://localhost:8080/api/listings/user/${user.uid}`, { cache: "no-store" })
      .then((res) => res.json())
      .then(setUserListings)
      .catch(error => console.error("Error fetching user listings:", error));

    // Fetch items the user is renting
    fetch(`http://localhost:8080/api/rentals/user/${user.uid}`, { cache: "no-store" })
      .then((res) => res.json())
      .then(setRentedItems)
      .catch(error => console.error("Error fetching rented items:", error));

    // You would typically fetch additional user profile data here
    // For now we're just using what's in the auth object
    if (user) {
      setProfileData(prev => ({
        ...prev,
        displayName: user.displayName || "",
        email: user.email || ""
      }));
    }
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
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="bg-cream min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white p-4 sm:px-6 sm:py-5 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push("/")}
            className="hover:text-gray-300 transition text-sm sm:text-base"
          >
            Home
          </button>
          <button
            onClick={() => router.push("/createlisting")}
            className="bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded-full text-black font-bold transition text-sm sm:text-base"
          >
            + List an Item
          </button>
          <button
            onClick={handleLogout}
            className="hover:text-gray-300 transition text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex-grow container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-500 text-white p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gray-300 text-gray-700 flex items-center justify-center rounded-full font-bold text-4xl">
                {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-2xl font-bold">{user.displayName || user.email || "User"}</h1>
                <p className="opacity-80">Member since {new Date(user.metadata.creationTime || Date.now()).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab("profile")}
              className={`px-6 py-3 text-gray-700 ${activeTab === "profile" ? "border-b-2 border-gray-700 font-semibold" : ""}`}
            >
              Profile
            </button>
            <button 
              onClick={() => setActiveTab("listings")}
              className={`px-6 py-3 text-gray-700 ${activeTab === "listings" ? "border-b-2 border-gray-700 font-semibold" : ""}`}
            >
              My Listings
            </button>
            <button 
              onClick={() => setActiveTab("rentals")}
              className={`px-6 py-3 text-gray-700 ${activeTab === "rentals" ? "border-b-2 border-gray-700 font-semibold" : ""}`}
            >
              Items I'm Renting
            </button>
            <button 
              onClick={() => setActiveTab("settings")}
              className={`px-6 py-3 text-gray-700 ${activeTab === "settings" ? "border-b-2 border-gray-700 font-semibold" : ""}`}
            >
              Settings
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-700">Profile Information</h2>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-medium transition"
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </button>
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        name="displayName"
                        value={profileData.displayName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        disabled
                      />
                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={profileData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Bio</label>
                      <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded h-32"
                      />
                    </div>
                    <button 
                      onClick={handleProfileUpdate}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition"
                    >
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-gray-600 font-medium">Name</h3>
                      <p className="text-gray-800">{profileData.displayName || "-"}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-600 font-medium">Email</h3>
                      <p className="text-gray-800">{profileData.email}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-600 font-medium">Phone</h3>
                      <p className="text-gray-800">{profileData.phone || "-"}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-600 font-medium">Address</h3>
                      <p className="text-gray-800">{profileData.address || "-"}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-600 font-medium">Bio</h3>
                      <p className="text-gray-800">{profileData.bio || "-"}</p>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
                  <div className="border rounded-lg divide-y">
                    <div className="p-4 flex items-center text-gray-700">
                      <div className="mr-4">📦</div>
                      <div>
                        <p>You listed a new item</p>
                        <p className="text-sm text-gray-500">Yesterday</p>
                      </div>
                    </div>
                    <div className="p-4 flex items-center text-gray-700">
                      <div className="mr-4">🔍</div>
                      <div>
                        <p>You searched for "Camera equipment"</p>
                        <p className="text-sm text-gray-500">3 days ago</p>
                      </div>
                    </div>
                    <div className="p-4 flex items-center text-gray-700">
                      <div className="mr-4">👤</div>
                      <div>
                        <p>You updated your profile</p>
                        <p className="text-sm text-gray-500">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* My Listings Tab */}
            {activeTab === "listings" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-700">My Listings</h2>
                  <button 
                    onClick={() => router.push("/createlisting")}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-medium transition"
                  >
                    Add New Listing
                  </button>
                </div>
                
                {userListings?.content?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userListings.content.map((listing) => (
                      <div key={listing.id}>
                        <ListingCard listing={listing} />
                        <div className="mt-2 flex justify-end space-x-2">
                          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm">
                            Edit
                          </button>
                          <button className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded text-sm">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">You haven't listed any items yet</p>
                    <button
                      onClick={() => router.push("/createlisting")}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition"
                    >
                      Create Your First Listing
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Rentals Tab */}
            {activeTab === "rentals" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Items I'm Renting</h2>
                
                {rentedItems?.content?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rentedItems.content.map((listing) => (
                      <div key={listing.id}>
                        <ListingCard listing={listing} />
                        <div className="mt-2 bg-gray-50 p-3 rounded border">
                          <p className="text-sm font-medium">Rental Period:</p>
                          <p className="text-sm text-gray-600">Apr 10 - Apr 17, 2025</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">You're not currently renting any items</p>
                    <button
                      onClick={() => router.push("/")}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition"
                    >
                      Explore Items to Rent
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-3">Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-gray-600">Email notifications</label>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider"></span>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-gray-600">SMS notifications</label>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider"></span>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-gray-600">Marketing emails</label>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-3">Security</h3>
                    <div className="space-y-3">
                      <button className="text-gray-700 hover:text-gray-900 font-medium">
                        Change Password
                      </button>
                      <div className="block w-full h-px bg-gray-200"></div>
                      <button className="text-gray-700 hover:text-gray-900 font-medium">
                        Two-factor Authentication
                      </button>
                      <div className="block w-full h-px bg-gray-200"></div>
                      <button className="text-gray-700 hover:text-gray-900 font-medium">
                        Login History
                      </button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-3">Privacy</h3>
                    <div className="space-y-3">
                      <button className="text-gray-700 hover:text-gray-900 font-medium">
                        Privacy Settings
                      </button>
                      <div className="block w-full h-px bg-gray-200"></div>
                      <button className="text-gray-700 hover:text-gray-900 font-medium">
                        Data & Personalization
                      </button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-red-50">
                    <h3 className="font-medium text-red-700 mb-3">Danger Zone</h3>
                    <button className="text-red-700 hover:text-red-900 font-medium">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
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
          background-color: #ccc;
          transition: .4s;
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
          transition: .4s;
          border-radius: 50%;
        }
        
        input:checked + .slider {
          background-color: #4b5563;
        }
        
        input:checked + .slider:before {
          transform: translateX(20px);
        }
      `}</style>
    </div>
  );
}