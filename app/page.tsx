export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#07121d] text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">EchoLog</h1>

        <p className="mt-6">
          URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Loaded" : "❌ Missing"}
        </p>

        <p>
          Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Loaded" : "❌ Missing"}
        </p>
      </div>
    </main>
  );
}