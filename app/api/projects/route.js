import connectToMongoDB from "@/app/libs/mongodb";
import Projects from "@/app/models/projects";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    title,
    date,
    shortDescription,
    description,
    detail1,
    detail2,
    detail3,
    detail4,
    detail5,
    detail6,
    entreprise,
    siteWeb,
    github,
    technos,
    image,
  } = await request.json();
  await connectToMongoDB();
  await Projects.create({
    title: title,
    date: date,
    shortDescription: shortDescription,
    description: description,
    detail1: detail1,
    detail2: detail2,
    detail3: detail3,
    detail4: detail4,
    detail5: detail5,
    detail6: detail6,
    entreprise: entreprise,
    siteWeb: siteWeb,
    github: github,
    technos: technos,
    image: image,
  });
  return NextResponse.json(
    { message: "project created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  try {
    await connectToMongoDB();
    const projectsArray = await Projects.find({});
    return NextResponse.json(projectsArray);
  } catch (error) {
    console.log(error);
  }
}
