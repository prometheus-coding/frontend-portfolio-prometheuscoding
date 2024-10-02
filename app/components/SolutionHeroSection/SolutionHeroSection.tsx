import React from "react";
import Section from "../common/Section";
import Button from "../common/Button";

const SolutionHeroSection = () => {
  return (
    <Section bgColor="bg-white dark:bg-primary-600" backgroundImage="/images/background-hero2.jpg" sectionHeight="h-screen">
      <div className="relative w-auto max-w-[1000px] flex flex-col items-center justify-center z-[2]">
        <h1 className="text-gray-900 text-8xl text-center font-valentino dark:text-white">
          We offer <br /> Well designed <br /> Solutions
        </h1>
        <div className="mt-4">
          <Button text="Discover more" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-transparent to-black opacity-100 h-full w-full z-[1] col"></div>
    </Section>
  );
};

export default SolutionHeroSection;
