import { createClient } from "@supabase/supabase-js";

const REACT_APP_SUPABASE_URL="https://eqtflmxumuslydrtzlrz.supabase.co"
const REACT_APP_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGZsbXh1bXVzbHlkcnR6bHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5MjEwMzMsImV4cCI6MjAzNTQ5NzAzM30.lctCWbvAULZaAAc13ODZ_kkAsXTt16ucA72bSjxsyns"

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseKey = REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;