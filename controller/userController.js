const express = require("express");
const companyModule = require("../module/companyModule");

let routes = express.Router();
let app = express();

//GET home route
routes.get(["/user"], (req, res) => {
  res.write("");
  res.end();
  console.log("user");
  companyModule.getCompanyByID();
});
module.exports = routes;
