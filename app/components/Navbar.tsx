"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";
import LoginModal from "./LoginModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiUser,
  FiList,
  FiShoppingBag,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiPlus
} from "react-icons/fi";

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (userDropdownOpen && !target.closest('.user-dropdown-container')) {
        setUserDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userDropdownOpen]);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      setMobileMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUserDropdownOpen(false);
      setMobileMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getUserInitial = () => {
    if (!user) return "U";
    return user.displayName?.charAt(0).toUpperCase() ||
           user.email?.charAt(0).toUpperCase() ||
           "U";
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Logo />
              </Link>
            </div>

            {/* Center: Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search for items to rent..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    <FiSearch size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Create Listing Button */}
              <Link
                href="/createlisting"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                <FiPlus size={18} />
                <span>Create Listing</span>
              </Link>

              {/* User Section */}
              {user ? (
                <div className="user-dropdown-container relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {getUserInitial()}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {user.displayName || user.email?.split('@')[0] || "Account"}
                    </span>
                    <FiChevronDown
                      size={16}
                      className={`transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {userDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      >
                        <Link
                          href="/profile"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <FiUser size={18} />
                          <span>Profile</span>
                        </Link>
                        <Link
                          href="/profile?tab=listings"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <FiList size={18} />
                          <span>My Listings</span>
                        </Link>
                        <Link
                          href="/profile?tab=bookings"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <FiShoppingBag size={18} />
                          <span>My Bookings</span>
                        </Link>
                        <Link
                          href="/profile?tab=settings"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <FiSettings size={18} />
                          <span>Settings</span>
                        </Link>
                        <hr className="my-2 border-gray-200" />
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-red-600 w-full"
                        >
                          <FiLogOut size={18} />
                          <span>Sign Out</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-3">
            <form onSubmit={handleSearch}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <FiSearch size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-3 space-y-2">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg mb-2">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {getUserInitial()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiUser size={20} />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/profile?tab=listings"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiList size={20} />
                      <span>My Listings</span>
                    </Link>
                    <Link
                      href="/profile?tab=bookings"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiShoppingBag size={20} />
                      <span>My Bookings</span>
                    </Link>
                    <Link
                      href="/profile?tab=settings"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiSettings size={20} />
                      <span>Settings</span>
                    </Link>

                    <hr className="my-2" />

                    <Link
                      href="/createlisting"
                      className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiPlus size={20} />
                      <span>Create Listing</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-red-600 w-full"
                    >
                      <FiLogOut size={20} />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Sign In
                    </button>
                    <Link
                      href="/createlisting"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiPlus size={20} />
                      <span>Create Listing</span>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}
