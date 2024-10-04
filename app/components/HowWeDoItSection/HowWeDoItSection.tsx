import Logo from '../../../public/logo/prometheus-logo.svg'
import Image from 'next/image';
import Section from "../common/Section";

const HowWeDoItSection = () => {
  return (
    <Section bgColor="bg-black">
      <div className="p-2 grid centered gap-4 s:grid-rows-6 s:grid-cols-6 md:grid-rows-12 md:grid-cols-12">
        <div className="flex flex-col justify-between font-helvetica ~text-base/2xl text-white e rounded-lg border-[1px] border-gray-700 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-7 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          <div>1. PLANNING</div>
          <div>placeholder</div>
          <div className='flex'>
            <div className='w-24'><Image src={Logo} alt="planning-img" className="w-full h-auto max-w-sm" /></div>
            <div className='text-sm'>swagger swagger lorem</div>
          </div>
        </div>
        <div className="flex flex-col justify-between font-helvetica ~text-base/2xl text-white e rounded-lg border-[1px] border-gray-700 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-5 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          <div>2. Design & Feedback</div>
          <div>placeholder</div>
          <div className='flex'>
            <div className='w-24'><Image src={Logo} alt="design-feedback-img" className="w-full h-auto max-w-sm" /></div>
            <div className='text-sm'>swagger swagger lorem</div>
          </div>
        </div>
        <div className="flex flex-col justify-between font-helvetica ~text-base/2xl text-white e rounded-lg border-[1px] border-gray-700 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          <div>3. Development</div>
          <div>placeholder</div>
          <div className='flex'>
            <div className='w-24'><Image src={Logo} alt="development-img" className="w-full h-auto max-w-sm" /></div>
            <div className='text-sm'>swagger swagger lorem</div>
          </div>
        </div>
        <div className="flex flex-col justify-between font-helvetica ~text-base/2xl text-white e rounded-lg border-[1px] border-gray-700 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-4 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          <div>4. Maintenance</div>
          <div>placeholder</div>
          <div className='flex'>
            <div className='w-24'><Image src={Logo} alt="maintenance-img" className="w-full h-auto max-w-sm" /></div>
            <div className='text-sm'>swagger swagger lorem</div>
          </div>
        </div>
        <div className="flex flex-col justify-between font-helvetica ~text-base/2xl text-white e rounded-lg border-[1px] border-gray-700 s:row-span-1 s:col-span-6 h-[300px] md:h-auto md:row-span-8 md:col-span-4 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          <div>5. Launch</div>
          <div>placeholder</div>
          <div className='flex'>
            <div className='w-24'><Image src={Logo} alt="launch-img" className="w-full h-auto max-w-sm" /></div>
            <div className='text-sm'>swagger swagger lorem</div>
          </div>
        </div>
        <div className="flex flex-col justify-between font-helvetica ~text-base/2xl text-white e rounded-lg border-[1px] border-gray-700 s:row-span-1 s:col-span-6 h-[300px] md:row-span-4 md:col-span-8 bg-gradient-to-b from-base-100 to-black hover:to-base-100 transition-colors duration-200 ease-in-out">
          <div>6. Not convinced yet?</div>
          <div>placeholder</div>
          <div className='flex'>
            <div className='w-24'><Image src={Logo} alt="not-convinced-img" className="w-full h-auto max-w-sm" /></div>
            <div className='text-sm'>swagger swagger lorem</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowWeDoItSection;

