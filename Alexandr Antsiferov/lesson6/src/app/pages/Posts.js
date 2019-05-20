import React, { Component } from "react";
import store from "../stores/store";
import { getPosts } from "../actions/actions";
import PostsList from "../components/PostsList";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onPostChange = this.onPostChange.bind(this);
  }

  onPostChange() {
    this.setState({ posts: store.posts });
  }

  componentDidMount() {
    getPosts();
    store.on("changePosts", this.onPostChange);
  }

  componentWillUnmount() {
    store.removeListener("changePosts", this.onPostChange);
  }

  render() {
    return (
      <div>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
}

export default Posts;
