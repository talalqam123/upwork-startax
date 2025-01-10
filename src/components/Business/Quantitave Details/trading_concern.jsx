import React, { useState } from "react";
import BackButton from "../../Backbutton";

const DetailsOfTradingConcern = ({ clientFullName, clientRelId }) => {
  const [formData, setFormData] = useState({
    maintainAccounts: false,
    incomeOnly: false,
    turnoverBetween1to10Crore: false,
    liableForAudit: false,
    auditorName: "",
    auditorNameFirm: "",
    membershipNumber: "",
    auditorRegistrationNumber: "",
    auditFirmPAN: "",
    aadhaarOfAuditor: "",
    reportDate: "",
    reportFurnishingDate: "",
    liableForSection92E: false,
    hasPermanentEstablishment: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="rows_data">
      <form onSubmit={handleSubmit}>
        <div className="card-body card">
          <div className="form_heading pb-4">
            <div>
              <strong>{clientFullName}: Details of Trading Concern</strong>
            </div>
          </div>
          <div className="row text-content">
            <div className="col-md-12">
              <div className="form-group check">
                <input
                  type="checkbox"
                  name="maintainAccounts"
                  checked={formData.maintainAccounts}
                  onChange={handleChange}
                />
                <label>
                  Are you liable to maintain accounts as per section 44AA? *
                </label>
              </div>
              <div className="form-group check">
                <input
                  type="checkbox"
                  name="incomeOnly"
                  checked={formData.incomeOnly}
                  onChange={handleChange}
                />
                <label>
                  Are you declaring income only under section 44AE/44AD/44ADA/
                  44B/44BB/44BBA? *
                </label>
              </div>
              <div className="form-group check">
                <input
                  type="checkbox"
                  name="turnoverBetween1to10Crore"
                  checked={formData.turnoverBetween1to10Crore}
                  onChange={handleChange}
                />
                <label>
                  Does your total sales/turnover/gross receipts of business, not
                  profession, is between 1 to 10 Crore Rupees? *
                </label>
              </div>
              <div className="form-group check">
                <input
                  type="checkbox"
                  name="liableForAudit"
                  checked={formData.liableForAudit}
                  onChange={handleChange}
                />
                <label>Are you liable for audit under section 44AB?</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Name of the auditor (proprietorship/firm)</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="auditorName"
                  value={formData.auditorName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Auditor Name</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="auditorNameFirm"
                  value={formData.auditorNameFirm}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Membership Number of Auditor</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="membershipNumber"
                  value={formData.membershipNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Auditor Registration Number</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="auditorRegistrationNumber"
                  value={formData.auditorRegistrationNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Audit Firm PAN</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="auditFirmPAN"
                  value={formData.auditFirmPAN}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Aadhaar of Auditor (Optional)</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="aadhaarOfAuditor"
                  value={formData.aadhaarOfAuditor}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Date of report of the Audit / Date of signing Tax Audit Report - For 3CB-3CD</label>
                <input
                  type="date"
                  className="form-control rounded-0"
                  name="reportDate"
                  value={formData.reportDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Date of furnishing the Audit Report</label>
                <input
                  type="date"
                  className="form-control rounded-0"
                  name="reportFurnishingDate"
                  value={formData.reportFurnishingDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group check">
                <input
                  type="checkbox"
                  name="liableForSection92E"
                  checked={formData.liableForSection92E}
                  onChange={handleChange}
                />
                <label>Is Taxpayer liable to furnish a report under Section 92E?</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group check">
                <input
                  type="checkbox"
                  name="hasPermanentEstablishment"
                  checked={formData.hasPermanentEstablishment}
                  onChange={handleChange}
                />
                <label>
                  In the case of non-resident, is there a permanent establishment
                  (PE) in India?
                </label>
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
           <BackButton link="/client" />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default DetailsOfTradingConcern;
