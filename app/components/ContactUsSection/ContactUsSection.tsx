import Section from "../common/Section";

const ContactUsSection = () => {
  return (
    <Section sectionHeight="h-screen" bgColor="bg-primary-200">
      <div className="centered">
        <div className="centered pb-3"> Let&apos;s have our first meeting </div>
        <div className="flex">
          <div className="w-7/12">
            <div className="flex h-[40px] gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="h-full w-6/12 p-2 outline-black bg-transparent rounded-lg"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="h-full w-6/12 p-2 outline-black bg-transparent rounded-lg"
              />
            </div>
            <div className="flex h-[40px] gap-4 mb-4">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="h-full w-6/12 p-2 outline-black bg-transparent rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-full w-6/12 p-2 outline-black bg-transparent rounded-lg"
              />
            </div>
            <div className="flex h-[40px] gap-4 mb-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="h-full w-full p-2 outline-black bg-transparent rounded-lg"
              />
            </div>
            <div className="flex h-[280px] gap-4 mb-4">
              <textarea
                name="message"
                placeholder="Your Message 0/100"
                className="h-full w-full p-2 outline-black bg-transparent rounded-lg"
              />
            </div>
            <div className="flex w-[100px] h-[40px] gap-4 mb-4">
              <button className="h-full w-full bg-blue-500 text-white rounded-lg outline-black">
                Submit
              </button>
            </div>
          </div>
          <div className="w-5/12">
            <div className="w-[100px]">
              <h2>Quotes</h2>
              <div>"He who has overcome his fears will truly be free"</div>
              <div>- Aritotle</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
