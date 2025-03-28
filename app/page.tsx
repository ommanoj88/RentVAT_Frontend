import CategoryList from "./components/Categorylist";
import SearchBar from "./components/Searchbar";
import ListingCard from "./components/Listingcard";
import { ListingsResponse } from "./types/Listings";

const API_URL = "http://localhost:8080/api/search/listings?page=0&size=10";

// Temporary userId (Replace with actual user authentication logic)
const userId = 1; // Example user ID

async function fetchListings(): Promise<ListingsResponse> {
  const res = await fetch(API_URL, { cache: "no-store" });
  return res.json();
}

export default async function Home() {
  const listings = await fetchListings();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <SearchBar />
      <CategoryList />
      <h1 className="text-2xl font-bold mt-6">Recently Added Listings</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {listings.content.map((listing) => (
          <ListingCard key={listing.id} listing={listing} userId={userId} />
        ))}
      </div>
    </main>
  );
}
