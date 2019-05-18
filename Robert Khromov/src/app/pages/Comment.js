import React, {Component} from 'react';
import DetailComment from "../components/Comment";
import {connect} from "react-redux";
import {getComments} from "../actions/comments";

class Comment extends Component {
    componentDidMount() {
        getComments()
    }

    render() {
        return (
            <div>
                {this.props.comment && <DetailComment {...this.props.comment} />}
            </div>
        );
    }
}

function mapPostStoreToProps(state, context) {
    for (let i = 0; i < state.comments.comments.length; i++) {
        if (Number(state.comments.comments[i].id) === Number(context.match.params.commentID)) {
            return {comment: state.comments.comments[i]}
        }
    }
    return (
        {comment: null}
    )
}

export default connect(mapPostStoreToProps)(Comment);