import express, {NextFunction} from "express";
import {adminControllers} from "./admin.controller";

import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import {userRoles} from "@prisma/client";

const router = express.Router();

/* get route to get all admins where auth middleware is used to ensure
only authenticated users can access*/
router.get(
  "/all-admins",
  auth(userRoles.Admin, userRoles.SuperAdmin),
  adminControllers.getAdmins
);

/*r
pute to update admin data using userId from request after ensuring valid user
through auth middleware and then validating the req body using zod scheme

TODO:fix this according to the need
*/
router.put(
  "/admin",
  auth(userRoles.Admin, userRoles.SuperAdmin),
  // validateRequest(userValidationSchema.userUpdateValidation),
  adminControllers.updateAdminData
);
export const adminRoutes = router;
