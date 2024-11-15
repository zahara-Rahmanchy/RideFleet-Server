"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
const userAdminValidation = zod_1.z.object({
    password: zod_1.z
        .string({
        required_error: "Password field is required",
    })
        .min(6, "Password should be at least 6 characters!"),
    Admin: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name field is required",
        }),
        email: zod_1.z
            .string({ required_error: "Email must be a valid email address" })
            .email("Invalid Email format"),
    }),
});
const userRenterValidation = zod_1.z.object({
    password: zod_1.z
        .string({
        required_error: "Password field is required",
    })
        .min(6, "Password should be at least 6 characters!"),
    renter: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name field is required",
        }),
        email: zod_1.z
            .string({ required_error: "Email must be a valid email address" })
            .email("Invalid Email format"),
    }),
});
const userUpdateValidation = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
    })
        .strict(),
});
exports.userValidationSchema = {
    userAdminValidation,
    userRenterValidation,
    userUpdateValidation,
};
