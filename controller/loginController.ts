import express from "express";
const routes = express.Router();
const  app = express(); 


import { LoginRequest } from "../models/request.model";
import { login } from "../module/loginModule";

routes.post(["/login"], async (req: any, res: any) => {
    let token = await login(req.body);
    res.status(token.status);
    res.json({auth:true, token:token.content})
    res.end();

});
routes.post(["/logout"], async (req: any, res: any) => {
    let token = await login(req.body);
    res.status(200);
    res.json({auth:false, token:null})
    res.end();
});
export default routes;
  
  
  
  