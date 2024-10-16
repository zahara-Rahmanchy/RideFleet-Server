import express from "express";
import {BookingController} from "./bookings.controller";
import auth from "../../middlewares/auth";
import {userRoles} from "@prisma/client";

const router = express.Router();

router.post(
  "/booking",
  auth(userRoles.Renter),
  BookingController.createBookings
);

// only admin sees all bookings
// router.get("/auth/refresh-token", BookingController.getAllBookings);

// // only renters sees their  bookings using id
// router.get("/booking/:id", BookingController.getRenterBookings);
export const BookingRoutes = router;
