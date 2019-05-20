import React, { Component } from "react";
import Post from "./Post";

class PostsList extends Component {
  
  render() {
    if (!this.props.posts.length) return null;

    const posts = this.props.posts.map(post => {
      return <Post key={post.id} {...post} />;
    });

    return (
      <div>
        <h1>Посты</h1>
        {posts}
      </div>
    );
  }
}

export default PostsList;
