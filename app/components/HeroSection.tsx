"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Logo from "./Logo";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const router = useRouter(); // Use Next.js router for navigation

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 sm:px-12 sm:py-5">
        <Logo />
        <div className="flex space-x-4 sm:space-x-6 text-sm sm:text-lg">
          <a href="#" className="hover:text-gray-300 transition">How It Works</a>
          <a href="#" className="hover:text-gray-300 transition">Guarantee</a>
          <a href="#" className="hover:text-gray-300 transition">FAQs</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
          <button className="bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded-full text-black font-bold transition text-sm sm:text-base">+ List an Item</button>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 text-black flex items-center justify-center rounded-full font-bold text-sm sm:text-base">UR</div>
        </div>
      </nav>

      {/* Hero Content */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mt-14 sm:mt-16">Rent Smarter, Save More</h1>
      <p className="text-base sm:text-lg mt-3 opacity-80">Access anything, anytime—no need to buy!</p>

{/* Search Bar */}
<div className="bg-white text-gray-700 w-full max-w-xl mt-6 flex items-center rounded-full shadow-lg overflow-hidden border border-gray-300">
  <input
    type="text"
    placeholder="Search for rentals..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="flex-grow p-4 text-base sm:text-lg outline-none h-full"
    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
  />
  <button
    onClick={handleSearch}
    className="bg-gray-600 hover:bg-gray-700 px-6 py-[14px] text-white font-bold transition text-sm sm:text-base h-full flex items-center justify-center"
  >
    🔍 Search
  </button>
</div>


      {/* New Feature Below Search Bar */}
      <div className="mt-5 flex flex-wrap justify-center gap-4">
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full text-base sm:text-lg font-medium transition w-full sm:w-auto">🏆 Explore Top Categories</button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-base sm:text-lg font-medium transition w-full sm:w-auto">🔥 Trending Rentals</button>
      </div>
    </div>
  );
}
