"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bookings_controller_1 = require("./bookings.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post("/booking", (0, auth_1.default)(client_1.userRoles.Renter), bookings_controller_1.BookingController.createBookings);
// only admin sees all bookings
// router.get("/auth/refresh-token", BookingController.getAllBookings);
// // only renters sees their  bookings using id
// router.get("/booking/:id", BookingController.getRenterBookings);
exports.BookingRoutes = router;
