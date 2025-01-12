// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase-admin";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC1HvwAmRtBvzq__jVXyfPS1RHkZVlIOE",
  authDomain: "jdm-wiki.firebaseapp.com",
  projectId: "jdm-wiki",
  storageBucket: "jdm-wiki.firebasestorage.app",
  messagingSenderId: "598739155568",
  appId: "1:598739155568:web:3442fb808a6fd75b6552b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);