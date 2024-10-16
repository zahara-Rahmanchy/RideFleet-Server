import {Request, Response} from "express";

import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import {BookingServices} from "./bookings.service";
import {IAuthUser} from "../../interfaces/user";

const createBookings = async (
  req: Request & {user?: IAuthUser},
  res: Response
) => {
  const user = req.user;
  console.log("request of booking:", user);
  const result = await BookingServices.createBookingsInDb(user);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Fleet Booked Successfully",
    data: result,
  });
};

const getAllBookings = async (req: Request, res: Response) => {
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    // data: result,
  });
};

const getBookingsByUserId = async (req: Request, res: Response) => {
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    // data: result,
  });
};

export const BookingController = {
  createBookings,
  getAllBookings,
  getBookingsByUserId,
};
