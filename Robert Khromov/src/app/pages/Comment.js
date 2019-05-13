import React, {Component} from 'react';
import DetailComment from "../components/Comment";
import axios from "axios";

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        }
    }

    render() {
        return (
            <div>
                {this.state.comment && <DetailComment {...this.state.comment} />}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentID}`)
            .then(response => {
                this.setState({comment: response.data});
            })
    }
}