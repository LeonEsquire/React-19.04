import React, { Component } from 'react'

export default class WelcomeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    }
  }

  render() {
    let modalBlock;

    if(this.state.modal) {
      modalBlock = (
        <>
          <div className="modal fade show" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Добро пожаловать</h5>
                </div>
                <div className="modal-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Est blanditiis dolorem beatae animi dicta adipisci laborum.
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => {
                      this.setState({ modal: !this.state.modal });
                    }}>Закрыть</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )
    }

    return (
      <>
        {modalBlock}
      </>
    )
  }

  componentDidMount() {
    this.setState({ 
      modal: true,
    });
  }
}
