import React, { Component } from "react";
import {fetchUsers} from'../actions/usersAction';
import { connect } from 'react-redux';
import UsersList from "../components/UsersList";

class Users extends Component {
  render() {
    return (
      <UsersList users={this.props.users}/>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Users)
