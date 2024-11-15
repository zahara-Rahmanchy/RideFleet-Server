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
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const http_status_1 = __importDefault(require("http-status"));
// creates user in the database
const createAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("user controller:", req.body);
    try {
        const result = yield user_service_1.userServices.createAdminService(req.body);
        res.send({
            success: true,
            statusCode: http_status_1.default.CREATED,
            message: "User registered successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
/**
 * create renter
 */
const createRenter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("user controller:", req.body);
    try {
        const result = yield user_service_1.userServices.createRenterService(req.body);
        res.send({
            success: true,
            statusCode: http_status_1.default.CREATED,
            message: "Renter registered successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// gets all the user information
// const getUsers = async (req: Request, res: Response) => {
//   // const result = await userServices.getUsersFromDB();
//   res.send({
//     success: true,
//     statusCode: httpStatus.CREATED,
//     message: "User profile retrieved successfully",
//     data: "result",
//   });
// };
// updating user data such as name and email in the db
// const updateUserData = async (req: Request, res: Response) => {
//   console.log("user controller:", req.body, "id", req);
//   const result = await userServices.updateUserDataInDB(
//     String("req.userId"),
//     req.body
//   );
//   res.send({
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "User profile updated successfully",
//     data: result,
//   });
// };
exports.userControllers = {
    createAdmin,
    createRenter,
    // getUsers,
    // updateUserData,
};
