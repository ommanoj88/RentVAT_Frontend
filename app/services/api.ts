import { ListingsResponse } from "../types/Listings";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export async function fetchListings(
  page = 0, 
  size = 10, 
  category?: string
): Promise<ListingsResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    ...(category && { category })
  });
  
  const response = await fetch(`${API_BASE_URL}/search/listings?${params}`, {
    next: { revalidate: 300 }, // Cache for 5 minutes
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return response.json();
}