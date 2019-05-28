import React, { Component } from "react";

class WelcomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  componentDidMount() {
    this.setState({ modal: true });
  }

  render() {
    let modal;
    if (this.state.modal) {
      modal = (
        <div className="modal_background">
          <div className="modal_window">
            <h2>Здравствуй, дорогой друг.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi
              atque incidunt. Eius reiciendis neque veniam id consequuntur
              ducimus quos consequatur placeat eaque ipsam ipsa maiores eveniet
              pariatur velit amet, debitis quaerat porro esse ad accusamus
              distinctio fuga asperiores non incidunt?
            </p>
            <div
              className="modal_button"
              onClick={() => {
                this.setState({ modal: false });
              }}
            >
              Закрыть
            </div>
          </div>
        </div>
      );
    }

    return <>{modal}</>;
  }
}

export default WelcomeModal;
