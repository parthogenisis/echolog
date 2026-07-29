import { supabase } from "@/lib/supabase/client";

export async function getTransmissions() {
  const { data, error } = await supabase
    .from("transmissions")
    .select("*")
    .order("log_date", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}