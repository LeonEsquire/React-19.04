import React, { Component } from 'react';
import UsersList from '../components/UserList';
import { addUser, getUsers } from '../actions/userActions';
import store from '../stores/userStore';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    this.onUserChange = this.onUserChange.bind(this);
  }

  newUser() {
    const username = 'NewUser';
    const name = 'User';
    const email = 'new@user.ru';
    const phone = '8 000 000 00 00';
    const website = 'newuser.ru';

    addUser(name, username, email, phone, website);
  }

  onUserChange() {
    this.setState({ users: store.users });
  }

  componentDidMount() {
    getUsers();
    store.on('changeUser', this.onUserChange);
  }

  componentWillUnmount() {
    store.removeListener('changeUser', this.onUserChange);
  }

  render() {
    return (
      <div>
        { 
          (!this.props.children) ? (
            <div>
              <button className='btn btn-primary' onClick={ this.newUser }>Добавить пользователя</button>
              <UsersList users={ this.state.users }/>
            </div>
          ) : (this.props.children) 
        }
      </div>
    )
  }
}