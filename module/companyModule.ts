import { PrismaClient } from "@prisma/client";
import { LoginRequest } from "../models/request.model";
import { ErrorRersponse, ResponseHttp } from "../models/response.model";
const prisma = new PrismaClient();

export async function getCompany(req: any): Promise<ResponseHttp> {
  try {
    if (!!req.company) {
      const company = await prisma.company.findFirst({
        where: {
          cd_company: {
            equals: req.company,
          },
        },
      });
      return {
        content: company,
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}
