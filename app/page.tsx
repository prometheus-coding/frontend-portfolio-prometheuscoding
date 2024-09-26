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
      <Section bgColor="bg-primary-500">
          <div className="h-[800px] flex w-[1270px] px-4">
          <div className="flex items-center w-1/3">
            <h1 className="text-6xl font-valentino">We create codes</h1>
          </div>
          <div>

          </div>
        </div>
      </Section>
      <Section bgColor="">
          <div className="h-[600px] flex w-[1270px] px-4">
          <div className="flex justify-center items-center">
            <h1 className="text-7xl font-valentino text-gray-900">Title??</h1>
          </div>
          <div>

          </div>
        </div>
      </Section>
    </React.Fragment>
  );
}
