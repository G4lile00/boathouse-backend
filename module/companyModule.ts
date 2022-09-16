import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function getCompanys() {
  try {
    return await prisma.company.findMany({});
  } catch (error) {
    console.log(error);
  }
}
