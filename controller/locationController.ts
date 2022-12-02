import express from "express";
import { verifyToken } from "../service/JWTverify";
const routes = express.Router();
const app = express();
import {
  createLocation,
  updateLocation,
  getLocation,
  getLocations,
  deleteLocation,
} from "../module/locationModule";
// FUTURE ENDPOINT
routes.post(["/getlocation"], verifyToken, async (req: any, res: any) => {
  let users = await getLocation(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});
// FUTURE ENDPOINT
routes.put(["/createlocation"], verifyToken, async (req: any, res: any) => {
  let users = await createLocation(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});
// FUTURE ENDPOINT
routes.post(["/updatelocation"], verifyToken, async (req: any, res: any) => {
  let users = await updateLocation(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});
//FANTASY ENDPOINT
routes.delete(["/deletelocation"], verifyToken, async (req: any, res: any) => {
  let users = await deleteLocation(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});

//FANTASY ENDPOINT
routes.get(["/getlocations"], verifyToken, async (req: any, res: any) => {
  let users = await getLocations(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});
export default routes;
