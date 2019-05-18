import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {removePosts} from "../actions/post";

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.Delete = this.Delete.bind(this);
    }

    Delete() {
        removePosts(this.props.id)
    }

    render() {
        return (
            <div className='card border-secondary mb-3'>
                <div className='card-header'>
                    <Link to={`/posts/${this.props.id}`}>
                        {this.props.title}
                    </Link>
                    <button type="button" className="btn btn-danger" style={{ float:'right'}} onClick={this.Delete}>Удалить</button>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}