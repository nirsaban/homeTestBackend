import performenceCountriesData from "../../API/performance/countries.json";
import { PerformenceCountryEntity } from "../common/entities/performenceCountries.entitiy";
import fs from "fs";
import path from "path";

export class PerformenceService {
  private basePath: string = "../../API/performance";

  public getPerformenceCountry(): PerformenceCountryEntity[] {
    try {
      const fullPath = path.resolve(
        __dirname,
        `${this.basePath}/countries.json`
      );
      const data = JSON.parse(fs.readFileSync(fullPath).toString());

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  public getPerformenceCountriesByCompanyId(
    companyId: string
  ): PerformenceCountryEntity[] {
    try {
      const fullPath = path.resolve(
        __dirname,
        `${this.basePath}/countries/company_${companyId}.json`
      );
      const data: PerformenceCountryEntity[] = JSON.parse(
        fs.readFileSync(fullPath).toString()
      );

      return data as PerformenceCountryEntity[];
    } catch (error) {
      console.error(error);
    }
  }
}
