import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '../components/menu/Menu';
import MenuItem from '../components/menu/MenuItem';

import MainPage from '../pages/Main';
import Users from '../pages/Users';
import User from '../pages/User';
import PageNotFound from '../pages/PageNotFound';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.brand = 'React blog';
  }

  isActive(href) {
    return window.location.pathname === href;
  }
  
  render() {
    return (
      <div>
        <Menu brand={ this.brand }>
          <MenuItem href="/" active={this.isActive('/')}>Главная</MenuItem>
          <MenuItem href="/users" active={this.isActive('/users')}>Пользователи</MenuItem>
        </Menu>
        <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/home' component={MainPage}/>
                <Route path='/users/:userId' component={User}/>
                <Route path='/users' component={Users}/>
                <Route path='*' component={PageNotFound}/>
              </Switch>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2019
        </footer>
        </div>
      </div>
    )
  }
}