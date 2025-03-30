import HeroSection from "./components/HeroSection";
import Logo from "./components/Logo";
import CategoryList from "./components/Categorylist";
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
      <HeroSection /> {/* Hero Section at the Top */}
      
      {/* Main Content */}
      <div className="flex-grow w-full p-6">
        <CategoryList />

        {/* Recently Added Listings */}
        <h1 className="text-2xl font-bold mt-6 text-green-900 w-full px-6">
          Recently Added Listings
        </h1>

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

      {/* Additional Sections */}
      <WhyRentingIsBest />
      <SafeAndSecure />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
