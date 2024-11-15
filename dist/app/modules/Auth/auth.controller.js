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
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const http_status_1 = __importDefault(require("http-status"));
// import {request} from "../../../middlewares/auth";
// logging user based on the user credentials
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.loginUser(req.body);
    console.log({ result });
    const { refreshToken } = result;
    // secure true in production,
    res.cookie("refreshToken", refreshToken, {
        secure: false,
        httpOnly: true,
    });
    res.send({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User logged in successfully",
        data: result,
    });
});
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield auth_service_1.AuthServices.refreshTokenService(refreshToken);
    res.send({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User logged in successfully",
        data: result,
    });
});
exports.AuthController = {
    loginUser,
    refreshToken,
};
