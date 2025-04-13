import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";
import { Bell, User, Plus } from "lucide-react";

export default function Navigation() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-white">
      <nav className="bg-white shadow-sm border-b border-gray-200 py-0 px-6 flex justify-between items-center h-17">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div className="flex items-center space-x-5">
          <button
            onClick={() => router.push("/")}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
          >
            Home
          </button>
          
          <button
            onClick={() => router.push("/profile")}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
          >
            My Listings
          </button>
          
          <button
            onClick={() => router.push("/createlisting")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md font-medium transition-colors text-sm flex items-center gap-1 shadow-sm"
          >
            <Plus size={16} /> List Item
          </button>
          
          <div className="flex items-center space-x-3">
            <button
              className="text-gray-500 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100"
            >
              <Bell size={18} />
            </button>
            
            <div className="relative group">
              <button className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                <User size={18} />
              </button>
              
              <div className="absolute right-0 mt-1 w-44 bg-white rounded-md shadow-md py-1 invisible group-hover:visible border border-gray-200 z-10">
                <button
                  onClick={() => router.push("/profile")}
                  className="block w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={() => router.push("/settings")}
                  className="block w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-1.5 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Very subtle separator */}
      <div className="h-px w-full bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50"></div>
    </div>
  );
}