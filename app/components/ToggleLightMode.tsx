const ToggleDarkMode = () => {
  return (
    <div className="w-2/3 flex justify-center">
      <div
        style={{ backgroundColor: "rgb(66, 66, 66)" }}
        className="w-14 h-8 rounded-full outline outline-1 outline-white flex justify-end items-center pr-1"
      >
        <div
          style={{ backgroundColor: "rgb(66, 66, 66)" }}
          className="w-6 h-6 rounded-full outline outline-1 outline-white"
        >
          <div className="p-1">
            <img src="./headerAssets/Moon-512.png" className="filter invert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
