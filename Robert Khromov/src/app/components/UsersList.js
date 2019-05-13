import React, {Component} from 'react';
import User from '../components/User';

import axios from 'axios';

export default class UsersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
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

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({users: response.data});
            })
    }
}