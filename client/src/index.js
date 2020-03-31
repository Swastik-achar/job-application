import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { startGetApplications } from "./Actions/applicationsAction";

import configureStore from "./Store/configureStore";
const store = configureStore();

store.dispatch(startGetApplications());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
