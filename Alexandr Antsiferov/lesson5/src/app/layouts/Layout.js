import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-4">
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/contacts">Контакты</a></li>
                    </ul>
                </div>
                <div className="col-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;