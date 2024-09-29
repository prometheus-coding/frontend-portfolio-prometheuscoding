import React from "react";
import Header from "./components/Header";
import "./homepage.css";
import SolutionHeroSection from "./components/SolutionHeroSection";
import CodeCreationSection from "./components/CodeCreationSection";
import ProjectSection from "./components/ProjectSection";
import DemoQuotesSection from "./components/DemoQuotesSection";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <SolutionHeroSection />
      <CodeCreationSection />
      <ProjectSection />
      <DemoQuotesSection />
    </React.Fragment>
  );
}
