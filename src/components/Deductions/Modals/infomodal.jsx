import React from "react";

function InfoButton({ modalId }) {
  return (
    <button
      type="button"
      className="btn btn-info"
      data-bs-toggle="modal"
      data-bs-target={`#${modalId}`}
    >
      <i className="fas fa-info-circle"></i>
    </button>
  );
}

export default InfoButton;
