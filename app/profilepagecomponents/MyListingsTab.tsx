"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ListingProfilePage } from "../types/Listings";

interface MyListingsTabProps {
  userListings: ListingProfilePage[];
}

export default function MyListingsTab({ userListings }: MyListingsTabProps) {
  const router = useRouter();

  if (!userListings || userListings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">You haven't listed any items yet</p>
        <button
          onClick={() => router.push("/createlisting")}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition"
        >
          Create Your First Listing
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {userListings.map((listing) => (
        <div key={listing.id} className="border rounded-lg p-4 shadow-md bg-white">
          <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
          <p className="text-sm text-gray-600">{listing.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => router.push(`/bookings?listingId=${listing.id}`)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
            >
              View Bookings
            </button>
            <div className="flex space-x-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm">
                Edit
              </button>
              <button className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded text-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}