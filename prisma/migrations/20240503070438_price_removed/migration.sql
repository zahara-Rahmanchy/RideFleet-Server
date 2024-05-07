/*
  Warnings:

  - You are about to drop the `PricingPlan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `perDay` to the `RentalPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perMonth` to the `RentalPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perWeek` to the `RentalPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PricingPlan" DROP CONSTRAINT "PricingPlan_rentalPlanId_fkey";

-- AlterTable
ALTER TABLE "RentalPlan" ADD COLUMN     "perDay" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "perMonth" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "perWeek" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "PricingPlan";
