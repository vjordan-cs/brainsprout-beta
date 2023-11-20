import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen md:flex">
      <div className="h-2/3 bg-slate-500 flex justify-center items-center md:h-screen md:w-2/3">
        <div className="text-center">
          <div className="text-5xl md:text-6xl">☘️ BrainSprout</div>
          <div className="p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            exercitationem dolor consequuntur? Atque corrupti, illo magni
            aliquid maxime animi omnis vero illum soluta dolore officiis
            doloremque excepturi quae culpa velit!
          </div>
        </div>
      </div>
      <div className="h-1/3 bg-red-200 flex justify-center items-center md:h-screen md:w-1/3">
        <div className="text-center">
          <div className="text-xl mb-10">Sign In</div>
          <Link
            href=""
            className="border-2 border-slate-100 bg-slate-100 rounded-lg p-6"
          >
            Sign In Button
          </Link>
        </div>
      </div>
    </div>
  );
}
