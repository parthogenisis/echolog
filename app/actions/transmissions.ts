"use server";

import { supabase } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function createTransmission(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const logDate = formData.get("logDate") as string;

  const { error } = await supabase
    .from("transmissions")
    .insert([
      {
        title,
        description,
        log_date: logDate,
      },
    ]);

  if (error) {
    console.error(error);
    return;
  }

  redirect("/");
}