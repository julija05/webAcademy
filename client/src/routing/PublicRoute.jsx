import React from 'react';
import { Route } from "react-router-dom";
import { NavigationBar } from "../ui/components/NavigarionBar/navigation-bar";

export const PublicRoute = ({
    component: Component,
    showNavbar = false,
    // showFooter = false,
    ...rest
  }) => {
    const render = (props) => {
      return (
        <>
          {showNavbar && <NavigationBar />}
          <>
            <Component {...props} />
          </>
          {/* {showFooter && <Footer />} */}
        </>
      );
    };
  
    return <Route {...rest} render={render} />;
  };