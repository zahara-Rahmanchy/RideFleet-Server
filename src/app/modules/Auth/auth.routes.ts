import express from "express";
import {AuthController} from "./auth.controller";

const router = express.Router();

// const auth = (...roles:String[])=>{

// }

// route to login user
router.post("/auth/login", AuthController.loginUser);

// refresh token
router.post("/auth/refresh-token", AuthController.refreshToken);
export const AuthRoutes = router;
