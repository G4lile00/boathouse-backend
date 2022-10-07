import { PrismaClient } from "@prisma/client";
import { LoginRequest } from "../models/request.model";
import {
  ErrorRersponse,
  ResponseHttp,
  UnauthorizedRersponse,
} from "../models/response.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function login(req: LoginRequest): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const user = await prisma.users.findFirst({
        where: {
          ds_email: {
            equals: req.login,
          },
        },
      });

      if (!user) {
        return {
          content: "usuario nao encontrado",
          status: 401,
        };
      }

      if (await bcrypt.compare(req.password, user.ds_password)) {
        const token = jwt.sign(
          {
            user: user.id_user,
            company: user.cd_company,
            operator: user.id_operator,
            manager: user.id_manager,
            operational: user.id_operational,
          },
          "eb7d887a714a628fd6c87eb85d9f6cd413909746536519aaad7471b57bd02f90",
          { expiresIn: "1h" },
        );

        return {
          content: token,
          status: 200,
        };
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
