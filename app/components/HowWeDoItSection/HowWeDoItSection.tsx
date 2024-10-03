import Section from "../common/Section";

const HowWeDoItSection = () => {
  return (
    <Section>
      <div className="p-2 grid centered gap-4 s:grid-rows-6 s:grid-cols-6 md:grid-rows-12 md:grid-cols-12">
        <div className="s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-7 bg-blue-300 p-4">
          1. Meeting
        </div>
        <div className="s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-5 bg-green-300 p-4">
          2. Design
        </div>
        <div className="s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-yellow-300 p-4">
          3. Development
        </div>
        <div className="s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-orange-300 p-4">
          4. Maintenance
        </div>
        <div className="s:row-span-1 s:col-span-6 h-[300px] md:h-auto md:row-span-8 md:col-span-4 bg-red-300 p-4">
          5. Launch
        </div>
        <div className="s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-8 bg-purple-300 p-4">
          6. Not convinced yet?
        </div>
      </div>
    </Section>
  );
};

export default HowWeDoItSection;
