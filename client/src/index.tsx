import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

let reducer1 = (
  state = ["React", "React-Router", "SCSS", "Bootstrap", "Redux", "Typescript"],
  action: any
) => {
  if (action.type == "ADD") {
    return [...state, action.payload];
  }
  return state;
};

let rootReducer = combineReducers({ reducer1 });

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
