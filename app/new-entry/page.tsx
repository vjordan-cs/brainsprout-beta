import BackButton from "@/components/BackButton";
import ButtonTextCenter from "@/components/ButtonTextCenter";
import JournalEntryInput from "@/components/JournalEntryInput";
import Link from "next/link";

export default function NewEntry() {
  return (
    <div className="h-screen bg-slate-400 relative">
      <div className="h-1/6 flex items-center justify-center text-4xl">
        Journal Prompt
      </div>
      <div className="h-5/6 flex justify-center">
        <div className="h-5/6 w-5/6">
          <JournalEntryInput />
        </div>
      </div>
      <BackButton />
    </div>
  );
}
