import express from "express";
const routes = express.Router();
const  app = express(); 


import { LoginRequest } from "../models/request.model";
import { createUser, getUser } from "../module/userModule";


routes.post(["/user"], async (req: any, res: any) => {
    
  let users = await getUser(req.body);
  res.status(users.status)
  res.write(JSON.stringify(users.content));
  res.end();
    
});

routes.post(["/usercreate"], async (req: any, res: any) => {
    let users = await createUser(req.body);
    res.status(users.status);
    res.write(JSON.stringify(users.content));
    res.end();

});

export default routes;
  
  
  
  