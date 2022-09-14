import express from "express";
const app = express();

import companyControler from "../controller/companyController";

export function Routes() {
  app.use("/", companyControler);

  return app;
}
