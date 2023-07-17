import { useState } from "react";

const Navbar = ({ handleThemeChange }) => {
  const [theme, setTheme] = useState("theme1");

  handleThemeChange(theme);

  return (
    <div className="nav">
      <div className="nav__logo">
        <p>calc</p>
      </div>
      <div className="nav__theme-container">
        <div className="nav__theme-number">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="nav__theme__choice-theme-container">
          <p>THEME</p>
          <div className="nav__theme__choice-theme">
            <div
              className="nav__theme__choice-theme__item"
              onClick={() => setTheme("theme1")}
            >
              <div></div>
            </div>
            <div
              className="nav__theme__choice-theme__item"
              onClick={() => setTheme("theme2")}
            >
              <div></div>
            </div>
            <div
              className="nav__theme__choice-theme__item"
              onClick={() => setTheme("theme3")}
            >
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
