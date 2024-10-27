// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg8xTcDTN6b2o8w7qbjGSnBSp2aYnzemo",
  authDomain: "wellness-be965.firebaseapp.com",
  projectId: "wellness-be965",
  storageBucket: "wellness-be965.appspot.com",
  messagingSenderId: "831696767383",
  appId: "1:831696767383:web:981f17e5eee5c857e65cd2",
  measurementId: "G-4LW6SWGNDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);

export { db };