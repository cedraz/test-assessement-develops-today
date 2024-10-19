import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CountriesModule } from './countries/countries.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env-validation';

@Module({
  imports: [
    CountriesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
