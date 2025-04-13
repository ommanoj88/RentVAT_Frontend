"use client";

import { motion } from "framer-motion";

interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

export default function WhyRentingIsBest() {
  const highlights: HighlightItem[] = [
    {
      icon: "/icons/faq-icon.svg", // Updated to SVG
      title: "Instant Answers",
      description: "Our FAQ covers everything—from bookings to returns, instantly.",
    },
    {
      icon: "/icons/globe-icon.svg",
      title: "Global Sharing Network",
      description: "Join a community of trusted renters across multiple countries.",
    },
    {
      icon: "/icons/trophy-icon.svg",
      title: "Trending Rentals",
      description: "See what's popular and rent top-rated products with confidence.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 px-4 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          Why Renting is Best
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
            >
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img src={item.icon} alt="" className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
