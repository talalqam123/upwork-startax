import React, { useState } from 'react';

const OtherDeductions = () => {
  const [formData, setFormData] = useState({
    section_80dd_disability: "",
    section_80dd_dependent_pan: "",
    section_8u_form_10ia_filling_date: "",
    section_80u_uuid_no: "",
    section_80dd_dependent_type: "",
    section_80dd_aadhaar_of_dependent: "",
    section_80dd_10ia_ack_no: "",
    section_80dd_type_of_disability: "",
    section_80dd_10ia_filling_date: "",
    section_80dd_uuid_no: "",
    section_80u_dependent_type: "",
    section_80u_from_10ia_ack_no: "",
  });

  const [politicalParties, setPoliticalParties] = useState([
    {
      section_80ggc_id: "",
      section_80ggc_amount_paid_via_cash: "",
      section_80ggc_transaction_ref_no: "",
      section_80ggc_contribution_date: "",
      section_80ggc_ifsc_bank_code: "",
    },
  ]);
  const handleInputChange = (index, field, value) => {
    const updatedParties = [...politicalParties];
    if (field === "section_80ggc_contribution_date") {
      updatedParties[index][field] = formatInput(value);
    } else {
      updatedParties[index][field] = value;
    }
    setPoliticalParties(updatedParties);
  };const addPoliticalParty = () => {
    setPoliticalParties([
      ...politicalParties,
      {
        section_80ggc_id: "",
        section_80ggc_amount_paid_via_cash: "",
        section_80ggc_transaction_ref_no: "",
        section_80ggc_contribution_date: "",
        section_80ggc_ifsc_bank_code: "",
      },
    ]);
  };

  const removePoliticalParty = (index) => {
    if (politicalParties.length === 1) {
      const reset = [...politicalParties];
      reset[index] = {
        section_80ggc_id: "",
        section_80ggc_amount_paid_via_cash: "",
        section_80ggc_transaction_ref_no: "",
        section_80ggc_contribution_date: "",
        section_80ggc_ifsc_bank_code: "",
      };
      setPoliticalParties(reset);
    } else {
      setPoliticalParties(politicalParties.filter((_, i) => i !== index));
    }
  };
  const formatInput = (value) => {
    return value
      .replace(/^(\d\d)(\d)$/g, "$1/$2")
      .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
      .replace(/[^\d/]/g, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "section_8u_form_10ia_filling_date" ? formatInput(value) : value,
    });
  };
  const handle80UChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "section_80dd_10ia_filling_date" ? formatInput(value) : value,
    });
  };

  return (
    <div className="pt-3">
      <strong>More deductions Under Section 80</strong>
      <br />
      <form method="POST" action="/catalog_2024/other_deduction/">
        <input type="hidden" name="client_id" value="{client_id}" />
        <div className="card card-body">
          <div>
            <strong>Section 80DD - Disabled dependent deduction. (Spouse/Children/Parents)</strong>
          </div>
          <div className="row mt-3 text-content">
            <div className="col-md-6">
              <div className="form-group">
                <label>Type of Disability</label>
                <select
                  name="section_80dd_disability"
                  className="form-control rounded-0"
                  value={formData.section_80dd_disability}
                  onChange={handleChange}
                >
                  <option value="">Select Option</option>
                  <option value="FortyPercentDisability">40% Disability</option>
                  <option value="SevereDisability">Severe Disability</option>
                </select>
              </div>
              <div className="form-group">
                <label>PAN of Dependent</label>
                <input
                  type="number"
                  name="section_80dd_dependent_pan"
                  value={formData.section_80dd_dependent_pan}
                  onChange={handleChange}
                  className="form-control rounded-0"
                />
              </div>
              <div className="form-group">
                <label>Form 10IA Filing Date</label>
                <input
                  type="text"
                  name="section_8u_form_10ia_filling_date"
                  maxLength="10"
                  value={formData.section_8u_form_10ia_filling_date}
                  onChange={handleChange}
                  className="form-control rounded-0 date-input"
                />
              </div>
              <div className="form-group">
                <label>UDID No. (if available)</label>
                <input
                  type="text"
                  name="section_80u_uuid_no"
                  value={formData.section_80u_uuid_no}
                  onChange={handleChange}
                  className="form-control rounded-0"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Dependent Type*</label>
                <select
                  name="section_80dd_dependent_type"
                  className="form-control rounded-0"
                  value={formData.section_80dd_dependent_type}
                  onChange={handleChange}
                >
                  <option value="">Select Option</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                </select>
              </div>
              <div className="form-group">
                <label>Aadhaar of Dependent</label>
                <input
                  type="text"
                  name="section_80dd_aadhaar_of_dependent"
                  value={formData.section_80dd_aadhaar_of_dependent}
                  onChange={handleChange}
                  className="form-control rounded-0"
                />
              </div>
              <div className="form-group">
                <label>Form 10IA Ack No.</label>
                <input
                  type="text"
                  name="section_80dd_10ia_ack_no"
                  value={formData.section_80dd_10ia_ack_no}
                  onChange={handleChange}
                  className="form-control rounded-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-body">
      <div className="form_heading">
        <div>
          <strong>Section 80U - Disability</strong>
        </div>
      </div>

      <div className="row mt-3 text-content">
        <div className="col-md-6">
          <div className="form-group">
            <label>Type of Disability</label>
            <select
              name="section_80dd_type_of_disability"
              className="form-control rounded-0"
              value={formData.section_80dd_type_of_disability}
              onChange={handle80UChange}
            >
              <option value="">Select Option</option>
              <option value="FortyPercentDisability">40% Disability</option>
              <option value="SevereDisability">Severe Disability</option>
            </select>
          </div>
          <div className="form-group">
            <label>Form 10IA Filing Date</label>
            <input
              type="text"
              name="section_80dd_10ia_filling_date"
              maxLength="10"
              value={formData.section_80dd_10ia_filling_date}
              onChange={handle80UChange}
              className="form-control rounded-0 date-input"
            />
          </div>
          <div className="form-group">
            <label>UDID No. (if available)</label>
            <input
              type="text"
              name="section_80dd_uuid_no"
              value={formData.section_80dd_uuid_no}
              onChange={handle80UChange}
              className="form-control rounded-0"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Dependent Type*</label>
            <select
              name="section_80u_dependent_type"
              className="form-control rounded-0"
              value={formData.section_80u_dependent_type}
              onChange={handle80UChange}
            >
              <option value="">Select Option</option>
              <option value="Spouse">Spouse</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
            </select>
          </div>
          <div className="form-group">
            <label>Form 10IA Ack No.</label>
            <input
              type="text"
              name="section_80u_from_10ia_ack_no"
              value={formData.section_80u_from_10ia_ack_no}
              onChange={handle80UChange}
              className="form-control rounded-0"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="card card-body">
      <div className="form_heading">
        <div>
          <strong>Section 80GGC - Contribution To Political Party</strong>
        </div>
      </div>

      {politicalParties.map((party, index) => (
        <div
          key={index}
          className="row mt-3 80ggc callout callout-info position-relative text-content"
        >
          <button
            className="btn btn-sm btn-danger remove-btn-80ggc"
            type="button"
            onClick={() => removePoliticalParty(index)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <input
            type="hidden"
            name="section_80ggc_id[]"
            value={party.section_80ggc_id}
          />
          <div className="col-md-6">
            <div className="form-group">
              <label>Amount paid via cash</label>
              <input
                type="text"
                name="section_80ggc_amount_paid_via_cash[]"
                value={party.section_80ggc_amount_paid_via_cash}
                onChange={(e) =>
                  handleInputChange(index, "section_80ggc_amount_paid_via_cash", e.target.value)
                }
                className="form-control rounded-0"
              />
            </div>
            <div className="form-group">
              <label>Transaction Ref No. (Optional)</label>
              <input
                type="text"
                name="section_80ggc_transaction_ref_no[]"
                value={party.section_80ggc_transaction_ref_no}
                onChange={(e) =>
                  handleInputChange(index, "section_80ggc_transaction_ref_no", e.target.value)
                }
                className="form-control rounded-0"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Contribution Date (DD/MM/YYYY)</label>
              <input
                type="text"
                name="section_80ggc_contribution_date[]"
                maxLength="10"
                value={party.section_80ggc_contribution_date}
                onChange={(e) =>
                  handleInputChange(index, "section_80ggc_contribution_date", e.target.value)
                }
                className="form-control rounded-0 date-input"
              />
            </div>
            <div className="form-group">
              <label>IFSC Code of Bank (Optional)</label>
              <input
                type="text"
                name="section_80ggc_ifsc_bank_code[]"
                value={party.section_80ggc_ifsc_bank_code}
                onChange={(e) =>
                  handleInputChange(index, "section_80ggc_ifsc_bank_code", e.target.value)
                }
                className="form-control rounded-0"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="80ggc_btn">
        <button
          className="btn btn-info btn-sm add_80ggc rounded-0"
          type="button"
          onClick={addPoliticalParty}
        >
          Add More
        </button>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <input
            type="submit"
            style={{ width: "fit-content" }}
            className="btn btn-block btn-primary"
            value="Submit"
          />
        </div>
      </div>
    </div>
      </form>
    </div>
  );
};

export default OtherDeductions;
