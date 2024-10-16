import {Request, Response} from "express";
import {SortBy, SortOrder, VehicleServices} from "./vehicle.service";
// import {rentalPlanName} from "@prisma/client";

const insertVehicle = async (req: Request, res: Response) => {
  console.log("user controller:", req.body);

  const result = await VehicleServices.insertVehicleData(req.body);

  res.send({
    result,
  });
};

const getAllVehicles = async (req: Request, res: Response) => {
  console.log("user controller:", req.body);
  const searchTerm = req.query.searchTerm ? req.query.searchTerm : "";
  const category = req.query.category ? req.query.category : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "perDay";
  const sortOrder = req.query.sortOrder ? req.query.sortOrder : "asc";

  console.log("sortBy con: ", sortBy, "\nsortOrder con: ", sortOrder);
  const result = await VehicleServices.getVehiclesData(
    searchTerm as string,
    category as string,
    sortBy as SortBy,
    sortOrder as SortOrder
  );
  console.log("req.query: ", req.query);
  console.dir(result, {depth: null, colors: true});

  res.send({
    data: result,
  });
};
const getVehicleDetail = async (req: Request, res: Response) => {
  console.log("vehicle controller:", req.params.id);

  const result = await VehicleServices.getVehicleDetailFromDb(req.params.id);

  res.send({
    data: result,
  });
};

export const VehicleController = {
  insertVehicle,
  getAllVehicles,
  getVehicleDetail,
};
