// import {jwtHelpers} from "../../../helpars/jwtHelpers";
import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";

import jwt, {JwtPayload, Secret} from "jsonwebtoken";
import {jwtHelpers} from "../../../helpers/jwtHelper";
import httpStatus from "http-status";
import config from "../../../config";

const createBookingsInDb = async (user: any) => {
  console.log("user: ", user);
  return "result";
};

export const BookingServices = {
  createBookingsInDb,
};
