import PrometheusLogo from "./PrometheusLogo";
import HamburgerMenuHeader from "./HamburgerMenuHeader";
import ToggleDarkMode from "./ToggleDarkMode";
const Header = () => {
  return (
    <div className="flex justify-between border-b-2 h-28 items-center bg-white text-black dark:bg-primary-500">
      <PrometheusLogo />
      <ToggleDarkMode />
      <HamburgerMenuHeader />
    </div>
  );
};

export default Header;
