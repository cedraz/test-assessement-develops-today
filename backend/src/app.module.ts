import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CountriesModule } from './countries/countries.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env-validation';
import { join } from 'path';

@Module({
  imports: [
    CountriesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
      envFilePath: join(__dirname, '../../.env'),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
