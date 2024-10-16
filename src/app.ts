import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";
import {VehicleRoutes} from "./app/modules/Vehicles/vehicle.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import {AuthRoutes} from "./app/modules/Auth/auth.routes";
import {userRoutes} from "./app/modules/User/user.routes";
import {BookingRoutes} from "./app/modules/Bookings/bookings.routes";
import {adminRoutes} from "./app/modules/Admin/admin.routes";

const app: Application = express();

app.use(cors());

// parsers
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "RideFleet Server listening",
  });
});

app.use("/api/v1", VehicleRoutes);
app.use("/api/v1", AuthRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", adminRoutes);
app.use("/api/v1", BookingRoutes);

// global error handler middleware used for handling all the errors and providing details
app.use(globalErrorHandler);

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
