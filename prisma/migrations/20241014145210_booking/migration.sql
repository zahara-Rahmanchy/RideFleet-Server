-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('SCHEDULED', 'INPROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAID', 'UNPAID');

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "renterId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_bookingId_key" ON "Schedule"("bookingId");

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_renterId_fkey" FOREIGN KEY ("renterId") REFERENCES "renters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
