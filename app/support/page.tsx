"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiHelpCircle, FiChevronDown, FiChevronUp, FiMail, FiMessageCircle, FiBook } from "react-icons/fi";

export default function SupportPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create an account on RentVAT?",
          a: "Click 'Sign Up' in the top right corner, enter your email and create a password. You can also sign up using Google or Facebook. Verify your email address to complete registration."
        },
        {
          q: "Is RentVAT free to use?",
          a: "Creating an account and browsing listings is completely free. We charge a small service fee (10% for renters, 5% for owners) only when a rental transaction is completed."
        },
        {
          q: "How do I list an item for rent?",
          a: "After logging in, click 'List an Item' in your profile menu. Upload photos, add a description, set your price and availability, and publish your listing. It's that simple!"
        }
      ]
    },
    {
      category: "Renting Items",
      questions: [
        {
          q: "How do I rent an item?",
          a: "Find the item you want, select your rental dates, and click 'Request to Rent'. The owner will review and approve your request. Once approved, complete payment to confirm your booking."
        },
        {
          q: "When do I pay for a rental?",
          a: "Payment is processed when the owner approves your rental request. Your payment is held securely until the rental begins. If the owner declines, you won't be charged."
        },
        {
          q: "What if the item doesn't match the listing?",
          a: "If the item doesn't match the description, photos, or is in poor condition, contact us immediately. We'll help resolve the issue and may issue a full refund."
        },
        {
          q: "Can I extend my rental period?",
          a: "Yes! Contact the owner through the platform to request an extension. If they approve, you can extend your rental with updated pricing."
        }
      ]
    },
    {
      category: "Payments & Pricing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All payments are processed securely through our payment partners."
        },
        {
          q: "What is a security deposit?",
          a: "A security deposit is a refundable amount held during your rental to cover potential damages. It's returned within 48 hours after the item is returned in good condition."
        },
        {
          q: "How and when do I get paid as an owner?",
          a: "Owners receive payment 24 hours after the renter receives the item (for shipped items) or at the start of the rental period (for local pickups). Payments are deposited to your bank account."
        },
        {
          q: "Are there any hidden fees?",
          a: "No hidden fees! All costs (rental price, service fee, shipping, deposit) are clearly displayed before you confirm your booking."
        }
      ]
    },
    {
      category: "Safety & Trust",
      questions: [
        {
          q: "How does RentVAT ensure safety?",
          a: "We verify user identities, provide secure payment processing, offer rental insurance, and have a review system. Our support team monitors transactions and can intervene in disputes."
        },
        {
          q: "What if an item gets damaged?",
          a: "Document any damage immediately with photos and contact both the owner and RentVAT. Minor damages may be covered by the security deposit. Our insurance can cover major damages."
        },
        {
          q: "Is rental insurance included?",
          a: "Basic rental protection is included in our service fee. Additional insurance coverage is available for high-value items for extra peace of mind."
        },
        {
          q: "What should I do if an owner cancels?",
          a: "If an owner cancels, you'll receive a full refund within 3-5 business days. We'll also help you find alternative items and may provide a credit for the inconvenience."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How does shipping work?",
          a: "For shipped rentals, owners package the item and ship it using our prepaid labels. You'll receive tracking information. Return shipping is also included with prepaid labels."
        },
        {
          q: "What if my item arrives damaged?",
          a: "Don't use the item! Take photos of the damage and packaging, contact us within 24 hours. Shipping damage is covered by insurance and you won't be liable."
        },
        {
          q: "Can I do local pickup instead of shipping?",
          a: "Yes! Many owners offer local pickup, which saves shipping costs and time. Coordinate pickup details directly with the owner through our messaging system."
        }
      ]
    },
    {
      category: "Account & Technical",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page, enter your email, and we'll send you a password reset link. Follow the link to create a new password."
        },
        {
          q: "Can I delete my account?",
          a: "Yes, you can delete your account in Settings > Account > Delete Account. Note that you must complete all active rentals and resolve any disputes before deletion."
        },
        {
          q: "Why can't I see my messages?",
          a: "Try refreshing the page or logging out and back in. If the issue persists, clear your browser cache or try a different browser. Contact support if problems continue."
        }
      ]
    }
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
            <span className="text-gray-900 font-medium">Support Center</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiHelpCircle className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or contact our support team
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/contact" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMail className="text-blue-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-sm text-gray-600">Get help via email</p>
          </Link>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMessageCircle className="text-green-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600">Chat with us now</p>
          </div>

          <Link href="/terms" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiBook className="text-purple-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
            <p className="text-sm text-gray-600">Browse our guides</p>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-8 last:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {catIndex + 1}
                </span>
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = catIndex * 100 + faqIndex;
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                    >
                      <button
                        onClick={() => setOpenFAQ(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                        {isOpen ? (
                          <FiChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                        ) : (
                          <FiChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div id="documents" className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents Required</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">For Renters:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Valid government-issued ID (driver's license, passport)</li>
                <li>Payment method (credit/debit card)</li>
                <li>Verified email address and phone number</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">For Owners:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Valid government-issued ID</li>
                <li>Bank account for payouts</li>
                <li>Proof of ownership for high-value items (optional)</li>
                <li>Business license (if listing as a business)</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="returns" className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Annual Returns & Tax Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you earn income through RentVAT, you may need to report it on your tax return. Here's what you need to know:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We provide annual earnings statements by January 31st each year</li>
            <li>You can download your earnings history anytime from your account</li>
            <li>Earnings over $600/year will receive a 1099 form</li>
            <li>Consult with a tax professional for specific guidance</li>
            <li>Keep records of expenses related to your rentals for deductions</li>
          </ul>
        </div>

        {/* Still Need Help */}
        <div className="mt-12 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
