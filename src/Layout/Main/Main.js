import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { themeColor } from "../../Contexts/ThemeContext/Theme";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";
import Footer from "../../Pages/Fixed/Footer/Footer";
import Header from "../../Pages/Fixed/Header/Header";

const Main = () => {
  const { theme } = useContext(ToggleThemeContext);
  const { light, dark } = themeColor;

  return (
    <div
      style={
        theme
          ? {
              backgroundColor: `${light.background}`,
              color: `${light.foreground}`,
            }
          : {
              backgroundColor: `${dark.background}`,
              color: `${dark.foreground}`,
            }
      }
    >
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
