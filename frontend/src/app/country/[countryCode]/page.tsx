import { getCountry } from "@/services/api";

export default async function Country({
  params,
}: {
  params: { countryCode: string };
}) {
  const country = await getCountry(params.countryCode);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>{JSON.stringify(country)}</h1>
      <ul>
        {country.borders.map((border) => {
          return (
            <li key={border.commonName}>
              <a href={`/country/${border}`}>{border.commonName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
