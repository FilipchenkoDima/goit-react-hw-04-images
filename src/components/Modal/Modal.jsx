import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

// export const Modal = ({ imgUrl }) => {
//   return (
//     <Overlay>
//       <ModalWindow>
//         <img src={imgUrl} alt="" />
//       </ModalWindow>
//     </Overlay>
//   );
// };

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={this.props.imgUrl} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
