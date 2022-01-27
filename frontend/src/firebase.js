// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyD6swFDrRNzF8RL34EX1Aj0Uzsfgj3iuLE",

  authDomain: "webchat-c0818.firebaseapp.com",

  projectId: "webchat-c0818",

  storageBucket: "webchat-c0818.appspot.com",

  messagingSenderId: "896327311101",

  appId: "1:896327311101:web:4472aaea4ca73297d76894",

  measurementId: "G-SJ8GNRBLZX"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


// //const firebaseapp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();

//export { auth, googleProvider, facebookProvider };

export { auth, provider };
//npm install firebase