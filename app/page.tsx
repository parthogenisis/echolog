import { getTransmissions } from "@/lib/transmissions";

export default async function Home() {
  const transmissions = await getTransmissions();

  return (
    <main className="min-h-screen bg-[#07121d] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">EchoLog</h1>

      {transmissions.length === 0 ? (
        <p>No transmissions yet.</p>
      ) : (
        transmissions.map((log) => (
          <div
            key={log.id}
            className="mb-6 rounded-lg border border-gray-700 p-5"
          >
            <h2 className="text-2xl font-semibold">{log.title}</h2>

            <p className="mt-2 text-gray-300">
              {log.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              {log.log_date}
            </p>
          </div>
        ))
      )}
    </main>
  );
}