import React from "react";
import GlobalStyle from "../../components/theme/globalStyle";
import { NavigationBar } from "../../components/NavigarionBar/navigation-bar";
import { HomePage } from "./homePage";

function indexHome() {
  return (
    <div>
       <GlobalStyle />
        <NavigationBar  />
        <HomePage/>
    </div>
  );
}

export default indexHome;