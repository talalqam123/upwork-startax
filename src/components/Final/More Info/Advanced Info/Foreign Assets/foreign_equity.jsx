import React, { useState } from "react";

const ForeignEquityDebtInterest = () => {
  const [rows, setRows] = useState([
    {
      CountryName: "",
      CountryCodeExcludingIndia: "",
      NameOfEntity: "",
      AddressOfEntity: "",
      ZipCode: "",
      NatureOfEntity: "",
      InterestAcquiringDate: "",
      InitialValOfInvstmnt: "",
      PeakBalanceDuringPeriod: "",
      ClosingBalance: "",
      TotGrossAmtPaidCredited: "",
      TotGrossProceeds: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        CountryName: "",
        CountryCodeExcludingIndia: "",
        NameOfEntity: "",
        AddressOfEntity: "",
        ZipCode: "",
        NatureOfEntity: "",
        InterestAcquiringDate: "",
        InitialValOfInvstmnt: "",
        PeakBalanceDuringPeriod: "",
        ClosingBalance: "",
        TotGrossAmtPaidCredited: "",
        TotGrossProceeds: "",
      },
    ]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
      setRows(newRows);
    }
  };

  const formatNumber = (value) => {
    return Number(Math.round(value)).toLocaleString("en-in");
  };

  const handleBlur = (index, field) => {
    const value = rows[index][field];
    if (value) {
      handleInputChange(index, field, formatNumber(value));
    }
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Foreign Equity Debt Interest</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Name of Entity</th>
                <th>Address of Entity</th>
                <th>Zip Code</th>
                <th>Nature of Entity</th>
                <th>Interest Acquiring Date</th>
                <th>Initial Value of Investment</th>
                <th>Peak Balance During Period</th>
                <th>Closing Balance</th>
                <th>Total Gross Amount Paid/Credited</th>
                <th>Total Gross Proceeds</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ verticalAlign: "baseline" }}>
                  {Object.keys(row).map((field) => (
                    <td key={field} style={{ width: "8.2%" }} className="form-group">
                      {field === "InterestAcquiringDate" ? (
                        <input
                          className="vehicle_row_input form-control rounded-0"
                          type="date"
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        />
                      ) : (
                        <input
                          className="vehicle_row_input form-control rounded-0"
                          type={field.includes("Val") || field.includes("Balance") || field.includes("Proceeds") ? "number" : "text"}
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                          onBlur={() =>
                            field.includes("Val") ||
                            field.includes("Balance") ||
                            field.includes("Proceeds")
                              ? handleBlur(index, field)
                              : null
                          }
                        />
                      )}
                    </td>
                  ))}
                  <td style={{ width: "8.2%" }} className="form-group">
                    <i
                      className="fas fa-times remove_equity_debt_interest"
                      onClick={() => removeRow(index)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={13}>
                  <button className="btn btn-primary" onClick={addRow}>
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
          <button
            type="button"
            className="btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
            onClick={() => (window.location.href = "/foreign_assets_incomes_taxes")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForeignEquityDebtInterest;
