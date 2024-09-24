/*
  Warnings:

  - You are about to drop the column `description` on the `RentalPlan` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `RentalPlan` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `RentalPlan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rentalPlanId]` on the table `Vehicles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rentalPlanId` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RentalPlan" DROP CONSTRAINT "RentalPlan_vehicleId_fkey";

-- AlterTable
ALTER TABLE "RentalPlan" DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "vehicleId";

-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "rentalPlanId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_rentalPlanId_key" ON "Vehicles"("rentalPlanId");

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_rentalPlanId_fkey" FOREIGN KEY ("rentalPlanId") REFERENCES "RentalPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
