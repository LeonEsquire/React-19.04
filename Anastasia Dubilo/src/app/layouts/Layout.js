import React, {Component} from 'react';
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import {Route, Switch} from "react-router-dom";

import ManePage from "../pages/Main"
import User from "../pages/User"
import Users from "../pages/Users"
import Posts from "../pages/Posts"
import Post from "../pages/Post"
import Comments from "../pages/Comments"
import Comment from "../pages/Comment"

export default class Layout extends Component {

    constructor(props) {
        super(props);
    }

    isActive(href) {
        return window.location.pathname === href
    }

    render() {
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href='/' active={this.isActive('/')}>Главная</MenuItem>
                    <MenuItem href='/users' active={this.isActive('/users')}>Пользователи</MenuItem>
                    <MenuItem href='/posts' active={this.isActive('/posts')}>Посты</MenuItem>
                    <MenuItem href='/comments' active={this.isActive('/comments')}>Коментарии</MenuItem>
                </Menu>
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <Switch>
                                <Route exact path="/users/:userID" component={User}/>
                                <Route exact path="/posts" component={Posts}/>
                                <Route exact path="/posts/:postID" component={Post}/>
                                <Route exact path="/comments" component={Comments}/>
                                <Route exact path="/comments/:commentID" component={Comment}/>
                                <Route exact path="/" component={ManePage}/>
                                <Route exact path="/users" component={Users}/>

                            </Switch>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    &copy; 2019
                </footer>
            </div>
        )
    }
}