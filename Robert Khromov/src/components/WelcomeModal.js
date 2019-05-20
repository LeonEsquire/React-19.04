import React from 'react';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: true
        };

        this.ChangeVisibility = this.ChangeVisibility.bind(this)
    }

    ChangeVisibility() {
        this.setState({display: !this.state.display})
    }

    render() {

        let welcome;
        if (this.state.display) {
            welcome = (
                <div id="welcome">
                    <h3>Добро пожаловать на сайт!</h3>
                    <input type="button" onClick={this.ChangeVisibility} value='Закрыть'/>
                </div>
            )
        }

        return (
            <>
                {welcome}
            </>
        )
    }
}

