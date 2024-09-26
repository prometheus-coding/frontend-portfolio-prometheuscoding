import React from "react";
import Header from "./components/Header";
import "./homepage.css";
import Hero2 from "./components/Hero2";
import Section from "./components/Section";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Section bgColor="bg-white dark:bg-primary-600">
        <Hero2 />
      </Section>
      <Section bgColor="bg-red-400">
        <div className="h-screen">
          <h1>We create codes</h1>
        </div>
      </Section>
    </React.Fragment>
  );
}
