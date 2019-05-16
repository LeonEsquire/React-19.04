import React, {Component} from 'react';
import Post from "../components/Post";
import {addPost, getPosts} from '../actions/post';
import store from '../stores/posts';


export default class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.onPostChange = this.onPostChange.bind(this);
    }

    onPostChange() {
        this.setState({posts: store.posts})
    }

    componentDidMount() {
        getPosts();
        store.on('change', this.onPostChange);
    }

    componentWillUnmount() {
        store.removeListener('change', this.onPostChange);
    }

    render() {

        if (!this.state.posts.length) return null;

        let posts = this.state.posts.map((post) => {
            return <Post key={post.id} {...post}/>
        });

        return (
            <div>
                <h1>Посты</h1>
                {posts}
            </div>
        )
    };
}