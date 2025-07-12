// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNiilq7ndti2KNc6zNRYrjA3tFL6KByeE",
  authDomain: "shinepak-2f492.firebaseapp.com",
  projectId: "shinepak-2f492",
  storageBucket: "shinepak-2f492.firebasestorage.app",
  messagingSenderId: "628000804994",
  appId: "1:628000804994:web:891b9ac4ed247dfa87249b",
  measurementId: "G-4SE8ESDDDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);