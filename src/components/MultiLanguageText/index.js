import React, { Component } from "react";
import LanguageContext from "../../contexts/LanguageContext";

class MultiLanguageText extends Component {
  static contextType = LanguageContext;

  render() {
    let text = "";
    switch (this.context.language) {
      case "en":
        text = this.props.en;
        break;
      case "it":
        text = this.props.it;
        break;
      case "es":
        text = this.props.es;
        break;
      default:
        text = this.props.chidlren;
    }
    return <>{text}</>;
  }
}

export default MultiLanguageText;
