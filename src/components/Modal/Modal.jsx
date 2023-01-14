import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ onClose, imgUrl }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={imgUrl} alt="" />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
