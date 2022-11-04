// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj9jI2saaKHYWvgQl4vaSSoQqSnqdPHB8",
    authDomain: "simulasi-ets.firebaseapp.com",
    projectId: "simulasi-ets",
    storageBucket: "simulasi-ets.appspot.com",
    messagingSenderId: "870775827914",
    appId: "1:870775827914:web:e125508c1b35d631447333"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;