import React from "react";
import Section from "../common/Section";

const CodeCreationSection = () => {
  return (
    <Section sectionHeight="h-screen" bgColor="bg-black">
      <div className="flex max-w-[1270px] px-4">
        <div className="flex items-center w-1/3">
          <h1 className="text-6xl text-white">We create codes</h1>
        </div>
      </div>
    </Section>
  );
};

export default CodeCreationSection;
