import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import * as history from "history";

import LoginPage from "../pages/LoginPage";
import PetsPage from "../pages/PetsPage";
import AddPetPage from "../pages/PetsPage/AddPetPage";
import EditPetPage from "../pages/PetsPage/EditPetPage";
import PrivateRoute from "./PrivateRoute";

export const browserHistory = history.createBrowserHistory();

const AppRouter = () => (
  <Router history={browserHistory}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/add-pet" component={AddPetPage} />
        <PrivateRoute path="/pets/:id" component={EditPetPage} />
        <PrivateRoute path="/pets" component={PetsPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
