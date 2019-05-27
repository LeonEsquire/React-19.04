import { ADD_USER, GET_USERS } from '../constants/userConstants';
import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

class userStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.changeUser = this.changeUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  changeUser() {
    this.emit('changeUser');
  }

  getUsers(users) {
    this.users = users;
    this.changeUser();
  }

  addUser(user) {
    user.id = this.users.length + 1;
    this.users = [user, ...this.users];
    this.changeUser();
  }

  handleActions(action) {
    switch(action.type) {
      case GET_USERS:
        this.getUsers(action.data);
        break;
      case ADD_USER:
        this.addUser(action.data)
        break;
    }
  }
}

const store = new userStore();
dispatcher.register(store.handleActions);
export default store;