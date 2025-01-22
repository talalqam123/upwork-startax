import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddClientModal = ({ showModal, onClose }) => {
  const navigate = useNavigate();

  if (!showModal) return null;

  return (
    <div className="modal fade show d-block" id="income44ADModal" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '800px' }} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">44AE Income Details</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true" style={{ fontSize: 'xx-large' }}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ol>
              <li>If any person is engaged in the business of plying, hiring or leasing goods carriages, he will have the option to compute PGBP on presumptive basis:
                <ul>
                  <li>Heavy goods Vehicle (Gross Weight &gt 12,000 Kgs or 12 Tons) → Rs. 1,000 per ton per month or part thereof.</li>
                  <li>Other vehicle: Rs. 7,500 per month or part thereof.</li>
                </ul>
                Note: Income is calculated on the basis of ownership of vehicle. It is irrelevant whether assessee actually runs the vehicle or not.
              </li>
              <li>Assessee should not own more than 10 vehicles at any time during the year.</li>
              <li>No further deduction is allowed under section 30 to 38 but in case of a firm, interest and salary to partners is allowed as per section 40(b).</li>
              <li>The assessee shall be exempt from maintaining books of accounts or audit.

              </li>
              <li>The assessee has the option to reject presumptive income but in that case, assessee should maintain books of accounts and also audit is required.</li>
              <li>An assessee, who is in possession of a goods carriage, whether taken on hire purchase or on instalments, shall be deemed to be the owner of such goods carriage.</li>
              <li>Assessee can change the option on a year-to-year basis.</li>
              <li>Brought forward depreciation shall not be allowed to be adjusted but brought forward business loss shall be allowed to be adjusted.

              </li>
            </ol>


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
