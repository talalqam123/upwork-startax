import React, { useState } from 'react';
import BackButton from '../../../../Client Details/Backbutton';

const AccountsHavingSigningAuthority = () => {
  const [rows, setRows] = useState([
    {
      NameOfInstitution: '',
      AddressOfInstitution: '',
      CountryName: '',
      CountryCodeExcludingIndia: '',
      ZipCode: '',
      NameMentionedInAccnt: '',
      InstitutionAccountNumber: '',
      PeakBalanceOrInvestment: '',
      IncAccuredTaxFlag: 'Y',
      IncAccuredInAcc: '',
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
    setRows([
      ...rows,
      {
        NameOfInstitution: '',
        AddressOfInstitution: '',
        CountryName: '',
        CountryCodeExcludingIndia: '',
        ZipCode: '',
        NameMentionedInAccnt: '',
        InstitutionAccountNumber: '',
        PeakBalanceOrInvestment: '',
        IncAccuredTaxFlag: 'Y',
        IncAccuredInAcc: '',
        IncOfferedAmt: '',
        IncOfferedSch: 'SA',
        IncOfferedSchNo: '',
      },
    ]);
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
            <strong>Accounts Having Signing Authority</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Name Of Institution</th>
                <th>Address Of Institution</th>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Zip Code</th>
                <th>Name Mentioned In Account</th>
                <th>Institution Account Number</th>
                <th>Peak Balance Or Investment</th>
                <th>Income Accrued Tax Flag</th>
                <th>Income Accrued In Account</th>
                <th>Income Offered Amount</th>
                <th>Income Offered Schedule</th>
                <th>Income Offered Schedule Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ verticalAlign: 'baseline' }}>
                  {Object.keys(row).map((field, i) => (
                    <td style={{ width: '8%' }} key={i} className="form-group">
                      {field === 'IncAccuredTaxFlag' || field === 'IncOfferedSch' ? (
                        <select
                          className="vehicle_row_input form-control rounded-0"
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        >
                          {field === 'IncAccuredTaxFlag' ? (
                            <>
                              <option value="Y">Yes</option>
                              <option value="N">No</option>
                            </>
                          ) : (
                            <>
                              <option value="SA">Salary</option>
                              <option value="HP">House Property</option>
                              <option value="CG">Capital Gains</option>
                              <option value="OS">Other Sources</option>
                              <option value="EI">Exempt Income</option>
                              <option value="NI">No Income during the year</option>
                            </>
                          )}
                        </select>
                      ) : (
                        <input
                          className="vehicle_row_input form-control rounded-0"
                          type={field === 'PeakBalanceOrInvestment' || field === 'IncAccuredInAcc' || field === 'IncOfferedAmt' ? 'number' : 'text'}
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        />
                      )}
                    </td>
                  ))}
                  <td style={{ width: '8%' }} className="form-group">
                    <i
                      className="fas fa-times remove_account_with_signing_auth"
                      onClick={() => removeRow(index)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="14">
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

export default AccountsHavingSigningAuthority;