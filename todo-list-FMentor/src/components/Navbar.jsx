import { useState } from "react";
import {
  bgDesktopDark,
  bgMobileDark,
  bgDesktopLight,
  bgMobileLight,
  iconMoon,
  iconSun,
} from "../images";

const Navbar = ({ handleTheme }) => {
  const [theme, setTheme] = useState("dark");

  handleTheme(theme);

  return (
    <>
      {theme === "dark" ? (
        <>
          <img src={bgMobileDark} className="bg__image-mobile" />
          <img src={bgDesktopDark} className="bg__image-desktop" />
        </>
      ) : (
        <>
          <img src={bgMobileLight} className="bg__image-mobile" />
          <img src={bgDesktopLight} className="bg__image-desktop" />
        </>
      )}
      <nav className="nav">
        <div className="nav__logo">TODO</div>
        <div
          className="nav__theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <img src={iconSun} alt="" />
          ) : (
            <img src={iconMoon} alt="" />
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
