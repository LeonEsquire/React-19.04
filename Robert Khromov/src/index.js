import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
    render() {
        let menuItems = [
            {href: '/', title: 'Главная'},
            {href: '/about', title: 'О нас'},
            {href: '/service', title: 'Услуги'},
            {href: '/contacts', title: 'Контакты'},
        ];

        return (
            <div>
                <Menu items={menuItems} titleMenu="Основное меню сайта"/>
                <Login/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));