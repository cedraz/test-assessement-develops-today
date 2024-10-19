import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsUrl,
  Max,
  Min,
  validateSync,
} from 'class-validator';

class EnvironmentVariables {
  @IsUrl()
  @IsNotEmpty()
  DATA_NAGER_API_URL: string;

  @IsUrl()
  @IsNotEmpty()
  COUNTRIESNOW_API_URL: string;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  const formattedErrors = errors.map((error) => {
    return error.constraints;
  });

  if (errors.length > 0) {
    console.error(formattedErrors);
    throw new Error('Env validation error');
  }

  return validatedConfig;
}
