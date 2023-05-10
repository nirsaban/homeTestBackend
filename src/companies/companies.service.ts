import { CompanyEntity } from "../common/entities/company.entitiy";
import fs from "fs";
import path from "path";

export class CompnayService {
  private basePath: string = "../../API";

  public getCompaniesData(): CompanyEntity[] {
    try {
      const fullPath = path.resolve(
        __dirname,
        `${this.basePath}/companies.json`
      );

      const data = JSON.parse(fs.readFileSync(fullPath).toString());

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
