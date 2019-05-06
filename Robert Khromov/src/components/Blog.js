import React from 'react';
import Post from './Post'

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }


    render() {
        this.state.posts = this.props.posts.map((i) =>
            <Post
                title={this.props.posts[i].title}
                subtitle={this.props.posts[i].subtitle}
                body={this.props.posts[i].body}
                date={this.props.posts[i].date}
                author={this.props.posts[i].author}
            />
        );

        return (
            <div>
                {this.state.posts}
            </div>
        )
    }
}
