import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ForeignCustodialAccount = () => {
  const [accounts, setAccounts] = useState([
    {
      CountryName: "",
      CountryCodeExcludingIndia: "",
      FinancialInstName: "",
      FinancialInstAddress: "",
      ZipCode: "",
      AccountNumber: "",
      Status: "OWNER",
      AccOpenDate: "",
      PeakBalanceDuringPeriod: "",
      ClosingBalance: "",
      GrossAmtPaidCredited: "",
      NatureOfAmount: "I",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const newAccounts = [...accounts];
    newAccounts[index][field] = value;
    setAccounts(newAccounts);
  };

  const addNewRow = () => {
    setAccounts([
      ...accounts,
      {
        CountryName: "",
        CountryCodeExcludingIndia: "",
        FinancialInstName: "",
        FinancialInstAddress: "",
        ZipCode: "",
        AccountNumber: "",
        Status: "OWNER",
        AccOpenDate: "",
        PeakBalanceDuringPeriod: "",
        ClosingBalance: "",
        GrossAmtPaidCredited: "",
        NatureOfAmount: "I",
      },
    ]);
  };

  const removeRow = (index) => {
    if (accounts.length > 1) {
      const newAccounts = accounts.filter((_, i) => i !== index);
      setAccounts(newAccounts);
    }
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Foreign Custodial Account</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Financial Institution Name</th>
                <th>Financial Institution Address</th>
                <th>Zip Code</th>
                <th>Account Number</th>
                <th>Status</th>
                <th>Account Open Date</th>
                <th>Peak Balance During Period</th>
                <th>Closing Balance</th>
                <th>Gross Amount Paid/Credited</th>
                <th>Nature of Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => (
                <tr key={index} style={{ verticalAlign: "baseline" }}>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="text"
                      value={account.CountryName}
                      onChange={(e) => handleInputChange(index, "CountryName", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="text"
                      value={account.CountryCodeExcludingIndia}
                      onChange={(e) => handleInputChange(index, "CountryCodeExcludingIndia", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="text"
                      value={account.FinancialInstName}
                      onChange={(e) => handleInputChange(index, "FinancialInstName", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="text"
                      value={account.FinancialInstAddress}
                      onChange={(e) => handleInputChange(index, "FinancialInstAddress", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="text"
                      value={account.ZipCode}
                      onChange={(e) => handleInputChange(index, "ZipCode", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="text"
                      value={account.AccountNumber}
                      onChange={(e) => handleInputChange(index, "AccountNumber", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <select
                      className="form-control vehicle_row_input"
                      style={{ padding: "3px" }}
                      value={account.Status}
                      onChange={(e) => handleInputChange(index, "Status", e.target.value)}
                    >
                      <option value="OWNER">Owner</option>
                      <option value="BENEFICIAL_OWNER">Beneficial Owner</option>
                      <option value="BENIFICIARY">Beneficiary</option>
                    </select>
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="date"
                      value={account.AccOpenDate}
                      onChange={(e) => handleInputChange(index, "AccOpenDate", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="number"
                      value={account.PeakBalanceDuringPeriod}
                      onChange={(e) => handleInputChange(index, "PeakBalanceDuringPeriod", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="number"
                      value={account.ClosingBalance}
                      onChange={(e) => handleInputChange(index, "ClosingBalance", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <input
                      className="form-control vehicle_row_input rounded-0"
                      type="number"
                      value={account.GrossAmtPaidCredited}
                      onChange={(e) => handleInputChange(index, "GrossAmtPaidCredited", e.target.value)}
                    />
                  </td>
                  <td className="form-group">
                    <select
                      className="form-control vehicle_row_input"
                      style={{ padding: "3px" }}
                      value={account.NatureOfAmount}
                      onChange={(e) => handleInputChange(index, "NatureOfAmount", e.target.value)}
                    >
                      <option value="I">Interest</option>
                      <option value="D">Dividend</option>
                      <option value="S">Proceeds from Sale/Redemption</option>
                      <option value="O">Other Income</option>
                      <option value="N">No Amount Paid/Credited</option>
                    </select>
                  </td>
                  <td className="form-group">
                    <i
                      className="fas fa-times remove_vehile"
                      onClick={() => removeRow(index)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr style={{ verticalAlign: "baseline" }}>
                <td colSpan="13">
                  <button className="btn btn-primary" onClick={addNewRow}>
                    Add New Row
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

export default ForeignCustodialAccount;
