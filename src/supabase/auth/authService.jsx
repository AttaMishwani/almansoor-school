// src/supabase/auth/authService.js
import { supabase } from "../supabaseClient";

// Login admin using Supabase Auth
export const adminLogin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Supabase login error:", error);
    throw error;
  }

  // Optional: Check if the logged-in user is admin (based on role or email)
  const user = data.user;
  if (user.email !== "atta.rehmanmishwani@gmail.com") {
    throw new Error("Access denied. Not an admin account.");
  }

  return user;
};

// Logout
export const adminLogout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Supabase logout error:", error);
    throw error;
  }
};
