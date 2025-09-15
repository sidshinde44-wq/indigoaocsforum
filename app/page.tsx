export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">IndiGo AOCS Forum</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        A community platform for IndiGo AOCS candidates: hiring events, resume building, 
        interview tips, assessments, and OL journey tracking.
      </p>
      <div className="flex gap-4">
        <a
          href="/auth"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          Login / Register
        </a>
        <a
          href="/about"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300"
        >
          About
        </a>
      </div>
    </main>
  );
}
