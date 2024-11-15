"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const vehicle_controller_1 = require("./vehicle.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const vehicle_validation_1 = require("./vehicle.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
// admin will add the vehicles
router.post("/vehicle", (0, validateRequest_1.default)(vehicle_validation_1.vehicleValidation.VehicleInsertSchema), (0, auth_1.default)(client_1.userRoles.Admin, client_1.userRoles.SuperAdmin), vehicle_controller_1.VehicleController.insertVehicle);
// renter/website visitors can view
router.get("/vehicles", vehicle_controller_1.VehicleController.getAllVehicles);
router.get("/vehicle/:id", vehicle_controller_1.VehicleController.getVehicleDetail);
// TODO: UPDATE --> only admin
// TODO: DELETE  --->only admin
exports.VehicleRoutes = router;
