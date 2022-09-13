const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getCompanyByID = async () => {
  try {
    return await prisma.company.findMany({});
  } catch (error) {
    console.log(error);
  }
};
