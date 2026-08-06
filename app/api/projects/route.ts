import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/models/Project";
import { PROJECTS } from "@/lib/projects-data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find().lean();

    if (!projects.length) {
      return NextResponse.json({ projects: PROJECTS });
    }

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Failed to fetch projects, falling back to static data:", error);
    return NextResponse.json({ projects: PROJECTS });
  }
}
