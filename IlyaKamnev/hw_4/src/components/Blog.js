import React, { Component } from 'react';

import Post from './Post';

export default class Blog extends Component {
  render() {
    let posts = this.props.posts.map((post, index) => {
      return <Post key={index} title={post.title}>{post.postBody}</Post>
    });

    return (
      <>
        {posts}
      </>
    )
  }
}