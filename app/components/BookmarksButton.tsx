"use client";

import { useEffect, useState } from "react";
import { addBookmark, getBookmarkedListings } from "../services/bookmarkservice";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { auth } from "../firebase";

interface BookmarkButtonProps {
  listingId: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ listingId }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsLoggedIn(true);
        try {
          const userId = parseInt(user.uid, 10); // Assuming `uid` is numeric
          const bookmarks = await getBookmarkedListings(userId);
          const isBookmarked = bookmarks.some((bookmark: any) => bookmark.id === listingId);
          setBookmarked(isBookmarked);
        } catch (error) {
          console.error("Error fetching bookmarks:", error);
        }
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [listingId]);

  const handleBookmark = async () => {
    if (!isLoggedIn) {
      alert("Please log in to bookmark listings.");
      return;
    }

    if (!bookmarked) {
      setIsLoading(true);
      try {
        const userId = parseInt(auth.currentUser?.uid || "0", 10); // Get the logged-in user's ID
        const result = await addBookmark(userId, listingId);
        if (result.success) {
          setBookmarked(true);
        } else {
          alert(result.message || "Failed to add bookmark.");
        }
      } catch (error) {
        console.error("Error adding bookmark:", error);
        alert("An error occurred while adding the bookmark.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <button
      onClick={handleBookmark}
      className={`p-3 rounded-full shadow-md transition-all ${
        bookmarked ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
      disabled={bookmarked || isLoading}
    >
      {isLoading ? (
        <span className="loader w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></span>
      ) : bookmarked ? (
        <BookmarkCheck className="w-5 h-5" />
      ) : (
        <Bookmark className="w-5 h-5" />
      )}
    </button>
  );
};

export default BookmarkButton;