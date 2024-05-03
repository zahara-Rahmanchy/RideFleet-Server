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
  const {rentalPlans, ...vehiclesData} = data;

  const rentData = rentalPlans.map((plan: any) => ({
    name: plan.name,
    description: plan.description,
    prices: {
      create: {
        perDay: plan.prices.perDay,
        perMonth: plan.prices.perMonth,
        perWeek: plan.prices.perWeek,
      },
    },
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

export const VehicleServies = {
  insertVehicleData,
};
