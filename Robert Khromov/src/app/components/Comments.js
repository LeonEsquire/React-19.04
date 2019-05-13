import React, {Component} from 'react';
import Comment from "./Comment";
import axios from "axios";

export default class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    render() {

        if (!this.state.comments.length) return null;

        let comments = this.state.comments.map((comment) => {
            return <Comment key={comment.id} {...comment}/>
        });

        return (
            <div>
                <h1>Комментарии</h1>
                {comments}
            </div>
        )
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                this.setState({comments: response.data});
            })
    }
}