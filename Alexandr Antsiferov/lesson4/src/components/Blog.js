import React, { Component } from "react";
import Post from "./Post";

class Blog extends Component {
  render() {
    let posts = this.props.posts.map((item, index) => {
      return <Post key={index} post={item} />;
    });

    return <>{posts}</>;
  }
}

export default Blog;
