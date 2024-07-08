import React, { InputHTMLAttributes } from "react";

export type InformationType = "domain" | "contact";

const Select = (
  props: Omit<InputHTMLAttributes<HTMLSelectElement>, "className">
) => {
  const informationOptions: { label: string; id: InformationType }[] = [
    {
      label: "Domain",
      id: "domain",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];
  return (
    <div>
      <select
        {...props}
        className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-900 sm:text-sm sm:leading-6"
      >
        {informationOptions.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
