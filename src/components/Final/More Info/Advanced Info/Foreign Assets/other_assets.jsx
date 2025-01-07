import React, { useState } from "react";

const OtherAssets = () => {
  const [rows, setRows] = useState([
    {
      CountryName: "",
      CountryCodeExcludingIndia: "",
      ZipCode: "",
      NatureOfAsset: "",
      Ownership: "DIRECT",
      DateOfAcq: "",
      TotalInvestment: "",
      IncDrvAsset: "",
      NatureOfInc: "",
      IncTaxAmt: "",
      IncTaxSch: "SA",
      IncTaxSchNo: "",
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
        CountryName: "",
        CountryCodeExcludingIndia: "",
        ZipCode: "",
        NatureOfAsset: "",
        Ownership: "DIRECT",
        DateOfAcq: "",
        TotalInvestment: "",
        IncDrvAsset: "",
        NatureOfInc: "",
        IncTaxAmt: "",
        IncTaxSch: "SA",
        IncTaxSchNo: "",
      },
    ]);
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

  const handleNumberChange = (index, field, value) => {
    const formattedValue = formatNumber(value);
    handleInputChange(index, field, formattedValue);
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Other Assets</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Zip Code</th>
                <th>Nature Of Asset</th>
                <th>Ownership</th>
                <th>Date Of Acquisition</th>
                <th>Total Investment</th>
                <th>Income Derived From Asset</th>
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
                  {Object.keys(row).map((field) => (
                    <td key={field} style={{ width: "8.2%" }} className="form-group">
                      {field === "Ownership" || field === "IncTaxSch" ? (
                        <select
                          className="vehicle_row_input form-control rounded-0"
                          value={row[field]}
                          onChange={(e) =>
                            handleInputChange(index, field, e.target.value)
                          }
                        >
                          {field === "Ownership" ? (
                            <>
                              <option value="DIRECT">DIRECT</option>
                              <option value="BENEFICIAL_OWNER">BENEFICIAL OWNER</option>
                              <option value="BENIFICIARY">BENIFICIARY</option>
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
                          type={
                            field === "DateOfAcq"
                              ? "date"
                              : ["TotalInvestment", "IncDrvAsset", "IncTaxAmt"].includes(field)
                              ? "number"
                              : "text"
                          }
                          value={row[field]}
                          onChange={(e) =>
                            ["TotalInvestment", "IncDrvAsset", "IncTaxAmt"].includes(
                              field
                            )
                              ? handleNumberChange(index, field, e.target.value)
                              : handleInputChange(index, field, e.target.value)
                          }
                        />
                      )}
                    </td>
                  ))}
                  <td style={{ width: "8.2%" }} className="form-group">
                    <i
                      className="fas fa-times remove_other_asset"
                      onClick={() => removeRow(index)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={addRow}
          >
            Add Row
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 d-flex">
          <button
            type="button"
            className="btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
            onClick={() => window.location.href = "#"} // Replace '#' with your URL
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherAssets;
