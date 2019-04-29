import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div id='Login'>
                <div>Авторизуйтесь на сайте</div>
                <input type='text'/>
                <input type='password'/>
            </div>
        )
    }
}