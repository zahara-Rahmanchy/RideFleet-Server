import express from "express";
import {VehicleController} from "./vehicle.controller";
const router = express.Router();
router.post("/vehicle", VehicleController.insertVehicle);
router.get("/vehicle", VehicleController.getVehicle);

export const VehicleRoutes = router;
