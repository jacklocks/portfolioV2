import connectToMongoDB from "@/app/libs/mongodb";
import Projects from "@/app/models/projects";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const projectId = await Projects.findById(id);
  return NextResponse.json(projectId);
}
