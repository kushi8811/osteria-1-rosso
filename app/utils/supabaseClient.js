import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nmxylhxzatsaakmzqwnz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teHlsaHh6YXRzYWFrbXpxd256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDU5OTksImV4cCI6MjA0ODAyMTk5OX0.k2YcEjseo2xX_9KcnlaOGXKD5YBIre4zASbZXv3rHl0"; // Replace with your API key

export const supabase = createClient(supabaseUrl, supabaseKey);
