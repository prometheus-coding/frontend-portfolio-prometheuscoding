import Section from "../common/Section";

const ContactUsSection = () => {
  return (
    <Section sectionHeight="h-screen" bgColor="bg-primary-200">
      <div className="block md:flex">
        <div className="pb-3 text-2xl w-full s:w-4/12 text-white">
          Let&apos;s have our first meeting
        </div>
        <div className="flex flex-col s:flex-row">
          <div className="w-full s:w-7/12">
            <div className="flex flex-wrap s:flex-nowrap gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-3 w-full s:w-6/12 outline outline-1 outline-white/50 bg-transparent rounded-lg"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="p-3 w-full s:w-6/12 outline outline-1 outline-white/50 bg-transparent rounded-lg"
              />
            </div>
            <div className="flex flex-wrap s:flex-nowrap gap-4 mb-4">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="p-3 w-full s:w-6/12 outline outline-1 outline-white/50 bg-transparent rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 w-full s:w-6/12 outline outline-1 outline-white/50 bg-transparent rounded-lg"
              />
            </div>
            <div className="flex flex-wrap s:flex-nowrap gap-4 mb-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="p-3 w-full outline outline-1 outline-white/50 bg-transparent rounded-lg"
              />
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              <textarea
                name="message"
                placeholder="Your Message 0/100"
                className="p-3 w-full outline outline-1 outline-white/50 bg-transparent rounded-lg h-64"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <button className="p-3 w-full s:w-[100px] bg-blue-500 text-white rounded-lg outline outline-1 outline-white/50">
                Submit
              </button>
            </div>
          </div>
          <div className="w-full s:w-5/12 flex justify-end items-center text-white mt-6 s:mt-0">
            <div className="w-full s:w-52">
              <div className="text-3xl">Quotes</div>
              <div>&quot;He who has overcome his fears will truly be free&quot;</div>
              <div>- Aristotle</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
