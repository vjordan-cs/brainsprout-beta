import Link from "next/link";

export default function About() {
  return (
    <div className="bg-slate-600 h-36">
      <div className="text-center text-white flex items-center justify-center h-36">
        About
      </div>
      <Link href="/">home</Link>
    </div>
  );
}
