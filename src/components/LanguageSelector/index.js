import React, { Component } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import unitedStatesFlag from "../../assets/images/united-states.png";
import italyFlag from "../../assets/images/italy.png";
import spainFlag from "../../assets/images/spain.png";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="header__content header__content--flags">
        <img
          src={unitedStatesFlag}
          alt="english"
          onClick={() => this.context.onLanguageChange("en")}
        />
        <img
          src={italyFlag}
          alt="italiano"
          onClick={() => this.context.onLanguageChange("it")}
        />
        <img
          src={spainFlag}
          alt="español"
          onClick={() => this.context.onLanguageChange("es")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
