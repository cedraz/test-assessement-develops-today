class Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}

export class Country {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
}
