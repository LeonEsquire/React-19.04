import {GET_USERS} from '../constants/user';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class usersStore extends EventEmitter {
    constructor() {
        super();
        this.users = [];
        this.getUsers = this.getUsers.bind(this);
        this.change = this.change.bind(this);
        this.handleActions = this.handleActions.bind(this)
    }

    change() {
        this.emit('change');
    }

    getUsers(users) {
        this.users = users;
        this.change();
    }

    handleActions(action) {
        switch(action.type) {
            case GET_USERS:
                this.getUsers(action.data);
                break;
        }
    }
}

const store = new usersStore();
dispatcher.register(store.handleActions);
export default store;