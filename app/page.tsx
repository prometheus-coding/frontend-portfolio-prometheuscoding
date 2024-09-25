import React from "react";
import Header from "./components/Header";
import "./homepage.css";
import Hero2 from "./components/Hero2";
import Section from "./components/Section";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero2 />
      <Section bgColor="bg-red-400">
        <h2>Section 1</h2>
      </Section>
    </React.Fragment>
  );
}
