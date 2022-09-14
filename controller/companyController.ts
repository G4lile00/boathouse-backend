import express from "express";
import {getCompanys} from "../module/companyModule"; 
const routes = express.Router();
const  app = express(); 

routes.get(["/company"], async (req: any, res: any) => {
    
  let users = await getCompanys();
  res.write(JSON.stringify(users));
  res.end();
    
});
  

export default routes;
  
  
  
  
  



