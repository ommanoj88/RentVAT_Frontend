import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Logo from "./Logo";
import LoginModal from "./LoginModal";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Menu, X, LogOut, TrendingUp, Grid, Shield, Clock, Check } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <div className="relative text-white min-h-[50vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
        {/* Animated shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gray-400 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full bg-gray-500 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-2/3 left-1/3 w-40 h-40 md:w-80 md:h-80 rounded-full bg-gray-600 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-3 sm:px-6 py-2 transition-all duration-300 ${
          scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <div className="flex space-x-4 lg:space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-gray-300 transition duration-300 relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300 relative group">
              Guarantee
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300 relative group">
              FAQs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gray-700/50 backdrop-blur-md rounded-full px-2 py-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-7 h-7 bg-gradient-to-br from-gray-600 to-gray-400 text-white flex items-center justify-center rounded-full font-bold shadow-lg"
                >
                  {getUserInitial()}
                </motion.div>
                <span className="text-xs lg:text-sm font-medium pr-1">{user.displayName || user.email?.split('@')[0] || "Guest"}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center space-x-1 text-xs bg-gray-700/50 hover:bg-gray-600/60 backdrop-blur-md px-2 py-1 rounded-full transition"
              >
                <LogOut size={12} />
                <span>Logout</span>
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className="bg-gray-700/50 hover:bg-gray-600/60 backdrop-blur-md px-3 py-1 rounded-full text-xs lg:text-sm font-medium transition"
            >
              Login
            </motion.button>
          )}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/createlisting")}
            className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 px-3 py-1.5 rounded-full font-medium shadow-lg transition flex items-center space-x-1 text-xs lg:text-sm"
          >
            <span className="text-base font-bold">+</span>
            <span>List Item</span>
          </motion.button>
        </div>
        
        {/* Mobile Navigation Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          {user ? (
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-7 h-7 bg-gradient-to-br from-gray-600 to-gray-400 text-white flex items-center justify-center rounded-full font-bold shadow-lg"
              >
                {getUserInitial()}
              </motion.div>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className="text-white text-xs bg-gray-700/50 px-2 py-1 rounded-full"
            >
              Login
            </motion.button>
          )}
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1 rounded-full bg-gray-700/50 backdrop-blur-md"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-12 left-0 right-0 bg-gray-900/95 backdrop-blur-lg z-40 md:hidden shadow-xl border-t border-gray-800"
          >
            <div className="flex flex-col p-3 space-y-1.5">
              <a href="#" className="py-1.5 px-3 hover:bg-gray-800/70 rounded-lg flex items-center space-x-2 transition text-sm">
                <span>How It Works</span>
              </a>
              <a href="#" className="py-1.5 px-3 hover:bg-gray-800/70 rounded-lg flex items-center space-x-2 transition text-sm">
                <span>Guarantee</span>
              </a>
              <a href="#" className="py-1.5 px-3 hover:bg-gray-800/70 rounded-lg flex items-center space-x-2 transition text-sm">
                <span>FAQs</span>
              </a>
              <button
                onClick={() => {
                  router.push("/createlisting");
                  setMenuOpen(false);
                }}
                className="py-1.5 px-3 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg flex items-center space-x-2 transition text-left text-sm"
              >
                <span className="text-base font-bold">+</span>
                <span>List Item</span>
              </button>
              
              {user && (
                <button
                  onClick={handleLogout}
                  className="py-1.5 px-3 hover:bg-gray-800/70 rounded-lg flex items-center space-x-2 transition text-left text-sm"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content - Smaller and More Compact */}
      <motion.div 
        className="mt-14 pt-2 sm:pt-4 w-full max-w-4xl mx-auto px-3 sm:px-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rent Smarter, <span className="text-gray-300">Save More</span>
        </motion.h1>
        
        <motion.p 
          className="text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Access anything, anytime—without the commitment of buying.
        </motion.p>

        {/* Search Bar - More Compact */}
        <motion.div 
          className={`mt-4 sm:mt-6 relative max-w-2xl mx-auto ${searchFocused ? "scale-102" : ""} transition-all duration-300`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg blur-sm opacity-50"></div>
          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg flex items-center p-1 relative shadow-lg">
            <div className="flex-grow flex items-center pl-2">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="What would you like to rent today?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-grow py-1.5 px-2 text-xs sm:text-sm bg-transparent outline-none placeholder-gray-400 text-white ml-1"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 px-3 py-1.5 text-white font-medium rounded-lg transition shadow-md flex items-center space-x-1 text-xs sm:text-sm"
            >
              <span>Search</span>
              <ChevronDown size={12} className="transform rotate-270" />
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Cards - Mobile Friendly Grid */}
        <motion.div 
          className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/60 p-2 sm:p-3 rounded-lg text-left transition flex flex-col items-center justify-center space-y-1 sm:space-y-2 border border-gray-700/50 shadow-md h-16 sm:h-20"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center shadow-md">
              <Grid size={14} />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-xs sm:text-sm">Explore Categories</h3>
            </div>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/60 p-2 sm:p-3 rounded-lg text-left transition flex flex-col items-center justify-center space-y-1 sm:space-y-2 border border-gray-700/50 shadow-md h-16 sm:h-20"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center shadow-md">
              <TrendingUp size={14} />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-xs sm:text-sm">Trending Items</h3>
            </div>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/60 p-2 sm:p-3 rounded-lg text-left transition flex flex-col items-center justify-center space-y-1 sm:space-y-2 border border-gray-700/50 shadow-md h-16 sm:h-20"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center shadow-md">
              <Shield size={14} />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-xs sm:text-sm">Insurance</h3>
            </div>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/60 p-2 sm:p-3 rounded-lg text-left transition flex flex-col items-center justify-center space-y-1 sm:space-y-2 border border-gray-700/50 shadow-md h-16 sm:h-20"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center shadow-md">
              <Clock size={14} />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-xs sm:text-sm">24/7 Support</h3>
            </div>
          </motion.button>
        </motion.div>
        
        {/* Trust Badges - More Compact */}
        <motion.div 
          className="mt-4 sm:mt-6 max-w-lg mx-auto px-2 sm:px-4 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center space-x-1">
            <Check size={10} className="text-gray-400" />
            <span className="text-xs text-gray-300">Verified Rentals</span>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center space-x-1">
            <Check size={10} className="text-gray-400" />
            <span className="text-xs text-gray-300">100% Insured</span>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center space-x-1">
            <Check size={10} className="text-gray-400" />
            <span className="text-xs text-gray-300">No Hidden Fees</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

      {/* Add framer-motion animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.03); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        .animate-pulse {
          animation: pulse 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}