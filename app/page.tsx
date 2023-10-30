import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-screen bg-green-400 md:flex">
      <div className="md:h-screen bg-orange-300 h-2/3 md:w-2/3"></div>
      <div className="md:h-screen bg-blue-200 md:w-1/3"></div>
    </div>
  );
}
