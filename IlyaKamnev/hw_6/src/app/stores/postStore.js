import { ADD_POST, GET_POSTS } from '../constants/postConstants';
import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

class postStore extends EventEmitter {
  constructor() {
    super();
    this.posts = [];
    this.change = this.change.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.addPost = this.addPost.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  change() {
    this.emit('change');
  }

  getPosts(posts) {
    this.posts = posts;
    this.change();
  }

  addPost(post) {
    this.posts = [post, ...this.posts];
    this.change();
  }

  handleActions(action) {
    switch(action.type) {
      case GET_POSTS:
        this.getPosts(action.data);
        break;
      case ADD_POST:
        this.addPost(action.data)
        break;
    }
  }
}

const store = new postStore();
dispatcher.register(store.handleActions);
export default store;