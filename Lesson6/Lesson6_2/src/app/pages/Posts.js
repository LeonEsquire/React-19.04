import React, { Component } from 'react'
import store from '../stores/postStore';
import {addPost, getPosts} from '../actions/postActions';
import PostsList from '../components/PostsList';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onPostChange = this.onPostChange.bind(this);
  }

  newPost() {
    const body = 'Текст нового поста';
    const userId = 1;
    const title = 'Мой пост';

    addPost(title, userId, body);
  }

  onPostChange() {
    this.setState({posts: store.posts})
  }

  componentDidMount() {
    getPosts();
    store.on('change', this.onPostChange);
  }

  componentWillUnmount() {
    store.removeListener('change', this.onPostChange);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
        <PostsList posts={this.state.posts}/>
      </div>
    )
  }
}
