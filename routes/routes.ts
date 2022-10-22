import express from "express";
import cors from "cors";
const app = express();
import companyControler from "../controller/companyController";
import userController from "../controller/userController";
import loginController from "../controller/loginController";
import locationController from "../controller/locationController";

export function Routes() {
  app.use(cors());
  app.use(express.json());
  app.use("/", companyControler);
  app.use("/", userController);
  app.use("/", loginController);
  app.use("/", locationController);
  return app;
}
