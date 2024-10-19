export type CountriesList = {
  countryCode: string;
  name: string;
}[];

type Border = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
};

export type Country = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
};
