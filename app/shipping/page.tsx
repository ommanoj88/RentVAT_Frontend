"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiTruck, FiPackage, FiMapPin, FiClock } from "react-icons/fi";

export default function ShippingPage() {
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
            <span className="text-gray-900 font-medium">Shipping & Delivery Policy</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiTruck className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <FiPackage className="text-blue-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Options</h3>
            <p className="text-sm text-gray-600">Local pickup or delivery available</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <FiMapPin className="text-green-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Nationwide</h3>
            <p className="text-sm text-gray-600">Ship anywhere in the country</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <FiClock className="text-purple-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">2-5 business days standard</p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Delivery Methods</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RentVAT offers flexible delivery options to accommodate both renters and owners:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.1 Local Pickup (Free)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Arrange directly with the owner for pickup location</li>
                <li>Both parties inspect item condition during handover</li>
                <li>No additional delivery fees</li>
                <li>Most flexible scheduling option</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.2 Owner Delivery</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Owner delivers item to your location</li>
                <li>Delivery fee set by owner (if applicable)</li>
                <li>Available within owner's specified delivery radius</li>
                <li>Delivery time arranged between parties</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.3 RentVAT Shipping Service</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Professional shipping through our partner carriers</li>
                <li>Full tracking and insurance included</li>
                <li>Delivery within 2-5 business days (standard)</li>
                <li>Express shipping available for select items</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Shipping Costs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shipping costs vary based on several factors:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Item size and weight:</strong> Calculated using carrier rates</li>
                <li><strong>Distance:</strong> Shipping zone from origin to destination</li>
                <li><strong>Speed:</strong> Standard, expedited, or overnight</li>
                <li><strong>Insurance:</strong> Based on item value (included in shipping)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All shipping costs are displayed before booking confirmation. The renter typically pays for
                shipping to receive the item, and the owner covers return shipping.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Shipping Timeline</h2>

              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard Shipping</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Processing:</strong> 1-2 business days</li>
                  <li><strong>Transit:</strong> 2-5 business days</li>
                  <li><strong>Total:</strong> 3-7 business days</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Expedited Shipping</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Processing:</strong> Same or next business day</li>
                  <li><strong>Transit:</strong> 1-2 business days</li>
                  <li><strong>Total:</strong> 1-3 business days</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Overnight Shipping</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Processing:</strong> Same business day (before 2pm)</li>
                  <li><strong>Transit:</strong> Next business day</li>
                  <li><strong>Total:</strong> 1 business day</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Packaging Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                When shipping items through RentVAT:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Owners must package items securely to prevent damage</li>
                <li>Use appropriate padding and protective materials</li>
                <li>Include packing list with item description</li>
                <li>Take photos of packaged item before shipping</li>
                <li>Use RentVAT prepaid shipping labels when provided</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tracking and Delivery Confirmation</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                All shipped rentals include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Real-time tracking number sent via email and in-app</li>
                <li>Delivery notifications and updates</li>
                <li>Signature confirmation for high-value items (over $500)</li>
                <li>Photo proof of delivery when available</li>
                <li>Direct contact with carrier customer service</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Delivery Issues</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Delayed Delivery</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your shipment is delayed beyond the estimated delivery date:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Check tracking information for updates</li>
                <li>Contact RentVAT support if delay exceeds 2 business days</li>
                <li>We will work with carriers to locate your package</li>
                <li>Rental period may be adjusted for significant delays</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Lost Packages</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the rare event a package is lost:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Report to RentVAT support within 24 hours</li>
                <li>We file a claim with the carrier</li>
                <li>Insurance covers item value up to declared amount</li>
                <li>Refund or replacement processed within 10 business days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3 Damaged in Transit</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If item arrives damaged:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Document damage with photos immediately</li>
                <li>Do not discard packaging materials</li>
                <li>Contact RentVAT support within 24 hours</li>
                <li>Shipping insurance covers repair or replacement</li>
                <li>You are not liable for shipping-related damage</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Shipping</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Currently, RentVAT only supports domestic shipping within the United States. International
                shipping may be available in select cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Must be approved by both parties</li>
                <li>Additional customs fees may apply</li>
                <li>Extended delivery times (7-21 business days)</li>
                <li>Contact support for international shipping inquiries</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Return Shipping</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At the end of the rental period:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Return shipping label provided automatically</li>
                <li>Package item securely as received</li>
                <li>Return within 24 hours of rental end date</li>
                <li>Tracking number confirms return initiation</li>
                <li>Security deposit released upon owner's confirmation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Shipping Insurance</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                All shipped rentals include insurance coverage:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Automatic coverage up to declared item value</li>
                <li>Protection against loss, theft, and damage in transit</li>
                <li>No additional cost to renters or owners</li>
                <li>Claims processed within 10 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Shipping Support</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For shipping-related questions or issues:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-900 font-semibold mb-2">RentVAT Shipping Team</p>
                <p className="text-gray-700">Email: <a href="mailto:shipping@rentvat.com" className="text-blue-600 hover:text-blue-700">shipping@rentvat.com</a></p>
                <p className="text-gray-700">Phone: +1 (800) 555-1234</p>
                <p className="text-gray-700 mt-2">Hours: Monday - Friday, 8am - 8pm EST</p>
              </div>
            </section>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
