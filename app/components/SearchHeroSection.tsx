"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../components/Logo"; // Import the Logo component

type SearchHeroSectionProps = {
  query: string;
  setQuery: (value: string) => void;
  setPage: (value: number) => void;
};

export default function SearchHeroSection({ query, setQuery, setPage }: SearchHeroSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const initialQuery = searchParams.get("query") || "";
    setQuery(initialQuery);
  }, [searchParams, setQuery]);

  const handleSearch = () => {
    if (query.trim()) {
      setPage(0);
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative bg-gray-800 text-white py-6 flex flex-col items-center justify-center px-4">
      {/* Logo at the Top */}
      <div className="mb-4 cursor-pointer scale-75 sm:scale-100" onClick={() => router.push("/")}>
        <Logo />
      </div>

      {/* Search Bar (Same as Before) */}
      <div className="bg-white text-gray-700 w-full max-w-xl mt-4 flex items-center rounded-full shadow-lg overflow-hidden border border-gray-300">
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
    </div>
  );
}
