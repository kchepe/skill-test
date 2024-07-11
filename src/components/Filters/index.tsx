import React, { ChangeEvent, useState } from "react";
import SearchField from "../SearchField";
import Select, { InformationType } from "../Select";

interface IFilters {
  handleDomainQuery: (event: ChangeEvent<HTMLInputElement>) => void; // Function to handle domain query input change
  domainQuery: string; // The current value of the domain query input
  infomrationQuery: InformationType; // The current value of the information query select
  handleInformationQuery: (value: InformationType) => void; // Function to handle information query select change
  handleSearchDomain: (searchQuery: string) => void; // Function to handle the search action
  checkboxes: { label: string; isChecked: boolean }[];
  handleChexboxChange: (isChecked: boolean, index: number) => void;
}

const Filters = ({
  handleDomainQuery,
  domainQuery,
  infomrationQuery,
  handleInformationQuery,
  handleSearchDomain,
  checkboxes,
  handleChexboxChange,
}: IFilters) => {
  return (
    <div className="grid grid-cols-2 items-center gap-10">
      {/* Search field for entering domain query */}
      <div className="col-span-full">
        <SearchField
          onChange={handleDomainQuery}
          value={domainQuery}
          handleSearch={() => handleSearchDomain(domainQuery)}
          autoFocus
        />
      </div>
      {checkboxes.map((chk, index) => (
        <div key={`${chk.label}-${index}`} className="flex gap-2">
          <input
            type="checkbox"
            checked={chk.isChecked}
            onChange={(event) =>
              handleChexboxChange(event.target.checked, index)
            }
          />
          {chk.label}
        </div>
      ))}
      {/* Select dropdown for choosing information query type */}
      {/* <div className="col-span-full flex justify-end">
        <Select
          value={infomrationQuery}
          onChange={(event) =>
            handleInformationQuery(event.target.value as InformationType)
          }
        />
      </div> */}
    </div>
  );
};

export default Filters;
