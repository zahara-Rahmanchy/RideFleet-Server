import express from "express";
import {VehicleController} from "./vehicle.controller";
import validateRequest from "../../middlewares/validateRequest";
import {vehicleValidation} from "./vehicle.validation";
import auth from "../../middlewares/auth";
import {userRoles} from "@prisma/client";
const router = express.Router();

// admin will add the vehicles
router.post(
  "/vehicle",
  validateRequest(vehicleValidation.VehicleInsertSchema),
  auth(userRoles.Admin, userRoles.SuperAdmin),
  VehicleController.insertVehicle
);

// renter/website visitors can view
router.get("/vehicles", VehicleController.getAllVehicles);

router.get("/vehicle/:id", VehicleController.getVehicleDetail);

// TODO: UPDATE --> only admin
// TODO: DELETE  --->only admin

export const VehicleRoutes = router;
