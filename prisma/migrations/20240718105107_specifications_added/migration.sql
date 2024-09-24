-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "additionalFeatures" TEXT NOT NULL DEFAULT 'Sunroof, Navigation system, Heated seats, Power tailgate',
ADD COLUMN     "dimensions" TEXT NOT NULL DEFAULT 'Length: 189.8 inches, Width: 76.5 inches, Height: 69.3 inches, Wheelbase: 114.8 inches, Ground Clearance: 8.6 inches',
ADD COLUMN     "fuelEconomy" TEXT NOT NULL DEFAULT 'City: 19 mpg, Highway: 26 mpg',
ADD COLUMN     "interior" TEXT NOT NULL DEFAULT 'Seating Capacity: 5, Upholstery: Leather, Infotainment: 8.4-inch touchscreen, Apple CarPlay, Android Auto, Climate Control: Dual-zone automatic climate control',
ADD COLUMN     "performance" TEXT NOT NULL DEFAULT 'Engine: 3.6L V6, Horsepower: 295, Torque: 260 lb-ft, Transmission: 8-speed automatic, Drivetrain: 4WD',
ADD COLUMN     "safety" TEXT NOT NULL DEFAULT 'Airbags: 8, Braking: ABS, EBD, Brake Assist, Assist Features: Adaptive cruise control, Lane departure warning, Blind spot monitoring';
