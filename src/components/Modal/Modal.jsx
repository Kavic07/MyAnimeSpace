import React from "react";
import "./Modal.css";

const Modal = ({ show, title, onClose, trailerUrl }) => {
  if (!show) return null;

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-btn" onClick={onClose}>
          x
        </button>
        <iframe
          width="100%"
          height="315"
          src={trailerUrl}
          title={`Trailer of ${title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
