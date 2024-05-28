import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzZQTWvuN4Hkym3aLzYqtBQGFlf3OZQyo",
  authDomain: "clone-67964.firebaseapp.com",
  projectId: "clone-67964",
  storageBucket: "clone-67964.appspot.com",
  messagingSenderId: "248630384985",
  appId: "1:248630384985:web:be2f4fcb7162d2ef5a9448",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
