import { CountryCard } from "@/components/country-card";
import { getCountry } from "@/services/api";
import { redirect } from "next/navigation";

export default async function Country({
  params,
}: {
  params: { countryCode: string };
}) {
  const data = await getCountry(params.countryCode);

  console.log(data);

  if (!data) {
    redirect("/404");
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <CountryCard countryResponse={data} />
    </div>
  );
}
