"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const client_1 = require("@prisma/client");
const user_utils_1 = require("./user.utils");
/**
 *
 * registers user data to the database, password is hashed and then sent to the db
 */
const createAdminService = (reqData) => __awaiter(void 0, void 0, void 0, function* () {
    const hashPassword = yield (0, user_utils_1.hashedPassword)(reqData.password);
    const userData = {
        name: reqData.admin.name,
        email: reqData.admin.email,
        password: hashPassword,
        role: client_1.userRoles.Admin,
    };
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.user.create({
            data: userData,
        });
        const adminCreated = yield transactionClient.admin.create({
            data: reqData.admin,
        });
        return adminCreated;
    }));
    return result;
});
/**
 * create renter
 */
const createRenterService = (reqData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(reqData);
    const hashPassword = yield (0, user_utils_1.hashedPassword)(reqData.password);
    const userData = {
        name: reqData.renter.name,
        email: reqData.renter.email,
        password: hashPassword,
        role: client_1.userRoles.Renter,
    };
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.user.create({
            data: userData,
        });
        const renterCreated = yield transactionClient.renter.create({
            data: reqData.renter,
        });
        return renterCreated;
    }));
    return result;
});
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
exports.userServices = {
    createAdminService,
    createRenterService,
    // updateUserDataInDB,
};
