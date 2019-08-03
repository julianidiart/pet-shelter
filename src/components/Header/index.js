import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Pet Shelter</h1>
    <NavLink to="/pets" exact>
      Pets
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
