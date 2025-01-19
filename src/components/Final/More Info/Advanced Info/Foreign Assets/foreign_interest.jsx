import React, { useState } from "react";
import BackButton from "../../../../Backbutton";

const FinancialInterestForm = () => {
  const initialRow = {
    CountryName: "",
    CountryCodeExcludingIndia: "",
    ZipCode: "",
    NatureOfEntity: "",
    NameOfEntity: "",
    AddressOfEntity: "",
    NatureOfInt: "DIRECT",
    DateHeld: "",
    TotalInvestment: "",
    IncFromInt: "",
    NatureOfInc: "",
    IncTaxAmt: "",
    IncTaxSch: "SA",
    IncTaxSchNo: "",
  };

  const [rows, setRows] = useState([initialRow]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, initialRow]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    }
  };

  const formatNumber = (value) => {
    return Number(Math.round(value)).toLocaleString("en-IN");
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Financial Interest</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Zip Code</th>
                <th>Nature Of Entity</th>
                <th>Name Of Entity</th>
                <th>Address Of Entity</th>
                <th>Nature Of Interest</th>
                <th>Date Held</th>
                <th>Total Investment</th>
                <th>Income From Interest</th>
                <th>Nature Of Income</th>
                <th>Income Tax Amount</th>
                <th>Income Tax Schedule</th>
                <th>Income Tax Schedule Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ verticalAlign: "baseline" }}>
                  {Object.keys(initialRow).map((field) => (
                    <td key={field} style={{ width: "8.2%" }} className="form-group">
                      {field === "NatureOfInt" || field === "IncTaxSch" ? (
                        <select
                          className="vehicle_row_input form-control rounded-0"
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        >
                          {field === "NatureOfInt" && (
                            <>
                              <option value="DIRECT">DIRECT</option>
                              <option value="BENEFICIAL_OWNER">BENEFICIAL OWNER</option>
                              <option value="BENIFICIARY">BENIFICIARY</option>
                            </>
                          )}
                          {field === "IncTaxSch" && (
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
                          type={field === "DateHeld" ? "date" : field.includes("Amt") || field.includes("Investment") || field.includes("Inc") ? "number" : "text"}
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                          onBlur={(e) =>
                            field.includes("Amt") || field.includes("Investment") || field.includes("Inc")
                              ? handleInputChange(index, field, formatNumber(e.target.value))
                              : null
                          }
                        />
                      )}
                    </td>
                  ))}
                  <td style={{ width: "8.2%" }} className="form-group">
                    <i
                      className="fas fa-times remove_financial_interest"
                      onClick={() => removeRow(index)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-success mt-2"
          onClick={addRow}
        >
          Add Row
        </button>
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

export default FinancialInterestForm;
