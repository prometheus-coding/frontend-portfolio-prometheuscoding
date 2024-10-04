'use client'
import Section from "../common/Section";

const HowWeDoItSection = () => {

  return (
    <Section bgColor="bg-black">
      <div className="p-2 grid centered gap-4 s:grid-rows-6 s:grid-cols-6 md:grid-rows-12 md:grid-cols-12">
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-7 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
        1. Meeting
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-5 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
        2. Design & Feedback
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          3. Development
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          4. Maintenance
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:h-auto md:row-span-8 md:col-span-4 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          5. Launch
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-8 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          6. Not convinced yet?
        </div>
      </div>
    </Section>
  );
};

export default HowWeDoItSection;
