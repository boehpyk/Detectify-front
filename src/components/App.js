import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import ShowTableModal from './Modal/ShowTableModal';
import SearchInput from './SearchInput';
import TablesList from './TablesList';
import { hideModal } from '../AC/modals';


const MODAL_COMPONENTS = {
    'SHOW_TABLE': ShowTableModal,
    /* other modals */
}

Modal.setAppElement('#root');


class App extends Component {

    state = {

    }

    handleDocumentClick = (event) => {
        if (event.target.classList.contains('ReactModal__Overlay')) {
            this.props.hideModal();
        }
    }

  render() {

    return (
      <div className="App">
          <div>
              <SearchInput />
              <TablesList />
          </div>

          <Modal
                isOpen={this.props.modal.modalType ? true : false }
                contentLabel="Example Modal"
                className="ReactModal"
                overlayClassName="ReactModal-Overlay"
          >
              <button onClick={ this.closeModal } className="ModalContent-close">&#215;</button>
              <div className="ModalContent">
                  { this.getModal() }
              </div>
          </Modal>
      </div>
    );
  }


  getModal()
  {
      if (!this.props.modal.modalType) {
          return <span /> // after React v15 you can return null here
      }

      const SpecificModal = MODAL_COMPONENTS[this.props.modal.modalType]
      return <SpecificModal {...this.props.modal.modalProps} />
  }

  closeModal = () => {
      this.props.hideModal();
  }

}

// export default App;
export default connect(
    (state) => ({
        modal: state.modals
    }), { hideModal })(App)
