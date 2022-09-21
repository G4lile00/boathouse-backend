import { PrismaClient } from "@prisma/client";
import { LoginRequest } from "../models/request.model";
import bcrypt from "bcrypt";
import { ErrorRersponse, ResponseHttp, UnauthorizedRersponse } from "../models/response.model";
const prisma = new PrismaClient();


export async function getUser(req: LoginRequest): Promise<ResponseHttp> {
  try {
    if (!!req) {
       const user = await prisma.users.findFirst({
        where: {
          ds_email: {
            equals: req.login
          },
        }
       });  
      
      if (!user) {
        return {
          content: "usuario nao encontrado",
          status: 500
        }
      }
      if (await bcrypt.compare(req.password, user.ds_password)) {
        return {
          content: user,
          status: 200
        }
      } else {
        return new UnauthorizedRersponse();
      }
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}

export async function createUser(req: LoginRequest): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const hashedPassword = await bcrypt.hash(req.password, 10)
      await prisma.users.create({
        data: {
          ds_email: req.login,
          ds_name: req.name, 
          ds_password: hashedPassword,
          cd_company: 1,
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
