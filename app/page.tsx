import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07121d] text-white flex items-center justify-center">
      <div className="text-center max-w-xl">

        <h1 className="text-6xl font-bold mb-4">
          EchoLog
        </h1>

        <p className="text-gray-400 mb-10">
          Your personal journal for thoughts, memories and video logs.
        </p>

        <div className="flex flex-col gap-4">

          <Link
            href="/new"
            className="rounded-lg bg-blue-600 px-8 py-4 hover:bg-blue-700 transition"
          >
            ➕ New Transmission
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-600 px-8 py-4 hover:bg-[#102030] transition"
          >
            📜 View Transmissions
          </Link>

        </div>

      </div>
    </main>
  );
}