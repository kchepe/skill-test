import React, { InputHTMLAttributes } from "react";

interface SearchFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "placeholder" | "className" | "type"
  > {
  handleSearch: () => void;
}

const SearchField = ({ handleSearch, ...restProps }: SearchFieldProps) => {
  return (
    <div className="w-full flex">
      <input
        {...restProps}
        type="search"
        placeholder="Search for a domain name, e.g., amazon.com"
        className="block w-full rounded-l-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
      />
      <button
        className="bg-blue-500 text-white hover:bg-blue-400 rounded-r-md px-3 py-1.5 shadow-sm"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
