"use client";
import { SetStateAction, useState, ChangeEvent } from "react";

export default function JournalEntryInput() {
  const [isEditMode, setIsEditMode] = useState(true);
  const [text, setText] = useState("");

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };
  return (
    <div className="h-full relative">
      {isEditMode ? (
        <div className="h-full relative">
          <label
            htmlFor="comment"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            November 20th, 2023
          </label>
          <div className="mt-2 h-full">
            <textarea
              value={text}
              onChange={handleTextChange}
              rows={4}
              name="comment"
              id="comment"
              className="block w-full h-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="absolute -bottom-4 right-6">
            <button
              onClick={handleSave}
              type="submit"
              className=" inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Entry
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>{text}</div>
          <button
            onClick={handleEdit}
            type="submit"
            className=" inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edit Entry
          </button>
        </div>
      )}
    </div>
  );
}
