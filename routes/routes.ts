import express from "express";
const app = express();

import companyControler from "../controller/companyController";
import userController from "../controller/userController"

export function Routes() {
  app.use(express.json())
  app.use("/", companyControler);
  app.use("/", userController);
  return app;
}
