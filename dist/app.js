"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_status_1 = __importDefault(require("http-status"));
const vehicle_route_1 = require("./app/modules/Vehicles/vehicle.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const auth_routes_1 = require("./app/modules/Auth/auth.routes");
const user_routes_1 = require("./app/modules/User/user.routes");
const bookings_routes_1 = require("./app/modules/Bookings/bookings.routes");
const admin_routes_1 = require("./app/modules/Admin/admin.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// parsers
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        Message: "RideFleet Server listening",
    });
});
app.use("/api/v1", vehicle_route_1.VehicleRoutes);
app.use("/api/v1", auth_routes_1.AuthRoutes);
app.use("/api/v1", user_routes_1.userRoutes);
app.use("/api/v1", admin_routes_1.adminRoutes);
app.use("/api/v1", bookings_routes_1.BookingRoutes);
// global error handler middleware used for handling all the errors and providing details
app.use(globalErrorHandler_1.default);
// this one is used for not found route
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        errorDetails: {
            path: req.originalUrl,
            error: "Your requested path is not found!",
        },
    });
});
exports.default = app;
