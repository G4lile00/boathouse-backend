const express = require("express");
const { getCompanyByID } = require("../module/companyModule");
let routes = express.Router();
let app = express();

//GET home route
routes.get(["/company"], async (req, res) => {
  let users = await getCompanyByID();
  res.write(JSON.stringify(users));
  res.end();
});
module.exports = routes;
