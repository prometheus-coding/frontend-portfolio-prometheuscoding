import LocationText from "./LocationText";
import ButtonThemeSwitch from "./ButtonThemeSwitch";
import HamburgerMenuHeader from "./HamburgerMenuHeader";
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
