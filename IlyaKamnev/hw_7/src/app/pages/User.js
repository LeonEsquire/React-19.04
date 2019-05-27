import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user/UserProfile';

class User extends Component {
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
    const userId = this.props.match.params.userId - 1;
    const data = this.props.users[userId];

    this.setState({ user: data });
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
  }
}

export default connect(mapStateToProps)(User);