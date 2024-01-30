import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="border-2 border-cyan-800 p-10">
        <h1 className="text-3xl font-semibold">CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div className="border-2 border-blue-500 p-3">
        <Link href="/week-2">
          <div className="text-blue-500 hover:text-blue-700 transition duration-300">
            Week 2
          </div>
        </Link>
      </div>
      <div className="text-5xl text-gray-900 border-0 items-center">
      </div>
    </main>
  );
}
