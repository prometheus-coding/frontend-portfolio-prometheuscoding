import Section from "../common/Section";

const HowWeDoItSection = () => {
  return (
    <Section bgColor="bg-black">
      <div className="p-2 grid centered gap-4 s:grid-rows-6 s:grid-cols-6 md:grid-rows-12 md:grid-cols-12">
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-7 bg-base-100">
          <div className="absolute rounded-lg bg-gradient-to-b from-transparent to-black h-full w-full"></div>
          1. Meeting
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-5 bg-base-100">
          <div className="absolute rounded-lg bg-gradient-to-b from-transparent to-black h-full w-full"></div>
          2. Design
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-base-100">
          <div className="absolute rounded-lg bg-gradient-to-b from-transparent to-black h-full w-full"></div>
          3. Development
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-base-100">
          <div className="absolute rounded-lg bg-gradient-to-b from-transparent to-black h-full w-full"></div>
          4. Maintenance
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:h-auto md:row-span-8 md:col-span-4 bg-base-100">
          <div className="absolute rounded-lg bg-gradient-to-b from-transparent to-black h-full w-full"></div>
          5. Launch
        </div>
        <div className="relative rounded-lg border-[1px] border-gray-400 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-8 bg-base-100">
          <div className="absolute rounded-lg bg-gradient-to-b from-transparent to-black h-full w-full"></div>
          6. Not convinced yet?
        </div>
      </div>
    </Section>
  );
};

export default HowWeDoItSection;
