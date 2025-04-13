import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Logo from "./Logo";
import LoginModal from "./LoginModal";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Heart, Bell, Menu, X, LogOut, ChevronDown, MapPin, Shield, Check, Clock } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  // New state for dropdown toggle
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Close dropdown when clicking outside
    interface ClickOutsideEvent extends MouseEvent {
      target: HTMLElement;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (profileDropdownOpen && target && !target.closest('.profile-dropdown-container')) {
        setProfileDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  const getUserInitial = () => {
    if (!user) return "G";
    return user.displayName?.charAt(0) || user.email?.charAt(0) || "G";
  };

  // Toggle dropdown function
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <div className="relative text-black flex flex-col justify-start items-center overflow-hidden">
      {/* Navbar - Unique professional design */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 shadow-md ${
          scrolled ? "bg-white" : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top Bar - Main Navigation */}
        <div className="bg-white text-gray-800 py-0 px-3 sm:px-4 md:px-8 lg:px-16">

          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo and Search Section */}
            <div className="flex items-center space-x-3 md:space-x-6 flex-grow max-w-3xl">
              <Logo />
              
              {/* Search Bar */}
              <div className="hidden sm:flex flex-grow relative">
                <input
                  type="text"
                  placeholder="Search for anything you want to rent..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full py-2 px-4 text-sm bg-gray-100 text-gray-800 outline-none rounded-l-sm border border-gray-300"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="bg-emerald-500 hover:bg-emerald-600 px-3 py-2 text-white rounded-r-sm transition"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
            
            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-6">
              {user ? (
                <div className="flex items-center space-x-5">
                  <button className="flex items-center space-x-1 hover:text-gray-600 transition">
                    <Bell size={18} />
                  </button>
                  
                  <button className="flex items-center space-x-1 hover:text-gray-600 transition">
                    <Heart size={18} />
                  </button>
                  
                  <button className="flex items-center space-x-1 hover:text-gray-600 transition">
                    <ShoppingCart size={18} />
                  </button>
                  
                  {/* Profile dropdown with onClick instead of hover */}
                  <div className="profile-dropdown-container relative">
                    <button 
                      onClick={toggleProfileDropdown}
                      className="flex items-center space-x-1 hover:text-gray-600 transition"
                    >
                      <div className="w-7 h-7 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                        {getUserInitial()}
                      </div>
                      <span className="hidden lg:inline text-sm font-medium">{user.displayName || user.email?.split('@')[0] || "Account"}</span>
                      <ChevronDown size={14} className={profileDropdownOpen ? "transform rotate-180 transition-transform" : "transition-transform"} />
                    </button>
                    
                    {/* Dropdown Menu - Using AnimatePresence for smooth animation */}
                    <AnimatePresence>
                      {profileDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 w-48 bg-white shadow-lg rounded-lg mt-2 overflow-hidden z-50 transform origin-top-right text-gray-800"
                        >
                          <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">My Rentals</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">My Listings</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Logout
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLogin(true)}
                  className="bg-indigo-100 text-indigo-600 px-5 py-1 rounded text-sm font-medium hover:bg-indigo-200 transition"
                >
                  Login
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/createlisting")}
                className="bg-emerald-500 hover:bg-emerald-600 px-5 py-1 rounded text-white font-medium transition text-sm flex items-center space-x-1"
              >
                <span>List Item</span>
              </motion.button>
            </div>
            
            {/* Mobile Navigation Controls - Enhanced for better mobile appearance */}
            <div className="flex items-center space-x-3 md:hidden">
              <button
                onClick={() => router.push("/cart")}
                className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ShoppingCart size={18} className="text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white w-4 h-4 rounded-full text-xs flex items-center justify-center">0</span>
              </button>
              
              {user ? (
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold shadow-md"
                >
                  {getUserInitial()}
                </button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLogin(true)}
                  className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md text-xs font-medium shadow-sm hover:bg-indigo-200 transition"
                >
                  Login
                </motion.button>
              )}
              
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle Menu"
              >
                {menuOpen ? <X size={18} className="text-gray-700" /> : <Menu size={18} className="text-gray-700" />}
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar - Enhanced with better styling */}
        <div className="bg-white border-t border-gray-200 px-3 pb-2 pt-1 flex md:hidden">
          <div className="relative flex w-full">
            <input
              type="text"
              placeholder="Search for products and more"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-2 px-3 text-sm bg-gray-100 text-gray-800 outline-none rounded-l-md border border-gray-200"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 text-white rounded-r-md transition shadow-sm"
            >
              <Search size={16} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Enhanced with better styling */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 sm:top-16 left-0 right-0 bg-white z-40 md:hidden shadow-xl border-t border-gray-200"
          >
            <div className="flex flex-col p-4">
              {!user && (
                <div className="mb-4 flex justify-between items-center bg-indigo-50 p-3 rounded-lg">
                  <span className="text-gray-600 text-sm">New customer?</span>
                  <button 
                    onClick={() => {
                      setShowLogin(true);
                      setMenuOpen(false);
                    }}
                    className="text-indigo-600 font-medium text-sm bg-white px-3 py-1 rounded-md shadow-sm"
                  >
                    Sign Up
                  </button>
                </div>
              )}
              
              {user && (
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg mb-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold shadow-md">
                      {getUserInitial()}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user.displayName || user.email?.split('@')[0] || "User"}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <a href="#" className="py-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 rounded-md px-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <ShoppingCart size={16} className="text-indigo-600" />
                  </div>
                  <span className="font-medium">My Rentals</span>
                </div>
                <ChevronDown size={16} className="text-gray-500 transform -rotate-90" />
              </a>
              
              <a href="#" className="py-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 rounded-md px-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <Heart size={16} className="text-pink-600" />
                  </div>
                  <span className="font-medium">Wishlist</span>
                </div>
                <ChevronDown size={16} className="text-gray-500 transform -rotate-90" />
              </a>
              
              <a href="#" className="py-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 rounded-md px-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bell size={16} className="text-blue-600" />
                  </div>
                  <span className="font-medium">Notifications</span>
                </div>
                <ChevronDown size={16} className="text-gray-500 transform -rotate-90" />
              </a>
              
              <button
                onClick={() => {
                  router.push("/createlisting");
                  setMenuOpen(false);
                }}
                className="py-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 rounded-md px-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-600 text-xl font-bold">+</span>
                  </div>
                  <span className="font-medium">List an Item</span>
                </div>
                <ChevronDown size={16} className="text-gray-500 transform -rotate-90" />
              </button>
              
              {user && (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="mt-3 py-2 flex items-center justify-center space-x-2 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-sm transition"
                >
                  <LogOut size={16} />
                  <span className="font-medium">Logout</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content - Unique Professional Style */}
      <div className="pt-32 sm:pt-36 md:pt-32 w-full">

      {/* Main Hero Banner */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-indigo-50 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
                  Rent <span className="text-indigo-600">Almost Anything</span> at Your Fingertips
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Access premium products from trusted owners. Save money, reduce waste, and enjoy more with less commitment.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mb-4 justify-center md:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-5 rounded-lg font-medium text-sm shadow-md"
                    onClick={() => router.push("/browse")}
                  >
                    Browse Items
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-5 rounded-lg font-medium text-sm shadow-md"
                    onClick={() => router.push("/createlisting")}
                  >
                    List an Item
                  </motion.button>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} className="text-indigo-600" />
                    <select className="bg-transparent text-xs text-gray-800 font-medium border-none outline-none cursor-pointer">
                      <option>New York</option>
                      <option>San Francisco</option>
                      <option>Los Angeles</option>
                      <option>Chicago</option>
                    </select>
                  </div>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <span className="text-xs text-indigo-600 font-medium">1000+ Items Near You</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-20"></div>
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Rental marketplace" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover relative" 
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Trust Markers Section */}
        <div className="bg-white py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-between gap-y-4">
              <div className="flex items-center space-x-2 w-1/2 sm:w-auto">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Shield size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800">100% Insured</p>
                  <p className="text-xs text-gray-500">All rentals covered</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 w-1/2 sm:w-auto">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Check size={20} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800">Verified Owners</p>
                  <p className="text-xs text-gray-500">ID verified renters</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 w-1/2 sm:w-auto">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Bell size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800">24/7 Support</p>
                  <p className="text-xs text-gray-500">Help when you need it</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 w-1/2 sm:w-auto">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Clock size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800">Flexible Timing</p>
                  <p className="text-xs text-gray-500">Rent on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}