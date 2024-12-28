import React, { useState } from "react";

const BasicDetailsForm = () => {
  const [formData, setFormData] = useState({
    year: "",
    tab: "address",
    client_id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    father_name: "",
    PAN_numbr: "",
    CIN_numbr: "",
    DOB: "",
    date_of_commencement: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission (e.g., API call)
  };

  return (
    <form id="editClientForm" onSubmit={handleSubmit}>
      <input type="hidden" name="year" value={formData.year} />
      <input type="hidden" name="tab" value={formData.tab} />
      <div className="card card-body">
        <div className="pt-3 mb-1">
          <strong>Basic Details</strong>
        </div>
        <div className="row text-content">
          <div className="col-md-6">
            {/* Client ID */}
            <input type="hidden" name="client_id" value={formData.client_id} />

            {/* First Name */}
            <div className="form-group d-block">
              <label className="m-1">First Name <small>(optional)</small></label>
              <input
                type="text"
                name="first_name"
                className="form-control rounded-0 text-capitalize"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>

            {/* Middle Name */}
            <div className="form-group d-block">
              <label className="m-1">Middle Name <small>(optional)</small></label>
              <input
                type="text"
                name="middle_name"
                className="form-control rounded-0 text-capitalize"
                value={formData.middle_name}
                onChange={handleInputChange}
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label className="m-1">
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                className="form-control rounded-0 text-capitalize"
                required
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>

            {/* Father's Name */}
            <div className="form-group d-block">
              <label className="m-1">Father's Name <small>(optional)</small></label>
              <input
                type="text"
                name="father_name"
                className="form-control rounded-0 text-capitalize"
                value={formData.father_name}
                onChange={handleInputChange}
              />
            </div>

            {/* PAN Number */}
            <div className="form-group">
              <label className="m-1">
                PAN Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="PAN_numbr"
                className="form-control rounded-0"
                required
                value={formData.PAN_numbr}
                onChange={handleInputChange}
                style={{ textTransform: "uppercase" }}
              />
            </div>

            {/* CIN Number */}
            <div className="form-group d-none">
              <label className="m-0">
                CIN Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="CIN_numbr"
                className="form-control rounded-0 text-uppercase"
                value={formData.CIN_numbr}
                onChange={handleInputChange}
              />
            </div>

            {/* Date Of Birth */}
            <div className="form-group">
              <label className="m-1" htmlFor="dob">
                Date of Birth <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control rounded-0 date-input"
                name="DOB"
                id="dob"
                required
                maxLength="10"
                value={formData.DOB}
                onChange={handleInputChange}
              />
            </div>

            {/* Date of Commencement */}
            <div className="form-group d-none">
              <label className="m-0">
                Date of Commencement of Business
              </label>
              <input
                type="text"
                name="date_of_commencement"
                className="form-control rounded-0 date-input"
                maxLength="10"
                value={formData.date_of_commencement}
                onChange={handleInputChange}
              />
            </div>

            {/* Gender */}
            <div className="form-group d-block">
              <label className="m-1">Gender <small>(optional)</small></label>
              <select
                className="form-control rounded-0"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 up-fixedbtn">
          <button
            type="submit"
            id="submit_client_details_form"
            className="btn btn-block rounded-0 btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicDetailsForm;
