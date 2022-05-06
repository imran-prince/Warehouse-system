// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ6P4nnjYZnvQQ0ZplXEvkNyopPClZlSk",
  authDomain: "computer-gadgets.firebaseapp.com",
  projectId: "computer-gadgets",
  storageBucket: "computer-gadgets.appspot.com",
  messagingSenderId: "557023091261",
  appId: "1:557023091261:web:713afb56f1a85fa4572854",
  measurementId: "G-SW6T0EP2BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)