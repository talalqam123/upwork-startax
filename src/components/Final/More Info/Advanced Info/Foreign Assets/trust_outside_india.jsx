import React, { useState } from 'react';
import BackButton from '../../../../Backbutton';

const TrustOutsideIndiaTrustee = () => {
  const [rows, setRows] = useState([
    {
      CountryName: '',
      CountryCodeExcludingIndia: '',
      ZipCode: '',
      NameOfTrust: '',
      AddressOfTrust: '',
      NameOfOtherTrustees: '',
      AddressOfOtherTrustees: '',
      NameOfSettlor: '',
      AddressOfSettlor: '',
      NameOfBeneficiaries: '',
      AddressOfBeneficiaries: '',
      DateHeld: '',
      IncDrvTaxFlag: 'Y',
      IncDrvFromTrust: '',
      IncOfferedAmt: '',
      IncOfferedSch: 'SA',
      IncOfferedSchNo: '',
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow = {
      CountryName: '',
      CountryCodeExcludingIndia: '',
      ZipCode: '',
      NameOfTrust: '',
      AddressOfTrust: '',
      NameOfOtherTrustees: '',
      AddressOfOtherTrustees: '',
      NameOfSettlor: '',
      AddressOfSettlor: '',
      NameOfBeneficiaries: '',
      AddressOfBeneficiaries: '',
      DateHeld: '',
      IncDrvTaxFlag: 'Y',
      IncDrvFromTrust: '',
      IncOfferedAmt: '',
      IncOfferedSch: 'SA',
      IncOfferedSchNo: '',
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    }
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Trust Outside India Trustee</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Zip Code</th>
                <th>Name Of Trust</th>
                <th>Address Of Trust</th>
                <th>Name Of Other Trustees</th>
                <th>Address Of Other Trustees</th>
                <th>Name Of Settlor</th>
                <th>Address Of Settlor</th>
                <th>Name Of Beneficiaries</th>
                <th>Address Of Beneficiaries</th>
                <th>Date Held</th>
                <th>Income Derived Tax Flag</th>
                <th>Income Derived From Trust</th>
                <th>Income Offered Amount</th>
                <th>Income Offered Schedule</th>
                <th>Income Offered Schedule Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ verticalAlign: 'baseline' }}>
                  {Object.keys(row).map((field) => (
                    field === 'IncDrvTaxFlag' ? (
                      <td key={field} style={{ width: '8.2%' }} className="form-group">
                        <select
                          className="vehicle_row_input form-control rounded-0"
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        >
                          <option value="Y">Yes</option>
                          <option value="N">No</option>
                        </select>
                      </td>
                    ) : field === 'IncOfferedSch' ? (
                      <td key={field} style={{ width: '8.2%' }} className="form-group">
                        <select
                          className="vehicle_row_input form-control rounded-0"
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        >
                          <option value="SA">Salary</option>
                          <option value="HP">House Property</option>
                          <option value="CG">Capital Gains</option>
                          <option value="OS">Other Sources</option>
                          <option value="EI">Exempt Income</option>
                          <option value="NI">No Income during the year</option>
                        </select>
                      </td>
                    ) : (
                      <td key={field} style={{ width: '8.2%' }} className="form-group">
                        <input
                          className="vehicle_row_input form-control rounded-0"
                          type={field === 'DateHeld' ? 'date' : 'text'}
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        />
                      </td>
                    )
                  ))}
                  <td style={{ width: '8.2%' }} className="form-group">
                    <i
                      className="fas fa-times remove_vehile"
                      onClick={() => removeRow(index)}
                      style={{ cursor: 'pointer' }}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr style={{ verticalAlign: 'baseline' }}>
                <td colSpan="18">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addRow}
                  >
                    Add Row
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12 d-flex">
       <BackButton link="/client/final/more-info" />
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default TrustOutsideIndiaTrustee;