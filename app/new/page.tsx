import { createTransmission } from "../actions/transmissions";

export default function NewTransmission() {
  return (
    <main className="min-h-screen bg-[#07121d] text-white flex items-center justify-center">
      <div className="w-full max-w-xl rounded-xl bg-[#102030] p-8">

        <h1 className="text-3xl font-bold mb-6">
          New Transmission
        </h1>

        <form action={createTransmission} className="space-y-5">

          <input
            name="title"
            placeholder="Title"
            className="w-full rounded bg-[#1b314a] p-3"
            required
          />

          <input
            type="date"
            name="logDate"
            className="w-full rounded bg-[#1b314a] p-3"
            required
          />

          <textarea
            name="description"
            placeholder="Today's transmission..."
            className="w-full rounded bg-[#1b314a] p-3 h-40"
          />

          <button
            className="w-full rounded bg-blue-600 p-3 hover:bg-blue-700"
          >
            Save Transmission
          </button>

        </form>

      </div>
    </main>
  );
}