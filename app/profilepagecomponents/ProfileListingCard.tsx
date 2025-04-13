import React from "react";
import { ListingProfilePage } from "../types/Listings";

interface ProfileListingCardProps {
  listing: ListingProfilePage;
}

export default function ProfileListingCard({ listing }: ProfileListingCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{listing.description}</p>
      <p className="text-sm text-gray-500">
        <strong>Category:</strong> {listing.category}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Address:</strong> {listing.address}, {listing.city}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Price (1 Day):</strong> ${listing.price1Day}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Price (3 Days):</strong> ${listing.price3Days}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Price (7 Days):</strong> ${listing.price7Days}
      </p>
    </div>
  );
}