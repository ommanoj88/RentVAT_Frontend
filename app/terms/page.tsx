"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiFileText, FiAlertCircle } from "react-icons/fi";

export default function TermsPage() {
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
            <span className="text-gray-900 font-medium">Rental Terms & Conditions</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiFileText className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rental Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 flex items-start">
          <FiAlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-2">Important Notice</h3>
            <p className="text-yellow-800 text-sm">
              By using RentVAT's services, you agree to be bound by these terms and conditions.
              Please read them carefully before using our platform.
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Rental Terms and Conditions ("Terms") govern your use of the RentVAT platform and services.
                By accessing or using our services, you agree to comply with and be bound by these Terms. If you
                do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-3">To use RentVAT, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not be prohibited from using our services under applicable law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Platform Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RentVAT is a peer-to-peer rental marketplace that connects renters and owners. We provide the
                platform but are not a party to the rental agreements between users. Users are responsible for
                their own transactions and interactions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 For Owners (Listers)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>You must have the legal right to rent the items you list</li>
                <li>Provide accurate descriptions, photos, and pricing</li>
                <li>Ensure items are in safe, working condition</li>
                <li>Respond promptly to rental requests and inquiries</li>
                <li>Honor confirmed rental agreements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 For Renters</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use rented items responsibly and as intended</li>
                <li>Return items in the same condition as received</li>
                <li>Pay all rental fees on time</li>
                <li>Report any issues or damages immediately</li>
                <li>Follow any specific instructions provided by the owner</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Rental Process</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Booking</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Renters can request to rent items listed on the platform. Owners have the right to accept or
                decline rental requests. Once accepted, a binding rental agreement is formed between the parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Payment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All payments are processed through our secure payment system. Rental fees are held in escrow
                until the rental period begins. Owners receive payment after successful item handover.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Item Pickup and Return</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Both parties must inspect the item at pickup and return</li>
                <li>Document item condition with photos when possible</li>
                <li>Follow agreed-upon pickup and return procedures</li>
                <li>Return items on time or request extensions in advance</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payments</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                RentVAT charges service fees for using the platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Renter Service Fee:</strong> 10% of the rental price</li>
                <li><strong>Owner Service Fee:</strong> 5% of the rental price</li>
                <li><strong>Payment Processing Fee:</strong> Standard payment processor rates apply</li>
                <li><strong>Late Return Fee:</strong> As specified in the rental agreement</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All fees are clearly displayed before completing a rental transaction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security Deposit</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Owners may require a security deposit, which will be:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Held in escrow by RentVAT during the rental period</li>
                <li>Returned to the renter if the item is returned in good condition</li>
                <li>Used to cover damages, cleaning, or late return fees as applicable</li>
                <li>Released within 48 hours of successful item return</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellations and Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Cancellation policies vary by listing. Please refer to our <Link href="/cancellation" className="text-blue-600 hover:text-blue-700">Cancellation Policy</Link> for details.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Damages and Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Renters are responsible for any damage to rented items beyond normal wear and tear. RentVAT
                provides optional rental protection insurance for both owners and renters.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                <li>Report damages immediately upon discovery</li>
                <li>Owners must document pre-existing damage before rental</li>
                <li>Disputes are subject to our dispute resolution process</li>
                <li>Insurance claims must be filed within 48 hours</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Prohibited Items and Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-3">The following are prohibited on RentVAT:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Illegal items or services</li>
                <li>Weapons, explosives, or hazardous materials</li>
                <li>Stolen or counterfeit goods</li>
                <li>Items that violate intellectual property rights</li>
                <li>Fraudulent listings or transactions</li>
                <li>Harassment, discrimination, or abusive behavior</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                In case of disputes between users:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact RentVAT support within 48 hours of the issue</li>
                <li>Provide documentation (photos, messages, receipts)</li>
                <li>Our team will mediate and make a fair determination</li>
                <li>Decisions are final and binding on both parties</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Account Suspension and Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                RentVAT reserves the right to suspend or terminate accounts that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate these Terms or our policies</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Receive multiple complaints from other users</li>
                <li>Fail to respond to support inquiries</li>
                <li>Attempt to circumvent platform fees</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                RentVAT acts as a marketplace platform and is not liable for disputes, damages, or losses arising
                from rental transactions between users. We provide the platform "as is" without warranties of any kind.
                Our total liability is limited to the amount of fees paid by you in the past 12 months.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. Material changes will be communicated via email or
                platform notification. Continued use of our services after changes constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-900 font-semibold mb-2">RentVAT Legal Team</p>
                <p className="text-gray-700">Email: <a href="mailto:legal@rentvat.com" className="text-blue-600 hover:text-blue-700">legal@rentvat.com</a></p>
                <p className="text-gray-700">Phone: +1 (800) 555-1234</p>
                <p className="text-gray-700">Address: 123 Rental Street, San Francisco, CA 94102</p>
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
