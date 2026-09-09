import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dyrceczaxgjmrjfcfvih.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cmNlY3pheGdqbXJqZmNmdmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMjMwMzEsImV4cCI6MjA2Nzc5OTAzMX0.AmsZDyqtIvt-A3nOu2s8LEIDwbd2o1f4AEhayT4b99I'

export const supabase = createClient(supabaseUrl, supabaseKey)
