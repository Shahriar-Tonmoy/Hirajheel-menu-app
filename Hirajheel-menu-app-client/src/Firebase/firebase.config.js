// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVaT4pe3rb1bUndTgMwgm9elyTxR3yQt0",
  authDomain: "hirajheel-menu-app.firebaseapp.com",
  projectId: "hirajheel-menu-app",
  storageBucket: "hirajheel-menu-app.appspot.com",
  messagingSenderId: "1047540196900",
  appId: "1:1047540196900:web:b4d22d6273dff53bc31ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

 export default auth;

