"use client";

import { useEffect, useState } from "react";
import { addBookmark, getBookmarkedListings } from "../services/bookmarkservice";

interface BookmarkButtonProps {
  userId: number;
  listingId: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ userId, listingId }) => {
  const [bookmarked, setBookmarked] = useState(false);

  // Check if the listing is already bookmarked
  useEffect(() => {
    const fetchBookmarks = async () => {
      const bookmarks = await getBookmarkedListings(userId);
      const isBookmarked = bookmarks.some((bookmark: any) => bookmark.id === listingId);
      setBookmarked(isBookmarked);
    };

    fetchBookmarks();
  }, [userId, listingId]);

  const handleBookmark = async () => {
    if (!bookmarked) {
      await addBookmark(userId, listingId);
      setBookmarked(true);
    }
  };

  return (
    <button
      onClick={handleBookmark}
      className={`px-4 py-2 text-white ${bookmarked ? "bg-gray-500" : "bg-blue-500"} rounded`}
      disabled={bookmarked}
    >
      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
};

export default BookmarkButton;
