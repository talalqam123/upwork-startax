import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddClientModal = ({ showModal, onClose }) => {
  const navigate = useNavigate();

  if (!showModal) return null; // Render nothing if modal is not visible

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add new Client</h4>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true" style={{ fontSize: 'xx-large' }}>&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <div className="button-group mb-3">
              <button
                type="button"
                onClick={() => navigate('/basic_details/add_client')}
                className="btn btn-primary mx-2"
              >
                Add Client
              </button>
              <button
                type="button"
                onClick={() => navigate('/basic_details/add_client_by_id_password')}
                className="btn btn-info mx-2"
              >
                Add By Id Password
              </button>
              <button
                type="button"
                onClick={() => navigate('/basic_details/add_client_by_json')}
                className="btn btn-secondary mx-2"
              >
                Add By JSON Upload
              </button>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;
