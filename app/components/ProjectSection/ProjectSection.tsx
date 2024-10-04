"use client";
import React, {  useRef } from "react";
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

  // const smootScrollYProgress = useSpring(scrollYProgress, {
  //   stiffness: 60, // lower stiffness for smoother motion
  //   damping: 20,   // higher damping to reduce bounce
  //   mass: 0.5,     // tweak the mass for how 'heavy' the scroll feels
  // })

  const xRight = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [-1000, 2000]);

  return (
    <Section flexCol="flex-col" bgColor="bg-black">
      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-7xl font-valentino text-white">Our Work</h1>
        </div>
      </div>
      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          <hr className="w-full mr-20 my-4 border-white" />
          <h1 className="text-2xl font-valentino text-white">Prometheus</h1>
          <hr className="w-full ml-20 my-4 border-white" />
        </div>
      </div>

      {/* First scrollable component (scroll to the right) */}
      <div className="relative mt-8 overflow-hidden w-full mb-4">
        <motion.div
          className="flex gap-6 w-[100vw]" // Full screen width
          style={{ x: xRight }}
        >
          {prometheusProjectData.map((item, index) => (
            <div key={`item ${index}`} className="w-full">
              <ProjectsCard imageUrl={item.imageUrl} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="h-full max-w-[1270px] p-4">
        <div className="flex justify-center items-center">
          {/* <hr className="w-screen mr-20 my-4 border-white" /> */}
          <h1 className="text-2xl font-valentino text-white">Prometheus</h1>
          {/* <hr className="w-screen ml-20 my-4 border-white" /> */}
        </div>
      </div>

      {/* Second scrollable component (scroll to the left) */}
      <div className="relative mt-8 overflow-hidden w-full">
        <motion.div
          className="flex gap-6 w-[100vw]" // Full screen width
          style={{ x: xLeft }}
        >
          {prometheusProjectData.map((item, index) => (
            <div key={`item ${index}`} className="w-full">
              <ProjectsCard imageUrl={item.imageUrl} />
            </div>
          ))}
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
