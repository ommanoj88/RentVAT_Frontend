"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiTrendingUp, FiDollarSign, FiGlobe, FiAward } from "react-icons/fi";

export default function InvestorsPage() {
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
            <span className="text-gray-900 font-medium">Investor Relations</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiTrendingUp className="text-green-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Investor Relations
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Building the future of sustainable commerce through innovation and growth
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$50M</div>
            <div className="text-sm text-gray-600">Series B Funding</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">250%</div>
            <div className="text-sm text-gray-600">YoY Growth</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1M+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Cities</div>
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why RentVAT?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiGlobe className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Massive Market Opportunity</h3>
                  <p className="text-gray-700">
                    The sharing economy is projected to reach $335B by 2025. We're positioned to
                    capture significant market share in the peer-to-peer rental space.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiTrendingUp className="text-green-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proven Growth Trajectory</h3>
                  <p className="text-gray-700">
                    Consistent triple-digit growth year over year with strong unit economics and
                    improving margins as we scale.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiAward className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Advantages</h3>
                  <p className="text-gray-700">
                    Proprietary technology, strong network effects, and a trusted brand create
                    significant barriers to entry for competitors.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiDollarSign className="text-orange-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multiple Revenue Streams</h3>
                  <p className="text-gray-700">
                    Transaction fees, subscriptions, insurance, and enterprise solutions provide
                    diversified revenue sources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Highlights</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Annual Revenue (2024)</div>
                <div className="text-2xl font-bold text-gray-900">$25M</div>
                <div className="text-sm text-green-600">+300% YoY</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Gross Transaction Value</div>
                <div className="text-2xl font-bold text-gray-900">$150M</div>
                <div className="text-sm text-green-600">+280% YoY</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Take Rate</div>
                <div className="text-2xl font-bold text-gray-900">15%</div>
                <div className="text-sm text-blue-600">Industry Leading</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Gross Margin</div>
                <div className="text-2xl font-bold text-gray-900">75%</div>
                <div className="text-sm text-green-600">+5pp YoY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Investors */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Investors</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We're backed by world-class investors who share our vision for the future of
            sustainable commerce.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-400">Investor 1</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-400">Investor 2</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-400">Investor 3</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-400">Investor 4</div>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <div className="font-bold text-blue-600">2021</div>
                </div>
                <div className="flex-1 border-l-2 border-blue-600 pl-8 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Company Founded</h3>
                  <p className="text-gray-600">RentVAT launched with a mission to make sustainable consumption accessible to everyone.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <div className="font-bold text-blue-600">2022</div>
                </div>
                <div className="flex-1 border-l-2 border-blue-600 pl-8 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Series A - $10M</h3>
                  <p className="text-gray-600">Raised Series A funding and expanded to 10 cities across the US.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <div className="font-bold text-blue-600">2023</div>
                </div>
                <div className="flex-1 border-l-2 border-blue-600 pl-8 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Reached 100K Users</h3>
                  <p className="text-gray-600">Hit major milestone of 100,000 active users and $5M in annual revenue.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <div className="font-bold text-blue-600">2024</div>
                </div>
                <div className="flex-1 border-l-2 border-blue-600 pl-8 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Series B - $50M</h3>
                  <p className="text-gray-600">Closed Series B round to accelerate growth and expand into new markets.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <div className="font-bold text-green-600">2025</div>
                </div>
                <div className="flex-1 border-l-2 border-green-600 pl-8">
                  <h3 className="font-semibold text-gray-900 mb-2">1M+ Users & Expansion</h3>
                  <p className="text-gray-600">Surpassed 1 million users and expanded to 50+ cities with international expansion plans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports & Documents */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reports & Documents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-left transition-colors">
              <div className="font-semibold text-gray-900">Annual Report 2024</div>
              <div className="text-sm text-gray-600">Download PDF</div>
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-left transition-colors">
              <div className="font-semibold text-gray-900">Q4 2024 Financial Results</div>
              <div className="text-sm text-gray-600">Download PDF</div>
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-left transition-colors">
              <div className="font-semibold text-gray-900">Investor Presentation</div>
              <div className="text-sm text-gray-600">Download PDF</div>
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-left transition-colors">
              <div className="font-semibold text-gray-900">ESG Report 2024</div>
              <div className="text-sm text-gray-600">Download PDF</div>
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Investor Inquiries</h2>
          <p className="text-xl mb-8 text-blue-100">
            Interested in learning more about RentVAT? Get in touch with our investor relations team.
          </p>
          <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
            <div className="text-lg mb-2">Email</div>
            <a href="mailto:investors@rentvat.com" className="text-white font-semibold hover:text-blue-100">
              investors@rentvat.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
