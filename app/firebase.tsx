// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Only import analytics if in browser
let analytics;

const firebaseConfig = {
  apiKey: "AIzaSyCZAd5WmJE7SrUYj4yNZDG5sltaEnrUQgk",
  authDomain: "rentvat.firebaseapp.com",
  projectId: "rentvat",
  storageBucket: "rentvat.firebasestorage.app",
  messagingSenderId: "59823572862",
  appId: "1:59823572862:web:0e8e7f53f82ac3b2a7152f",
  measurementId: "G-6QHKKBTFYN"
};

// ✅ Initialize app
const app = initializeApp(firebaseConfig);

// ✅ Auth & Provider setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Safely load analytics only on the client
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}

// ✅ Export everything you need
export { app, auth, provider };
