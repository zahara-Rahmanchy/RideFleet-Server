// import {jwtHelpers} from "../../../helpars/jwtHelpers";
import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";

import jwt, {JwtPayload, Secret} from "jsonwebtoken";
import {jwtHelpers} from "../../../helpers/jwtHelper";
import httpStatus from "http-status";
import config from "../../../config";

/* while logging first comparing the passwords and then using jwt to generate token
to ensure that only logged users can access informations*/
const loginUser = async (payload: {email: string; password: string}) => {
  const {email, password} = payload;
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
    },
  });
  const isCorrectPassword: boolean = await bcrypt.compare(
    password,
    userData.password
  );
  if (!isCorrectPassword) {
    throw new Error("Password incorrect!");
  }
  const {role, passwordChange} = userData;
  const accessToken = jwtHelpers.createToken(
    {role, email},
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    {role, email},
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  console.log({accessToken}, {userData});
  const responseData = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    passwordChange: userData.passwordChange,
    token: accessToken,
    refreshToken: refreshToken,
  };
  return responseData;
};

const refreshTokenService = async (token: string) => {
  console.log({token});
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new Error("Invalid Refresh Token");
  }

  const {userId} = verifiedToken;

  const isUserExist = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!isUserExist) {
    throw new Error("User does not exist");
  }

  const newAccessToken = jwtHelpers.createToken(
    {
      userId: isUserExist.id,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthServices = {
  loginUser,
  refreshTokenService,
};
