import React, { useState } from "react";
import BackButton from "../../Backbutton";

const RepresentativeAssesseeForm = () => {
  const [formData, setFormData] = useState({
    RepConsent: "",
    RepName: "",
    RepAddress: "",
    RepCapacity: "",
    RepCity: "",
    RepState: "",
    RepPincode: "",
    RepPAN: "",
    RepAadhaar: "",
    RepMobile: "",
    RepEmail: "",
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
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };



  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Representative Assessee</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="row text-content">
            <div className="col-md-6">
              <div className="form-group">
                <span className="m-1">
                  Whether this return is being filed by a representative assessee? If yes, furnish the following information.
                </span>
                <select
                  className="form-control rounded-0"
                  name="RepConsent"
                  value={formData.RepConsent}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
              <div className="form-group">
                <span className="m-1">Name of the Representative</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepName"
                  maxLength="125"
                  minLength="1"
                  value={formData.RepName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">Address of the Representative</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepAddress"
                  value={formData.RepAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control rounded-0"
                  name="RepCapacity"
                  value={formData.RepCapacity}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Capacity of the Representative
                  </option>
                  <option value="L">
                    Legal Heir / Official liquidator/Resolution Professional under NCLT
                  </option>
                  <option value="M">Manager</option>
                  <option value="G">Administrator General/Guardian</option>
                  <option value="O">Other</option>
                </select>
              </div>
              <div className="form-group">
                <span className="m-1">City</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepCity"
                  value={formData.RepCity}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">State</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepState"
                  value={formData.RepState}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">PIN Code</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepPincode"
                  value={formData.RepPincode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">PAN</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepPAN"
                  value={formData.RepPAN}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">Aadhaar of the Representative</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepAadhaar"
                  pattern="[0-9]{12}"
                  title="Please enter exactly 12 digits."
                  value={formData.RepAadhaar}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">Mobile No.</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepMobile"
                  value={formData.RepMobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">E-Mail</span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="RepEmail"
                  value={formData.RepEmail}
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
           <BackButton  link="/client" />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RepresentativeAssesseeForm;
