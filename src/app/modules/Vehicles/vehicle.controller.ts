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

  // const metaOptions = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await VehicleServies.getVehicleData();

  res.send({
    data: result,
  });
};

export const VehicleController = {
  insertVehicle,
  getVehicle,
};
