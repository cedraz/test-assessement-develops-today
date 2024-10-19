import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GetCountryDto } from './dto/get-country.dto';
import { Country } from './entities/country.entity';
import { ConfigService } from '@nestjs/config';
import { Population } from './entities/population.entity';

@Injectable()
export class CountriesService {
  constructor(private configService: ConfigService) {}

  async findAll(): Promise<{ countryCode: string; name: string }[]> {
    const response = await fetch(
      `${this.configService.get('DATA_NAGER_API_URL')}/AvailableCountries`,
    );

    const data = await response.json();

    if (!data) {
      throw new NotFoundException('Could not get the countries');
    }

    return data;
  }

  async findOne(getCountryDto: GetCountryDto): Promise<{
    country: Country;
    population: Population;
    flag: string;
  }> {
    const countryRequest = await fetch(
      `${this.configService.get('DATA_NAGER_API_URL')}/CountryInfo/${getCountryDto.country_code}`,
    );

    if (!countryRequest.ok) {
      throw new NotFoundException('No country found.');
    }

    const country: Country = await countryRequest.json();

    const populationRequest = await fetch(
      `${this.configService.get('COUNTRIESNOW_API_URL')}/countries/population`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: country.commonName.toLowerCase(),
        }),
      },
    );

    if (!populationRequest.ok) {
      throw new NotFoundException('No population data found for this country.');
    }

    const population = await populationRequest.json();

    const flagRequest = await fetch(
      `${this.configService.get('COUNTRIESNOW_API_URL')}/countries/flag/images`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iso2: getCountryDto.country_code,
        }),
      },
    );

    if (!flagRequest.ok) {
      throw new NotFoundException('No flag found for this country.');
    }

    const flag = await flagRequest.json();

    return {
      country: country,
      population: population,
      flag: flag.data.flag,
    };
  }
}
