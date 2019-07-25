import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PetsPage from "../pages/PetsPage";
import AddPetPage from "../pages/PetsPage/AddPetPage";
import EditPetPage from "../pages/PetsPage/EditPetPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add-pet" component={AddPetPage} />
        <Route path="/pets/:id" component={EditPetPage} />
        <Route path="/pets" component={PetsPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
