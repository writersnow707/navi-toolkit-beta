import React from "react";
import Modal from "react-modal";
import "./ModalComponent.css";

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        X
      </button>
      {children}
    </Modal>
  );
};

export default ModalComponent;
