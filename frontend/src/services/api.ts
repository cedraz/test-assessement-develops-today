"use server";

import { CountriesList, CountryResponse } from "@/types/country";

const api_url = process.env.API_URL;

export async function getCountries(): Promise<CountriesList | null> {
  const response = await fetch(`${api_url}/countries`);

  if (response.status !== 200) {
    return null;
  }

  const countries = await response.json();

  return countries;
}

export async function getCountry(
  countryCode: string
): Promise<CountryResponse | null> {
  console.log(api_url);
  const response = await fetch(`${api_url}/countries/${countryCode}`);

  if (response.status !== 200) {
    return null;
  }

  const responseData = await response.json();

  return responseData;
}
