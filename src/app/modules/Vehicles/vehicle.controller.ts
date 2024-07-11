import {Request, Response} from "express";
import {VehicleServies} from "./vehicle.service";

const insertVehicle = async (req: Request, res: Response) => {
  console.log("user controller:", req.body);

  const result = await VehicleServies.insertVehicleData(req.body);

  res.send({
    result,
  });
};

const getVehicle = async (req: Request, res: Response) => {
  console.log("user controller:", req.body);
  const searchTerm = req.query.searchTerm ? req.query.searchTerm : "";
  const rentalPlan = req.query.rentalPlan ? req.query.rentalPlan : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "perDay";
  const sortOrder = req.query.sortOrder ? req.query.sortOrder : "asc";

  console.log("sortBy con: ", sortBy, "\nsortOrder con: ", sortOrder);
  const result = await VehicleServies.getVehicleData(
    searchTerm as string,
    rentalPlan as string,
    sortBy as string,
    sortOrder as string
  );

  res.send({
    data: result,
  });
};

export const VehicleController = {
  insertVehicle,
  getVehicle,
};
