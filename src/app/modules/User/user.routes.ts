import express, {NextFunction} from "express";
import {userControllers} from "./user.controller";
// import auth from "../../../middlewares/auth";
import {userValidationSchema} from "./user.validation";
import {access} from "fs";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import {userRoles} from "@prisma/client";

const router = express.Router();

/*
post route to create admin,herereq body is validated using zod 
schema and then passed 
to controller
only admin or super admin can create admin
*/

router.post(
  "/create-admin",
  validateRequest(userValidationSchema.userAdminValidation),
  auth(userRoles.Admin, userRoles.SuperAdmin),
  userControllers.createAdmin
);

// customer signup
router.post(
  "/create-renter",
  validateRequest(userValidationSchema.userRenterValidation),
  userControllers.createRenter
);

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
export const userRoutes = router;
