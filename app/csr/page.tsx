"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiHeart, FiUsers, FiGlobe, FiTrendingUp } from "react-icons/fi";

export default function CSRPage() {
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
            <span className="text-gray-900 font-medium">Corporate Social Responsibility</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiHeart className="text-green-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-gray-600">
            Building a sustainable future through responsible business practices
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our CSR Commitment</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At RentVAT, we believe that business success and social responsibility go hand in hand.
            Our commitment to sustainability, community empowerment, and ethical practices drives
            every decision we make. We're not just building a marketplace; we're fostering a movement
            toward conscious consumption and a more sustainable future.
          </p>
        </div>

        {/* CSR Pillars */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our CSR Pillars</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FiGlobe className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Environmental Sustainability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're committed to reducing environmental impact through the sharing economy model.
                By enabling people to rent instead of buy, we're reducing overconsumption and waste.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Carbon-neutral shipping program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Partnerships with eco-friendly packaging suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Encouraging reuse over single-use purchases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Green office operations and remote work options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FiUsers className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Empowerment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe in creating economic opportunities and building stronger communities through
                our platform, enabling individuals to earn income and access resources they need.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Supporting small businesses and individual entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Free business training and resources for owners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Community grants and support programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Local partnerships and neighborhood initiatives</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <FiHeart className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Social Impact</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're dedicated to creating positive social change by making resources accessible to
                all and supporting causes that align with our values.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Donation program for underserved communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Partnerships with non-profit organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Scholarship programs for students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Supporting disaster relief efforts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <FiTrendingUp className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ethical Business Practices</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain the highest standards of integrity, transparency, and fairness in all our
                business operations and relationships.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Fair pricing and transparent fee structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Data privacy and security protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Diversity and inclusion in hiring and operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Anti-discrimination policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150K+</div>
              <div className="text-sm text-gray-600">Items Shared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2M kg</div>
              <div className="text-sm text-gray-600">CO2 Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$500K</div>
              <div className="text-sm text-gray-600">Community Donated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Non-Profit Partners</div>
            </div>
          </div>
        </div>

        {/* Programs & Initiatives */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Programs & Initiatives</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RentVAT Green Initiative</h3>
              <p className="text-gray-700 leading-relaxed">
                For every rental transaction, we offset carbon emissions and plant a tree through our
                partnership with environmental organizations. To date, we've planted over 10,000 trees.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Access Program</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide free or discounted rentals to students, non-profits, and underserved communities,
                ensuring everyone has access to the tools and resources they need to succeed.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrepreneur Support Fund</h3>
              <p className="text-gray-700 leading-relaxed">
                Annual grants totaling $100,000 are provided to small business owners and entrepreneurs
                on our platform to help them grow their rental businesses.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skills & Education Program</h3>
              <p className="text-gray-700 leading-relaxed">
                Free workshops, webinars, and resources to help our community members develop business
                skills, financial literacy, and platform expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us in creating positive change. Whether you're renting, listing, or volunteering,
            every action makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Renting
            </Link>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Transparency */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency & Accountability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe in being transparent about our CSR efforts and holding ourselves accountable
            to our commitments. We publish annual CSR reports detailing our progress, challenges,
            and goals for the future.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
            Download Our Latest CSR Report
            <FiChevronRight className="ml-2" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
