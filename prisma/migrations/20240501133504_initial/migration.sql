-- CreateEnum
CREATE TYPE "userRoles" AS ENUM ('SuperAdmin', 'Admin', 'Renter', 'Driver');

-- CreateEnum
CREATE TYPE "rentalPlanName" AS ENUM ('Student', 'Standard', 'Premium');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "userRoles" NOT NULL,
    "passwordChange" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalPlan" (
    "id" TEXT NOT NULL,
    "name" "rentalPlanName" NOT NULL,
    "description" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "RentalPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingPlan" (
    "id" TEXT NOT NULL,
    "perDay" TEXT NOT NULL,
    "perMonth" TEXT NOT NULL,
    "perWeek" TEXT NOT NULL,
    "rentalPlanId" TEXT NOT NULL,

    CONSTRAINT "PricingPlan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "RentalPlan" ADD CONSTRAINT "RentalPlan_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingPlan" ADD CONSTRAINT "PricingPlan_rentalPlanId_fkey" FOREIGN KEY ("rentalPlanId") REFERENCES "RentalPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
