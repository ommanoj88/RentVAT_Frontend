const API_BASE_URL = "http://localhost:8080/api/bookmarks"; // Ensure backend is running

export const addBookmark = async (userId: number, listingId: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/add?userId=${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to add bookmark:", errorText);
        return { success: false, message: errorText };
      }
  
      return { success: true };
    } catch (error) {
      console.error("Error adding bookmark:", error);
      return { success: false, message: "Network error" };
    }
  };
  


// Function to fetch all bookmarked listings for a user
export const getBookmarkedListings = async (userId: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/list?userId=${userId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch bookmarks: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching bookmarked listings:", error);
    return [];
  }
};
