"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiBriefcase, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Build and scale our rental marketplace platform. Work with React, Node.js, and cloud infrastructure."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Create intuitive user experiences that make renting seamless and delightful for millions of users."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Experience",
      location: "Remote",
      type: "Full-time",
      description: "Help our community of renters and owners succeed. Be the voice of our customers and drive product improvements."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Drive growth through creative campaigns, partnerships, and community engagement initiatives."
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Turn data into insights that drive business decisions. Work with large datasets and build analytics dashboards."
    },
    {
      title: "Business Development Lead",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      description: "Build partnerships with businesses and expand our B2B offering. Drive enterprise adoption of RentVAT."
    }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Industry-leading compensation with equity" },
    { icon: "🏥", title: "Health Benefits", description: "Comprehensive medical, dental, and vision" },
    { icon: "🏖️", title: "Unlimited PTO", description: "Take time off when you need it" },
    { icon: "🏠", title: "Remote Friendly", description: "Work from anywhere" },
    { icon: "📚", title: "Learning Budget", description: "$2,000 annual education stipend" },
    { icon: "💻", title: "Latest Tech", description: "Top-of-the-line equipment" },
    { icon: "🎯", title: "401(k) Match", description: "Generous retirement matching" },
    { icon: "👶", title: "Parental Leave", description: "16 weeks paid leave" }
  ];

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
            <span className="text-gray-900 font-medium">Careers</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiBriefcase className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of the sharing economy. Work with passionate people solving
            real problems for millions of users.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Move Fast</h3>
            <p className="text-gray-600">
              We ship quickly, iterate constantly, and aren't afraid to experiment and learn from failures.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborate</h3>
            <p className="text-gray-600">
              Great work happens when diverse perspectives come together. We value every voice.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Think Big</h3>
            <p className="text-gray-600">
              We're building something that can change how billions of people access resources.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Join RentVAT?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Join our growing team</p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FiBriefcase className="mr-2" size={16} />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <FiMapPin className="mr-2" size={16} />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-2" size={16} />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 md:ml-6">
                    Apply Now
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Hiring Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-sm text-gray-600">Submit your application online</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Screen</h3>
              <p className="text-sm text-gray-600">30-minute phone call with recruiter</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interviews</h3>
              <p className="text-sm text-gray-600">Meet the team and showcase skills</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-sm text-gray-600">Welcome to the team!</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented people. Send us your resume and we'll keep you in mind
            for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
