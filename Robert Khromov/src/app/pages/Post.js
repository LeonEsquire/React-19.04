import React, {Component} from 'react';
import DetailPost from "../components/Post";
import {getPosts} from "../actions/post";
import {connect} from "react-redux";

class Post extends Component {
    render() {
        return (
            <div>
                {this.props.post && <DetailPost {...this.props.post} />}
            </div>
        );
    }

    componentDidMount() {
        getPosts();
    }
}

function mapPostStoreToProps(state, context) {
    for (let i = 0; i < state.posts.posts.length; i++) {
        if (Number(state.posts.posts[i].id) === Number(context.match.params.postID)) {
            return {post: state.posts.posts[i]}
        }
    }
    return (
        {post: null}
    )
}

export default connect(mapPostStoreToProps)(Post);