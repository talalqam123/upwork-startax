import React, { useState } from "react";
import BackButton from "../../../../Backbutton";

const ImmovablePropertyForm = () => {
  const [rows, setRows] = useState([{
    CountryName: "",
    CountryCodeExcludingIndia: "",
    ZipCode: "",
    AddressOfProperty: "",
    Ownership: "DIRECT",
    DateOfAcq: "",
    TotalInvestment: "",
    IncDrvProperty: "",
    NatureOfInc: "",
    IncTaxAmt: "",
    IncTaxSch: "SA",
    IncTaxSchNo: "",
  }]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    if (
      ["TotalInvestment", "IncDrvProperty", "IncTaxAmt"].includes(field) &&
      value
    ) {
      updatedRows[index][field] = Number(value).toLocaleString("en-IN");
    }

    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...
    rows,
      {
        CountryName: "",
        CountryCodeExcludingIndia: "",
        ZipCode: "",
        AddressOfProperty: "",
        Ownership: "DIRECT",
        DateOfAcq: "",
        TotalInvestment: "",
        IncDrvProperty: "",
        NatureOfInc: "",
        IncTaxAmt: "",
        IncTaxSch: "SA",
        IncTaxSchNo: "",
      },
    ]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      setRows(rows.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Immovable Property</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Zip Code</th>
                <th>Address Of Property</th>
                <th>Ownership</th>
                <th>Date Of Acquisition</th>
                <th>Total Investment</th>
                <th>Income Derived From Property</th>
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
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.CountryName}
                      onChange={(e) =>
                        handleInputChange(index, "CountryName", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
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
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.ZipCode}
                      onChange={(e) =>
                        handleInputChange(index, "ZipCode", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.AddressOfProperty}
                      onChange={(e) =>
                        handleInputChange(index, "AddressOfProperty", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <select
                      className="vehicle_row_input form-control rounded-0"
                      value={row.Ownership}
                      onChange={(e) =>
                        handleInputChange(index, "Ownership", e.target.value)
                      }
                    >
                      <option value="DIRECT">DIRECT</option>
                      <option value="BENEFICIAL_OWNER">BENEFICIAL OWNER</option>
                      <option value="BENIFICIARY">BENIFICIARY</option>
                    </select>
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="date"
                      value={row.DateOfAcq}
                      onChange={(e) =>
                        handleInputChange(index, "DateOfAcq", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.TotalInvestment}
                      onChange={(e) =>
                        handleInputChange(index, "TotalInvestment", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.IncDrvProperty}
                      onChange={(e) =>
                        handleInputChange(index, "IncDrvProperty", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.NatureOfInc}
                      onChange={(e) =>
                        handleInputChange(index, "NatureOfInc", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.IncTaxAmt}
                      onChange={(e) =>
                        handleInputChange(index, "IncTaxAmt", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <select
                      className="vehicle_row_input form-control rounded-0"
                      value={row.IncTaxSch}
                      onChange={(e) =>
                        handleInputChange(index, "IncTaxSch", e.target.value)
                      }
                    >
                      <option value="SA">Salary</option>
                      <option value="HP">House Property</option>
                      <option value="CG">Capital Gains</option>
                      <option value="OS">Other Sources</option>
                      <option value="EI">Exempt Income</option>
                      <option value="NI">No Income during the year</option>
                    </select>
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <input
                      className="vehicle_row_input form-control rounded-0"
                      type="text"
                      value={row.IncTaxSchNo}
                      onChange={(e) =>
                        handleInputChange(index, "IncTaxSchNo", e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "8.2%" }}>
                    <i
                      className="fas fa-times remove_vehile"
                      onClick={() => removeRow(index)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={13} className="text-center">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
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

export default ImmovablePropertyForm;