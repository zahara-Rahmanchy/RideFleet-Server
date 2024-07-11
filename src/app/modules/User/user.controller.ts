import {NextFunction, Request, Response} from "express";
import {userServices} from "./user.service";
import httpStatus from "http-status";

// creates user in the database
const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  console.log("user controller:", req.body);

  try {
    const result = await userServices.createAdminService(req.body);

    res.send({
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * create renter
 */

const createRenter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("user controller:", req.body);

  try {
    const result = await userServices.createRenterService(req.body);

    res.send({
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Renter registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// gets all the user information
// const getUsers = async (req: Request, res: Response) => {
//   // const result = await userServices.getUsersFromDB();

//   res.send({
//     success: true,
//     statusCode: httpStatus.CREATED,
//     message: "User profile retrieved successfully",
//     data: "result",
//   });
// };

// updating user data such as name and email in the db
// const updateUserData = async (req: Request, res: Response) => {
//   console.log("user controller:", req.body, "id", req);

//   const result = await userServices.updateUserDataInDB(
//     String("req.userId"),
//     req.body
//   );

//   res.send({
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "User profile updated successfully",
//     data: result,
//   });
// };
export const userControllers = {
  createAdmin,
  createRenter,
  // getUsers,
  // updateUserData,
};
