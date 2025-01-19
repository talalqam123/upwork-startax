import React, { useState } from 'react';
import BackButton from '../../../../Backbutton';

const ForeignBank = () => {
  const [rows, setRows] = useState([
    {
      CountryName: '',
      CountryCodeExcludingIndia: '',
      Bankname: '',
      AddressOfBank: '',
      ZipCode: '',
      ForeignAccountNumber: '',
      OwnerStatus: 'OWNER',
      AccOpenDate: '',
      PeakBalanceDuringYear: '',
      ClosingBalance: '',
      IntrstAccured: ''
    }
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        CountryName: '',
        CountryCodeExcludingIndia: '',
        Bankname: '',
        AddressOfBank: '',
        ZipCode: '',
        ForeignAccountNumber: '',
        OwnerStatus: 'OWNER',
        AccOpenDate: '',
        PeakBalanceDuringYear: '',
        ClosingBalance: '',
        IntrstAccured: ''
      }
    ]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      setRows(rows.filter((_, i) => i !== index));
    }
  };

//   const handleInputChange = (index, field, value) => {
//     const updatedRows = [...rows];
//     updatedRows[index][field] = value;
//     setRows(updatedRows);
//   };
const handleInputChange = (index, field, value) => {
    setRows((prev) => {
      const newRows = [...prev];
      if (field === "PeakBalanceDuringYear" || field === "ClosingBalance" || field === "IntrstAccured") {
        value = Number(Math.round(value)).toLocaleString("en-IN"); // Formatting the numeric value
      }
      newRows[index][field] = value;
      return newRows;
    });
  };
  return (
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Foreign Bank</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="w-100 fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Bank Name</th>
                <th>Address of Bank</th>
                <th>Zip Code</th>
                <th>Foreign Account Number</th>
                <th>Owner Status</th>
                <th>Account Open Date</th>
                <th>Peak Balance During Year</th>
                <th>Closing Balance</th>
                <th>Interest Accrued</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ verticalAlign: 'baseline' }}>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="text"
                      value={row.CountryName}
                      onChange={(e) => handleInputChange(index, 'CountryName', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="text"
                      value={row.CountryCodeExcludingIndia}
                      onChange={(e) => handleInputChange(index, 'CountryCodeExcludingIndia', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="text"
                      value={row.Bankname}
                      onChange={(e) => handleInputChange(index, 'Bankname', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="text"
                      value={row.AddressOfBank}
                      onChange={(e) => handleInputChange(index, 'AddressOfBank', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="text"
                      value={row.ZipCode}
                      onChange={(e) => handleInputChange(index, 'ZipCode', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="text"
                      value={row.ForeignAccountNumber}
                      onChange={(e) => handleInputChange(index, 'ForeignAccountNumber', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <select
                      className="vehicle_row_input rounded-0 form-control"
                      value={row.OwnerStatus}
                      onChange={(e) => handleInputChange(index, 'OwnerStatus', e.target.value)}
                    >
                      <option value="OWNER">Owner</option>
                      <option value="BENEFICIAL_OWNER">Beneficial Owner</option>
                      <option value="BENIFICIARY">Beneficiary</option>
                    </select>
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="date"
                      value={row.AccOpenDate}
                      onChange={(e) => handleInputChange(index, 'AccOpenDate', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="number"
                      value={row.PeakBalanceDuringYear}
                      onChange={(e) => handleInputChange(index, 'PeakBalanceDuringYear', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="number"
                      value={row.ClosingBalance}
                      onChange={(e) => handleInputChange(index, 'ClosingBalance', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="vehicle_row_input rounded-0 form-control"
                      type="number"
                      value={row.IntrstAccured}
                      onChange={(e) => handleInputChange(index, 'IntrstAccured', e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <i
                      className="fas fa-times remove_bank"
                      onClick={() => removeRow(index)}
                      style={{ cursor: 'pointer' }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary mt-3" onClick={addRow}>
            Add Row
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 d-flex">
        <BackButton link="/client/final/more-info" />
        </div>
      </div>
    </div>
  );
};

export default ForeignBank;
