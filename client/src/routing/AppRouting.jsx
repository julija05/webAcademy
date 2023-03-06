import React,{ Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AsyncHome } from "./AppRoutes";
import { HOME } from "./routes";

export const AppRouter = () => (
    <BrowserRouter>
      <Suspense fallback={<div>Loading... </div>}>
            <Switch>
            <Route exact path={HOME} ><AsyncHome/></Route>
            </Switch>
      </Suspense>
    </BrowserRouter>
  );