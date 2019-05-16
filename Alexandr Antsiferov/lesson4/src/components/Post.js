import React, { Component } from "react";

class Post extends Component {
  render() {
    let date = this.props.post.date
    return <div className="post">
      <h2>{this.props.post.title}</h2>
      <p className="post_body">{this.props.post.postBody}</p>
      <p className="post_info">{date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })} by <span>{this.props.post.name}</span></p>
    </div>;
  }
}

export default Post;
