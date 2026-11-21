// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX2OTbj83a1E4Nk-8-az4L7VOtWvfcYTg",
  authDomain: "mapache-gamer-db.firebaseapp.com",
  projectId: "mapache-gamer-db",
  storageBucket: "mapache-gamer-db.firebasestorage.app",
  messagingSenderId: "230934720254",
  appId: "1:230934720254:web:02872cb4d8c3e8c62fffaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);