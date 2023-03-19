// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARaOUZI54m_8Izo5xoV_WRLgHr1Nrjr4o",
  authDomain: "vue-firebase-a61cb.firebaseapp.com",
  projectId: "vue-firebase-a61cb",
  storageBucket: "vue-firebase-a61cb.appspot.com",
  messagingSenderId: "974403661455",
  appId: "1:974403661455:web:1ca69fe6aa3cd262b8cafa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };