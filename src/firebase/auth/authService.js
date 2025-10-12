// src/firebase/auth/authService.js
import axios from "axios";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.config";

// Allowed admin credentials
const ADMIN_EMAIL = "atta.rehmanmishwani@gmail.com";
const ADMIN_PASSWORD = "atta2006";

// Sign up
export const adminSignUp = async (email, password) => {
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        const error = new Error("Invalid admin credentials");
        error.code = "ADMIN_MISMATCH";
        throw error;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Firebase signup error:", error);
        throw error;
    }
};

// Login
export const adminLogin = async (email, password) => {
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        const error = new Error("Invalid admin credentials");
        error.code = "ADMIN_MISMATCH";
        throw error;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Firebase login error:", error);
        throw error;
    }
};

// Logout
export const adminLogout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout error:", error);
        throw error;
    }
};
