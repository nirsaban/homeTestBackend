import { BadRequest, NotFound } from "../common/errors/general.error";
import express, { Request, NextFunction } from "express";
import { PerformenceService } from "./performence.service";
import { PerformenceCountryEntity } from "../common/entities/performenceCountries.entitiy";

export class PerformenceController {
  private performenceService: PerformenceService;
  constructor() {
    this.performenceService = new PerformenceService();
  }

  public async getPerformenceCountries(
    req: Request,
    res: express.Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data: PerformenceCountryEntity[] =
        this.performenceService.getPerformenceCountry();

      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  public async getPerformenceCountriesByCompany(
    req: Request,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { company_id } = req.params;

      const data = this.performenceService.getPerformenceCountriesByCompanyId(
        req.params.company_id
      );

      res.send(data);

      if (!company_id) {
        throw new BadRequest("You have to provide company id");
      }
    } catch (error) {
      next(error);
    }
  }
}
