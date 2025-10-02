"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiMap } from "react-icons/fi";

export default function SitemapPage() {
  const sitemap = {
    "Main Pages": [
      { name: "Home", path: "/" },
      { name: "Search Listings", path: "/search" },
      { name: "Create Listing", path: "/createlisting" },
      { name: "My Bookings", path: "/bookings" },
      { name: "Profile", path: "/profile" }
    ],
    "Company": [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Culture", path: "/culture" },
      { name: "Careers", path: "/careers" },
      { name: "Investors", path: "/investors" }
    ],
    "Business": [
      { name: "RentVAT for Business (B2B)", path: "/b2b" },
      { name: "Corporate Social Responsibility", path: "/csr" }
    ],
    "Resources": [
      { name: "Blog", path: "/blog" },
      { name: "Support Center", path: "/support" },
      { name: "Help & FAQ", path: "/support" }
    ],
    "Policies & Legal": [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Shipping Policy", path: "/shipping" },
      { name: "Cancellation & Return Policy", path: "/cancellation" },
      { name: "Referral Program Terms", path: "/referral" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo />
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
              <FiHome className="mr-1" />
              Home
            </Link>
            <FiChevronRight className="text-gray-400" size={16} />
            <span className="text-gray-900 font-medium">Sitemap</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiMap className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your way around RentVAT. All pages and resources in one place.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(sitemap).map(([category, links]) => (
            <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                {category}
              </h2>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-blue-600 hover:text-blue-700 hover:underline transition-colors flex items-center"
                    >
                      <FiChevronRight className="mr-2 text-gray-400" size={16} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Use our search feature or contact our support team for assistance navigating the platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Search Platform
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border-2 border-blue-600"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">🏠</div>
            <div className="font-semibold text-gray-900 text-sm">Home</div>
          </Link>
          <Link
            href="/search"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-semibold text-gray-900 text-sm">Search</div>
          </Link>
          <Link
            href="/support"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">💬</div>
            <div className="font-semibold text-gray-900 text-sm">Support</div>
          </Link>
          <Link
            href="/blog"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">📰</div>
            <div className="font-semibold text-gray-900 text-sm">Blog</div>
          </Link>
        </div>

        {/* SEO Info */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Sitemap</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This sitemap provides a comprehensive overview of all pages and sections available on RentVAT.
            It's designed to help you quickly find the information or service you're looking for.
          </p>
          <p className="text-gray-700 leading-relaxed">
            RentVAT is a peer-to-peer rental marketplace connecting people who want to rent items with
            those who have items to share. Our platform makes it easy to list items, find what you need,
            and complete secure transactions. From equipment and tools to event supplies and more,
            RentVAT is your go-to resource for temporary access to the things you need.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
