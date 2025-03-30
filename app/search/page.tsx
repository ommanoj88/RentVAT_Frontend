"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ListingCard from "../components/Listingcard";
import Footer from "../components/Footer";
import { Listing } from "../types/Listings";
import SearchHeroSection from "../components/SearchHeroSection";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function SearchPage() {
  const searchParams = useSearchParams();
  
  const initialQuery = searchParams.get("query") || "";
  const initialCategory = searchParams.get("category") || "";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [rent, setRent] = useState(true);
  const [sale, setSale] = useState(true);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [listings, setListings] = useState<Listing[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const userId = 1;

  useEffect(() => {
    fetchListings();
  }, [query, category, city, minPrice, maxPrice, rent, sale, sortBy, sortDirection, page]);

  const fetchListings = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/search/listings?query=${query}&category=${category}&city=${city}&minPrice=${minPrice}&maxPrice=${maxPrice}&rent=${rent}&sale=${sale}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}&size=10`
      );

      if (!response.ok) throw new Error("Failed to fetch listings");

      const data = await response.json();
      setListings(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Search Bar */}
      <SearchHeroSection query={query} setQuery={setQuery} setPage={setPage} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <select
            value={category}
            onChange={(e) => { setCategory(e.target.value); setPage(0); }}
            className="border p-2 rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="ELECTRONICS">Electronics</option>
            <option value="VEHICLES">Vehicles</option>
            <option value="HOME_APPLIANCES">Home Appliances</option>
            <option value="SPORTS">Sports</option>
            <option value="TOOLS">Tools</option>
            <option value="CLOTHING">Clothing</option>

          </select>
          <input
            type="text"
            placeholder="City"
            className="border p-2 rounded-lg"
            onChange={(e) => { setCity(e.target.value); setPage(0); }}
          />
          <input
            type="number"
            placeholder="Min Price"
            className="border p-2 rounded-lg"
            onChange={(e) => { setMinPrice(Number(e.target.value)); setPage(0); }}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="border p-2 rounded-lg"
            onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(0); }}
          />
          <label>
            <input
              type="checkbox"
              checked={rent}
              onChange={() => { setRent(!rent); setPage(0); }}
            /> Rent
          </label>
          <label>
            <input
              type="checkbox"
              checked={sale}
              onChange={() => { setSale(!sale); setPage(0); }}
            /> Sale
          </label>
          <select
            onChange={(e) => { setSortBy(e.target.value); setPage(0); }}
            className="border p-2 rounded-lg"
          >
            <option value="createdAt">Newest</option>
            <option value="price">Price</option>
          </select>
          <select
            onChange={(e) => { setSortDirection(e.target.value); setPage(0); }}
            className="border p-2 rounded-lg"
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>

        {/* Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {listings.length > 0 ? (
            listings.map((listing) => <ListingCard key={listing.id} listing={listing} userId={userId} />)
          ) : (
            <p className="text-center text-gray-500 col-span-3">No listings found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
          <span>Page {page + 1} of {totalPages}</span>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page + 1 >= totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Full-width Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
