// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.EXPO_PUBLIC_API_KEY",
  authDomain: "tinderclone-ts.firebaseapp.com",
  projectId: "tinderclone-ts",
  storageBucket: "tinderclone-ts.appspot.com",
  messagingSenderId: "505377631875",
  appId: "1:505377631875:web:dbe063966c54557f1f35b6",
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
