"use client";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { icon: "/search-icon.png", title: "Discover", description: "Find items easily with AI-powered search & filters." },
    { icon: "/calendar-icon.png", title: "Book Instantly", description: "Select your dates and book in seconds." },
    { icon: "/handshake-icon.png", title: "Pickup & Enjoy", description: "Meet the owner, grab your item, return hassle-free." },
    { icon: "/secure-icon.png", title: "Secure Payments", description: "Protected transactions with rental insurance." },
    { icon: "/review-icon.png", title: "Review & Earn", description: "Rate experiences & earn discounts." },
  ];

  return (
    <section className="py-16 px-8 bg-cream text-slate-900 rounded-3xl max-w-6xl mx-auto shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transition hover:shadow-amber-400"
          >
            <div className="bg-gradient-to-br from-amber-500 to-red-500 p-4 rounded-full shadow-md">
              <img src={step.icon} alt={step.title} className="h-12 w-12" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
            <p className="text-gray-700 text-base mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
