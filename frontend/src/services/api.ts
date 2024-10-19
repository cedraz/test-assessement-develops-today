"use server";

import { CountriesList, Country } from "@/types/country";

const api_url = process.env.API_URL;

export async function getCountries(): Promise<CountriesList> {
  const response = await fetch(`${api_url}/countries`);
  const countries = await response.json();

  return countries;
}

export async function getCountry(countryCode: string): Promise<Country | null> {
  const response = await fetch(`${api_url}/countries/${countryCode}`);

  if (response.status !== 200) {
    return null;
  }

  const country = await response.json();

  return country;
}
