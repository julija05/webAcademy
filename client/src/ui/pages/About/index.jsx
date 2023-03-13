import React from "react";
import GlobalStyle from "../../components/theme/globalStyle";
import { NavigationBar } from "../../components/NavigarionBar/navigation-bar";
import { About } from "./About";

function indexAbout() {
  return (
    <div>
       <GlobalStyle />
        <NavigationBar  />
        <About/>
    </div>
  );
}

export default indexAbout;