"use client";

import { motion } from "framer-motion";

interface StepItem {
  icon: string;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: StepItem[] = [
    { 
      icon: "/icons/search-icon.svg", 
      title: "Discover", 
      description: "Find items easily with AI-powered search & filters." 
    },
    { 
      icon: "/icons/calendar-icon.svg", 
      title: "Book Instantly", 
      description: "Select your dates and book in seconds." 
    },
    { 
      icon: "/icons/handshake-icon.svg", 
      title: "Pickup & Enjoy", 
      description: "Meet the owner, grab your item, return hassle-free." 
    },
    { 
      icon: "/icons/secure-icon.svg", 
      title: "Secure Payments", 
      description: "Protected transactions with rental insurance." 
    },
    { 
      icon: "/icons/review-icon.svg", 
      title: "Review & Earn", 
      description: "Rate experiences & earn discounts." 
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md"
            >
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-full shadow-md flex items-center justify-center w-16 h-16">
                <img src={step.icon} alt="" className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-3">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

