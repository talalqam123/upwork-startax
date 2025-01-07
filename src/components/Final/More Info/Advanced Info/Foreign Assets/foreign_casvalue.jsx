import React, { useState } from "react";

const ForeignCashValueInsurance = () => {
  const [rows, setRows] = useState([
    {
      CountryName: "",
      CountryCodeExcludingIndia: "",
      FinancialInstName: "",
      FinancialInstAddress: "",
      ZipCode: "",
      ContractDate: "",
      CashValOrSurrenderVal: "",
      TotGrossAmtPaidCredited: "",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        CountryName: "",
        CountryCodeExcludingIndia: "",
        FinancialInstName: "",
        FinancialInstAddress: "",
        ZipCode: "",
        ContractDate: "",
        CashValOrSurrenderVal: "",
        TotGrossAmtPaidCredited: "",
      },
    ]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Foreign Cash Value Insurance</strong>
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
                <th>Contract Date</th>
                <th>Cash Value or Surrender Value</th>
                <th>Total Gross Amount Paid/Credited</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ verticalAlign: "baseline" }}>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.CountryName}
                      onChange={(e) =>
                        handleInputChange(index, "CountryName", e.target.value)
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.CountryCodeExcludingIndia}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "CountryCodeExcludingIndia",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.FinancialInstName}
                      onChange={(e) =>
                        handleInputChange(index, "FinancialInstName", e.target.value)
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.FinancialInstAddress}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "FinancialInstAddress",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.ZipCode}
                      onChange={(e) =>
                        handleInputChange(index, "ZipCode", e.target.value)
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="date"
                      value={row.ContractDate}
                      onChange={(e) =>
                        handleInputChange(index, "ContractDate", e.target.value)
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="number"
                      value={row.CashValOrSurrenderVal}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "CashValOrSurrenderVal",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="number"
                      value={row.TotGrossAmtPaidCredited}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "TotGrossAmtPaidCredited",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="form-group" style={{ width: "8.2%" }}>
                    <i
                      className="fas fa-times remove_cash_value_insurance"
                      onClick={() => removeRow(index)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="9">
                  <button
                    className="btn btn-sm btn-primary"
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
          <button
            type="button"
            className="btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
            onClick={() => {
              window.location.href = "/catalog_2024/foreign_assets_incomes_taxes/";
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForeignCashValueInsurance;