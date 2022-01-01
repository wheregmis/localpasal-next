// Import the functions you need from the SDKs you need
// importing getApps and getApp for server side apps like next js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "insta-clone-5c63b.firebaseapp.com",
  projectId: "insta-clone-5c63b",
  storageBucket: "insta-clone-5c63b.appspot.com",
  messagingSenderId: "188080443109",
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase if its not initialized alread
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firestore and Storage
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
