import React, {Component} from 'react';
import axios from "axios";
import DetailPost from "../components/Post";

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        }
    }

    render() {
        return (
            <div>
                {this.state.post && <DetailPost {...this.state.post} />}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postID}`)
            .then(response => {
                this.setState({post: response.data});
            })
    }
}