import express from "express";
import { verifyToken } from "../service/JWTverify";
const routes = express.Router();
const app = express();

// FUTURE ENDPOINT
routes.get(["/getlocation"], verifyToken, async (req: any, res: any) => {
  res.status(200);
  res.write(JSON.stringify({ key: "wip" }));
  res.end();
});
// FUTURE ENDPOINT
routes.get(["/createlocation"], verifyToken, async (req: any, res: any) => {
  res.status(200);
  res.write(JSON.stringify({ key: "wip" }));
  res.end();
});
// FUTURE ENDPOINT
routes.post(["/updatelocation"], verifyToken, async (req: any, res: any) => {
  res.status(200);
  res.write(JSON.stringify({ key: "wip" }));
  res.end();
});
//FANTASY ENDPOINT
routes.delete(["/deletelocation"], verifyToken, async (req: any, res: any) => {
  res.status(200);
  res.write(JSON.stringify({ key: "fantasty" }));
  res.end();
});

//FANTASY ENDPOINT
routes.get(["/getlocations"], verifyToken, async (req: any, res: any) => {
  res.status(200);
  res.write(JSON.stringify({ key: "fantasty" }));
  res.end();
});
export default routes;
