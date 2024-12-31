import React, { useState } from "react";

const BusinessIncomeForm = ({ clientFullName, clientRelId }) => {
  const [businessDetails, setBusinessDetails] = useState([
    { nature: "", tradeName: "", description: "", turnover: "", expenditure: "", grossProfit: "", incomeFromTrading: "" },
  ]);

  const handleAddMore = () => {
    setBusinessDetails([
      ...businessDetails,
      { nature: "", tradeName: "", description: "", turnover: "", expenditure: "", grossProfit: "", incomeFromTrading: "" },
    ]);
  };

  const handleRemove = (index) => {
    const updatedDetails = businessDetails.filter((_, i) => i !== index);
    setBusinessDetails(updatedDetails);
  };

  const handleInputChange = (index, field, value) => {
    const updatedDetails = businessDetails.map((detail, i) =>
      i === index ? { ...detail, [field]: value } : detail
    );
    setBusinessDetails(updatedDetails);
  };

  return (
    <div className="rows_data">
      <form action="#">
        <div className="card card-body">
          <div className="row mt-3">
            <div className="form_heading">
              <div className="m-3">
                <strong>{clientFullName}: Schedule BP</strong>
              </div>
              <div className="m-3">
                <strong>Regular Business for ITR-3 (Speculative Income)</strong>
              </div>
            </div>

            <div className="col-md-12">
              <table className="table table-responsive">
                <tbody>
                  {businessDetails.map((detail, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-group">
                          <label className="m-1 text-content">Nature of Business</label>
                          <select
                            className="form-control rounded-0"
                            value={detail.nature}
                            onChange={(e) => handleInputChange(index, "nature", e.target.value)}
                          >
                            <option value="">Select Option</option>
                            <option value="CGovt">Central Government</option>
                            <option value="SGovt">State Government</option>
                            <option value="PSU">Public Sector Unit</option>
                            <option value="PE">Pensioners - Central Government</option>
                            <option value="PESG">Pensioners - State Government</option>
                            <option value="PEPS">Pensioners - PSU</option>
                            <option value="PEO">Pensioners - Others</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label className="m-1 text-content">Trade Name</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            value={detail.tradeName}
                            onChange={(e) => handleInputChange(index, "tradeName", e.target.value)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label className="m-1 text-content">Description</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            value={detail.description}
                            onChange={(e) => handleInputChange(index, "description", e.target.value)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group d-flex" style={{ flexDirection: "column" }}>
                          <label className="m-1 text-content">Cancel</label>
                          <div className="cancel btn btn-danger" onClick={() => handleRemove(index)}>
                            <i className="fas fa-trash"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" className="mb-3 w-auto btn btn-block bg-primary btn-flat" onClick={handleAddMore}>
                Add More
              </button>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1 text-content">1i: Turnover From Speculative Activity</label>
                <input
                  type="number"
                  className="form-control rounded-0"
                  value={businessDetails[0].turnover}
                  onChange={(e) => handleInputChange(0, "turnover", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="m-1 text-content">1iii: Expenditure, If Any</label>
                <input
                  type="number"
                  className="form-control rounded-0"
                  value={businessDetails[0].expenditure}
                  onChange={(e) => handleInputChange(0, "expenditure", e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1 text-content">1ii: Gross Profit</label>
                <input
                  type="number"
                  className="form-control rounded-0"
                  value={businessDetails[0].grossProfit}
                  onChange={(e) => handleInputChange(0, "grossProfit", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Income From Intraday Trading - Transferred To Profit And Loss Account</label>
                <input
                  type="number"
                  className="form-control rounded-0"
                  value={businessDetails[0].incomeFromTrading}
                  onChange={(e) => handleInputChange(0, "incomeFromTrading", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 d-flex">
            <input
              type="submit"
              style={{ width: "fit-content" }}
              className="btn btn-block rounded-0 btn-primary"
              value="Submit"
            />
            <button
              type="button"
              onClick={() => (window.location.href = `{% url 'catalog_2024:business' client_rel_id=${clientRelId} %}`)}
              className="Back_button btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessIncomeForm;
