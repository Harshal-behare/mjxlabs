import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Website Development"
          description="Creating responsive and user-friendly websites tailored to your needs."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Mobile App Development"
          description="Developing cross-platform mobile applications for seamless user experiences."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AI & ML Solutions"
          description="Implementing AI and ML technologies to enhance business processes and decision-making."
        />
      </div>
    </div>
  );
};

export default Projects;
