import { APIBaseUrl, apiKey } from "../constants/api";

const getBaseURL = (searchQuery: string) => {
  return `${APIBaseUrl}?apiKey=${apiKey}&domainName=${searchQuery}&outputFormat=JSON`;
};
export default getBaseURL;
