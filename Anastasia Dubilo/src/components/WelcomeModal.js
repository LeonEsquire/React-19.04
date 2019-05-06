import React from 'react';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        let welcomeModal;
        if (this.state.modal) {
            welcomeModal = <div className="modalWindow">
                <div className="button">Добро пожаловать!
                    <button className="Modal" onClick={() => {
                        this.setState({modal: !this.state.modal})
                    }}>X
                    </button>
                </div>
            </div>
        }

        return (
            <div className="welcomeModal">
                {welcomeModal}
            </div>
        )
    }

    componentDidMount() {
        this.setState({modal: !this.state.modal});
    }
}

export default WelcomeModal;



