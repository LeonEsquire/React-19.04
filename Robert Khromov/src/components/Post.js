import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h3>{this.props.title}</h3>
                <h4>{this.props.subtitle}</h4>
                <p>{this.props.body}</p>
                <footer>
                    <span>Дата: <span>{this.props.date}</span></span>
                    <a href='#'> Автор: <span> {this.props.author}</span></a>
                </footer>
            </div>
        )
    }
}

