import LocationText from "./LocationText";
import ToggleDarkMode from "./ToggleDarkMode";
import ToggleLightMode from "./ToggleLightMode";
import HamburgerMenuHeader from "./HamburgerMenu";
const Header = () => {
  return (
    <div className="flex justify-between border-red-800 border-2 h-28 items-center bg-white text-black">
      <LocationText />
      <ToggleLightMode />
      <HamburgerMenuHeader />
    </div>
  );
};

export default Header;
