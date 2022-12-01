// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestor";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtV8YGlvE35fw0XeRACP-dURrUb6PvqNg",
    authDomain: "instagram-to4z.firebaseapp.com",
    projectId: "instagram-to4z",
    storageBucket: "instagram-to4z.appspot.com",
    messagingSenderId: "411447362631",
    appId: "1:411447362631:web:5613c12193bb86da239d62",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
