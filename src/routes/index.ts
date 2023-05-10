import { Router } from "express";
import { BaseAbstractRoute } from "../common/abstract/route.absrtact";
import { CompaniesRouter } from "../companies/comanies.route";
import { PerformenceRouter } from "../performence/performence.route";

export class RouterApi extends BaseAbstractRoute {
  controller: any;

  constructor() {
    super();
  }

  public initRouter(): Router {
    this.init("companies", new CompaniesRouter());

    this.init("performance/countries", new PerformenceRouter());

    //return response  404
    this.router.all("*", function (req, res) {
      return res.status(404).json({
        status: "error",
        message: "Not Found",
      });
    });

    return this.router;
  }
}
