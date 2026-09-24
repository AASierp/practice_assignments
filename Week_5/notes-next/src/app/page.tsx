import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-slate-500 text-white min-h-screen">
      <div className="flex flex-col p-4 border-2 border-slate-50 text-center">
        <h1>Notes App</h1>

        <Link
          className="m-2 px-3 bg-blue-900 rounded-lg border-2 border-amber-50 hover:bg-blue-400"
          href="/login"
        >
          Log in
        </Link>

        <Link
          className="m-2 px-3 bg-blue-900 rounded-lg border-2 border-amber-50 hover:bg-blue-400"
          href="/signup"
        >
          Sign up
        </Link>
      </div>
    </main>
  );
}