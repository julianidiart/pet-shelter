import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Pet Shelter</h1>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/pets">Pets</NavLink>
  </header>
);

export default Header;
