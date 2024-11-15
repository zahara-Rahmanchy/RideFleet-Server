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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleController = void 0;
const vehicle_service_1 = require("./vehicle.service");
// import {rentalPlanName} from "@prisma/client";
const insertVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("user controller:", req.body);
    const result = yield vehicle_service_1.VehicleServices.insertVehicleData(req.body);
    res.send({
        result,
    });
});
const getAllVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("user controller:", req.body);
    const searchTerm = req.query.searchTerm ? req.query.searchTerm : "";
    const category = req.query.category ? req.query.category : "";
    const sortBy = req.query.sortBy ? req.query.sortBy : "perDay";
    const sortOrder = req.query.sortOrder ? req.query.sortOrder : "asc";
    console.log("sortBy con: ", sortBy, "\nsortOrder con: ", sortOrder);
    const result = yield vehicle_service_1.VehicleServices.getVehiclesData(searchTerm, category, sortBy, sortOrder);
    console.log("req.query: ", req.query);
    console.dir(result, { depth: null, colors: true });
    res.send({
        data: result,
    });
});
const getVehicleDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("vehicle controller:", req.params.id);
    const result = yield vehicle_service_1.VehicleServices.getVehicleDetailFromDb(req.params.id);
    res.send({
        data: result,
    });
});
exports.VehicleController = {
    insertVehicle,
    getAllVehicles,
    getVehicleDetail,
};
