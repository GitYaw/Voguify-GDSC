// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLm5buPVH6H6Jj4hHNWs-wNwPhxL9eV-U",
  authDomain: "voguify-6c5a1.firebaseapp.com",
  databaseURL: "https://voguify-6c5a1-default-rtdb.firebaseio.com",
  projectId: "voguify-6c5a1",
  storageBucket: "voguify-6c5a1.appspot.com",
  messagingSenderId: "636201514990",
  appId: "1:636201514990:web:4541bc3dcb1f6668eb00ff",
  measurementId: "G-5YFJLYHE1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app)

export{ database, storage};