import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, BrowserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layouts/Layout';
import MainPage from './components/Main';
import About from './components/About';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return <div>Hallo</div>;
  }
}

ReactDOM.render(<Router>
  
</Router>, document.querySelector("#root"));
