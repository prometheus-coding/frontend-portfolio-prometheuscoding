import Section from "../common/Section";

const HowWeDoItSection = () => {
  return (
    <Section sectionHeight="h-screen">
      {/* Main container with flex layout */}
      <div>
        {/* Container for 1 and 2 */}
        <div className="flex h-full">
          {/* 1. Meeting */}
          <div className="bg-red-300 p-4 w-6/12">1. Meeting</div>
          {/* 2. Design */}
          <div className="bg-blue-300 p-4 w-6/12">2. Design</div>
        </div>
        {/* Container for 3, 4, 5 */}
        <div className="flex">
          {/* 3. Development */}
          <div>
            <div className="flex">
              <div className="bg-green-300 p-4">3. Development</div>
              {/* 4. Maintenance */}
              <div className="bg-yellow-300 p-4">4. Maintenance</div>
            </div>
            <div>
              {/* 5. Launch */}
              <div className="bg-purple-300 p-4">5. Not convinced yet?</div>
            </div>
          </div>
          {/* Container for 6 */}
          <div>
            {/* 6. Not convinced yet? */}
            <div className="bg-pink-300 p-4 h-full">6. Deploy Launch</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowWeDoItSection;
