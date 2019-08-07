import React from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import * as history from "history";

import LoginPage from "../pages/LoginPage";
import PetsPage from "../pages/PetsPage";
import AddPetPage from "../pages/PetsPage/AddPetPage";
import EditPetPage from "../pages/PetsPage/EditPetPage";
import VolunteersPage from "../pages/VolunteersPage";
import AddVolunteerPage from "../pages/VolunteersPage/AddVolunteerPage";
import EditVolunteerPage from "../pages/VolunteersPage/EditVolunteerPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const browserHistory = history.createBrowserHistory();

const AppRouter = () => (
  <Router history={browserHistory}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/add-pet" component={AddPetPage} />
        <PrivateRoute path="/pets/:id" component={EditPetPage} />
        <PrivateRoute path="/pets" component={PetsPage} />
        <PrivateRoute path="/add-volunteer" component={AddVolunteerPage} />
        <PrivateRoute path="/volunteers/:id" component={EditVolunteerPage} />
        <PrivateRoute path="/volunteers" component={VolunteersPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
