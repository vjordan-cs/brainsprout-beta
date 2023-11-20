import Link from "next/link";

export default function BackButton() {
  return (
    <div>
      <div className="absolute top-4 left-4">
        <div className="border-2 border-slate-500 bg-white rounded-lg h-12 px-2">
          <Link
            href=""
            className="h-full w-full flex justify-center items-center"
          >
            &lt; Back
          </Link>
        </div>
      </div>
    </div>
  );
}
