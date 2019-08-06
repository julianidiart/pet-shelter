import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/pets">
          <h1>Pet Shelter</h1>
        </Link>
        <div>
          <Link className="button button--link" to="/pets">
            Pets
          </Link>
          <Link className="button button--link" to="/volunteers">
            Volunteers
          </Link>
          <button className="button button--link" onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
