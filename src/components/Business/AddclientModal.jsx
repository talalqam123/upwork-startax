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
            <h5 className="modal-title" id="exampleModalLongTitle">44AD Income Details</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true" style={{ fontSize: 'xx-large' }}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ol>
              <li>Eligible Assessee: Resident Individual/ HUF / Firm except LLP</li>
              <li>Section 44AD is applicable only to business and not to specified profession and also it is not applicable for the persons having earning as commission or brokerage or Agency Business.</li>
              <li>Turnover of eligible assessee doesn't Exceed 2 crore (3 crore, if aggregate cash receipts in relevant P.Y. is upto 5% of T.O. or G.R.)</li>
              <li>Presumptive Income = 8% of Turnover or Gross Receipts. No further deduction is allowed under section 30 to 38.
                <ul>
                  <li>Rate of 6% shall be applied instead of 8% if the Amount of total turnover or gross receipts which is received through specified mode upto RFD as per section 139(1).</li>
                </ul>
              </li>
              <li>Brought forward business loss is allowed to be adjusted from such income but brought forward depreciation is not allowed to be adjusted from such income.</li>
              <li>If Assessee opts Section 44AD, then assessee shall be exempt from maintaining books of accounts as well as from audit requirement.</li>
              <li>Such assessee shall be required to pay advance tax to the extent of 100% of tax liability on or before 15th March of the relevant previous year.</li>
              <li>If an assessee has opted for presumptive income under section 44AD and in the subsequent 5 years he has rejected presumptive income, in that case he will not be allowed to opt for presumptive income for next 5 year.
                <ul>
                  <li>If assessee has rejected the presumptive income, he will be required to maintain any books of accounts and also audit is required.</li>
                </ul>
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
