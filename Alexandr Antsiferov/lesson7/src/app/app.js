import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./layouts/Layout";

ReactDOM.render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
  document.querySelector("#root")
);
