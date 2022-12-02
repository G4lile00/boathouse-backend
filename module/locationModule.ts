import { PrismaClient } from "@prisma/client";
import { LoginRequest } from "../models/request.model";
import { ErrorRersponse, ResponseHttp } from "../models/response.model";
const prisma = new PrismaClient();

export async function getLocations(req: any): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const location = await prisma.location.findMany({});
      return {
        content: location,
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}

export async function getLocation(req: any): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const location = await prisma.location.findFirst({
        where: {
          id_location: req.id_location,
        },
      });
      return {
        content: location,
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}
export async function updateLocation(req: any): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const location = await prisma.location.update({
        where: {
          id_location: req.id_location,
        },
        data: {
          ds_location: req.ds_location,
        },
      });
      return {
        content: location,
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}
export async function deleteLocation(req: any): Promise<ResponseHttp> {
  try {
    if (!!req) {
      const location = await prisma.location.delete({
        where: {
          id_location: req.id_location,
        },
      });
      return {
        content: location,
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}
export async function createLocation(req: any): Promise<ResponseHttp> {
  try {
    if (!!req) {
      await prisma.location.create({
        data: {
          ds_location: req.ds_location,
          cd_company: req.company,
        },
      });
      return {
        content: location,
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return new ErrorRersponse(error);
  }
  return new ErrorRersponse("Erro indefinido");
}
