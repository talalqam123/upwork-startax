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
            <h5 className="modal-title" id="exampleModalLongTitle">44ADA Income Details</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true" style={{ fontSize: 'xx-large' }}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ol>
              <li>Eligible Assessee: R Resident Individual or Partnership excluding LLP having specified profession</li>
              <li>Section 44ADA shall be available if G.R. of PY is upto Rs. 50 Lakhs (75 Lakhs if aggregate cash receipts in relevant P.Y. ≤ 5% of total gross receipts)</li>
              <li>Presumptive Income = 50% of Gross Receipts. No further deduction is allowed under section 30 to 38.</li>
              <li>Brought forward business loss is allowed to be adjusted from such income but brought forward depreciation is not allowed to be adjusted from such income.
                {/* <ul>
                  <li>Rate of 6% shall be applied instead of 8% if the Amount of total turnover or gross receipts which is received through specified mode upto RFD as per section 139(1).</li>
                </ul> */}
              </li>
              <li>If Assessee opts Section 44ADA, then assessee shall be exempt from maintaining books of accounts as well as from audit requirement.</li>
              <li>If Assessee opts Section 44AD, then assessee shall be exempt from maintaining books of accounts as well as from audit requirement.</li>
              <li>Such assessee shall be required to pay advance tax to the extent of 100% of tax liability on or before 15th March of the relevant previous year.</li>
              <li>Assessee can change the option on a year-to-year basis.
              
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
