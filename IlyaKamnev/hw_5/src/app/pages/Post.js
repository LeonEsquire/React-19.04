import React, { Component } from 'react';
import axios from 'axios';
import PostAside from '../components/PostAside';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
    }
  }
  render() {
    return (
      <div>
        { this.state.post && <PostAside { ...this.state.post }/> }
      </div>
    )
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${ this.props.params.userId }`)
    .then(response => {
      this.setState({ post: response.data });
    });
  }
}