import {createClient} from "@supabase/supabase-js"
export const supabaseUrl = "https://lfcahlrfftnxgbjvqruy.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2FobHJmZnRueGdianZxcnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4OTkzNzAsImV4cCI6MjAyNzQ3NTM3MH0.MfAjnDuZ6Re11JUufyeRVQxYgnEtUeMH3mvRmMkfr98"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
