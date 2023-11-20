import ButtonTextCenter from "@/components/ButtonTextCenter";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="h-screen">
      <div className="h-1/3 bg-slate-400 flex justify-center items-center">
        <div className="w-2/3 md:w-1/2">
          <div className="text-2xl p-4">
            Welcome, to your BrainSprout Journal!
          </div>
          <div className="text-lg italic">
            &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis hic reiciendis consequuntur, et impedit odit unde
            ratione totam voluptatum modi quas amet possimus porro
            repellat.&quot;
          </div>
          <div className="text-right">- Author</div>
        </div>
      </div>
      <div className="h-2/3 md:flex">
        <div className="h-1/2 bg-slate-200 flex items-center justify-center md:h-full md:w-1/2">
          <ButtonTextCenter text="New Entry" link="" title="New Entry" />
        </div>
        <div className="h-1/2 bg-slate-100 flex items-center justify-center md:h-full md:w-1/2">
          <div className="text-center">
            <ButtonTextCenter
              text="View Entries"
              link=""
              title="View Entries"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
