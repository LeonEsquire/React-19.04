import React, {Component} from 'react';
import Comment from "./Comment";
import {addComment, getComments} from "../actions/comments";
import {connect} from "react-redux";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.createNewComment = this.createNewComment.bind(this);
    }

    componentDidMount() {
        getComments();
    }

    createNewComment() {
        addComment({
            id: Math.round(Math.random() * 1000),
            name: 'ЪУЪУЪУЪ',
            email: 'ЪУЪУЪуЪ',
            body: 'ЪОЪОЪОЪ'
        })
    }

    render() {

        if (this.props.fetching) {
            return <h1>Загрузка ...</h1>
        }

        let comments = this.props.comments.map((comment) => {
            return <Comment key={comment.id} {...comment}/>
        });

        return (
            <div>
                <h1>
                    Комментарии
                    <button type="button" className="btn btn-primary" style={{marginLeft: "30px"}}
                            onClick={this.createNewComment}>Добавить</button>
                </h1>
                {comments}
            </div>
        )
    };
}

function mapCommentsStoreToProps(state) {
    return (
        {comments: state.comments.comments, fetching: state.comments.fetching}
    )
}

export default connect(mapCommentsStoreToProps)(Comments)