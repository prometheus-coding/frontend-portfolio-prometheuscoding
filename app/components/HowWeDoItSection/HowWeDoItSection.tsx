import Section from "../common/Section";

const HowWeDoItSection = () => {
  return (
    <Section sectionHeight="h-screen">
      <div className="grid centered gap-4 h-[768px] sm:grid-rows-6 sm:grid-cols-6 md:grid-rows-12 md:grid-cols-12">
        <div className="sm:row-span-1 sm:col-span-6 md:row-span-4 md:col-span-7 bg-blue-300 p-4">
          1. Meeting
        </div>
        <div className="sm:row-span-1 sm:col-span-6 md:row-span-4 md:col-span-5 bg-green-300 p-4">
          2. Design
        </div>
        <div className="sm:row-span-1 sm:col-span-6 md:row-span-4 md:col-span-5 bg-yellow-300 p-4">
          3. Development
        </div>
        <div className="sm:row-span-1 sm:col-span-6 md:row-span-4 md:col-span-4 bg-orange-300 p-4">
          4. Maintenance
        </div>
        <div className="sm:row-span-1 sm:col-span-6 md:row-span-8 md:col-span-3 bg-red-300 p-4">
          5. Launch
        </div>
        <div className="sm:row-span-1 sm:col-span-6 md:row-span-4 md:col-span-9 bg-purple-300 p-4">
          6. Not convinced yet?
        </div>
      </div>
    </Section>
  );
};

export default HowWeDoItSection;
