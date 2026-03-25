// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlSoxdqLq4MeYg4dqL6431Pfjg4FdgUKE",
    authDomain: "vite-contact-app-dfb68.firebaseapp.com",
    projectId: "vite-contact-app-dfb68",
    storageBucket: "vite-contact-app-dfb68.firebasestorage.app",
    messagingSenderId: "691818213744",
    appId: "1:691818213744:web:b72671aef2c806ba449fb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
