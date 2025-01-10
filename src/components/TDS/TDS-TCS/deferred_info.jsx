import React, { useState } from 'react';
import BackButton from '../../Backbutton';


const DeferredTaxESOPs = () => {
  const [rows, setRows] = useState([{ companyName: '', taxAttributed: '', dateOfSale: '' }]);
  const [lastEmploymentDate, setLastEmploymentDate] = useState('');

  const handleAddRow = () => {
    setRows([...rows, { companyName: '', taxAttributed: '', dateOfSale: '' }]);
  };

  const handleRemoveRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Add Deferred Tax on StartUp ESOPs</strong>
      </div>

      <form action="#">
        <div className="card card-body text-content">
          <div>
            <strong>Tax Deferred on StartUp ESOPs</strong>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Amount of tax brought forward from Assessment Year</label>
                <select className="form-control rounded-0">
                  <option value="">Select Option</option>
                  {Array.from({ length: 11 }, (_, i) => 2023 - i).map((year) => (
                    <option key={year} value={year}>{year}-{year + 1}</option>
                  ))}
                </select>
                <input type="text" className="form-control rounded-0 mt-3" />
              </div>

              <div className="form-group">
                <span>In Assessment Year 2024-25 did you do any of the following?</span>
                <label>1. Sold security or sweat equity shares of the startup - section 80IAC *</label>
                <input type="text" className="form-control rounded-0" />
              </div>

              <div className="form-group">
                <label>Total Tax Collected *</label>
                <select className="form-control rounded-0">
                  <option value="">Select Option</option>
                  <option value="0">Not Sold</option>
                  <option value="1">Partially Sold</option>
                  <option value="2">Fully Sold</option>
                </select>
              </div>

              <div className="col-md-12">
                <table className="table table-responsive">
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index}>
                        <td>
                          <div className="form-group">
                            <label className="m-0">Company Name</label>
                            <input
                              type="text"
                              className="form-control rounded-0"
                              value={row.companyName}
                              onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <label className="m-0">Tax Attributed</label>
                            <input
                              type="number"
                              className="form-control rounded-0"
                              value={row.taxAttributed}
                              onChange={(e) => handleInputChange(index, 'taxAttributed', e.target.value)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <label className="m-0">Date of Sale</label>
                            <input
                              type="date"
                              className="form-control rounded-0"
                              value={row.dateOfSale}
                              onChange={(e) => handleInputChange(index, 'dateOfSale', e.target.value)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group d-flex" style={{ flexDirection: 'column' }}>
                            <label className="m-0">Cancel</label>
                            <div
                              className="cancel btn btn-danger"
                              onClick={() => handleRemoveRow(index)}
                            >
                              <i className="fas fa-trash"></i>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  className="mb-3 w-auto btn btn-block bg-primary btn-flat"
                  onClick={handleAddRow}
                >
                  Add More
                </button>
              </div>

              <div className="form-check mt-5 text-content">
                <input className="form-check-input" type="checkbox" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  2. Stopped working at the startup that allotted or transferred security or sweat equity
                </label>
              </div>

              <div className="form-group">
                <label>Last Date of employment</label>
                <input
                  type="date"
                  className="form-control rounded-0"
                  value={lastEmploymentDate}
                  onChange={(e) => setLastEmploymentDate(e.target.value)}
                />
              </div>

              <div className="form-check mt-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck2"
                  disabled
                />
                <label className="form-check-label" htmlFor="defaultCheck2">
                  3. 48 months have expired from the end of the relevant AY in which these shares were allotted
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 text-content">
          <div className="col-md-12 d-flex">
            <input type="submit" className="btn btn-block btn-primary" value="Submit" style={{width: "fit-content"}} />
           <BackButton link="/client" />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default DeferredTaxESOPs;
