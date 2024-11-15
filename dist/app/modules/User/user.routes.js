"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
// import auth from "../../../middlewares/auth";
const user_validation_1 = require("./user.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
/*
post route to create admin,herereq body is validated using zod
schema and then passed
to controller
only admin or super admin can create admin
*/
router.post("/create-admin", (0, validateRequest_1.default)(user_validation_1.userValidationSchema.userAdminValidation), (0, auth_1.default)(client_1.userRoles.Admin, client_1.userRoles.SuperAdmin), user_controller_1.userControllers.createAdmin);
// customer signup
router.post("/create-renter", (0, validateRequest_1.default)(user_validation_1.userValidationSchema.userRenterValidation), user_controller_1.userControllers.createRenter);
/* get route to get all users profile where auth middleware is used to ensure
only authenticated users can access*/
// router.get("/profile", auth(), userControllers.getUsers);
/*r
pute to update user profile using userId from request after ensuring valid user
through auth middleware and then validating the req body using zod scheme
*/
// router.put(
//   "/profile",
//   auth(),
//   validateRequest(userValidationSchema.userUpdateValidation),
//   userControllers.updateUserData
// );
exports.userRoutes = router;
