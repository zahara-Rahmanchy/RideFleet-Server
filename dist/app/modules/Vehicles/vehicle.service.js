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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// const data = {
//   category: "Car",
//   brand: "Mercedes-Benz",
//   model: "S-Class",
//   description:
//     "Experience luxury and style with the Mercedes S-Class. 4 Passengers, 3 Luggages, Gas, Auto, 4 Doors.",
//   image: "String",
//   rentalPlans: [
//     {
//       name: "Student",
//       description: "Discounted rates for students",
//       prices: {
//         perDay: 1500,
//         perWeek: 7000,
//         perMonth: 25000,
//       },
//     },
//   ],
// };
const insertVehicleData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { rent: rentalPlansPrices } = data, vehiclesData = __rest(data, ["rent"]);
    console.log("rent: ", rentalPlansPrices, "vehic: ", vehiclesData);
    const result = yield prisma.vehicles.create({
        data: Object.assign(Object.assign({}, vehiclesData), { rent: {
                create: Object.assign({}, rentalPlansPrices),
            } }),
        include: {
            rent: true,
        },
    });
    console.log("result: ", "result");
    return result;
});
// TODO: pagination
const getVehiclesData = (searchTerm, category, sortBy, sortOrder) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("sortBy in se: ", sortBy, "\nsortOrder in se: ", sortOrder);
    const pageCount = 1;
    const allConditionsWithAND = [];
    if (searchTerm && searchTerm !== null) {
        allConditionsWithAND.push({
            OR: [
                {
                    category: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    model: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    brand: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
            ],
        });
    }
    // adding some name to match with the category name to filter vehicles
    if (category && category !== null) {
        allConditionsWithAND.push({
            category: {
                equals: category,
            },
        });
    }
    const whereConditions = {
        AND: allConditionsWithAND,
    };
    console.dir(whereConditions, { depth: null, colors: true });
    const result = yield prisma.vehicles.findMany({
        where: whereConditions,
        include: {
            rent: true,
        },
        orderBy: {
            rent: {
                [sortBy]: sortOrder,
            },
        },
        skip: Number(pageCount - 1) * 9,
        take: Number(9),
    });
    return result;
});
const getVehicleDetailFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.vehicles.findUnique({
        where: {
            id: id,
        },
        include: {
            rent: true,
        },
    });
    console.log("result: ", result);
    return result;
});
exports.VehicleServices = {
    insertVehicleData,
    getVehiclesData,
    getVehicleDetailFromDb,
};
