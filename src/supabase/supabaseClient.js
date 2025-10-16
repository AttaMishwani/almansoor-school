// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tmnnyqnjqhucbfrknksm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbm55cW5qcWh1Y2Jmcmtua3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MzU3OTUsImV4cCI6MjA3NjExMTc5NX0.d_Og56XQzfeIdYyYsf34e0pGUlIvVK82Kyd2b7Ze0xM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
