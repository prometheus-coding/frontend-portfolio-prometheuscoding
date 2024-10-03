import PrometheusLogo from "./PrometheusLogo";
import HamburgerMenuHeader from "./HamburgerMenuHeader";
const Header = () => {
  return (
    <div className="flex justify-between border-b-[1px] h-20 w-full items-center absolute top-0">
      <PrometheusLogo />
      {/* <ToggleDarkMode /> */}
      <HamburgerMenuHeader />
    </div>
  );
};

export default Header;
