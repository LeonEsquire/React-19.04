import React, { Component } from 'react';
import UserProfile from '../components/User';
import store from '../stores/userStore';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }
  }
  render() {
    return (
      <div>
        { this.state.user && <UserProfile { ...this.state.user }/> }
      </div>
    )
  }

  componentDidMount() {
    const userId = this.props.params.userId;
    const user = store.users[userId-1];
    this.setState({ user: user });
  }
}