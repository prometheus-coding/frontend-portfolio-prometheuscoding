/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "../common/Section";


const DemoQuotesSection = () => {
  return (
    <Section sectionHeight="h-screen" bgColor="bg-black">
      <div className="flex flex-wrap justify-center items-center mt-8 gap-8 p-4">
        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">What kind of government lets FEMA spend $640,000,000.00 on criminal illegal aliens in 2024 and now has no money to help Americans who lost everything from Hurricane Helene...?</p>&mdash; Gunther Eagleman™ (@GuntherEagleman) <a href="https://twitter.com/GuntherEagleman/status/1841828087891218828?ref_src=twsrc%5Etfw">October 3, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
        {/* <div className="border rounded-lg p-6 shadow-lg bg-white max-w-xs">
          <p className="text-lg text-gray-700">
            "Right away, you began giving us great ideas to help make Twitter
            better."
          </p>
          <p className="mt-4 text-sm text-gray-500">- Twitter User</p>
        </div> */}
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
