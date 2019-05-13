import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';

import Users from './app/pages/Users';
import User from './app/pages/User';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';
import Сomments from './app/pages/Сomments';
import Сomment from './app/pages/Сomment';

import PageNotFound from './app/pages/PageNotFound';

ReactDom.render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={MainPage}/>
    <Route path="users" component={Users}>
      <Route path=":userId" component={User}/>
    </Route>
    <Route path="posts" component={Posts}>
      <Route path=":userId" component={Post}/>
    </Route>
    <Route path="comments" component={Сomments}>
      <Route path=":postId" component={Сomment}/>
    </Route>
    <Route path="*" component={PageNotFound}/>
  </Route>
</Router>, document.getElementById('root'));