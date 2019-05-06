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
        this.state.posts = this.props.posts.map((i) => {
            return (
                <Post
                    key={i.id}
                    title={i.title}
                    subtitle={i.subtitle}
                    body={i.body}
                    date={i.date}
                    author={i.author}
                />);
        });

        return (
            <div>
                {this.state.posts}
            </div>
        )
    }
}
