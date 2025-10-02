"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiClock, FiUser, FiArrowRight } from "react-icons/fi";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Items You Should Rent Instead of Buy in 2025",
      excerpt: "Discover the most popular rental items that can save you money and reduce environmental impact. From power tools to party equipment, learn what's trending in the sharing economy.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Price Your Rental Listings: A Complete Guide",
      excerpt: "Setting the right price is crucial for successful rentals. Learn pricing strategies, competitive analysis, and tips to maximize your earnings while staying attractive to renters.",
      author: "Michael Chen",
      date: "March 12, 2025",
      category: "Tips & Guides",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Environmental Impact of the Sharing Economy",
      excerpt: "Explore how peer-to-peer rental platforms are contributing to sustainability goals. Statistics show that sharing reduces consumption by up to 30% in participating communities.",
      author: "Emma Davis",
      date: "March 8, 2025",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Success Story: How I Made $5,000 Renting My Camera Equipment",
      excerpt: "Meet David, a photographer who turned his idle camera gear into a steady income stream. Learn his strategies, challenges, and tips for becoming a successful equipment renter.",
      author: "David Martinez",
      date: "March 5, 2025",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Safety Tips for First-Time Renters",
      excerpt: "New to peer-to-peer rentals? Learn essential safety practices, red flags to watch for, and how to protect yourself during transactions. Your safety is our priority.",
      author: "Jennifer Lee",
      date: "March 1, 2025",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Maximizing Your Rental Income: Advanced Strategies",
      excerpt: "Already renting out items? Take your rental business to the next level with these advanced optimization techniques, seasonal strategies, and bundle offerings.",
      author: "Robert Kim",
      date: "February 28, 2025",
      category: "Tips & Guides",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",
      readTime: "12 min read"
    }
  ];

  const categories = ["All", "Lifestyle", "Tips & Guides", "Sustainability", "Success Stories", "Safety"];

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
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            RentVAT Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, stories, and insights from the sharing economy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold">Featured Post</h3>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiUser className="mr-2" />
                    <span className="mr-4">{blogPosts[0].author}</span>
                    <FiClock className="mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    Read More
                    <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <FiUser className="mr-1" size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Load More Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest tips, stories, and updates delivered to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
