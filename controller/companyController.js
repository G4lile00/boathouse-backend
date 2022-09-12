const express = require("express");
let routes = express.Router();
const app = express();

//GET home route
routes.get(["/company"], (req, res) => {
  res.write("");
  res.end();
  console.log("company");
});
module.exports = routes;
