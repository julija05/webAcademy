import React,{ Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AsyncHome,AsyncAbout } from "./AppRoutes";
import { HOME,ABOUT } from "./routes";

export const AppRouter = () => (
    <BrowserRouter>
      <Suspense fallback={<div>Loading... </div>}>
            <Switch>
            <Route exact path={HOME} ><AsyncHome/></Route>
            <Route exact path={ABOUT} ><AsyncAbout/></Route>
            </Switch>
      </Suspense>
    </BrowserRouter>
  );