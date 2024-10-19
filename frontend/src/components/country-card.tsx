import { CountryResponse } from "@/types/country";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { PopulationChart } from "./population-chart";
import { Separator } from "./ui/separator";

export function CountryCard({
  countryResponse,
}: {
  countryResponse: CountryResponse;
}) {
  return (
    <Card className="">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex items-center justify-center gap-3">
          <Image
            className=""
            width={150}
            height={150}
            alt="flag"
            src={countryResponse.flag}
          />
          <div className="flex flex-col">
            <span>Common name: {countryResponse.country.commonName}</span>
            <span>Official name: {countryResponse.country.officialName}</span>
            <span>Region: {countryResponse.country.region}</span>
          </div>
        </div>
        <div className="max-w-[400px] w-full flex items-center justify-center font-bold">
          {countryResponse.population.length > 0 ? (
            <PopulationChart chartData={countryResponse.population} />
          ) : (
            <span>No population data found.</span>
          )}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-3">
        <h2 className="font-bold mb-3">Border countries: </h2>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {countryResponse.country.borders.map((border) => (
            <li key={border.countryCode}>
              <Badge>
                <Link href={`/country/${border.countryCode}`}>
                  {border.commonName} ({border.officialName})
                </Link>
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
