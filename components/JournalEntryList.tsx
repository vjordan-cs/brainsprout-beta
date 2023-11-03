export default function JournalEntryList() {
  return (
    <div className="bg-blue-200 h-1/6 border-b-2 flex">
      <div className="bg-slate-100 w-1/3 lg:w-1/4 flex items-center justify-center">
        <p>September 20, 2023</p>
      </div>
      <div className="w-2/3 lg:w-3/4 flex items-center justify-center">
        <p className="px-2">
          “Learn as if you will live forever, live like you will die tomorrow.”
          — Mahatma Gandhi
        </p>
      </div>
    </div>
  );
}
