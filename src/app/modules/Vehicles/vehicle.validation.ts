import {z} from "zod";

export const VehicleInsertSchema = z.object({
  model: z.string().min(1, {message: "Model is required"}), // Required
  category: z.string().min(1, {message: "Category is required"}), // Required
  brand: z.string().min(1, {message: "Brand is required"}), // Required
  image: z.string().min(1, {message: "Image is required"}), // Required
  description: z.string().min(1, {message: "Description is required"}), // Required
  performance: z.string().min(1, {message: "Performance is required"}), // Required
  dimensions: z.string().min(1, {message: "Dimensions are required"}), // Required
  fuelEconomy: z.string().min(1, {message: "Fuel economy is required"}), // Required
  interior: z.string().min(1, {message: "Interior information is required"}), // Required
  safety: z.string().min(1, {message: "Safety information is required"}), // Required
  additionalFeatures: z.string().optional(), // Optional
  rent: z.object({
    perDay: z
      .number()
      .min(0, {message: "Per day price must be a non-negative number"}), // Required
    perMonth: z
      .number()
      .min(0, {message: "Per month price must be a non-negative number"}), // Required
    perWeek: z
      .number()
      .min(0, {message: "Per week price must be a non-negative number"}), // Required
  }),
});

export const vehicleValidation = {
  VehicleInsertSchema,
};
