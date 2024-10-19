"use client";

import { CountriesList as CountriesListType } from "@/types/country";
import { useState } from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Badge } from "./ui/badge";

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
    <div className="max-w-[1300px] min-h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="font-bold">Countries</h1>
      <Input
        type="text"
        placeholder="Search country by name"
        onChange={(e) => setCountryName(e.target.value)}
      />
      <div className="flex items-center justify-center flex-wrap gap-3">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <Badge key={country.countryCode}>
              <Link
                className="text-[14px]"
                href={`/country/${country.countryCode}`}
              >
                {country.name}
              </Link>
            </Badge>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
}
