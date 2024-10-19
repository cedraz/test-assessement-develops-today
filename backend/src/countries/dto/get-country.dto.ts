import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCountryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country_code: string;
}
