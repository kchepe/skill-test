import React from "react";
import { WhoisRecord } from "../../types";
import { format } from "date-fns";
import formatNumber from "../../helpers/formatNUmber";
import Loader from "../Loader";

interface DomainInformationTablesProps {
  data: WhoisRecord | null; // The data fetched from the Whois API
  isLoading: boolean; // Boolean to indicate if data is being loaded
}

const DomainInformationTables = ({
  data,
  isLoading,
}: DomainInformationTablesProps) => {
  const headers = [
    "Domain Name",
    "Registrar",
    "Registration Date",
    "Expiration Date",
    "Estimated Domain Age",
    "Hostnames",
  ];

  // Function to render table data based on the loading state and availability of data
  const getTableData = () => {
    // If data is loading, show a loader
    if (isLoading) {
      return (
        <td colSpan={6} align="center" className="p-10">
          <Loader />
        </td>
      );
    }
    // If no data is available, show a message
    if (data === null) {
      return (
        <td colSpan={6} align="center" className="p-10">
          No data available.
        </td>
      );
    }
    // Render the data in table cells
    return (
      <>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {data.domainName}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {data.registrarName}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {format(data.createdDate, "MM/dd/yyyy")}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {format(data.expiresDate, "MM/dd/yyyy")}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {formatNumber(data.estimatedDomainAge)}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {data.nameServers.hostNames.map((host, index) => (
            <div key={`${host} ${index}`}>
              <p className="truncate-25">{host}</p>
            </div>
          ))}
        </td>
      </>
    );
  };

  // Render the table with the domain information
  return (
    <div>
      <div className="text-blue-500 font-bold">Domain Information</div>
      <div>
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white bg-blue-500"
                        key={header}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>{getTableData()}</tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainInformationTables;
