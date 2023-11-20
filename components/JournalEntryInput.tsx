export default function JournalEntryInput() {
  return (
    <div className="h-full relative">
      <label
        htmlFor="comment"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add your thoughts below!
      </label>
      <div className="mt-2 h-full">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full h-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
      <div className="absolute -bottom-4 right-6">
        <button
          type="submit"
          className=" inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Entry
        </button>
      </div>
    </div>
  );
}
