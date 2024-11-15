"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleValidation = exports.VehicleInsertSchema = void 0;
const zod_1 = require("zod");
exports.VehicleInsertSchema = zod_1.z.object({
    model: zod_1.z.string().min(1, { message: "Model is required" }), // Required
    category: zod_1.z.string().min(1, { message: "Category is required" }), // Required
    brand: zod_1.z.string().min(1, { message: "Brand is required" }), // Required
    image: zod_1.z.string().min(1, { message: "Image is required" }), // Required
    description: zod_1.z.string().min(1, { message: "Description is required" }), // Required
    performance: zod_1.z.string().min(1, { message: "Performance is required" }), // Required
    dimensions: zod_1.z.string().min(1, { message: "Dimensions are required" }), // Required
    fuelEconomy: zod_1.z.string().min(1, { message: "Fuel economy is required" }), // Required
    interior: zod_1.z.string().min(1, { message: "Interior information is required" }), // Required
    safety: zod_1.z.string().min(1, { message: "Safety information is required" }), // Required
    additionalFeatures: zod_1.z.string().optional(), // Optional
    rent: zod_1.z.object({
        perDay: zod_1.z
            .number()
            .min(0, { message: "Per day price must be a non-negative number" }), // Required
        perMonth: zod_1.z
            .number()
            .min(0, { message: "Per month price must be a non-negative number" }), // Required
        perWeek: zod_1.z
            .number()
            .min(0, { message: "Per week price must be a non-negative number" }), // Required
    }),
});
exports.vehicleValidation = {
    VehicleInsertSchema: exports.VehicleInsertSchema,
};
