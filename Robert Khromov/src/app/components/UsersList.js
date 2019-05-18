import React, {Component} from 'react';
import User from '../components/User';
import {addNewUser, getUsers} from "../actions/user";
import {connect} from "react-redux";

class UsersList extends Component {

    constructor(props) {
        super(props);

        this.createNewUser = this.createNewUser.bind(this);
    }

    componentDidMount() {
        getUsers();
    }

    createNewUser() {
        addNewUser({
            id: Math.round(Math.random() * 1000),
            username: 'newName',
            name: 'newName',
            email: 'email',
            phone: '8 800 000 00 00',
            website: 'ololo.ru'
        });
    }

    render() {

        if (this.props.fetching) {
            return <h1>Загрузка ...</h1>
        }

        let users = this.props.users.map((user, index) => {
            return <User key={index} {...user}/>
        });

        return (
            <div>
                <h1>
                    Пользователи
                    <button type="button" className="btn btn-primary" style={{marginLeft: "30px"}}
                            onClick={this.createNewUser}>Добавить</button>
                </h1>
                {users}
            </div>
        );
    }
}

function mapUsersStoreToProps(state) {
    return (
        {users: state.users.users, fetching: state.users.fetching}
    )
}

export default connect(mapUsersStoreToProps)(UsersList)