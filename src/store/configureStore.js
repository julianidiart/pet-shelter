import { createStore, combineReducers } from "redux";
import petReducer from "../reducers/pets";

export default () => {
  const store = createStore(
    combineReducers({
      pets: petReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
