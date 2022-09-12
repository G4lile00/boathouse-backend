const express = require("express");
let routes = express.Router();
const app = express();

//GET home route
routes.get(["/user"], (req, res) => {
  res.write("");
  res.end();
  console.log("user");
});
module.exports = routes;
