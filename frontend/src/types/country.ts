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

type PopulationCounts = {
  year: number;
  value: number;
};

type Population = {
  error: boolean;
  msg: string;
  data: [
    {
      country: string;
      code: string;
      iso3: string;
      populationCounts: PopulationCounts[];
    }
  ];
};

export type CountryResponse = {
  country: Country;
  flag: string;
  population: Population;
};
