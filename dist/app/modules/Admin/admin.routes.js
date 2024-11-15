"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
/* get route to get all admins where auth middleware is used to ensure
only authenticated users can access*/
router.get("/all-admins", (0, auth_1.default)(client_1.userRoles.Admin, client_1.userRoles.SuperAdmin), admin_controller_1.adminControllers.getAdmins);
/*r
pute to update admin data using userId from request after ensuring valid user
through auth middleware and then validating the req body using zod scheme

TODO:fix this according to the need
*/
router.put("/admin", (0, auth_1.default)(client_1.userRoles.Admin, client_1.userRoles.SuperAdmin), 
// validateRequest(userValidationSchema.userUpdateValidation),
admin_controller_1.adminControllers.updateAdminData);
exports.adminRoutes = router;
