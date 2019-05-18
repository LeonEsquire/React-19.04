import React, {Component} from 'react';
import Post from "../components/Post";
import {addPost, getPosts} from '../actions/post';
import {connect} from 'react-redux';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.createNewPost = this.createNewPost.bind(this);
    }

    componentDidMount() {
        getPosts();
    }

    createNewPost() {
        addPost({
            id: Math.round(Math.random() * 1000),
            title: 'ЪУЪ',
            body: 'ЪОЪ'
        })
    }

    render() {

        if (this.props.fetching) {
            return <h1>Загрузка ...</h1>
        }

        let posts = this.props.posts.map((post) => {
            return <Post key={post.id} {...post}/>
        });

        return (
            <div>
                <h1>
                    Посты
                    <button type="button" className="btn btn-primary" style={{marginLeft: "30px"}}
                            onClick={this.createNewPost}>Добавить</button>
                </h1>
                {posts}
            </div>
        )
    };
}

function mapStoreToProps(state) {
    return (
        {posts: state.posts.posts, fetching: state.posts.fetching}
    )
}

export default connect(mapStoreToProps)(Posts)