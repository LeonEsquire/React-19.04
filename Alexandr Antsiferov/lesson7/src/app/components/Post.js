import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/posts/${this.props.id}`}>{this.props.title}</Link>
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;