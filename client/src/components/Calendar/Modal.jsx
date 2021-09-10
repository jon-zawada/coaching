/* eslint-disable react/button-has-type */
import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form';
import AvailableTimes from '../Form/AvailableTimes';
import { times } from '../../../../db/times';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 1000
};

const BUTTON_STYLES = {
  position: "absolute",
  top: 5,
  right: 5
};

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button style={BUTTON_STYLES} onClick={onClose}>Close Modal</button>
        {/* <AvailableTimes times={times} /> */}
        <Form />
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
