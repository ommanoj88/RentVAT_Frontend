"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiRefreshCw, FiCheckCircle, FiXCircle, FiDollarSign } from "react-icons/fi";

export default function CancellationPage() {
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
            <span className="text-gray-900 font-medium">Cancellation & Return Policy</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiRefreshCw className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cancellation & Return Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Quick Reference Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <FiCheckCircle className="text-green-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Cancellation</h3>
            <p className="text-sm text-gray-600">Cancel up to 48 hours before rental</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <FiDollarSign className="text-blue-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Fair Refunds</h3>
            <p className="text-sm text-gray-600">Transparent refund structure</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <FiXCircle className="text-orange-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Easy Process</h3>
            <p className="text-sm text-gray-600">Cancel in a few clicks</p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Cancellation Policies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RentVAT offers three standard cancellation policy options. Each listing specifies which policy applies.
                As a renter, always check the cancellation policy before booking.
              </p>

              <div className="space-y-6 mt-6">
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Flexible Policy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>48+ hours before:</strong> Full refund (100%)</li>
                    <li><strong>24-48 hours before:</strong> 50% refund</li>
                    <li><strong>Less than 24 hours:</strong> No refund</li>
                    <li><strong>Service fee:</strong> Always refunded if canceled before rental starts</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Moderate Policy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>5+ days before:</strong> Full refund (100%)</li>
                    <li><strong>2-5 days before:</strong> 50% refund</li>
                    <li><strong>Less than 2 days:</strong> No refund</li>
                    <li><strong>Service fee:</strong> Refunded if canceled 5+ days before</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">Strict Policy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>7+ days before:</strong> Full refund (100%)</li>
                    <li><strong>3-7 days before:</strong> 50% refund</li>
                    <li><strong>Less than 3 days:</strong> No refund</li>
                    <li><strong>Service fee:</strong> Non-refundable unless owner cancels</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How to Cancel a Rental</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Renter Cancellation</h3>
              <p className="text-gray-700 leading-relaxed mb-3">To cancel your rental:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                <li>Log into your RentVAT account</li>
                <li>Go to "My Bookings" or "Rentals"</li>
                <li>Select the booking you want to cancel</li>
                <li>Click "Cancel Booking"</li>
                <li>Select cancellation reason (optional but helpful)</li>
                <li>Confirm cancellation</li>
                <li>Receive confirmation email with refund details</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Owner Cancellation</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                If an owner needs to cancel:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Renter receives full refund regardless of timing</li>
                <li>Owner may face a cancellation fee</li>
                <li>Multiple cancellations may result in account restrictions</li>
                <li>Owner rating may be affected</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds are processed based on your cancellation timing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Automatic processing:</strong> Refunds are calculated and initiated automatically</li>
                <li><strong>Timing:</strong> Expect refunds within 5-10 business days</li>
                <li><strong>Method:</strong> Refunded to original payment method</li>
                <li><strong>Notification:</strong> Email confirmation with refund amount and timeline</li>
                <li><strong>Questions:</strong> Contact support if refund isn't received within stated timeframe</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Extenuating Circumstances</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Full refunds may be provided outside the standard cancellation policy in cases of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Medical emergencies (documentation required)</li>
                <li>Natural disasters or severe weather</li>
                <li>Government travel restrictions</li>
                <li>Death in the immediate family</li>
                <li>Military deployment</li>
                <li>Item is not as described or unavailable</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To request an exception, contact support with relevant documentation within 24 hours of the issue.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Return Process</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Standard Returns</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                At the end of your rental period:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Return item in the same condition as received</li>
                <li>Clean the item before returning</li>
                <li>Package securely for shipping (if applicable)</li>
                <li>Return within 24 hours of rental end date</li>
                <li>Take photos documenting item condition</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Late Returns</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you need to extend your rental:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Request extension through the platform before due date</li>
                <li>Owner must approve extension</li>
                <li>Additional rental fees apply for extended period</li>
                <li>Unauthorized late returns incur daily late fees</li>
              </ul>

              <div className="bg-red-50 rounded-lg p-6 border border-red-200 mt-4">
                <h4 className="font-semibold text-red-900 mb-2">Late Return Fees</h4>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>Day 1-2 late: 150% of daily rental rate</li>
                  <li>Day 3+ late: 200% of daily rental rate</li>
                  <li>7+ days late: Item considered stolen, legal action may be taken</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Damaged or Lost Items</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Damaged Items</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                If an item is damaged during your rental:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Report damage immediately to owner and RentVAT</li>
                <li>Document damage with photos</li>
                <li>Security deposit may be used for repairs</li>
                <li>Insurance may cover damages beyond deposit</li>
                <li>Normal wear and tear is expected and not charged</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Lost or Stolen Items</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                In case of lost or stolen items:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>File a police report immediately</li>
                <li>Notify RentVAT support within 24 hours</li>
                <li>Provide police report and incident details</li>
                <li>Insurance claim will be filed</li>
                <li>You may be liable for replacement cost minus deposit</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disputes and Resolutions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If there's a disagreement about item condition, damage, or returns:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Attempt to resolve directly with the other party</li>
                <li>If unresolved, open a dispute in the RentVAT Resolution Center</li>
                <li>Provide evidence (photos, messages, receipts)</li>
                <li>RentVAT team reviews all evidence within 3-5 business days</li>
                <li>Decision is made based on terms, evidence, and fairness</li>
                <li>Resolution decision is final and binding</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modification of Bookings</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To modify dates or details of your booking:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact the owner directly through the platform</li>
                <li>Request changes at least 48 hours in advance</li>
                <li>Owner must approve any modifications</li>
                <li>Price adjustments may apply</li>
                <li>If unable to agree, standard cancellation policy applies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Support</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about cancellations, returns, or refunds:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-900 font-semibold mb-2">RentVAT Customer Support</p>
                <p className="text-gray-700">Email: <a href="mailto:support@rentvat.com" className="text-blue-600 hover:text-blue-700">support@rentvat.com</a></p>
                <p className="text-gray-700">Phone: +1 (800) 555-1234</p>
                <p className="text-gray-700 mt-2">Hours: 24/7 Support Available</p>
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
