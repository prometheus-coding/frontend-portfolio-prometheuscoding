import Section from "../common/Section";

const HowWeDoItSection = () => {
  return (
    <Section sectionHeight="h-screen">
      <div className="grid centered grid-rows-12 grid-cols-12 gap-4 h-[768px]">
        <div className="row-span-4 col-span-7 bg-blue-300 p-4">1. Meeting</div>
        <div className="row-span-4 col-span-5 bg-green-300 p-4">2. Design</div>
        <div className="row-span-4 col-span-5 bg-yellow-300 p-4">
          3. Development
        </div>
        <div className="row-span-4 col-span-4 bg-orange-300 p-4">
          4. Maintenance
        </div>
        <div className="row-span-8 col-span-3 bg-red-300 p-4">5. Launch</div>
        <div className="row-span-4 col-span-9 bg-purple-300 p-4">
          6. Not convinced yet?
        </div>
      </div>
    </Section>
  );
};
export default HowWeDoItSection;
