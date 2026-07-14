import mongoose, { Schema, models, model } from "mongoose";

export interface EnquiryDocument extends mongoose.Document {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  projectInterest?: string;
  createdAt: Date;
}

const EnquirySchema = new Schema<EnquiryDocument>({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true },
  message: { type: String, trim: true },
  projectInterest: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export const Enquiry = models.Enquiry || model<EnquiryDocument>("Enquiry", EnquirySchema);
