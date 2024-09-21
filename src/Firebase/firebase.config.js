// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6yOj-At2RWTOhpTdYR7eLGbcq3i8oomo",
  authDomain: "email-password-auth-12a4e.firebaseapp.com",
  projectId: "email-password-auth-12a4e",
  storageBucket: "email-password-auth-12a4e.appspot.com",
  messagingSenderId: "154857250918",
  appId: "1:154857250918:web:1e3d982043788681234da7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
