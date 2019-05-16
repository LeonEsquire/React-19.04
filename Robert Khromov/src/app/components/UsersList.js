import React, {Component} from 'react';
import User from '../components/User';
import store from "../stores/users";
import {getUsers} from "../actions/user";

export default class UsersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.onUsersChange = this.onUsersChange.bind(this);
    }

    onUsersChange() {
        this.setState({users: store.users})
    }

    componentDidMount() {
        getUsers();
        store.on('change', this.onUsersChange);
    }

    componentWillUnmount() {
        store.removeListener('change', this.onUsersChange);
    }

    render() {

        if (!this.state.users.length) return null;

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user}/>
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        );
    }
}