import express from "express";
import {VehicleController} from "./vehicle.controller";
const router = express.Router();

// admin will add the vehicles
router.post("/vehicle", VehicleController.insertVehicle);

// renter/website visitors can view
router.get("/vehicles", VehicleController.getVehicle);

export const VehicleRoutes = router;
