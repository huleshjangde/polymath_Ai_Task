import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4wnHJ0d9MOzPbxa1rv9fpo93FescVeQY",
  authDomain: "my-intership-11782.firebaseapp.com",
  databaseURL: "https://my-intership-11782-default-rtdb.firebaseio.com",
  projectId: "my-intership-11782",
  storageBucket: "my-intership-11782.appspot.com",
  messagingSenderId: "53065093029",
  appId: "1:53065093029:web:5514a5c927b37e44a4a24c",
  measurementId: "G-KVDW2D4QJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();