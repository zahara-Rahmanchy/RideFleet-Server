import {$Enums, Prisma, PrismaClient, rentalPlanName} from "@prisma/client";
import {create} from "domain";

const prisma = new PrismaClient();
// const data = {
//   category: "Car",
//   brand: "Mercedes-Benz",
//   model: "S-Class",
//   description:
//     "Experience luxury and style with the Mercedes S-Class. 4 Passengers, 3 Luggages, Gas, Auto, 4 Doors.",
//   image: "String",
//   rentalPlans: [
//     {
//       name: "Student",
//       description: "Discounted rates for students",
//       prices: {
//         perDay: 1500,
//         perWeek: 7000,
//         perMonth: 25000,
//       },
//     },
//   ],
// };
const insertVehicleData = async (data: any) => {
  const {rent: rentalPlans, ...vehiclesData} = data;

  const rentData = rentalPlans.map((plan: any) => ({
    name: plan.name as $Enums.rentalPlanName,
    description: plan.description,
    perDay: plan.perDay,
    perMonth: plan.perMonth,
    perWeek: plan.perWeek,
  }));
  const result = await prisma.vehicles.create({
    data: {
      ...vehiclesData,
      rent: {
        create: rentData,
      },
    },
    include: {
      rent: true,
    },
  });

  console.log("result: ", result);
  return result;
};

// TODO: Apply filter and pagination
const getVehicleData = async () => {
  const pageCount = 1;
  const result = await prisma.vehicles.findMany({
    include: {
      rent: true,
    },
    skip: Number(pageCount - 1) * 9,
    take: Number(9),
  });

  console.log("result: ", result);
  return result;
};
export const VehicleServies = {
  insertVehicleData,
  getVehicleData,
};
