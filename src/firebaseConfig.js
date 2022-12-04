// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBgatp-c5ucM-NKcqUXJrHJJw9cCWgi1kg",
    authDomain: "bookstoreblock.firebaseapp.com",
    projectId: "bookstoreblock",
    storageBucket: "bookstoreblock.appspot.com",
    messagingSenderId: "485079930177",
    appId: "1:485079930177:web:bcd1535cdbb3e51111bdc0",
    measurementId: "G-4Z47XK63PG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);
export  { storage, database, analytics, db }