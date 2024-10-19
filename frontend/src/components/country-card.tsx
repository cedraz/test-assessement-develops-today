import { CountryResponse } from "@/types/country";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function CountryCard({
  countryResponse,
}: {
  countryResponse: CountryResponse;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row">
        <Image
          className=""
          width={100}
          height={100}
          alt="flag"
          src={countryResponse.flag}
        />
        <div className="flex flex-col">
          <span>Common name: {countryResponse.country.commonName}</span>
          <span>Official name: {countryResponse.country.officialName}</span>
          <span>Region: {countryResponse.country.region}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul>
          {countryResponse.country.borders.map((border) => (
            <Badge key={border.countryCode}>
              <Link href={`/country/${border.countryCode}`}>
                {border.commonName} ({border.officialName})
              </Link>
            </Badge>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
