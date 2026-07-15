import "dotenv/config";
import mongoose from "mongoose";
import { Enquiry } from "../models/Enquiry";

async function check() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI in .env.local");
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  const count = await Enquiry.countDocuments();
  const latest = await Enquiry.findOne().sort({ createdAt: -1 }).lean();

  console.log(`Total enquiries in DB: ${count}`);
  console.log("Most recent enquiry:", latest ?? "none yet");

  await mongoose.disconnect();
}

check().catch((err) => {
  console.error(err);
  process.exit(1);
});
