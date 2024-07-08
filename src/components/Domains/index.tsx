import React, { ChangeEvent, useState } from "react";
import Filters from "../Filters";
import InformationTables from "../InformationTables";
import { InformationType } from "../Select";
import { WhoisRecord } from "../../types";
import getBaseURL from "../../helpers/getApiUrl";
import Alert, { SeverityType } from "../Alert";

const alertInitialState = {
  show: false,
  message: "",
  severity: "info" as SeverityType,
};

const Domains = () => {
  // State to store the fetched domain information
  const [domain, setDomain] = useState<WhoisRecord | null>(null);
  // State to indicate if data is being loaded
  const [isLoading, setIsloading] = useState(false);
  // State to manage alert visibility and messages
  const [alertState, setAlertState] = useState(alertInitialState);
  // State to store the current domain query input
  const [domainQuery, setDomainQuery] = useState("");
  // State to store the selected information query type
  const [infomrationQuery, setInformationQuery] =
    useState<InformationType>("domain");

  // Handle changes to the domain query input
  const handleDomainQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setDomainQuery(event.target.value);
  };

  const handleInformationQuery = (value: InformationType) => {
    setInformationQuery(value);
  };

  // Fetch domain information from the API
  const fetchDomain = async (searchQuery: string) => {
    setIsloading(true);
    try {
      const response = await fetch(getBaseURL(searchQuery));
      const data = await response.json();
      if (!data.WhoisRecord) {
        setAlertState({
          show: true,
          message: data.ErrorMessage.msg,
          severity: "error",
        });
        setDomain(null);
        setIsloading(false);
        return;
      }
      setDomain(data.WhoisRecord);
      setAlertState(alertInitialState);
      setIsloading(false);
    } catch {
      setAlertState({
        show: true,
        severity: "error",
        message: "Unable to get data from server. Please try again later",
      });
      setDomain(null);
      setIsloading(false);
    }
  };

  // Handle search action for fetching domain information
  const handleSearchDomain = async (searchQuery: string) => {
    await fetchDomain(searchQuery);
  };

  // Hide the alert message
  const handleHideAlert = () => {
    setAlertState(alertInitialState);
  };

  // Render the domains component
  return (
    <div className="space-y-4">
      <Alert
        severity={alertState.severity}
        message={alertState.message}
        show={alertState.show}
        hideAlert={handleHideAlert}
      />
      <Filters
        handleDomainQuery={handleDomainQuery}
        domainQuery={domainQuery}
        handleInformationQuery={handleInformationQuery}
        infomrationQuery={infomrationQuery}
        handleSearchDomain={handleSearchDomain}
      />
      <InformationTables
        infomrationQuery={infomrationQuery}
        data={domain}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Domains;
