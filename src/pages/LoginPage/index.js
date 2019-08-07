import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../actions/auth";
import backgroundPattern from "../../assets/images/background-pattern.png";

export const LoginPage = ({ startLogin }) => (
  <div
    className="box-layout"
    style={{ background: `url(${backgroundPattern})` }}
  >
    <div className="box-layout__box">
      <h1 className="box-layout__title">Pet shelter</h1>
      <p>Web app to organize your pet shelter!</p>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
