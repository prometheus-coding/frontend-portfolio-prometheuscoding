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
      {/* Header da sistemare il bottone darkmode */}
      <Header />
      {/* inizio della pagina */}
      <SolutionHeroSection />
      {/* Ci sara animazione dei codici che si scrivono da soli */}
      <CodeCreationSection />
      {/* Progetti */}
      <ProjectSection />
      {/* Ci sara un carosello e le demo animative */}
      <DemoQuotesSection />
      {/* Processo di costruzione d iun sito web */}
      <HowWeDoItSection />
      {/* Chi siamo sedzione artistica sara solo bello da leggere */}
      <AboutUsSection />
      {/* Stessa cosa serve creativita  */}
      <OurWorkSection />
      {/* Perche noi sezione  creativa sara solo bello da leggere */}
      <WhyChooseUsSection />
      {/* Servono gli svg di ruben */}
      <TechnologySection />
      {/* form contatto a noi */}
      <ContactUsSection />
      {/* zona footer */}
      <Footer />
    </React.Fragment>
  );
}
