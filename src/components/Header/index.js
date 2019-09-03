import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";
import LanguageSelector from "../LanguageSelector";
import MultiLanguageText from "../MultiLanguageText";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/pets">
          <h1>Pet Shelter</h1>
        </Link>
        <div>
          <Link className="button button--link" to="/pets">
            <MultiLanguageText en="Pets" it="Animali" es="Mascotas" />
          </Link>
          <Link className="button button--link" to="/volunteers">
            <MultiLanguageText
              en="Volunteers"
              it="Volontari"
              es="Voluntarios"
            />
          </Link>
          <button className="button button--link" onClick={startLogout}>
            <MultiLanguageText en="Logout" it="Esci" es="Salir" />
          </button>
        </div>
        <LanguageSelector />
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
