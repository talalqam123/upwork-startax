import React, { useState } from "react";
import BackButton from "../../Backbutton";

const AuditorDetailsForm = ({ clientFullName, clientRelId }) => {
  const [profitBeforeTax, setProfitBeforeTax] = useState("");

  const handleInputChange = (event) => {
    setProfitBeforeTax(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", profitBeforeTax);
    // Add further submit logic if necessary
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="rows_data">
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="form_heading">
            <div className="mt-3">
              <strong>{clientFullName}: Auditor Details</strong>
            </div>
            <div className="mt-3">
              <strong>Schedule Business and Profession - Income from Business and Profession</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1 text-content">Profit before tax as per P/L Account.*</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  value={profitBeforeTax}
                  onChange={handleInputChange}
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
            <BackButton link="/client" />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default AuditorDetailsForm;

