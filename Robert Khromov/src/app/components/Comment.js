import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {removeComment} from "../actions/comments";

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.Delete = this.Delete.bind(this);
    }

    Delete() {
        removeComment(this.props.id)
    }

    render() {
        return (
            <div className='card border-secondary mb-3'>
                <div className='card-header'>
                    <Link to={`/comments/${this.props.id}`}>
                        {this.props.name}
                    </Link>
                    <button type="button" className="btn btn-danger" style={{float: 'right'}}
                            onClick={this.Delete}>Удалить
                    </button>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.email}</p>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}