import React, { useState } from 'react';

const TdsOnProperty = () => {
  const [tdsEntries, setTdsEntries] = useState([
    {
      nameOfBuyer: "",
      panOfBuyer: "",
      incomeAgainstTds: "",
      totalTax: "",
      taxDeductedThisYear: "",
      incomeType: "",
      financialYear: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedEntries = [...tdsEntries];
    updatedEntries[index][field] = value;
    setTdsEntries(updatedEntries);
  };

  const addTdsEntry = () => {
    setTdsEntries([
      ...tdsEntries,
      {
        nameOfBuyer: "",
        panOfBuyer: "",
        incomeAgainstTds: "",
        totalTax: "",
        taxDeductedThisYear: "",
        incomeType: "",
        financialYear: "",
      },
    ]);
  };

  const removeTdsEntry = (index) => {
    if (tdsEntries.length > 1) {
      const updatedEntries = tdsEntries.filter((_, i) => i !== index);
      setTdsEntries(updatedEntries);
    }
  };

  const financialYears = [
    "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", tdsEntries);
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Add a TDS entry (Tax Deducted at Source) for Sale/Rent of Immovable Property</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card card-body text-content">
          <div>
            <strong>Tax Deducted At Source for Sale/Rent of Immovable Property</strong>
          </div>
          <span>Provide this information from TDS certificate provided by the property buyer</span>
          <div id="tds-property-id" className="row mt-3">
            {tdsEntries.map((entry, index) => (
              <div key={index} className="tds-property-entry col-md-12 row align-items-baseline mb-2">
                <div className="col-md-5">
                  <div className="row align-items-baseline">
                    <div className="form-group px-1 col-md-4">
                      <label>Name of the Property Buyer / Tenant *</label>
                      <input
                        type="text"
                        value={entry.nameOfBuyer}
                        className="form-control rounded-0"
                        onChange={(e) => handleInputChange(index, "nameOfBuyer", e.target.value)}
                      />
                    </div>
                    <div className="form-group px-1 col-md-4">
                      <label>PAN of Property Buyer / Tenant *</label>
                      <input
                        type="text"
                        value={entry.panOfBuyer}
                        className="form-control rounded-0"
                        onChange={(e) => handleInputChange(index, "panOfBuyer", e.target.value)}
                      />
                    </div>
                    <div className="form-group px-1 col-md-4">
                      <label>Income against which TDS was deducted *</label>
                      <input
                        type="text"
                        value={entry.incomeAgainstTds}
                        className="form-control rounded-0"
                        onChange={(e) => handleInputChange(index, "incomeAgainstTds", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row align-items-baseline">
                    <div className="form-group px-1 col-md-3">
                      <label>Total Tax Deducted *</label>
                      <input
                        type="text"
                        value={entry.totalTax}
                        className="form-control rounded-0"
                        onChange={(e) => handleInputChange(index, "totalTax", e.target.value)}
                      />
                    </div>
                    <div className="form-group px-1 col-md-3">
                      <label>Tax Deducted claimed for this year *</label>
                      <input
                        type="text"
                        value={entry.taxDeductedThisYear}
                        className="form-control rounded-0"
                        onChange={(e) => handleInputChange(index, "taxDeductedThisYear", e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-baseline">
                        <div className="form-group px-1 col-md-6">
                          <label>Income Type</label>
                          <select
                            value={entry.incomeType}
                            className="form-control rounded-0"
                            onChange={(e) => handleInputChange(index, "incomeType", e.target.value)}
                          >
                            <option value="">Select Option</option>
                            <option value="CapitalGain">Capital Gain</option>
                            <option value="Property">House Property</option>
                          </select>
                        </div>
                        <div className="form-group px-1 col-md-5">
                          <label>Financial Year in which TDS was deducted</label>
                          <select
                            value={entry.financialYear}
                            className="form-control rounded-0"
                            onChange={(e) => handleInputChange(index, "financialYear", e.target.value)}
                          >
                            {financialYears.map((year) => (
                              <option key={year} value={year}>{`${year}-${+year + 1}`}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-1 form-group">
                          <label>&nbsp;</label>
                          <button
                            className="btn btn-danger btn-sm"
                            type="button"
                            onClick={() => removeTdsEntry(index)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="btn btn-info add-more-tds-property"
              type="button"
              onClick={addTdsEntry}
            >
              Add more
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 d-flex">
            <button
              type="submit"
              style={{ width: "fit-content" }}
              className="btn btn-block rounded-0 btn-primary"
            >
              Submit
            </button>
            <button
              className="Back_button_tds btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
              type="button"
              onClick={() => window.location.href = "#"} // Update URL as needed
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TdsOnProperty;
