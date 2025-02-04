import React, { useState } from "react";
import BackButton from "../../Client Details/Backbutton";

const TrpInfoForm = () => {
  const [formData, setFormData] = useState({
    trpName: "",
    trpPin: "",
    trpReimbursement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., an API call
    console.log("Form submitted with:", formData);
  };

  const handleBackClick = () => {
    window.location.href = "/catalog_2024/more_info_final";
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Additional information needed for TRP(Tax Return Preparer)</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="row text-content">
            <div className="col-md-6">
              <div className="form-group">
                <span className="m-1">Name of the TRP</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="trpName"
                  value={formData.trpName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">TRP PIN</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="trpPin"
                  value={formData.trpPin}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">
                  If TRP is entitled with any reimbursement to Govt., amount thereof
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="trpReimbursement"
                  value={formData.trpReimbursement}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 d-flex">
            <input
              type="submit"
              style={{ width: "fit-content" }}
              className="btn btn-block rounded-0 btn-primary"
              value="Submit"
            />
          <BackButton link="/client/final/more-info" />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default TrpInfoForm;
