/*
  Warnings:

  - You are about to drop the column `name` on the `Vehicles` table. All the data in the column will be lost.
  - Changed the type of `perDay` on the `PricingPlan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `perMonth` on the `PricingPlan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `perWeek` on the `PricingPlan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `model` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PricingPlan" DROP COLUMN "perDay",
ADD COLUMN     "perDay" DOUBLE PRECISION NOT NULL,
DROP COLUMN "perMonth",
ADD COLUMN     "perMonth" DOUBLE PRECISION NOT NULL,
DROP COLUMN "perWeek",
ADD COLUMN     "perWeek" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "name",
ADD COLUMN     "model" TEXT NOT NULL;
