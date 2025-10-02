"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiBriefcase, FiCheck, FiDollarSign, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function B2BPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    employees: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("B2B inquiry submitted:", formData);
    alert("Thank you! Our B2B team will contact you within 24 hours.");
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
            <span className="text-gray-900 font-medium">RentVAT for Business</span>
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
            RentVAT for Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Flexible equipment rentals for businesses of all sizes. Save money, reduce capital
            expenditure, and access the tools you need when you need them.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiDollarSign className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Save up to 60%</h3>
            <p className="text-gray-600">
              Reduce capital expenses by renting equipment instead of purchasing. Free up cash
              flow for core business operations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTrendingUp className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Scale Flexibly</h3>
            <p className="text-gray-600">
              Scale your equipment needs up or down based on project demands. No long-term
              commitments required.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
            <p className="text-gray-600">
              Get a dedicated account manager, priority support, and custom rental solutions
              for your business.
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perfect for Every Industry
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏗️ Construction</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Heavy machinery and power tools</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Safety equipment and scaffolding</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Project-based rentals with flexible terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎬 Events & Entertainment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">AV equipment and lighting</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Furniture and event supplies</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Short-term rentals for one-time events</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏢 Office & Tech</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Computers, monitors, and peripherals</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Office furniture and equipment</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Temporary office setup solutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎥 Production & Creative</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Camera equipment and lenses</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Studio lighting and grip equipment</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Production support and logistics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Enterprise Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FiCheck className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Volume Discounts</h3>
                <p className="text-gray-600">Save more with bulk rentals and long-term agreements</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FiCheck className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Centralized Billing</h3>
                <p className="text-gray-600">Single invoice for all rentals across your organization</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FiCheck className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Priority Access</h3>
                <p className="text-gray-600">First access to high-demand equipment and inventory</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FiCheck className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Custom Terms</h3>
                <p className="text-gray-600">Flexible rental periods and payment terms</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FiCheck className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Track spending, usage, and optimize rental strategy</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FiCheck className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">White Glove Service</h3>
                <p className="text-gray-600">Delivery, setup, and pickup handled by professionals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Business Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$299<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Up to 10 active rentals
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  5% discount on all rentals
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Email support
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Basic analytics
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg border-2 border-blue-600 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$799<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Up to 50 active rentals
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  10% discount on all rentals
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Unlimited rentals
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  15%+ custom discount
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-700">
                  <FiCheck className="text-green-600 mr-2" />
                  White glove service
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 text-center">
              Fill out the form below and our B2B team will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white"
                />
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="">Company Size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your rental needs..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white resize-none"
              />

              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Request a Demo
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
