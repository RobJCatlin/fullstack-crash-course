import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xsvarwdmgmaugdannhbs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzdmFyd2RtZ21hdWdkYW5uaGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyNDQ5MzUsImV4cCI6MTk5MTgyMDkzNX0.Y2Ilkkp_RkFwT8INUOc1iH-2B7eKLCb-fWxV7xP1HC0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
