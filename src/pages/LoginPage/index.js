import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startFacebookLogin } from "../../actions/auth";
import backgroundPattern from "../../assets/images/background-pattern.png";
import LanguageSelector from "../../components/LanguageSelector";
import MultiLanguageText from "../../components/MultiLanguageText";

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => {
  return (
    <div
      className="box-layout"
      style={{ background: `url(${backgroundPattern})` }}
    >
      <div className="box-layout__box">
        <LanguageSelector />
        <h1 className="box-layout__title">Pet Shelter</h1>
        <p>
          <MultiLanguageText
            en="Web app to organize and manage your pet shelter!"
            it="App web per organizzare e gestire il tuo rifugio per animali domestici!"
            es="¡Aplicación web para organizar y administrar tu refugio para mascotas!"
          />
        </p>
        <button
          className="button button--margin-bottom"
          onClick={startFacebookLogin}
        >
          <MultiLanguageText
            en="Login with Facebook"
            it="Accedi con Facebook"
            es="Iniciar con Facebook"
          />
        </button>
        <button
          className="button button--margin-bottom"
          onClick={startGoogleLogin}
        >
          <MultiLanguageText
            en="Login with Google"
            it="Accedi con Google"
            es="Iniciar con Google"
          />
        </button>
        <Link className="button button--secondary" to="/privacy-policy">
          <MultiLanguageText
            en="Privacy Policy"
            it="Informativa sulla Privacy"
            es="Política de privacidad"
          />
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
