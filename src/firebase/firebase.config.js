
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyDpsNFk4jIr1cegJ7OpRAt4K2O-CLhBfXM",
    authDomain: "almansoorschool-716d5.firebaseapp.com",
    projectId: "almansoorschool-716d5",
    storageBucket: "almansoorschool-716d5.firebasestorage.app",
    messagingSenderId: "374542204039",
    appId: "1:374542204039:web:9e5f072c6d8bb87dac8c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // optional