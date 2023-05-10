
import cors from "cors";
import { handleErrors } from "./common/middlewares/errorHandler.middleware";
import express, { Express, NextFunction, Request } from "express";

import { RouterApi } from "./routes";

export class TestApi {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(cors());


    this.app.use(express.json());

    this.app.use(
      this.getApiPrefix(),
      new RouterApi().initRouter(),
      handleErrors
    );

    this.app.all("*", function (req, res) {
      res.status(404).send("not found");
    });
  }

 

  private getApiPrefix(): string {
    const apiPrefix = "/api";

    return apiPrefix;
  }

  public export() {
    return this.app;
  }

  public async start(port: number) {
    return await new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve(port);
      });
    });
  }
}
