"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../firebase";

type AuthContextType = {
  user: User | null;
  logout: () => Promise<void>; // Add logout function to the context type
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: async () => {}, // Default implementation
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const logout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setUser(null); // Clear the user state
    } catch (error) {
      console.error("Error during logout:", error);
      throw error; // Re-throw the error for handling in components
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);