import React, { Component } from 'react';
import User from './UserProfile';
import { fetchUsers } from '../../actions/userActions';
import { connect } from 'react-redux';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.users.length) return null;

    const users = this.props.users.map((user, index) => {
      return <User key={index} {...user}/>
    });

    return (
      <div>
        <h1>Пользователи</h1>
        { users }
      </div>
    )
  }

  componentDidMount() {
    (!this.props.users.length) ? this.props.dispatch(fetchUsers()) : null;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
  }
}

export default connect(mapStateToProps)(UserList);