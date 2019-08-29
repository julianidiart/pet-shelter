import React from "react";
import { connect } from "react-redux";
import { startGoogleLogin, startFacebookLogin } from "../../actions/auth";
import backgroundPattern from "../../assets/images/background-pattern.png";

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
  <div
    className="box-layout"
    style={{ background: `url(${backgroundPattern})` }}
  >
    <div className="box-layout__box">
      <h1 className="box-layout__title">Pet shelter</h1>
      <p>Web app to organize your pet shelter!</p>
      <button
        className="button button--margin-bottom"
        onClick={startFacebookLogin}
      >
        Login with Facebook
      </button>
      <button className="button" onClick={startGoogleLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
