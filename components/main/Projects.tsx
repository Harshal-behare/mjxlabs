import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="case-studies"
    >
      <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Work Speaks for Itself
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-5 md:px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Custom Web Application Development"
          description="Tailored web solutions that meet your business needs."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Mobile App Development"
          description="Robust mobile applications for iOS and Android."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AI & ML Solutions"
          description="Innovative AI-driven solutions for smarter business decisions."
        />
      </div>
      <a href="#case-studies" className="mt-6 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
        View Our Portfolio
      </a>
    </div>
  );
};

export default Projects;
