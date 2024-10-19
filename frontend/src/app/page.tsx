import { CountriesList } from "@/components/countries-list";
import { getCountries } from "@/services/api";

export default async function Home() {
  const countries = await getCountries();

  return <CountriesList countriesList={countries} />;
}
