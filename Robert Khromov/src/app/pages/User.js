import React, {Component} from 'react';
import UserProfile from '../components/User';
import {connect} from "react-redux";
import {getUsers} from "../actions/user";

class User extends Component {
    componentDidMount() {
        getUsers();
    }

    render() {
        return (
            <div>
                {this.props.user && <UserProfile {...this.props.user} />}
            </div>
        );
    }
}

function mapUserStoreToProps(state, context) {
    for (let i = 0; i < state.users.users.length; i++) {
        if (Number(state.users.users[i].id) === Number(context.match.params.userID)) {
            return {user: state.users.users[i]}
        }
    }
    return (
        {user: null}
    )
}

export default connect(mapUserStoreToProps)(User);