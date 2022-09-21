import { PrismaClient } from "@prisma/client";
import { LoginRequest } from "../models/request.model";
import bcrypt from "bcrypt";
import { ErrorRersponse, ResponseHttp, UnauthorizedRersponse } from "../models/response.model";
const prisma = new PrismaClient();



export async function createUser(req: LoginRequest): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const hashedPassword = await bcrypt.hash(req.password, 10)
      await prisma.users.create({
        data: {
          ds_email: req.login,
          ds_name: req.name, 
          ds_password: hashedPassword,
          cd_company: 2,
          id_operator: true
          }
      });  
      return {
        content: "usuario Criado",
        status: 200
      }
    }
    } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
  }
