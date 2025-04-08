import Link from "next/link";
import { Listing } from "../types/Listings";

interface Props {
  listing: Listing;
}

export default function ListingCard({ listing }: Props) {
  return (
    <Link href={`/productview/${listing.id}`} passHref>
      <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-md relative hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
        <div className="relative">
          <img 
            src={listing.photoUrl} 
            alt={listing.title} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">{listing.title}</h2>
        <p className="text-gray-600 text-lg font-medium mt-1">₹{listing.price} / day</p>
      </div>
    </Link>
  );
}