import React, { Component } from 'react'
import axios from 'axios';
import UserProfile from '../components/User';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  render() {
    console.log(this);
    return (
      <div>
        {this.state.user ? <UserProfile {...this.state.user} /> : null}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
    .then(response => {
      this.setState({user: response.data});
    });
  }
}
