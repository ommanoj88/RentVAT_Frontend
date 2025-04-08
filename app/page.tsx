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
  const { user } = useAuth();

  useEffect(() => {
    fetch(API_URL, { cache: "no-store" })
      .then((res) => res.json())
      .then(setListings);
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
    {listings?.content.map((listing) => (
      <div key={listing.id} className="w-80 inline-block">
        <ListingCard listing={listing} />
      </div>
    ))}
  </div>
</div>
      </div>

      <WhyRentingIsBest />
      <SafeAndSecure />
      <Footer />
    </main>
  );
}
