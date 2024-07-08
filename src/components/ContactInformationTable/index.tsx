import React from "react";
import { WhoisRecord } from "../../types";
import Loader from "../Loader";

interface ContactInformationTableProps {
  data: WhoisRecord | null; // The data fetched from the Whois API
  isLoading: boolean; // Boolean to indicate if data is being loaded
}

const ContactInformationTable = ({
  data,
  isLoading,
}: ContactInformationTableProps) => {
  const headers = [
    "Registrant Name",
    "Technical Contact Name",
    "Administrative Contract Name",
    "Contract Email",
  ];
  // Function to render table data based on the loading state and availability of data
  const getTableData = () => {
    if (isLoading) {
      // If data is loading, show a loader
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
          {data.registrant.name}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {data.technicalContact.name}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {data.administrativeContact.name}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
          {data.contactEmail}
        </td>
      </>
    );
  };
  // Render the table with the Contact information
  return (
    <div>
      <div className="text-blue-500 font-bold">Contact Information</div>
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

export default ContactInformationTable;
