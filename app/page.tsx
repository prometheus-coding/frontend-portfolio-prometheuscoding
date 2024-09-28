import React from "react";
import Header from "./components/Header";
import "./homepage.css";
import Hero2 from "./components/Hero2";
import Section from "./components/Section";
import ProjectsCard from "./components/ProjectsCard";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Section bgColor="bg-white dark:bg-primary-600">
        <Hero2 />
      </Section>
      <Section bgColor="bg-primary-500" sectionHeight="h-[800px]">
        <div className="flex w-[1270px] px-4">
          <div className="flex items-center w-1/3">
            <h1 className="text-6xl font-valentino">We create codes</h1>
          </div>
          <div></div>
        </div>
      </Section>
      <Section bgColor="" sectionHeight="h-[600px]">
        <div className="h-full w-[1270px] p-4">
          <div className="flex justify-center items-center">
            <h1 className="text-7xl font-valentino text-gray-900">
              Components
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <hr className="w-full mr-20 my-4 border-gray-300" />
            <h1 className="text-2xl font-valentino text-gray-900">
              prometheus
            </h1>
            <hr className="w-full ml-20 my-4 border-gray-300" />
          </div>
          <div className="mt-8 flex gap-6 overflow-auto">
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <hr className="w-full mr-20 my-4 border-gray-300" />
            <h1 className="w-48 text-2xl font-valentino text-gray-900">
              View More
            </h1>
            <hr className="w-full ml-20 my-4 border-gray-300" />
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
}
