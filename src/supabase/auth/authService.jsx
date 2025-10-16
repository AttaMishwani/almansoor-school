// src/supabase/auth/authService.js
import { supabase } from "../supabaseClient";

// Allowed admin credentials
const ADMIN_EMAIL = "atta.rehmanmishwani@gmail.com";
const ADMIN_PASSWORD = "atta2006";

// Login
export const adminLogin = async (email, password) => {
  // Restrict login to single admin
  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    const error = new Error("Invalid admin credentials");
    error.code = "ADMIN_MISMATCH";
    throw error;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Supabase login error:", error);
    throw error;
  }

  return data.user;
};

// Logout
export const adminLogout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Supabase logout error:", error);
    throw error;
  }
};
