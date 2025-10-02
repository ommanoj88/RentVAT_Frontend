"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiGift, FiUsers, FiDollarSign, FiCopy, FiCheck } from "react-icons/fi";

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "RENT2025ABC";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <span className="text-gray-900 font-medium">Referral Program</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiGift className="text-purple-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Refer Friends, Earn Rewards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Give $25, Get $25. Share RentVAT with friends and both earn rental credits!
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Link</h3>
              <p className="text-gray-600">
                Send your unique referral link to friends via email, social media, or text message.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">They Sign Up</h3>
              <p className="text-gray-600">
                Your friend creates an account using your link and gets $25 credit on their first rental.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">You Both Win</h3>
              <p className="text-gray-600">
                Once they complete their first rental, you get $25 credit too! No limit on referrals.
              </p>
            </div>
          </div>
        </div>

        {/* Share Your Code */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Referral Code</h2>
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <input
                type="text"
                value={referralCode}
                readOnly
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 font-mono text-lg text-center"
              />
              <button
                onClick={handleCopy}
                className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                {copied ? <FiCheck size={24} /> : <FiCopy size={24} />}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                Facebook
              </button>
              <button className="bg-blue-400 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors">
                Twitter
              </button>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <FiDollarSign className="text-green-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Unlimited Earnings</h3>
            <p className="text-sm text-gray-600">No cap on referrals or earnings</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <FiUsers className="text-blue-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Help Friends Save</h3>
            <p className="text-sm text-gray-600">Share the benefits of renting</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <FiGift className="text-purple-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Credits</h3>
            <p className="text-sm text-gray-600">Credits applied automatically</p>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Referral Program Terms</h2>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Must have an active RentVAT account in good standing</li>
              <li>Referrer and referee must be different individuals</li>
              <li>Referee must be a new user who hasn't previously registered</li>
              <li>Self-referrals are not permitted</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Credit Details</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>New users receive $25 credit upon signup using referral link</li>
              <li>Referrer receives $25 credit after referee completes first rental</li>
              <li>First rental must be at least $50 to qualify</li>
              <li>Credits expire 12 months from date of issue</li>
              <li>Credits can be used toward rental fees (not deposits or service fees)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Program Rules</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No limit on number of referrals</li>
              <li>Credits are non-transferable and have no cash value</li>
              <li>Cannot be combined with certain other promotions</li>
              <li>RentVAT reserves the right to modify or discontinue program</li>
              <li>Fraudulent activity will result in account termination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
            <p className="text-gray-700 mb-3">The following activities are strictly prohibited:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Creating multiple accounts to refer yourself</li>
              <li>Using fake names or information</li>
              <li>Spamming or unsolicited bulk communications</li>
              <li>Posting referral links on coupon or deal sites</li>
              <li>Purchasing referrals or paying for signups</li>
              <li>Any attempt to game or manipulate the system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Credit Application</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Credits automatically applied at checkout</li>
              <li>Applied in order of soonest expiration date</li>
              <li>Partial credit amounts can be used</li>
              <li>Credits appear in your account wallet</li>
              <li>Track your referral earnings in your dashboard</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Changes to Program</h3>
            <p className="text-gray-700 leading-relaxed">
              RentVAT reserves the right to modify, suspend, or terminate the referral program at any time
              for any reason. We may also modify reward amounts, eligibility criteria, and terms. Changes
              will be communicated via email and posted on this page. Continued participation after changes
              constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Violations & Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              If we determine that you've violated these terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your referral credits may be revoked</li>
              <li>Your account may be suspended or terminated</li>
              <li>You may be prohibited from future program participation</li>
              <li>Legal action may be taken for fraudulent activity</li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Earning Today</h2>
          <p className="text-xl mb-8 text-purple-100">
            Share the love and earn rewards with every friend who joins!
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Copy Your Referral Link
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
