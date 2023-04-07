import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// This is the unique data, pasted from SDK setup and configuration, firebase-web
const firebaseConfig = {
    apiKey: "AIzaSyC_7K3q6QiEbCg0FMgSpbYCehta6U5eFJc",
    authDomain: "majid-portfolio.firebaseapp.com",
    projectId: "majid-portfolio",
    storageBucket: "majid-portfolio.appspot.com",
    messagingSenderId: "882894828111",
    appId: "1:882894828111:web:0675bc90a33c84ccad703a",
    measurementId: "G-N9YL9SG4KN"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();