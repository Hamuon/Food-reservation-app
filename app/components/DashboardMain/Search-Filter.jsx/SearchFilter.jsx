import React from "react";

export default function SearchFiler() {
  return (
    <div className="flex justify-between items-center border-b py-3">
      <form className="px-5 py- w-1/2">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 py-3 pl-10 text-md text-gray-500 border-white rounded-3xl "
            placeholder="Search Menu ..."
            required
          />
        </div>
      </form>
      <div className="px-5 py- flex items-center w-1/2 justify-center border-l">
        <div className=" flex justify-center items-center px-4 py-2 rounded-3xl border border-orange-500 text-orange-500 font-bold ml-3">
          All
        </div>
        <div className=" flex justify-center items-center px-4 py-2 rounded-3xl border ml-3">
          Chicken
        </div>
        <div className=" flex justify-center items-center px-4 py-2 rounded-3xl border ml-3">
          Seafood
        </div>
        <div className=" flex justify-center items-center px-4 py-2 rounded-3xl border ml-3">
          Pasta
        </div>
        <div className=" flex justify-center items-center px-4 py-2 rounded-3xl border ml-3">
          Rice
        </div>
      </div>
    </div>
  );
}
