"use client";

import HeroSection from "./components/HeroSection";
import Logo from "./components/Logo";
import CategoryList from "./components/Categorylist";
import ListingCard from "./components/Listingcard";
import Footer from "./components/Footer";
import WhyRentingIsBest from "./components/WhyRentingIsBest";
import SafeAndSecure from "./components/HowItWorks";
import { ListingsResponse } from "./types/Listings";
import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";

const API_URL = "http://localhost:8080/api/search/listings?page=0&size=10";

export default function Home() {
  const [listings, setListings] = useState<ListingsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch listings');
        return res.json();
      })
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching listings:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const userId = user?.uid; // ✅ real user ID from Firebase

  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <HeroSection />

      <div className="flex-grow w-full p-6">
        <CategoryList />

        <h1 className="text-2xl font-bold mt-6 text-green-900 w-full px-6">
          Recently Added Listings
        </h1>

        <div className="w-full overflow-x-auto scrollbar-hide mt-4 px-6">
          <div className="flex space-x-4 w-max">
            {loading ? (
              <p className="text-gray-600">Loading listings...</p>
            ) : error ? (
              <p className="text-red-600">Error loading listings: {error}</p>
            ) : listings?.content && listings.content.length > 0 ? (
              listings.content.map((listing) => (
                <div key={listing.id} className="w-80 inline-block">
                  <ListingCard listing={listing} />
                </div>
              ))
            ) : (
              <p className="text-gray-600">No listings available</p>
            )}
          </div>
        </div>
      </div>

      <WhyRentingIsBest />
      <SafeAndSecure />
      <Footer />
    </main>
  );
}
