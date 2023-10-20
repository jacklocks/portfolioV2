import connectToMongoDB from "@/app/libs/mongodb";
import Projects from "@/app/models/projects";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const projectId = await Projects.findOne({ _id: id });
  return NextResponse.json(
    { projectId },
    { message: "projectId already found" },
    { status: 200 }
  );
}
