import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {removeUser} from "../actions/user";

export default class User extends Component {

    constructor(props) {
        super(props);

        this.Delete = this.Delete.bind(this);
    }

    Delete() {
        removeUser(this.props.id)
    }

    render() {
        return (
            <div className='card border-secondary mb-3'>
                <div className='card-header'>
                    <Link to={`/users/${this.props.id}`}>
                        {this.props.username}
                    </Link>
                    <button type="button" className="btn btn-danger" style={{ float:'right'}} onClick={this.Delete}>Удалить</button>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                </div>
            </div>
        );
    }
}