import httpStatus from "http-status";
import {jwtHelpers} from "../../helpers/jwtHelper";
import {NextFunction, Request, Response} from "express";
import config from "../../config";
import {Secret} from "jsonwebtoken";
import ApiError from "../../errors/ApiError";
import {IAuthUser} from "../interfaces/user";

const auth = (...roles: string[]) => {
  return async (
    req: Request & {user?: IAuthUser},
    res: Response,
    next: NextFunction
  ) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      req.user = verifiedUser; // role  , userid

      // role diye guard korar jnno
      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
