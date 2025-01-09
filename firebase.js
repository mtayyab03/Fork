// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcTN3DDT4dZId2hfxrUsk2yOYT2vqinZ8",
  authDomain: "rawe-489e6.firebaseapp.com",
  projectId: "rawe-489e6",
  storageBucket: "rawe-489e6.firebasestorage.app",
  messagingSenderId: "334025525194",
  appId: "1:334025525194:web:6db5102a2b494f0613f133",
  measurementId: "G-6LYXL5HEX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
