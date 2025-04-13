"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Listing } from "../types/Listings";
import ListingCard from "../components/Listingcard";

interface ListingCarouselProps {
  listings: Listing[];
}

export default function ListingCarousel({ listings }: ListingCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" 
        ? -current.offsetWidth * 0.75 
        : current.offsetWidth * 0.75;
      
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!listings.length) {
    return (
      <div className="text-center py-12 text-gray-500">
        No listings available at the moment.
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        ref={carouselRef}
      >
        {listings.map((listing) => (
          <motion.div 
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-80 flex-shrink-0"
          >
            <ListingCard listing={listing} />
          </motion.div>
        ))}
      </div>
      
      {listings.length > 3 && (
        <>
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 -ml-4 z-10"
            onClick={() => scroll("left")}
            aria-label="Previous listings"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 -mr-4 z-10"
            onClick={() => scroll("right")}
            aria-label="Next listings"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
