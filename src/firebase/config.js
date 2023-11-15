// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAF-isTzqQwskxbQ3X_6x3q66_gGQuACw",
  authDomain: "estudio-b6a81.firebaseapp.com",
  projectId: "estudio-b6a81",
  storageBucket: "estudio-b6a81.appspot.com",
  messagingSenderId: "113476329856",
  appId: "1:113476329856:web:e77bd9659e093bf0152165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);