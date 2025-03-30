"use client";

import { useEffect, useState } from "react";
import { addBookmark, getBookmarkedListings } from "../services/bookmarkservice";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface BookmarkButtonProps {
  userId: number;
  listingId: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ userId, listingId }) => {
  const [bookmarked, setBookmarked] = useState(false);

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
      className={`p-3 rounded-full shadow-md transition-all ${
        bookmarked ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
      disabled={bookmarked}
    >
      {bookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
    </button>
  );
};

export default BookmarkButton;
