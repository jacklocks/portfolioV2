import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    date: String,
    shortDescription: String,
    description: String,
    detail1: String,
    detail2: String,
    detail3: String,
    detail4: String,
    detail5: String,
    detail6: String,
    entreprise: String,
    siteWeb: String,
    github: String,
    technos: String,
    image: String,
  },
  { timestamps: true }
);

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

export default Projects;
