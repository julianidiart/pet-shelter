import React from "react";
import loader from "../../assets/images/loader.gif";

const Loading = () => (
  <div className="loader">
    <img className="loader__image" src={loader} alt="loader" />
  </div>
);

export default Loading;
