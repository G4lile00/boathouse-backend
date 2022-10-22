import express from "express";
const routes = express.Router();
const app = express();

import { LoginRequest } from "../models/request.model";
import {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} from "../module/userModule";
//list  users by company
routes.get(["/getusers"], verifyToken, async (req: any, res: any) => {
  let users = await getUsers(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});

// make a new user
routes.put(["/usercreate"], async (req: any, res: any) => {
  let users = await createUser(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});

//update user info
routes.post(["/userupdate"], verifyToken, async (req: any, res: any) => {
  let users = await updateUser(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});
//delete user
routes.delete(["/userdelete"], verifyToken, async (req: any, res: any) => {
  let users = await deleteUser(req.body);
  res.status(users.status);
  res.write(JSON.stringify(users.content));
  res.end();
});

export default routes;
