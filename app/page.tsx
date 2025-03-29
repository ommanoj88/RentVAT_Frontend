import Logo from "./components/Logo";
import CategoryList from "./components/Categorylist";
import SearchBar from "./components/Searchbar";
import ListingCard from "./components/Listingcard";
import Footer from "./components/Footer";
import WhyRentingIsBest from "./components/WhyRentingIsBest";
import SafeAndSecure from "./components/HowItWorks";
import { ListingsResponse } from "./types/Listings";

const API_URL = "http://localhost:8080/api/search/listings?page=0&size=10";

const userId = 1; // Example user ID

async function fetchListings(): Promise<ListingsResponse> {
  const res = await fetch(API_URL, { cache: "no-store" });
  return res.json();
}

export default async function Home() {
  const listings = await fetchListings();

  return (
    <main className="bg-cream min-h-screen flex flex-col">
      {/* Header with Logo */}
      <header className="bg-green-700 text-white py-6 px-6 shadow-md flex justify-center items-center">
        <div className="w-48">
          <Logo />
        </div>
      </header>

      {/* Content */}
      <div className="flex-grow w-full p-6">
        <SearchBar />
        <CategoryList />

        {/* Full-width Recently Added Listings Header */}
        <h1 className="text-2xl font-bold mt-6 text-green-900 w-full px-6">
          Recently Added Listings
        </h1>

        {/* Scrollable Listings Section (Full Width) */}
        <div className="w-full overflow-x-auto scrollbar-hide mt-4 px-6">
          <div className="flex space-x-4 w-max">
            {listings.content.map((listing) => (
              <div key={listing.id} className="w-80 inline-block">
                <ListingCard listing={listing} userId={userId} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Sections */}
      <WhyRentingIsBest />
      <SafeAndSecure />

      {/* Footer */}
      <Footer />
    </main>
  );
}
