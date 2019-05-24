import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

import MainPage from "../pages/Main";
import PageNotFound from "../pages/PageNotFound";
import Users from "../pages/Users";
import User from "../pages/User";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Comments from "../pages/Comments";
import Comment from "../pages/Comment";


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = 'React blog!';
  }

  isActive(href) {
    return window.location.pathname === href;
  } 

  render()
  {
    return(
      <div>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive('/users')}>
            Пользователи
          </MenuItem>
          <MenuItem href="/posts" active={this.isActive('/posts')}>
            Статьи
          </MenuItem>
          <MenuItem href="/comments" active={this.isActive('/comments')}>
            Комментарии
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/users" component={Users}/>
                <Route path="/users/:userId" component={User}/>
                <Route exact path="/posts" component={Posts}/>
                <Route path="/posts/:postId" component={Post} />
                <Route exact path="/comments" component={Comments} />
                <Route path="/comments/:commentId" component={Comment} />
                <Route path="*" component={PageNotFound}/>
              </Switch>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2019
        </footer>
      </div>
    );
  }
}