import React from 'react';

function ModalComponent({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Component</h2>
        <p>This is the content of the modal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ModalComponent;
