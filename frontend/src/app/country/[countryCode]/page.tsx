import { CountryCard } from "@/components/country-card";
import { getCountry } from "@/services/api";
import { redirect } from "next/navigation";

export default async function Country({
  params,
}: {
  params: { countryCode: string };
}) {
  const data = await getCountry(params.countryCode);

  if (!data) {
    redirect("/404");
  }

  return <CountryCard countryResponse={data} />;
}
