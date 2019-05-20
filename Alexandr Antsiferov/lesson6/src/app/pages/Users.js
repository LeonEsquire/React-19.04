import React, { Component } from "react";
import store from "../stores/store";
import { getUsers } from "../actions/actions";
import UsersList from "../components/UsersList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.onUserChange = this.onUserChange.bind(this);
  }

  onUserChange() {
    this.setState({ users: store.users });
  }

  componentDidMount() {
    getUsers();
    store.on("changeUsers", this.onUserChange);
  }

  componentWillUnmount() {
    store.removeListener("changeUsers", this.onUserChange);
  }

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default Users;
