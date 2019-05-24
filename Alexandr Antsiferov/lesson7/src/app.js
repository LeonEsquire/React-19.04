import React from "react";
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./app/layouts/Layout";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
