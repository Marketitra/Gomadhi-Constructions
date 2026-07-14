import "dotenv/config";
import mongoose from "mongoose";
import { Project } from "../models/Project";
import { PROJECTS } from "../lib/projects-data";

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI in .env.local");
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  for (const project of PROJECTS) {
    await Project.findOneAndUpdate({ slug: project.slug }, project, {
      upsert: true,
      new: true,
    });
    console.log(`Seeded: ${project.name}`);
  }

  await mongoose.disconnect();
  console.log("Done. Disconnected.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
