import React from 'react';
import './Modal.css';

const modal = ({ closed, show }) => {
  const cssClasses = [
    'Modal',
    show === true ? 'ModalOpen' :
    show === false ? 'ModalClosed' :
    /* undefined */ 'ModalAbsent'
  ];
  return (
    <div className={cssClasses.join(' ')}>
      <h1>A Modal</h1>
      <button
        className="Button"
        onClick={closed}
      >
        Dismiss
      </button>
    </div>
  );
};

export default modal;