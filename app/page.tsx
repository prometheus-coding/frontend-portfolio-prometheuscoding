import React from "react";
import Header from "./components/Header";
import SolutionHeroSection from "./components/SolutionHeroSection";
import CodeCreationSection from "./components/CodeCreationSection";
import ProjectSection from "./components/ProjectSection";
import DemoQuotesSection from "./components/DemoQuotesSection";
import HowWeDoItSection from "./components/HowWeDoItSection";
import AboutUsSection from "./components/AboutUsSection";
import OurWorkSection from "./components/OurWorkSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TechnologySection from "./components/TechnologySection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import "./homepage.css";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <SolutionHeroSection />
      <CodeCreationSection />
      <ProjectSection />
      <DemoQuotesSection />
      <HowWeDoItSection />
      <AboutUsSection />
      <OurWorkSection />
      <WhyChooseUsSection />
      <TechnologySection />
      <ContactUsSection />
      <Footer />
    </React.Fragment>
  );
}
