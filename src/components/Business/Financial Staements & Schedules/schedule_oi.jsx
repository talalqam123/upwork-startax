import React, { useState } from "react";

const GSTDetailsForm = ({ clientFullName, clientRelId }) => {
  const [gstDetails, setGstDetails] = useState([
    { gstin: "", grossReceipt: "", isValidGstin: true },
  ]);

  const handleAddMore = () => {
    setGstDetails([
      ...gstDetails,
      { gstin: "", grossReceipt: "", isValidGstin: true },
    ]);
  };

  const handleRemove = (index) => {
    const updatedDetails = gstDetails.filter((_, i) => i !== index);
    setGstDetails(updatedDetails);
  };

  const handleInputChange = (index, field, value) => {
    const updatedDetails = gstDetails.map((detail, i) =>
      i === index ? { ...detail, [field]: value } : detail
    );
    setGstDetails(updatedDetails);

    if (field === "gstin") {
      validateGstin(value, index, updatedDetails);
    }
  };

  const validateGstin = (value, index, updatedDetails) => {
    const gstnPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    const isValid = gstnPattern.test(value);
    const updatedWithValidation = updatedDetails.map((detail, i) =>
      i === index ? { ...detail, isValidGstin: isValid } : detail
    );
    setGstDetails(updatedWithValidation);
  };

  return (
    <div className="rows_data">
      <form action="#">
        <div className="card card-body">
          <div className="form_heading">
            <div className="mt-3">
              <strong>{clientFullName}: Schedule OI (Other Information)</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1 text-content">GSTIN</label>
                <input
                  type="text"
                  className={`form-control rounded-0 ${
                    gstDetails.isValidGstin === false ? "border-danger" : ""
                  }`}
                  value={gstDetails.gstin}
                  onChange={(e) => handleInputChange(0, "gstin", e.target.value)}
                />
                {gstDetails.isValidGstin === false && (
                  <small className="text-danger">Invalid GSTIN format</small>
                )}
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Gross Receipts</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  value={gstDetails.grossReceipt}
                  onChange={(e) =>
                    handleInputChange(0, "grossReceipt", e.target.value)
                  }
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
              onClick={() =>
                (window.location.href = `/catalog_2024/business/${clientRelId}`)
              }
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

export default GSTDetailsForm;
