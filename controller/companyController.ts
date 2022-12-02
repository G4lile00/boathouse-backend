import express from "express";
import { getCompany } from "../module/companyModule";
import { verifyToken } from "../service/JWTverify";
const routes = express.Router();
const app = express();

//get company by company_id
routes.get(["/getcompany"], verifyToken, async (req: any, res: any) => {
  let users = await getCompany(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});

// FUTURE ENDPOINT
routes.post(["/updatecompany"], verifyToken, async (req: any, res: any) => {
  res.status(200);
  res.write(JSON.stringify({ key: "Atualizada com sucesso" }));
  res.end();
});

export default routes;
