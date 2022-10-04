import { PrismaClient } from "@prisma/client";
import { LoginRequest } from "../models/request.model";
import { ErrorRersponse, ResponseHttp } from "../models/response.model";
const prisma = new PrismaClient();



export async function allUsers(req: any): Promise<ResponseHttp> {
    try {
      if (!!req.company) { 
        const users = await prisma.users.findMany({
              where: {
                  cd_company: {
                    equals: req.company
                }
            }
        });  
        return {
          content: users,
          status: 200
        }
      }
      } catch (error) {
      console.log(error);
      return new ErrorRersponse(error);
    }
    return new ErrorRersponse("Erro indefinido");
    }
  