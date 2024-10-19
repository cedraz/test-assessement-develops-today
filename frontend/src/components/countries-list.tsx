"use client";

import { CountriesList as CountriesListType } from "@/types/country";
import { useState } from "react";
import { Input } from "./ui/input";

export function CountriesList({
  countriesList,
}: {
  countriesList: CountriesListType;
}) {
  console.log("renderizou");
  const [countryName, setCountryName] = useState<string>("");

  const filteredCountries =
    countryName.length > 0
      ? countriesList.filter((country) =>
          country.name.toLowerCase().includes(countryName.toLowerCase())
        )
      : countriesList;

  return (
    <div>
      <h1>Countries</h1>
      <Input
        type="text"
        placeholder="Search country by name"
        onChange={(e) => setCountryName(e.target.value)}
      />
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <div key={country.countryCode}>
            <h2>{country.name}</h2>
            <p>countryCode: {country.countryCode}</p>
          </div>
        ))
      ) : (
        <p>No countries found</p>
      )}
    </div>
  );
}
