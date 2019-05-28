import React, { Component } from "react";
import axios from "axios";
import User from "./User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    if (!this.state.users.length) return null;

    const users = this.state.users.map((user, index) => {
      return <User key={index} {...user} />;
    });

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(respose => {
      this.setState({ users: respose.data });
    });
  }
}

export default UserList;
