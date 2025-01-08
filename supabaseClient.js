// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace these with your actual Supabase project URL and public anon key
const SUPABASE_URL = "https://zivqmicbdwnxaqkwvmar.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdnFtaWNiZHdueGFxa3d2bWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwOTkzMTgsImV4cCI6MjA1MDY3NTMxOH0.yGgaTFcl_iAAgmHDVOdKJe0cEBjBwfG6z5pJHSepIeo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
