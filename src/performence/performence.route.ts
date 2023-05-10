import express, { NextFunction, Router, Request } from "express";
import { BaseAbstractRoute } from "../common/abstract/route.absrtact";
import { PerformenceController } from "./performence.controller";

export class PerformenceRouter extends BaseAbstractRoute {
  public controller: PerformenceController;
  constructor() {
    super();
    this.controller = new PerformenceController();
  }

  public initRouter() {
    this.router.get(
      "",
      (req: Request, res: express.Response, next: NextFunction) => {
        this.controller.getPerformenceCountries(req, res, next);
      }
    );

    this.router.get(
      `/company/:company_id`,
      (req: Request, res: express.Response, next: NextFunction) => {
        this.controller.getPerformenceCountriesByCompany(req, res, next);
      }
    );

    return this.router;
  }
}
