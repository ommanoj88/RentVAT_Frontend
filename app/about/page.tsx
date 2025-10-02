"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiUsers, FiTarget, FiHeart, FiAward } from "react-icons/fi";

export default function AboutPage() {
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
            <span className="text-gray-900 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About RentVAT
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering communities through sustainable peer-to-peer rentals.
            We believe in a world where sharing is the new owning.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FiTarget className="text-blue-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              RentVAT is on a mission to revolutionize how people access products and services.
              We're building a trusted platform where individuals can rent items they need,
              when they need them, while helping others earn from their unused possessions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <FiHeart className="text-green-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We envision a sustainable future where the sharing economy reduces waste,
              builds communities, and makes quality products accessible to everyone.
              Together, we can create a more connected and environmentally conscious world.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Safety</h3>
              <p className="text-gray-600">
                We prioritize the security of our community with verified profiles,
                secure payments, and comprehensive insurance coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Service</h3>
              <p className="text-gray-600">
                We're committed to providing exceptional customer service and
                ensuring every rental experience exceeds expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                By promoting sharing over buying, we reduce consumption and
                contribute to a healthier planet for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              RentVAT was founded with a simple observation: most items people own
              sit unused for the majority of their lifespan. Meanwhile, others need
              these same items but can't justify the cost of purchasing them outright.
            </p>
            <p>
              We saw an opportunity to connect these two groups, creating value for
              both while reducing waste and environmental impact. What started as a
              small community project has grown into a thriving marketplace serving
              thousands of users across the country.
            </p>
            <p>
              Today, RentVAT continues to innovate in the peer-to-peer rental space,
              adding new features, expanding our categories, and building tools that
              make renting as easy and secure as possible.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Items Listed</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100K+</div>
            <div className="text-gray-600">Successful Rentals</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start renting or listing items today and be part of the sharing economy revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Items
            </Link>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
