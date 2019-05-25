import React, { Component } from 'react'
import {fetchUser} from'../actions/userAction';
import { connect } from 'react-redux';
import UserProfile from '../components/User';

class User extends Component {

  render() {
    return (
      <div>
        {this.props.user ? <UserProfile {...this.props.user} /> : null}
      </div>
    )
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.match.params.userId));
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(User)