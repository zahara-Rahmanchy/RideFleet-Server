import * as bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import {$Enums, Prisma, User, userRoles} from "@prisma/client";
// import ApiError from "../../erros/ApiError";
import httpStatus from "http-status";
import {hashedPassword} from "./admin.utils";

/***
 * retrieves all the user data from the database
 */
const getAdminsFromDB = async () => {
  const result = await prisma.admin.findMany({});

  return result;
};
/**
 *
 *updates user data such as name and email in the db and this is ensured using zod
 */
// TODO: Change this it is temporary
const updateAdminDataInDB = async (id: string, data: Partial<User>) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      password: false,
    },
  });
  console.log("updated service", {result});
  return result;
};

export const adminServices = {
  getAdminsFromDB,
  updateAdminDataInDB,
};
