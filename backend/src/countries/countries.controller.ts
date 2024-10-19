import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiTags } from '@nestjs/swagger';
import { GetCountryDto } from './dto/get-country.dto';

@Controller('countries')
@ApiTags('Countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  findAll() {
    return this.countriesService.findAll();
  }

  @Get(':country_code')
  findOne(@Param() getCountryDto: GetCountryDto) {
    return this.countriesService.findOne(getCountryDto)
  }
}
