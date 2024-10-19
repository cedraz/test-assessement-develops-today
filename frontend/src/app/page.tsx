import { CountriesList } from "@/components/countries-list";
import { getCountries } from "@/services/api";
import { redirect } from "next/navigation";

export default async function Home() {
  const countries = await getCountries();

  if (!countries) {
    redirect("/404");
  }

  return <CountriesList countriesList={countries} />;
}
