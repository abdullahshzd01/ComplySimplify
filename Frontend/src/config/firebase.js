// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBab-ZOAmKV14SkdhZuJ0a2BOU3bYRZ1JE",
  authDomain: "complysimplify.firebaseapp.com",
  projectId: "complysimplify",
  storageBucket: "complysimplify.appspot.com",
  messagingSenderId: "30703157100",
  appId: "1:30703157100:web:298d3d4860bfb48d71bd49",
  measurementId: "G-892PE18PMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
