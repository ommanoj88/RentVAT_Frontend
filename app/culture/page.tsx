"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FiHome, FiChevronRight, FiHeart, FiZap, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function CulturePage() {
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
            <span className="text-gray-900 font-medium">Culture</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Life at RentVAT
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We're building more than a company. We're creating a culture where passionate people
            thrive, innovate, and make a real impact.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">People First</h3>
            <p className="text-gray-600">
              Our team is our greatest asset. We invest in growth, well-being, and success of every member.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiZap className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We encourage creative thinking, experimentation, and learning from both successes and failures.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTrendingUp className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Mindset</h3>
            <p className="text-gray-600">
              Continuous learning and development are core to who we are. We support your journey.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiHeart className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Driven</h3>
            <p className="text-gray-600">
              Everything we do is aimed at creating positive impact for our users and the planet.
            </p>
          </div>
        </div>

        {/* Culture Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Makes Us Different
          </h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-12 text-white text-center h-80 flex items-center justify-center">
                <div>
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold">Mission Driven</h3>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Purpose in Every Action</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We're not just building a business; we're creating a movement toward sustainable
                  consumption. Every team member understands how their work contributes to our mission
                  of making the world more sustainable through sharing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From engineering to customer support, everyone plays a vital role in building a
                  platform that reduces waste and empowers communities.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Work-Life Harmony</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We believe that great work happens when people have balance. That's why we offer
                  unlimited PTO, flexible hours, and remote work options. Your well-being isn't just
                  a perk—it's a priority.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a morning person coding at dawn or a night owl who hits peak
                  creativity at midnight, we trust you to do your best work on your schedule.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-12 text-white text-center h-80 flex items-center justify-center order-1 md:order-2">
                <div>
                  <div className="text-6xl mb-4">⚖️</div>
                  <h3 className="text-2xl font-bold">Balanced Life</h3>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl p-12 text-white text-center h-80 flex items-center justify-center">
                <div>
                  <div className="text-6xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold">Diverse & Inclusive</h3>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strength in Diversity</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our team represents a beautiful mix of backgrounds, perspectives, and experiences.
                  We actively work to create an inclusive environment where everyone feels valued,
                  heard, and empowered to be their authentic selves.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Different perspectives lead to better solutions. We celebrate our differences and
                  know that our diversity makes us stronger.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Activities */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Life Beyond Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-semibold text-gray-900 mb-2">Team Events</h3>
              <p className="text-sm text-gray-600">Monthly social events, annual retreats, and celebrations</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold text-gray-900 mb-2">Wellness Programs</h3>
              <p className="text-sm text-gray-600">Gym memberships, yoga classes, and mental health support</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">Learning & Growth</h3>
              <p className="text-sm text-gray-600">Conferences, courses, and mentorship programs</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">🍕</div>
              <h3 className="font-semibold text-gray-900 mb-2">Team Lunches</h3>
              <p className="text-sm text-gray-600">Regular team meals and casual hangouts</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fun Activities</h3>
              <p className="text-sm text-gray-600">Game rooms, hobby clubs, and recreational leagues</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Volunteering</h3>
              <p className="text-sm text-gray-600">Paid time off for community service and activism</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hear From Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Senior Engineer</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Best company I've ever worked for. The flexibility and trust they give you is
                incredible. I can work from anywhere and still feel connected to the team."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael T.</div>
                  <div className="text-sm text-gray-500">Product Designer</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working at RentVAT feels like being part of something bigger. We're not just
                building features—we're changing how people think about ownership."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Aisha K.</div>
                  <div className="text-sm text-gray-500">Marketing Lead</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The culture here is amazing. Leadership genuinely cares about our growth and
                well-being. I've learned more in one year here than in three years at my last job."
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Be Part of This?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our team and help us build the future of sustainable consumption.
          </p>
          <Link
            href="/careers"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
