"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white min-h-[40vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold">Find What You Need, When You Need It!</h1>
      <p className="text-base sm:text-lg mt-3 opacity-80">Browse thousands of rentals at your fingertips.</p>
      
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
    </div>
  );
}