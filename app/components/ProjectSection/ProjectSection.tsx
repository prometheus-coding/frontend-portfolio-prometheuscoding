"use client";
import React, { useRef } from "react";
import Section from "../common/Section";
import ProjectsCard from "./ProjectsCard";
import { prometheusProjectData } from "../../data/mockData";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform for the first scrollable component (scroll to the right)
  const xRight = useTransform(scrollYProgress, [0, 1], [0, -2000]);

  // Transform for the second scrollable component (scroll to the left)
  const xLeft = useTransform(scrollYProgress, [0, 1], [-1000, 2000]);

  return (
    <Section flexCol="flex-col" bgColor="bg-black">
      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-7xl font-valentino text-white">Discover</h1>
        </div>
      </div>
      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          <hr className="w-full mr-20 my-4 border-white" />
          <h1 className="text-2xl font-valentino text-white">prometheus</h1>
          <hr className="w-full ml-20 my-4 border-white" />
        </div>
      </div>

      {/* First scrollable component (to the right) */}
      <div className="relative mt-8 overflow-hidden min-h-[400px] max-w-sm  md:max-w-[40rem] lg:max-w-full xl:max-w-full">
        <motion.div
          className="flex gap-6"
          drag="x"
          style={{ x: xRight }}
        >
          {prometheusProjectData.map((item, index) => {
            return (
              <div key={`item ${index}`}>
                <ProjectsCard imageUrl={item.imageUrl} />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          <hr className="w-full mr-20 my-4 border-white" />
          <h1 className="text-2xl font-valentino text-white">prometheus</h1>
          <hr className="w-full ml-20 my-4 border-white" />
        </div>
      </div>

      {/* Second scrollable component (to the left) */}
      <div className="relative mt-8 overflow-hidden min-h-[400px] max-w-sm  md:max-w-[40rem] lg:max-w-full xl:max-w-full">
        <motion.div
          className="flex gap-6"
          drag="x"
          style={{ x: xLeft }}
        >
          {prometheusProjectData.map((item, index) => {
            return (
              <div key={`item ${index}`}>
                <ProjectsCard imageUrl={item.imageUrl} />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="h-full max-w-[1270px] p-4">
        <div className="mt-6 flex justify-center items-center">
          <hr className="w-full mr-20 my-4 border-gray-300" />
          <h1 className="w-48 text-2xl font-valentino text-gray-900">
            View More
          </h1>
          <hr className="w-full ml-20 my-4 border-gray-300" />
        </div>
      </div>
    </Section>
  );
};

export default ProjectSection;
