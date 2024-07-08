import React from "react";
import DomainInformationTables from "../DomainInformationTable";
import { InformationType } from "../Select";
import ContactInformationTable from "../ContactInformationTable";
import { WhoisRecord } from "../../types";

interface InformationTablesProps {
  infomrationQuery: InformationType; // Type of information to display (domain or contact)
  data: WhoisRecord | null; // Data fetched from the API
  isLoading: boolean; // Boolean indicating if data is being loaded
}

const InformationTables = ({
  infomrationQuery,
  data,
  isLoading,
}: InformationTablesProps) => {
  // Render the appropriate information table based on the query type
  if (infomrationQuery === "contact") {
    return <ContactInformationTable data={data} isLoading={isLoading} />;
  }
  return <DomainInformationTables data={data} isLoading={isLoading} />;
};

export default InformationTables;
