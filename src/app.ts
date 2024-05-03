import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
} from "express";
import cors from "cors";

import httpStatus from "http-status";
import {VehicleRoutes} from "./modules/Vehicles/vehicle.route";
// import globalErrorHandler from "./middlewares/globalErrorHandler";
// import router from "./routes";

const app: Application = express();

app.use(cors());

// parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "RideFleet Server listening",
  });
});

app.use("/api", VehicleRoutes);

// global error handler middleware used for handling all the errors and providing details
// app.use(globalErrorHandler);

// this one is used for not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND!",
    errorDetails: {
      path: req.originalUrl,
      error: "Your requested path is not found!",
    },
  });
});

export default app;
