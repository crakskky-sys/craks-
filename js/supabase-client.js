// CRAKS Payment Management System - Supabase Client
// Replace these with your actual Supabase project credentials

const SUPABASE_URL = 'https://fdaakrhmsmsunhfbpdnm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkYWFrcmhtc21zdW5oZmJwZG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDg2MzYsImV4cCI6MjA4NTYyNDYzNn0.myggtq9jG6mhzURKhowv81Xoq19CTHmiligFNG7sFHs';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
