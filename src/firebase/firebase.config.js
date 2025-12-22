// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVvs7HAYmJvxVDW6tshWHRdQGxmoK5KUs",
  authDomain: "dragon-news-breaking-ddcfc.firebaseapp.com",
  projectId: "dragon-news-breaking-ddcfc",
  storageBucket: "dragon-news-breaking-ddcfc.firebasestorage.app",
  messagingSenderId: "987525466040",
  appId: "1:987525466040:web:7f0870410692b893df714d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;