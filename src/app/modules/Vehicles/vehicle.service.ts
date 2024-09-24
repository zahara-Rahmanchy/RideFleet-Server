import {$Enums, Prisma, PrismaClient, RentalPlan} from "@prisma/client";
import {create} from "domain";

const prisma = new PrismaClient();
export type SortOrder = "asc" | "desc";
export type SortBy = "perDay" | "perWeek" | "perMonth";
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
  const {rent: rentalPlansPrices, ...vehiclesData} = data;
  console.log("rent: ", rentalPlansPrices, "vehic: ", vehiclesData);

  const result = await prisma.vehicles.create({
    data: {
      ...vehiclesData,
      rent: {
        create: {...rentalPlansPrices},
      },
    },
    include: {
      rent: true,
    },
  });

  console.log("result: ", "result");
  return result;
};

// TODO: pagination
const getVehiclesData = async (
  searchTerm: string | null,

  sortBy: SortBy,
  sortOrder: SortOrder
) => {
  console.log("sortBy in se: ", sortBy, "\nsortOrder in se: ", sortOrder);
  const pageCount = 1;
  const allConditionsWithAND: Prisma.VehiclesWhereInput[] = [];
  if (searchTerm && searchTerm !== null) {
    allConditionsWithAND.push({
      OR: [
        {
          category: {
            contains: searchTerm as string,
            mode: "insensitive",
          },
        },
        {
          model: {
            contains: searchTerm as string,
            mode: "insensitive",
          },
        },
        {
          brand: {
            contains: searchTerm as string,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  // adding some name to match with the rentalPlan name to filter vehicles
  // allConditionsWithAND.push({
  //   rent: {
  //     some: {
  //       name: rentalPlan, // Filter by rental plan name
  //     },
  //   },
  // });{
  //   rent: {
  //     some: {name: rentalPlan},
  //   },
  // },

  const whereConditions: Prisma.VehiclesWhereInput = {
    AND: allConditionsWithAND,
  };
  console.dir(whereConditions, {depth: null, colors: true});
  const result = await prisma.vehicles.findMany({
    where: whereConditions,
    include: {
      rent: true,
    },
    orderBy: {
      rent: {
        [sortBy]: sortOrder,
      },
    },
    skip: Number(pageCount - 1) * 9,
    take: Number(9),
  });

  return result;
};
const getVehicleDetailFromDb = async (id: string) => {
  const result = await prisma.vehicles.findUnique({
    where: {
      id: id,
    },
    include: {
      rent: true,
    },
  });

  console.log("result: ", result);
  return result;
};

export const VehicleServices = {
  insertVehicleData,
  getVehiclesData,
  getVehicleDetailFromDb,
};
