import JournalEntryList from "@/components/JournalEntryList";

export default function ViewEntries() {
  return (
    <div className="static">
      <div className="absolute top-5 left-5 bg-white p-4">back</div>
      <div className="h-screen">
        <div className="bg-red-200 h-1/4 flex items-center justify-center">
          <h1 className="text-2xl">Journal Entries</h1>
        </div>
        <div className="h-3/4">
          <JournalEntryList />
        </div>
      </div>
    </div>
  );
}
