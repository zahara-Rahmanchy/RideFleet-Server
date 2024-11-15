"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
// const auth = (...roles:String[])=>{
// }
// route to login user
router.post("/auth/login", auth_controller_1.AuthController.loginUser);
// refresh token
router.post("/auth/refresh-token", auth_controller_1.AuthController.refreshToken);
exports.AuthRoutes = router;
