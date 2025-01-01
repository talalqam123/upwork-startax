import React, { useState } from 'react';

const MoreDeductions = () => {
  const [formData, setFormData] = useState({
    section_80_education_loan: "",
    section_80_contribution_to_pension: "",
    section_80_80ccd_1b: "",
    section_80_80ccd_1: "",
    section_80_80ccd_2_employer_in_nps: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data here
    console.log("Form submitted", formData);
  };

  return (
    <div className="pt-3">
      <strong>More deductions Under Section 80</strong>
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="row mt-3 text-content">
            <div className="col-md-12">
              <div className="form-group row align-items-center">
                <span className="col-3">
                  <strong>80E - Education Loan on higher studies</strong>
                </span>
                <span className="col-2 text-danger text-right">1234</span>
                <input
                  type="text"
                  name="section_80_education_loan"
                  value={formData.section_80_education_loan}
                  onChange={handleChange}
                  className="form-control rounded-0 col-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card card-body">
          <div className="row mt-3 text-content">
            <div className="col-md-12">
              <div className="form-group row align-items-center">
                <span className="col-3">
                  <strong>Section 80CCC - Contribution to Pension Plan / Annuity Fund</strong>
                </span>
                <span className="col-2 text-danger text-right">1234</span>
                <input
                  type="text"
                  name="section_80_contribution_to_pension"
                  value={formData.section_80_contribution_to_pension}
                  onChange={handleChange}
                  className="form-control rounded-0 col-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card card-body">
          <div className="form_heading">
            <div>
              <strong>
                Section 80CCD (1) and (1B) - Employee Contribution to New Pension Scheme (NPS).
              </strong>
            </div>
          </div>
          <div className="row mt-3 text-content">
            <div className="col-md-12">
              <div className="form-group row align-items-center">
                <span className="col-3">
                  <strong>Contribution towards Section 80CCD(1B)</strong>
                </span>
                <span className="col-2 text-danger text-right">1234</span>
                <input
                  type="text"
                  name="section_80_80ccd_1b"
                  value={formData.section_80_80ccd_1b}
                  onChange={handleChange}
                  className="form-control rounded-0 col-3"
                />
              </div>
              <div className="form-group row align-items-center">
                <span className="col-3">
                  <strong>Contribution towards Section 80CCD(1)</strong>
                </span>
                <span className="col-2 text-danger text-right">1234</span>
                <input
                  type="text"
                  name="section_80_80ccd_1"
                  value={formData.section_80_80ccd_1}
                  onChange={handleChange}
                  className="form-control rounded-0 col-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card card-body">
          <div className="row mt-3 text-content">
            <div className="col-md-12">
              <div className="form-group row align-items-center">
                <span className="col-3">
                  <strong>Section 80CCD(2) - Employer Contribution in NPS</strong>
                </span>
                <span className="col-2 text-danger text-right">1234</span>
                <input
                  type="text"
                  name="section_80_80ccd_2_employer_in_nps"
                  value={formData.section_80_80ccd_2_employer_in_nps}
                  onChange={handleChange}
                  className="form-control rounded-0 col-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <button type="submit" className="btn btn-block btn-primary" style={{ width: 'fit-content' }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MoreDeductions;
