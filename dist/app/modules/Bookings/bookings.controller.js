"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const bookings_service_1 = require("./bookings.service");
const createBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log("request of booking:", user);
    const result = yield bookings_service_1.BookingServices.createBookingsInDb(user);
    res.send({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Fleet Booked Successfully",
        data: result,
    });
});
const getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User logged in successfully",
        // data: result,
    });
});
const getBookingsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User logged in successfully",
        // data: result,
    });
});
exports.BookingController = {
    createBookings,
    getAllBookings,
    getBookingsByUserId,
};
