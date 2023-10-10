// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAdqmWvkqlLS9pgcMq40Xwc7gQWNMAsxjI",

  authDomain: "userdog-b77b0.firebaseapp.com",

  projectId: "userdog-b77b0",

  storageBucket: "userdog-b77b0.appspot.com",

  messagingSenderId: "156168819003",

  appId: "1:156168819003:web:434580dfa5b3efe287a71e"

};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };