import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import petReducer from "../reducers/pets";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      pets: petReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
