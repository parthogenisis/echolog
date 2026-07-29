import { supabase } from "@/lib/supabase/client";

export default async function Home() {
  const { data, error } = await supabase
    .from("transmissions")
    .select("*");

  console.log(data);
  console.log(error);

  return (
    <main className="min-h-screen bg-[#07121d] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">EchoLog</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}