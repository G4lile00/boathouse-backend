const express = require("express");
const { PrismaClient } = require("@prisma/client");

let prisma = new PrismaClient();
let routes = express.Router();
let app = express();

//GET home route
routes.get(["/company"], (req, res) => {
  res.write("");
  res.end();
  console.log("company");
  async function searcher() {
    const users = await prisma.company.findMany({
      where: {
        id_company: {
          equals: 1,
        },
      },
    });
  }

  console.log();
});
module.exports = routes;
