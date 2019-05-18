import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './app/store';
import Layout from "./app/layouts/Layout"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Layout/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));