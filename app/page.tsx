import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./homepage.css";
import Hero2 from "./components/Hero2";
import Section1 from "./components/Section1";
import Section2Projects from "./components/Section2Projects";
import Section3Twitter from "./components/Section3Twitter";
import Section4 from "./components/Section4";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero2 />
      <Section1 />
      <Section2Projects />
      <Section3Twitter />
      <Section4 />
      <Navbar />
    </React.Fragment>
  );
}
