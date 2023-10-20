import connectToMongoDB from "@/app/libs/mongodb";
import Projects from "@/app/models/projects";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    title,
    date,
    shortDescription,
    description,
    entreprise,
    siteWeb,
    technos,
    image,
  } = await request.json();
  await connectToMongoDB();
  await Projects.create({
    title: title,
    date: date,
    shortDescription: shortDescription,
    description: description,
    entreprise: entreprise,
    siteWeb: siteWeb,
    technos: technos,
    image: image,
  });
  return NextResponse.json({ message:"project created successfully" }, { status: 201 })
}

export async function GET() {
    try {
        await connectToMongoDB();
        const projects = await Projects.find()
        return NextResponse.json(projects)
    } catch (error) {
        console.log(error)
    }
}