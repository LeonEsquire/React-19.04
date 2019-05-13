import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout'
import MainPage from './app/pages/Main'
import Users from './app/pages/Users'
import User from './app/pages/User'

import Post from './app/pages/Post'
import Posts from './app/pages/Posts'
import Comment from './app/pages/Comment'
import Comments from './app/pages/Comments'

import PageNotFound from './app/pages/PageNotFound'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage}/>

            <Route path="users" component={Users}>
                <Route path=":userID" component={User}/>
            </Route>

            <Route path="posts" component={Posts}>
                <Route path=":postID" component={Post}/>
            </Route>

            <Route path="comments" component={Comments}>
                <Route path=":commentID" component={Comment}/>
            </Route>

            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>,
    document.getElementById('root'));