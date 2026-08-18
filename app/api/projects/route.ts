import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/models/Project";
import { PROJECTS } from "@/lib/projects-data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    let projects = await Project.find().lean();

    if (!projects || !projects.length) {
      return NextResponse.json({ projects: PROJECTS });
    }

    const updatedProjects = projects.map((p) => {
      const staticProj = PROJECTS.find((sp) => sp.slug === p.slug);
      if (staticProj && (!p.photos || p.photos.length === 0)) {
        return { ...p, photos: staticProj.photos };
      }
      return p;
    });

    return NextResponse.json({ projects: updatedProjects });
  } catch (error) {
    console.error("Failed to fetch projects, falling back to static data:", error);
    return NextResponse.json({ projects: PROJECTS });
  }
}
