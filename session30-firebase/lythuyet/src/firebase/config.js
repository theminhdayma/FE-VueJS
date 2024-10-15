// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "session30-7a5ea.firebaseapp.com",
  projectId: "session30-7a5ea",
  storageBucket: "session30-7a5ea.appspot.com",
  messagingSenderId: "895543461040",
  appId: "1:895543461040:web:e3b7b1e03736871e8ae775",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);