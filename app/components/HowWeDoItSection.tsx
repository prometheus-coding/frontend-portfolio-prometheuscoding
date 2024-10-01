const HowWeDoItSection = () => {
  return (
    <div className="h-screen">
      <div className="max-w-[1270px] p-4 mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-valentino text-gray-900 text-center">
            Let's Connect!
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row flex-wrap gap-8 mt-8 max-w-[1270px] mx-auto p-4">
        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">PLANNING</h3>
          <p className="mb-4">
            We collaborate with our clients to understand their vision and
            define a clear plan.
          </p>
          <div className="flex items-center space-x-2">
            <span>Zoom, Task, Presentation</span>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">DESIGN</h3>
          <p className="mb-4">
            We transform the concept into an initial design, forming the basis
            of the project.
          </p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">DEVELOPMENT</h3>
          <p className="mb-4">
            We use the latest technologies to develop a high-quality product.
          </p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">MAINTENANCE</h3>
          <p className="mb-4">
            We ensure quality through ongoing monitoring and maintenance.
          </p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">LAUNCH</h3>
          <p className="mb-4">
            We manage websites launch and deployment for a seamless go-live.
          </p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">Not convinced yet?</h3>
          <p className="mb-4">
            We are ready to provide you with more information if you need to
            learn more about us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoItSection;
