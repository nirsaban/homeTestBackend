import express, { Request, NextFunction } from "express";
import { CompnayService } from "./companies.service";
import { CompanyEntity } from "../common/entities/company.entitiy";

export class CompaniesController {
  private usersService: CompnayService;
  constructor() {
    this.usersService = new CompnayService();
  }

  public async getCompanies(
    req: Request,
    res: express.Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const companiesData: CompanyEntity[] =
        this.usersService.getCompaniesData();

      res.send(companiesData);
    } catch (error) {
      next(error);
    }
  }
}
