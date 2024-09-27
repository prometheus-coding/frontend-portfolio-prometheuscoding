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
          <div>

          </div>
        </div>
      </Section>
      <Section bgColor="" sectionHeight="h-[600px]">
          <div className="h-full w-[1270px] p-4">
          <div className="flex">
            <h1 className="text-7xl font-valentino text-gray-900">Title??</h1>
          </div>
          <div className="flex">
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
}
