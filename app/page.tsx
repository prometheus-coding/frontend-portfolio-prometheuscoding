import React from "react";
import Header from "./components/Header/Header";
import SolutionHeroSection from "./components/SolutionHeroSection/SolutionHeroSection";
import CodeCreationSection from "./components/CodeCreationSection/CodeCreationSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import DemoQuotesSection from "./components/DemoQuotesSection/DemoQuotesSection";
import HowWeDoItSection from "./components/HowWeDoItSection/HowWeDoItSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import OurWorkSection from "./components/OurWorkSection/OurWorkSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import TechnologySection from "./components/TechnologySection/TechnologySection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import Footer from "./components/Footer/Footer";
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
