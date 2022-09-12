const express = require("express");
const app = express();

const userContreoller = require("../controller/userController");
const companyControler = require("../controller/companyController");

module.exports = function () {
  app.use("/", userContreoller);
  app.use("/", companyControler);

  return app;
};
