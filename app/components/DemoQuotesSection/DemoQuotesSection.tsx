import React from "react";
import Section from "../common/Section";

const DemoQuotesSection = () => {
  return (
    <Section sectionHeight="h-screen">
      <div className="flex flex-wrap justify-center items-center mt-8 gap-8 p-4">
        <div className="border rounded-lg p-6 shadow-lg bg-white max-w-xs">
          <p className="text-lg text-gray-700">
            "Right away, you began giving us great ideas to help make Twitter
            better."
          </p>
          <p className="mt-4 text-sm text-gray-500">- Twitter User</p>
        </div>

        <div className="border rounded-lg p-6 shadow-lg bg-white max-w-xs">
          <p className="text-lg text-gray-700">
            "We value the collaboration and insight you provided during this
            project."
          </p>
          <p className="mt-4 text-sm text-gray-500">- Satisfied Customer</p>
        </div>

        <div className="border rounded-lg p-6 shadow-lg bg-white max-w-xs">
          <p className="text-lg text-gray-700">
            "The attention to detail and responsiveness was impressive."
          </p>
          <p className="mt-4 text-sm text-gray-500">- Happy Client</p>
        </div>
      </div>
    </Section>
  );
};

export default DemoQuotesSection;
