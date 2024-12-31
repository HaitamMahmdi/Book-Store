// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO1m9vkukA_zIKufa9r-a8Dqtqnjq0uNE",
  authDomain: "book-store-bccb7.firebaseapp.com",
  projectId: "book-store-bccb7",
  storageBucket: "book-store-bccb7.firebasestorage.app",
  messagingSenderId: "779649920200",
  appId: "1:779649920200:web:8ad2bb43002347a12709fd",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
