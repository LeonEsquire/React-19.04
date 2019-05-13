import React, { Component } from 'react';
import axios from 'axios';
import CommentAside from '../components/CommentAside';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null,
    }
  }
  render() {
    return (
      <div>
        { this.state.comment && <CommentAside { ...this.state.comment }/> }
      </div>
    )
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments/${ this.props.params.postId }`)
    .then(response => {
      this.setState({ comment: response.data });
    });
  }
}