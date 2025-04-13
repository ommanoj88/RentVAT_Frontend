"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";

type SearchHeroSectionProps = {
  query: string;
  setQuery: (value: string) => void;
  setPage: (value: number) => void;
};

export default function SearchHeroSection({ query, setQuery, setPage }: SearchHeroSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches] = useState(['camera equipment', 'power tools', 'camping gear', 'furniture']);
  
  // Trending searches that might be relevant to your rental platform
  const trendingSearches = [
    "weekend party equipment",
    "outdoor event setup",
    "moving equipment",
    "gaming consoles"
  ];
  
  useEffect(() => {
    const initialQuery = searchParams.get("query") || "";
    setQuery(initialQuery);
  }, [searchParams, setQuery]);

  const handleSearch = () => {
    if (query.trim()) {
      setPage(0);
      setShowSuggestions(false);
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setPage(0);
    setShowSuggestions(false);
    router.push(`/search?query=${encodeURIComponent(suggestion)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Top Navigation Bar */}
      <div className="hidden md:flex justify-end bg-gray-50 text-gray-600 text-xs py-1 px-6">
        <nav className="flex space-x-4 max-w-7xl mx-auto w-full justify-end">
          <a href="#" className="hover:text-blue-600">Become a Seller</a>
          <a href="#" className="hover:text-blue-600">Customer Support</a>
          <a href="#" className="hover:text-blue-600">Track Order</a>
        </nav>
      </div>
      
      {/* Main Header */}
      <div className="px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Menu size={20} />
          </div>
          
          {/* Logo */}
          <div 
            className="cursor-pointer flex-shrink-0" 
            onClick={() => router.push("/")}
          >
            <Logo />
          </div>

          {/* Search Bar Container */}
          <div className="relative flex-grow max-w-3xl">
            {/* Main Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 bg-gray-50">
              <input
                type="text"
                placeholder="Search for rentals..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                className="flex-grow py-2 px-4 text-sm md:text-base outline-none h-full bg-transparent"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white transition h-full flex items-center justify-center"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && (
              <div 
                className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 border border-gray-200 mt-1 text-gray-800 rounded-md"
                onMouseLeave={() => setShowSuggestions(false)}
              >
                {/* Recent searches */}
                {recentSearches.length > 0 && (
                  <div className="p-2 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 px-2">Recent Searches</span>
                      <button className="text-xs text-blue-500 hover:text-blue-700 px-2">Clear All</button>
                    </div>
                    {recentSearches.map((item, index) => (
                      <div 
                        key={index}
                        className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center text-sm"
                        onClick={() => handleSuggestionClick(item)}
                      >
                        <span className="text-gray-400 mr-2">🕒</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Trending Searches */}
                <div className="p-2">
                  <div className="text-xs font-medium text-gray-500 mb-1 px-2">Trending Rentals</div>
                  {trendingSearches.map((item, index) => (
                    <div 
                      key={index}
                      className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center text-sm"
                      onClick={() => handleSuggestionClick(item)}
                    >
                      <span className="text-gray-400 mr-2">🔥</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-1 md:space-x-6">
            <button className="hidden md:flex flex-col items-center text-gray-700 hover:text-blue-600 p-1">
              <User size={18} />
              <span className="text-xs mt-1">Account</span>
            </button>
            <button className="hidden md:flex flex-col items-center text-gray-700 hover:text-blue-600 p-1">
              <Heart size={18} />
              <span className="text-xs mt-1">Wishlist</span>
            </button>
            <button className="flex flex-col items-center text-gray-700 hover:text-blue-600 p-1 relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              <span className="text-xs mt-1">Cart</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Category Navigation - Optional */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <nav className="flex space-x-8 px-6 py-2 max-w-7xl mx-auto overflow-x-auto text-sm">
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-blue-600">Electronics</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-blue-600">Furniture</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-blue-600">Outdoor Equipment</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-blue-600">Party Supplies</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-blue-600">Tools</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-blue-600">Sports & Fitness</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-blue-600">Home Appliances</a>
        </nav>
      </div>
    </header>
  );
}