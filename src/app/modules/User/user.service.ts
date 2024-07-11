import * as bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import {$Enums, Prisma, User, userRoles} from "@prisma/client";
// import ApiError from "../../erros/ApiError";
import httpStatus from "http-status";
import {hashedPassword} from "./user.utils";
/**
 *
 * registers user data to the database, password is hashed and then sent to the db
 */
const createAdminService = async (reqData: any) => {
  const hashPassword = await hashedPassword(reqData.password);
  const userData = {
    name: reqData.admin.name,
    email: reqData.admin.email,
    password: hashPassword,
    role: userRoles.Admin,
  };

  const result = await prisma.$transaction(async transactionClient => {
    await transactionClient.user.create({
      data: userData,
    });
    const adminCreated = await transactionClient.admin.create({
      data: reqData.admin,
    });
    return adminCreated;
  });
  return result;
};

/**
 * create renter
 */
const createRenterService = async (reqData: any) => {
  console.log(reqData);
  const hashPassword = await hashedPassword(reqData.password);
  const userData = {
    name: reqData.renter.name,
    email: reqData.renter.email,
    password: hashPassword,
    role: userRoles.Renter,
  };

  const result = await prisma.$transaction(async transactionClient => {
    await transactionClient.user.create({
      data: userData,
    });
    const renterCreated = await transactionClient.renter.create({
      data: reqData.renter,
    });
    return renterCreated;
  });
  return result;
};

/***
 * retrieves all the user data from the database
 */
// const getUsersFromDB = async (userId: string) => {
//   const result = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       createdAt: true,
//       updatedAt: true,
//       password: false,
//     },
//   });

//   return result;
// };
/**
 *
 *updates user data such as name and email in the db and this is ensured using zod
 */
// const updateUserDataInDB = async (id: string, data: Partial<User>) => {
//   const result = await prisma.user.update({
//     where: {
//       id,
//     },
//     data,
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       createdAt: true,
//       updatedAt: true,
//       password: false,
//     },
//   });
//   console.log("updated service", {result});
//   return result;
// };

export const userServices = {
  createAdminService,
  createRenterService,
  // updateUserDataInDB,
};
