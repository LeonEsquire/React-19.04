import { GET_USERS, GET_POSTS } from "../constants/constants";
import dispatcher from "../dispatcher";
import { EventEmitter } from "events";

class storeAll extends EventEmitter {
  constructor() {
    super();
    this.posts = [];
    this.users = [];
    this.getPosts = this.getPosts.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  getPosts(posts) {
    this.posts = posts;
    this.emit("changePosts");
  }

  getUsers(users) {
    this.users = users;
    this.emit("changeUsers");
  }


  handleActions(action) {
    switch (action.type) {
      case GET_USERS:
        this.getUsers(action.data);
        break;
      case GET_POSTS:
        this.getPosts(action.data);
        break;
    }
  }
}

const store = new storeAll();
dispatcher.register(store.handleActions);
export default store;
