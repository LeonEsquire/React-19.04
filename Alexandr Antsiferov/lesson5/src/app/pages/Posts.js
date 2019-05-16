import React, { Component } from 'react';
import PostsList from "../components/PostsList";


class Posts extends Component {
    render() {
        return (
            <div>
                <div>{!this.props.children ? <PostsList /> : this.props.children}</div>
            </div>
        );
    }
}

export default Posts;