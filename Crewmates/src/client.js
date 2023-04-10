import { createClient } from '@supabase/supabase-js'

const URL = 'https://jejvfjtcexnfcslzaqjw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplanZmanRjZXhuZmNzbHphcWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNTY1OTEsImV4cCI6MTk5NjczMjU5MX0.H2epom4AR6RTIR4e99m6f49y87OwXVtXMjaWhjFovlw';

export const supabase = createClient(URL, API_KEY);