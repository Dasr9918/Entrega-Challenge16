// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL-FXr8cSSLqYJGGfu8HzBGhWNKCHZnic",
  authDomain: "bslogin-5cbe7.firebaseapp.com",
  projectId: "bslogin-5cbe7",
  storageBucket: "bslogin-5cbe7.appspot.com",
  messagingSenderId: "816337505231",
  appId: "1:816337505231:web:47ce6422b16478b12be0ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth();
// Intialize Firebase Database
const firebaseStorage = getStorage(app);

export { app, auth, firebaseStorage };
