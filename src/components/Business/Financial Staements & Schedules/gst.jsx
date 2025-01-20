import React, { useState } from "react";
import BackButton from "../../Client Details/Backbutton";

const GSTDetailsForm = () => {
  const gstnPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

  const [gstDetails, setGstDetails] = useState([
    { gstn: "", grossReceipt: "", isValidGstn: true },
  ]);

  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleAddMore = () => {
    setGstDetails([
      ...gstDetails,
      { gstn: "", grossReceipt: "", isValidGstn: true },
    ]);
  };

  const handleRemove = (index) => {
    if (gstDetails.length > 1) {
      const updatedDetails = gstDetails.filter((_, i) => i !== index);
      setGstDetails(updatedDetails);
    } else {
      setGstDetails([{ gstn: "", grossReceipt: "", isValidGstn: true }]);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedDetails = gstDetails.map((detail, i) =>
      i === index ? { ...detail, [field]: value } : detail
    );
    setGstDetails(updatedDetails);

    if (field === "gstn") {
      validateGstn(value, index, updatedDetails);
    }
  };

  const validateGstn = (value, index, updatedDetails) => {
    const isValid = gstnPattern.test(value);
    const updatedWithValidation = updatedDetails.map((detail, i) =>
      i === index ? { ...detail, isValidGstn: isValid } : detail
    );
    setGstDetails(updatedWithValidation);

    const allValid = updatedWithValidation.every(
      (detail) => detail.isValidGstn || detail.isValidGstn === null
    );
    setSubmitDisabled(!allValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted GST Details:", gstDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card card-body">
        <div className="form_heading">
          <div className="mt-3">
            <strong>GST Details</strong>
          </div>
        </div>
        <div className="mt-2">
          {gstDetails.map((detail, index) => (
            <div className="row gst-row" key={index}>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="m-1 text-content">GSTN</label>
                  <input
                    type="text"
                    className={`form-control rounded-0 gst_name ${
                      detail.isValidGstn === false ? "border-danger" : ""
                    }`}
                    value={detail.gstn}
                    maxLength="15"
                    onChange={(e) =>
                      handleInputChange(index, "gstn", e.target.value)
                    }
                  />
                  {detail.isValidGstn === false && (
                    <span
                      className="gstn-message"
                      style={{ color: "red", fontSize: "small" }}
                    >
                      Invalid GSTN format
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="m-1 text-content">Gross receipts</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    value={detail.grossReceipt}
                    onChange={(e) =>
                      handleInputChange(index, "grossReceipt", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-danger remove_gst btn-sm mt-4"
                  type="button"
                  onClick={() => handleRemove(index)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-info add-more-gst"
            onClick={handleAddMore}
          >
            Add More
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 d-flex">
          <input
            type="submit"
            style={{ width: "fit-content" }}
            className="btn btn-block btn-primary"
            id="submit_gstn"
            value="Submit"
            disabled={isSubmitDisabled}
          />
          <BackButton link="/client" />
        </div>
      </div>
    </form>
  );
};

export default GSTDetailsForm;
