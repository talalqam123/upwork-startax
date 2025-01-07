import React, { useState } from 'react';

const TCSForm = () => {
  const [tcsEntries, setTcsEntries] = useState([
    {
      collectorName: "",
      collectorTan: "",
      collectorTax: "",
      collectorClaimedTax: "",
      expenditureAgainstTCS: "",
      financialYear: "2023",
    },
  ]);

  const handleAddEntry = () => {
    setTcsEntries([
      ...tcsEntries,
      {
        collectorName: "",
        collectorTan: "",
        collectorTax: "",
        collectorClaimedTax: "",
        expenditureAgainstTCS: "",
        financialYear: "2023",
      },
    ]);
  };

  const handleRemoveEntry = (index) => {
    if (tcsEntries.length > 1) {
      setTcsEntries(tcsEntries.filter((_, i) => i !== index));
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedEntries = tcsEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setTcsEntries(updatedEntries);
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Add a TCS entry (Tax Collected at Source)</strong>
      </div>
      <form method="POST" action="/submit-tcs-form">
        <div className="card card-body text-content">
          <div>
            <strong>Tax Collected At Source</strong>
          </div>
          <span>Provide this information from TCS certificate provided by deductor</span>
          <div id="tcs-form-id" className="row mt-3">
            {tcsEntries.map((entry, index) => (
              <div key={index} className="tcs-certificate-deductor col-md-12 row align-items-baseline">
                <div className="form-group px-1 col-md-2">
                  <label>Name of Collector *</label>
                  <input
                    name="collectorName[]"
                    value={entry.collectorName}
                    type="text"
                    className="form-control rounded-0"
                    onChange={(e) => handleInputChange(index, "collectorName", e.target.value)}
                  />
                </div>
                <div className="form-group px-1 col-md-2">
                  <label>TAN of Collector *</label>
                  <input
                    type="text"
                    name="collectorTan[]"
                    value={entry.collectorTan}
                    className="form-control rounded-0"
                    onChange={(e) => handleInputChange(index, "collectorTan", e.target.value)}
                  />
                </div>
                <div className="form-group px-1 col-md-2">
                  <label>Total Tax Collected *</label>
                  <input
                    type="text"
                    name="collectorTax[]"
                    value={entry.collectorTax}
                    className="form-control rounded-0"
                    onChange={(e) => handleInputChange(index, "collectorTax", e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <div className="row align-items-baseline">
                    <div className="form-group px-1 col-md-4">
                      <label>Tax Collected claimed for this year *</label>
                      <input
                        type="text"
                        name="collectorClaimedTax[]"
                        value={entry.collectorClaimedTax}
                        className="form-control rounded-0"
                        onChange={(e) => handleInputChange(index, "collectorClaimedTax", e.target.value)}
                      />
                    </div>
                    <div className="form-group px-1 col-md-4">
                      <label>Expenditure against which TCS was deducted *</label>
                      <input
                        type="text"
                        name="expenditureAgainstTCS[]"
                        value={entry.expenditureAgainstTCS}
                        className="form-control rounded-0"
                        onChange={(e) => handleInputChange(index, "expenditureAgainstTCS", e.target.value)}
                      />
                    </div>
                    <div className="form-group px-1 col-md-3">
                      <label>Financial Year</label>
                      <select
                        name="financialYear[]"
                        className="form-control rounded-0"
                        value={entry.financialYear}
                        onChange={(e) => handleInputChange(index, "financialYear", e.target.value)}
                      >
                        <option value="2023">2023-2024</option>
                        <option value="2022">2022-2023</option>
                        <option value="2021">2021-2022</option>
                        <option value="2020">2020-2021</option>
                        <option value="2019">2019-2020</option>
                        <option value="2018">2018-2019</option>
                        <option value="2017">2017-2018</option>
                        <option value="2016">2016-2017</option>
                        <option value="2015">2015-2016</option>
                        <option value="2014">2014-2015</option>
                        <option value="2013">2013-2014</option>
                      </select>
                    </div>
                    <div className="col-md-1 px-1 form-group">
                      <label>&nbsp;</label>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveEntry(index)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-info add-more-tcs-form"
              onClick={handleAddEntry}
            >
              Add more
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 d-flex">
            <input
              type="submit"
              style={{ width: "fit-content" }}
              className="btn btn-block btn-primary"
              value="Submit"
            />
            <button
              type="button"
              className="Back_button_tds btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
              onClick={() => (window.location.href = "/back-url")}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TCSForm;
