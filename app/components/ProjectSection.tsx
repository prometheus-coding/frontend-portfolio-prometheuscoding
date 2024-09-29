import React from "react";
import Section from "./Section";
import ProjectsCard from "./ProjectsCard";
import { prometheusProjectData } from "../data/mockData";


const ProjectSection = () => {
  return (
    <Section sectionHeight="h-[600px]" flexCol="flex-col">
      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-7xl font-valentino text-gray-900">Discover</h1>
        </div>
      </div>
      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          <hr className="w-full mr-20 my-4 border-gray-300" />
          <h1 className="text-2xl font-valentino text-gray-900">prometheus</h1>
          <hr className="w-full ml-20 my-4 border-gray-300" />
        </div>
      </div>
      <div className="mt-8 flex gap-6 max-w-[1270px] overflow-y-hidden min-h-[400px]">
        {prometheusProjectData.map((item, index) => {
          return (
            <div key={`item ${index}`}>
              <ProjectsCard imageUrl={item.imageUrl} />
            </div>
          )
        })}
      </div>
      <div className="h-full max-w-[1270px] p-4">
        <div className="mt-6 flex justify-center items-center">
          <hr className="w-full mr-20 my-4 border-gray-300" />
          <h1 className="w-48 text-2xl font-valentino text-gray-900">
            View More
          </h1>
          <hr className="w-full ml-20 my-4 border-gray-300" />
        </div>
      </div>
    </Section>
  );
};

export default ProjectSection;
