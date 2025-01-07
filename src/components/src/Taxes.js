import React, { useState } from "react";
import "./App.css";

const Taxes = ({ client, yearRange, clientYear, clientRelId }) => {
  return (
    <div className="container">
      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mb-3">
        <a
          className="btn btn-warning"
          href={`/catalog_2024/filling/${clientRelId}`}
        >
          Back
        </a>
        <a
          className="btn btn-primary"
          href={`/basic_details/export_report_download/${clientYear}/${clientRelId}`}
        >
          Download
        </a>
      </div>

      {/* Assessment Year */}
      <h2 className="text-right">AY {yearRange}</h2>

      {/* Client Name */}
      <table className="w-100 mb-3">
        <tbody>
          <tr className="client_name">
            <td style={{ fontSize: "22px" }}>
              <strong>{client.getFullName}</strong>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Personal Details */}
      <table className="table table-bordered w-100 mb-3">
        <thead>
          <tr>
            <td className="report-header" colSpan="4">
              <strong>Personal Details</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PAN Number:</strong></td>
            <td>{client.panNumber}</td>
            <td><strong>Father's Name:</strong></td>
            <td>{client.fatherName || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Marital Status:</strong></td>
            <td>{client.maritalStatus || "N/A"}</td>
            <td><strong>Gender:</strong></td>
            <td>{client.gender || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Residence Type:</strong></td>
            <td>{client.address.residenceType}</td>
            <td><strong>Residence No:</strong></td>
            <td>{client.address.residenceNo}</td>
          </tr>
          <tr>
            <td><strong>Residence Name:</strong></td>
            <td>{client.address.residenceName}</td>
            <td><strong>Road Or Street:</strong></td>
            <td>{client.address.roadStreet}</td>
          </tr>
          <tr>
            <td><strong>Locality Or Area:</strong></td>
            <td>{client.address.locality}</td>
            <td><strong>City:</strong></td>
            <td>{client.address.city}</td>
          </tr>
          <tr>
            <td><strong>State:</strong></td>
            <td>{client.address.stateName}</td>
            <td><strong>Country:</strong></td>
            <td>{client.address.countryName}</td>
          </tr>
          <tr>
            <td><strong>Pincode:</strong></td>
            <td>{client.address.pincode}</td>
            <td><strong>Mobile Phone Number:</strong></td>
            <td>{client.address.phoneNumber}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{client.address.email}</td>
          </tr>
        </tbody>
      </table>

      {/* Bank Details */}
      <table className="table table-bordered w-100">
        <thead>
          <tr>
            <td className="report-header" colSpan="4">
              <strong>Bank Details</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Aadhaar No:</strong></td>
            <td>{client.aadhaarDetails.aadhaarNo}</td>
            <td><strong>Aadhaar Enrollment No:</strong></td>
            <td>{client.aadhaarDetails.aadhaarEnrollmentNo}</td>
          </tr>
          {client.bankDetails.map((bank, index) => (
            <tr key={index}>
              <td><strong>IFSC Code:</strong> {bank.ifscCode}</td>
              <td><strong>Bank Account No:</strong> {bank.accountNo}</td>
              <td><strong>Bank Name:</strong> {bank.bankName}</td>
              <td><strong>Bank Type:</strong> {bank.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/*
export default Taxes;

const Taxes = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="process-sec-cntnt">
      <div className="process-tab-btns">
        <ul>
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => handleTabClick("tab1")}
          >
            <span>Tax Summary</span>
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => handleTabClick("tab2")}
          >
            <span>Income Details</span>
          </li>
          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => handleTabClick("tab3")}
          >
            <span>Deductions</span>
          </li>
        </ul>
      </div>

      <div className="process-tabs-cntnt">
        {activeTab === "tab1" && (
          <div className="p-tab-cntnt active">
            <div className="p-tab-c1">
              <span>Tax Summary</span>
              <p>
                View your overall tax details and calculations for the selected
                financial year.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="p-tab-cntnt active">
            <div className="p-tab-c1">
              <span>Income Details</span>
              <p>
                Provide your income details including salary, rental income, and
                other sources.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="p-tab-cntnt active">
            <div className="p-tab-c1">
              <span>Deductions</span>
              <p>
                Specify your deductions under different sections to optimize
                your taxable income.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
*/
export default Taxes;

