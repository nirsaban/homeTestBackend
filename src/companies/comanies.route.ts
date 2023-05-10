import express, { NextFunction, Router, Request } from "express";
import { CompaniesController } from "./companies.controller";
import { BaseAbstractRoute } from "../common/abstract/route.absrtact";

export class CompaniesRouter extends BaseAbstractRoute {
  public controller: CompaniesController;
  constructor() {
    super();
    this.controller = new CompaniesController();
  }

  public initRouter() {
    this.router.get(
      "",
      (req: Request, res: express.Response, next: NextFunction) => {
        this.controller.getCompanies(req, res, next);
      }
    );

    return this.router;
  }
}
