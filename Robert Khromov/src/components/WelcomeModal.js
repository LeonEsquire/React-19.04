import React from 'react';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        }
    }

    ChangeVisibility() {
        this.setState({display: !this.state.display})
    }

    render() {

        let welcome;
        if (this.state.display) {
            welcome = `
             <div>
                <h3>Добро пожаловать на сайт!</h3>
                <input onClick={ChangeVisibility()} value='ok'/>
             </div>
            `
        }

        return (
            <>
                {welcome}
            </>
        )
    }

    componentDidMount() {
        // ¯\_(ツ)_/¯
        this.setState({display: true})
    }
}

