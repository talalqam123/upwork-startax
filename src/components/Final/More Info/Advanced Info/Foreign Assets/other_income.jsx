import React, { useState } from "react";
import BackButton from "../../../../Backbutton";

const OtherSourcesIncomeOutsideIndia = () => {
  const [rows, setRows] = useState([
    {
      CountryName: "",
      CountryCodeExcludingIndia: "",
      ZipCode: "",
      NameOfPerson: "",
      AddressOfPerson: "",
      IncDerived: "",
      NatureOfInc: "",
      IncDrvTaxFlag: "",
      IncOfferedAmt: "",
      IncOfferedSch: "",
      IncOfferedSchNo: "",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        CountryName: "",
        CountryCodeExcludingIndia: "",
        ZipCode: "",
        NameOfPerson: "",
        AddressOfPerson: "",
        IncDerived: "",
        NatureOfInc: "",
        IncDrvTaxFlag: "",
        IncOfferedAmt: "",
        IncOfferedSch: "",
        IncOfferedSchNo: "",
      },
    ]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      setRows(rows.filter((_, i) => i !== index));
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="card card-primary">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <strong>Other Sources Income Outside India</strong>
          </div>
        </div>
        <div className="card-body">
          <table className="fixed-table text-content" id="vehicle_income_table">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code Excluding India</th>
                <th>Zip Code</th>
                <th>Name Of Person</th>
                <th>Address Of Person</th>
                <th>Income Derived</th>
                <th>Nature Of Income</th>
                <th>Income Derived Tax Flag</th>
                <th>Income Offered Amount</th>
                <th>Income Offered Schedule</th>
                <th>Income Offered Schedule Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ verticalAlign: "baseline" }}>
                  {Object.keys(row).map((field, i) => (
                    <td key={i} style={{ width: "9%" }} className="form-group">
                      {field === "IncDrvTaxFlag" || field === "IncOfferedSch" ? (
                        <select
                          className="vehicle_row_input form-control rounded-0"
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        >
                          {field === "IncDrvTaxFlag" && (
                            <>
                              <option value="">Select</option>
                              <option value="Y">Yes</option>
                              <option value="N">No</option>
                            </>
                          )}
                          {field === "IncOfferedSch" && (
                            <>
                              <option value="">Select</option>
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
                          type={field === "IncDerived" || field === "IncOfferedAmt" ? "number" : "text"}
                          value={row[field]}
                          onChange={(e) => handleInputChange(index, field, e.target.value)}
                        />
                      )}
                    </td>
                  ))}
                  <td style={{ width: "9%" }} className="form-group">
                    <i
                      className="fas fa-times remove_vehile"
                      onClick={() => removeRow(index)}
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
         <BackButton link="/client/final/foreign_assets_incomes_taxes" />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default OtherSourcesIncomeOutsideIndia;
