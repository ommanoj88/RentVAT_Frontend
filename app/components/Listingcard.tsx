import { Listing } from "../types/Listings";
import BookmarkButton from "./BookmarksButton";

interface Props {
  listing: Listing;
  userId: number; // Pass userId as a prop
}

export default function ListingCard({ listing, userId }: Props) {
  return (
    <div className="border p-4 rounded-lg shadow-lg relative">
      <img src={listing.photoUrl} alt={listing.title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="mt-2 text-lg font-semibold">{listing.title}</h2>
      <p className="text-gray-500">₹{listing.price} / day</p>

      {/* Bookmark Button */}
      <div className="absolute top-2 right-2">
        <BookmarkButton userId={userId} listingId={listing.id} />
      </div>
    </div>
  );
}


