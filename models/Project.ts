import mongoose, { Schema, models, model } from "mongoose";

const ProjectPhotoSchema = new Schema(
  {
    url: { type: String, required: true },
    caption: { type: String },
  },
  { _id: false }
);

export interface ProjectDocument extends mongoose.Document {
  slug: string;
  name: string;
  location: string;
  type: string;
  status: "ongoing" | "completed";
  description: string;
  photos: { url: string; caption?: string }[];
  floors?: number;
  towers?: number;
}

const ProjectSchema = new Schema<ProjectDocument>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, enum: ["ongoing", "completed"], default: "ongoing" },
  description: { type: String, required: true },
  photos: { type: [ProjectPhotoSchema], default: [] },
  floors: { type: Number },
  towers: { type: Number },
});

export const Project = models.Project || model<ProjectDocument>("Project", ProjectSchema);
