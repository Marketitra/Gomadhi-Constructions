import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email").optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
  projectInterest: z.string().trim().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
