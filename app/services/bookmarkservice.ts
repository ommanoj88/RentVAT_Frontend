import { auth } from "../firebase";

// Update the base URL to include `/api/bookmarks`
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/bookmarks";

export const addBookmark = async (userId: number, listingId: number) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    console.warn("User not logged in");
    return { success: false, message: "User not logged in" };
  }

  try {
    const token = await currentUser.getIdToken();

    const response = await fetch(`${API_BASE_URL}/add?userId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ listingId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to add bookmark:", errorText);
      return { success: false, message: errorText };
    }

    return { success: true, message: "Bookmark added successfully" };
  } catch (error) {
    console.error("Error adding bookmark:", error);
    return { success: false, message: "Network error" };
  }
};

export const getBookmarkedListings = async (userId: number) => {
  const currentUser = auth.currentUser;

  // Check if the user is logged in
  if (!currentUser) {
    console.warn("User not logged in");
    alert("Please log in to view your bookmarks."); // Show a login prompt
    return []; // Return an empty array to prevent further execution
  }

  try {
    const token = await currentUser.getIdToken();

    // Use the correct endpoint for fetching bookmarks
    const response = await fetch(`${API_BASE_URL}/list?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch bookmarks: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching bookmarked listings:", error);
    return [];
  }
};
