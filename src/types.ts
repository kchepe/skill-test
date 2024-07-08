export interface WhoisRecord {
  createdDate: Date;
  updatedDate: Date;
  expiresDate: Date;
  registrant: Contact;
  administrativeContact: Contact;
  technicalContact: Contact;
  domainName: string;
  nameServers: NameServers;
  status: string;
  rawText: string;
  parseCode: number;
  header: string;
  strippedText: string;
  footer: string;
  audit: Audit;
  registrarName: string;
  registrarIANAID: string;
  createdDateNormalized: Date;
  updatedDateNormalized: Date;
  expiresDateNormalized: Date;
  registryData: RegistryData;
  contactEmail: string;
  domainNameExt: string;
  estimatedDomainAge: number;
}

interface Contact {
  name: string;
  organization: string;
  street1: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  countryCode: string;
  email: string;
  telephone: string;
  fax: string;
  rawText: string;
}

interface NameServers {
  rawText: string;
  hostNames: string[];
  ips: string[];
}

interface Audit {
  createdDate: Date;
  updatedDate: Date;
}

interface RegistryData {
  createdDate: Date;
  updatedDate: Date;
  expiresDate: Date;
  domainName: string;
  nameServers: NameServers;
  status: string;
  rawText: string;
  parseCode: number;
  header: string;
  strippedText: string;
  footer: string;
  audit: Audit;
  registrarName: string;
  registrarIANAID: string;
  createdDateNormalized: Date;
  updatedDateNormalized: Date;
  expiresDateNormalized: Date;
  whoisServer: string;
}
