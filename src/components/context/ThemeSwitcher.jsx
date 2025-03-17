import React, { useContext } from "react";
import ThemeContext from "./context";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme-usecontext</button>
    </div>
  );
};
export default ThemeSwitcher;
