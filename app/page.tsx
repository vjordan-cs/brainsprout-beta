import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-600 h-36">
      <div className="text-center text-white flex items-center justify-center h-36">
        Brainsprout
      </div>
      <div className="border bg-slate-100 p-2 w-min">
        <Link href="/about">about</Link>
      </div>
    </div>
  );
}
