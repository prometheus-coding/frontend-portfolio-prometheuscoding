import LocationText from "./LocationText";
import ButtonThemeSwitch from "./ToggleDarkMode";
import HamburgerMenuHeader from "./HamburgerMenu";
const Header = () => {
  return (
    <div className="flex justify-between">
      <LocationText />
      <ButtonThemeSwitch />
      <HamburgerMenuHeader />
    </div>
  );
};

export default Header;
