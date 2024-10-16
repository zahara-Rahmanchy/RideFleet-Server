import {NextFunction, Request, Response} from "express";
import {adminServices} from "./admin.service";
import httpStatus from "http-status";

// gets all the user information
const getAdmins = async (req: Request, res: Response) => {
  const result = await adminServices.getAdminsFromDB();

  res.send({
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Admin's list retrieved successfully",
    data: "result",
  });
};

// updating user data such as name and email in the db
const updateAdminData = async (req: Request, res: Response) => {
  console.log("user controller:", req.body, "id", req);

  const result = await adminServices.updateAdminDataInDB(
    String("req.userId"),
    req.body
  );

  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Admin profile updated successfully",
    data: result,
  });
};
export const adminControllers = {
  getAdmins,
  updateAdminData,
};
