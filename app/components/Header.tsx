import LocationText from "./LocationText";
import HamburgerMenuHeader from "./HamburgerMenu";
import ToggleDarkMode from "./ToggleDarkMode";
const Header = () => {
  return (
    <div className="flex justify-between border-b-2 h-28 items-center bg-white text-black dark:bg-primary-500">
      <LocationText />
      <ToggleDarkMode />
      <HamburgerMenuHeader />
    </div>
  );
};

export default Header;
