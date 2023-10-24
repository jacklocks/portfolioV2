import React from "react";
import DisplayProjectDetail from "@/app/components/DisplayProjectDetail";

const ProjectPage = async ({ params }) => {
  const { id } = params;
  const data = await fetch(`${process.env.API_URL}/api/projects/${id}`);
  const project = await data.json();

  return (
    <>
      <DisplayProjectDetail project={project} />;
    </>
  );
};

export default ProjectPage;
