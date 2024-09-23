import LocationText from "./headerComponents/LocationText";
import ButtonThemeSwitch from "./headerComponents/ButtonThemeSwitch";
import HamburgerMenuHeader from "./headerComponents/HamburgerMenuHeader";
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
