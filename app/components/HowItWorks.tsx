"use client";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: "/search-icon.png",
      title: "Discover",
      description: "Find items easily with AI-powered search & filters.",
    },
    {
      icon: "/calendar-icon.png",
      title: "Book in Seconds",
      description: "Select your dates and book instantly with seamless checkout.",
    },
    {
      icon: "/handshake-icon.png",
      title: "Pickup & Return",
      description: "Meet the owner, pick up your item, and return hassle-free.",
    },
    {
      icon: "/secure-icon.png",
      title: "Safe & Secure",
      description: "Your payments and rentals are protected with our system.",
    },
    {
      icon: "/review-icon.png",
      title: "Review & Earn",
      description: "Leave feedback and earn rewards for your rentals.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-cream text-green-900 rounded-lg max-w-6xl mx-auto shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transition-shadow hover:shadow-green-300"
          >
            <div className="bg-green-700 p-4 rounded-full shadow-md hover:shadow-xl transition-shadow">
              <img src={step.icon} alt={step.title} className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
