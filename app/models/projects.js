import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    date: String,
    shortDescription: String,
    description: String,
    entreprise: String,
    siteWeb: String,
    technos: String,
    image: String,
  },
  { timestamps: true }
);

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

export default Projects;
