import React from "react";
import DomainInformationTables from "../DomainInformationTable";
import { InformationType } from "../Select";
import ContactInformationTable from "../ContactInformationTable";
import { WhoisRecord } from "../../types";

interface InformationTablesProps {
  infomrationQuery: InformationType; // Type of information to display (domain or contact)
  data: WhoisRecord | null; // Data fetched from the API
  isLoading: boolean; // Boolean indicating if data is being loaded
  checkboxes: { label: string; isChecked: boolean }[];
}

const InformationTables = ({
  infomrationQuery,
  data,
  isLoading,
  checkboxes,
}: InformationTablesProps) => {
  // Render the appropriate information table based on the query type

  return (
    <>
      {checkboxes[0].isChecked && (
        <DomainInformationTables data={data} isLoading={isLoading} />
      )}
      {checkboxes[1].isChecked && (
        <ContactInformationTable data={data} isLoading={isLoading} />
      )}
    </>
  );
};

export default InformationTables;
