import React, { useState, useEffect } from 'react';

const BankDetails = ({ clientId, clientYear, clientRelId }) => {
  // Dummy data
  const aadhaarDetails = {
    id: 1,
    aadhaar_no: '1234 5678 9012',
    aadhaar_enrollment_no: '100123456789012',
  };

  const banks = [
    {
      id: 1,
      ifsc_code: 'SBIN0000123',
      bank_name: 'State Bank of India',
      account_no: '9876543210',
      account_type: 'SB',
      is_refund: true,
    },
    {
      id: 2,
      ifsc_code: 'ICIC0001234',
      bank_name: 'ICICI Bank',
      account_no: '1234567890',
      account_type: 'CA',
      is_refund: false,
    },
  ];

  const [bankDetails, setBankDetails] = useState(banks);
  const [aadhaarNo, setAadhaarNo] = useState(aadhaarDetails.aadhaar_no);
  const [aadhaarEnrollmentNo, setAadhaarEnrollmentNo] = useState(aadhaarDetails.aadhaar_enrollment_no);

  // Log bank details whenever the state changes
  useEffect(() => {
    console.log("Current Bank Details: ", bankDetails);
  }, [bankDetails]);

  const handleBankChange = (index, field, value) => {
    const updatedBanks = [...bankDetails];
    updatedBanks[index][field] = value;
    setBankDetails(updatedBanks);
  };

  const handleAddBank = () => {
    const newBank = {
      id: Date.now(), // Use unique ID for each new bank entry
      ifsc_code: '',
      bank_name: '',
      account_no: '',
      account_type: 'SB',
      is_refund: false,
    };

    console.log('Before Adding Bank:', bankDetails);

    setBankDetails((prevBankDetails) => {
      const updatedBankDetails = [...prevBankDetails, newBank];
      console.log('After Adding Bank:', updatedBankDetails);
      return updatedBankDetails;
    });
  };

  const handleDeleteBank = (index) => {
    const updatedBanks = bankDetails.filter((_, i) => i !== index);
    setBankDetails(updatedBanks);
  };

  return (
    <div className="card card-primary">
      <form method="POST" action={`/basic_details/permanent_bank/${clientYear}/${clientRelId}`}>
        <div className="card-header">
          <div className="card-title">
            <strong>Aadhaar Details</strong>
          </div>
        </div>

        <div className="card-body">
          <div className="row text-content">
            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1">Aadhaar No</label>
                <input type="hidden" name="client_id" value={clientId} />
                <input type="hidden" name="aadhaar_id" value={aadhaarDetails.id} />
                <input
                  type="number"
                  name="Aadhaar_card_number"
                  className="form-control rounded-0 text-uppercase"
                  value={aadhaarNo}
                  onChange={(e) => setAadhaarNo(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1">Aadhaar Enrollment No</label>
                <input
                  type="number"
                  name="Aadhaar_enrollment_number"
                  className="form-control rounded-0"
                  value={aadhaarEnrollmentNo}
                  onChange={(e) => setAadhaarEnrollmentNo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card card-success mt-3">
          <div className="card-header">
            <div className="card-title">
              <strong>Bank Detail Type</strong>
            </div>
          </div>
          <div className="card-body text-content" id="bank-detail-type-id">
            {bankDetails.map((bank, index) => (
              <div className="row bank-card" key={bank.id}>
                <input type="hidden" name="bank_id[]" value={bank.id || ''} />
                <div className="form-group col-md-2">
                  <label className="m-1">IFSC Code</label>
                  <input
                    type="text"
                    name="bank_isfc_code[]"
                    className="ifsc_code form-control rounded-0 text-uppercase"
                    required
                    value={bank.ifsc_code}
                    onChange={(e) => handleBankChange(index, 'ifsc_code', e.target.value)}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label className="m-1">Bank Name</label>
                  <input
                    type="text"
                    name="bank_name[]"
                    className="bankNameClass form-control rounded-0"
                    maxLength="125"
                    required
                    value={bank.bank_name}
                    onChange={(e) => handleBankChange(index, 'bank_name', e.target.value)}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label className="m-1">Bank Account No</label>
                  <input
                    type="number"
                    name="bank_acount_no[]"
                    className="form-control rounded-0"
                    min="1"
                    max="99999999999999999999"
                    maxLength="20"
                    required
                    value={bank.account_no}
                    onChange={(e) => handleBankChange(index, 'account_no', e.target.value)}
                  />
                </div>
                <div className="form-group col-md-2">
                  <label className="m-1">Account Type</label>
                  <select
                    name="bank_acount_type[]"
                    className="form-control rounded-0"
                    value={bank.account_type}
                    onChange={(e) => handleBankChange(index, 'account_type', e.target.value)}
                  >
                    <option value="SB">Savings Account</option>
                    <option value="CA">Current Account</option>
                    <option value="CC">Cash Credit Account</option>
                    <option value="OD">Over draft account</option>
                    <option value="NRO">Non Resident Account</option>
                    <option value="OTH">Other</option>
                  </select>
                </div>
                <div className="form-group text-center col-md-1">
                  <label className="m-1">Refund</label>
                  <br />
                  <div className="custom-control mt-1 custom-checkbox">
                    <input
                      className="custom-control-input custom-control-input-primary refund"
                      type="checkbox"
                      name={`refund${index}`}
                      id={`inlineRadio${index}`}
                      checked={bank.is_refund}
                      onChange={(e) => handleBankChange(index, 'is_refund', e.target.checked)}
                    />
                    <label className="custom-control-label" htmlFor={`inlineRadio${index}`} />
                  </div>
                </div>
                <div className="form-group col-md-1" style={{ marginTop: '21px' }}>
                  <button className="btn btn-danger delete-bank" type="button" onClick={() => handleDeleteBank(index)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            <button className="btn btn-info add_more_bank rounded-0" type="button" onClick={handleAddBank}>
              Add More
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <input type="submit" className="btn btn-block rounded-0 btn-primary" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BankDetails;
