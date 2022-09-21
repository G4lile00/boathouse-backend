import express from "express";
import { allUsers } from "../module/companyModule";
import { verifyToken } from "../service/JWTverify";
const routes = express.Router();
const  app = express(); 
  

routes.get(["/allusers"],verifyToken, async (req: any, res: any) => {
    let users = await allUsers(req.body);
    res.status(users.status);
    res.write(JSON.stringify(users.content))
    res.end();

});

export default routes;
  
