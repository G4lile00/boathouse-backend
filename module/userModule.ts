import { PrismaClient } from "@prisma/client";
import { LoginRequest, UserInfo } from "../models/request.model";
import bcrypt from "bcrypt";
import {
  ErrorRersponse,
  ResponseHttp,
  UnauthorizedRersponse,
} from "../models/response.model";
const prisma = new PrismaClient();

export async function getUsers(req: any): Promise<ResponseHttp> {
  try {
    if (!!req.company) {
      const users = await prisma.users.findMany({
        where: {
          cd_company: {
            equals: req.company,
          },
        },
      });
      return {
        content: users,
        status: 200,
      };
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
      const hashedPassword = await bcrypt.hash(req.password, 10);
      await prisma.users.create({
        data: {
          ds_email: req.login,
          ds_name: req.name,
          ds_password: hashedPassword,
          cd_company: 2,
          id_operator: true,
        },
      });
      return {
        content: "usuario Criado",
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}

export async function updateUser(req: UserInfo): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const hashedPassword = await bcrypt.hash(req.password, 10);
      await prisma.users.update({
        where: {
          id_user: req.user,
        },
        data: {
          ds_name: req.name,
          ds_password: hashedPassword,
        },
      });
      return {
        content: "usuario Atualizado",
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}

export async function deleteUser(req: any): Promise<ResponseHttp> {
  try {
    if (!!req) {
      await prisma.users.delete({
        where: {
          id_user: req.user,
        },
      });
      return {
        content: "usuario Removido",
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}
