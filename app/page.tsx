import React from "react";
import Header from "./components/Header";
import "./homepage.css";
import SolutionHeroSection from "./components/SolutionHeroSection";
import CodeCreationSection from "./components/CodeCreationSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <SolutionHeroSection />
      <CodeCreationSection />
      <ProjectSection />
    </React.Fragment>
  );
}
