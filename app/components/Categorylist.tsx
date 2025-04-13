"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Enum for type safety
export enum Category {
  ELECTRONICS = "ELECTRONICS",
  VEHICLES = "VEHICLES",
  HOME_APPLIANCES = "HOME_APPLIANCES",
  SPORTS = "SPORTS",
  TOOLS = "TOOLS",
  CLOTHING = "CLOTHING",
}

// Icons for categories
const categoryIcons: Record<Category, string> = {
  [Category.ELECTRONICS]: "/icons/categories/electronics.svg",
  [Category.VEHICLES]: "/icons/categories/vehicles.svg",
  [Category.HOME_APPLIANCES]: "/icons/categories/appliances.svg",
  [Category.SPORTS]: "/icons/categories/sports.svg",
  [Category.TOOLS]: "/icons/categories/tools.svg",
  [Category.CLOTHING]: "/icons/categories/clothing.svg",
};

// Display names for better UX
const categoryLabels: Record<Category, string> = {
  [Category.ELECTRONICS]: "Electronics",
  [Category.VEHICLES]: "Vehicles",
  [Category.HOME_APPLIANCES]: "Home & Appliances",
  [Category.SPORTS]: "Sports Gear",
  [Category.TOOLS]: "Tools",
  [Category.CLOTHING]: "Clothing",
};

export default function CategoryList() {
  const router = useRouter();
  const categories = Object.values(Category);

  const handleCategoryClick = (category: Category) => {
    router.push(`/search?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="mt-12 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Explore Categories
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="flex flex-col items-center p-4 bg-white hover:bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 mb-3 flex items-center justify-center">
              <img 
                src={categoryIcons[category as Category]} 
                alt="" 
                className="w-8 h-8" 
                aria-hidden="true"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {categoryLabels[category as Category]}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
