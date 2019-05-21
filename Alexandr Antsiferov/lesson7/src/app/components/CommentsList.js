import React, { Component } from "react";
import axios from "axios";
import Comment from "./Comment";

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  render() {
    if (!this.state.comments.length) return null;

    const comments = this.state.comments.map(comment => {
      return <Comment key={comment.id} {...comment} />;
    });
    return (
      <div>
        <h1>Комменты</h1>
        {comments}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        this.setState({ comments: response.data });
      });
  }
}

export default CommentsList;
