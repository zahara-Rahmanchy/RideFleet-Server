import {Request, Response} from "express";

import {AuthServices} from "./auth.service";

import httpStatus from "http-status";
// import {request} from "../../../middlewares/auth";

// logging user based on the user credentials
const loginUser = async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);
  console.log({result});
  const {refreshToken} = result;

  // secure true in production,
  res.cookie("refreshToken", refreshToken, {
    secure: false,
    httpOnly: true,
  });

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
};

const refreshToken = async (req: Request, res: Response) => {
  const {refreshToken} = req.cookies;
  const result = await AuthServices.refreshTokenService(refreshToken);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
};

export const AuthController = {
  loginUser,
  refreshToken,
};
