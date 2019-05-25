import React, { Component } from "react";
import {fetchUsers} from'../actions/usersAction';
import { connect } from 'react-redux';
import UsersList from "../components/UsersList";

class Users extends Component {
  render() {
    return (
      <div>{!this.props.children ? <UsersList users={this.props.users}/> : this.props.children}</div>
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