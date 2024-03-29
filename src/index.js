import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { browserHistory } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetPets } from "./actions/pets";
import { startSetVolunteers } from "./actions/volunteers";
import { login, logout } from "./actions/auth";
import { firebase } from "./firebase";
import { LanguageStore } from "./contexts/LanguageContext";
import Loading from "./components/Loading";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const app = (
  <Provider store={store}>
    <LanguageStore>
      <AppRouter />
    </LanguageStore>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPets()).then(() => {
      store.dispatch(startSetVolunteers()).then(() => {
        renderApp();
        if (browserHistory.location.pathname === "/") {
          browserHistory.push("/pets");
        }
      });
    });
  } else {
    store.dispatch(logout());
    renderApp();
    browserHistory.push("/");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
