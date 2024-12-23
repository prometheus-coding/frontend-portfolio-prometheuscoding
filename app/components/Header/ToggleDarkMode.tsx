'use client'
import { useState } from "react";
import Image from "next/image";
const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  const darkModeHandler = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark')
    console.log(darkMode)
  }


  return (

    <>
      {
        !darkMode && <div className="w-2/3 flex justify-center" >
          <div onClick={darkModeHandler} className="w-14 h-8 rounded-full outline outline-1 outline-black flex justify-start items-center pl-1">
            <div className="w-6 h-6 rounded-full outline outline-1 outline-black">
              <div className="p-1">
                <Image src="./headerAssets/467619.png" alt="sun" />
              </div>
            </div>
          </div>
        </div>
      }


      {
        darkMode && <div className="w-2/3 flex justify-center" >
          <div
            onClick={darkModeHandler}
            className="w-14 h-8 rounded-full outline outline-1 bg-primary-500 outline-white flex justify-end items-center pr-1"
          >
            <div
              style={{ backgroundColor: "rgb(66, 66, 66)" }}
              className="w-6 h-6 rounded-full outline outline-1 outline-white"
            >
              <div className="p-1">
                <Image src="./headerAssets/Moon-512.png" alt="moon" className="filter invert" />
              </div>
            </div>
          </div>
        </div>
      }

    </>
  );
};

export default ToggleDarkMode;
