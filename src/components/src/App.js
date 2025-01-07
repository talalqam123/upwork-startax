import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="d-flex justify-content-between">
      <a className="btn btn-warning" href="/filling">Back</a>
      <a className="btn btn-primary" href="/export">Download</a>
    </div>
  );
}

function PersonalDetails({ client }) {
  return (
    <table className="w-100">
      <tbody>
        <tr className="client_name">
          <td style={{ fontSize: "22px" }}>
            <strong>{client.fullName}</strong>
          </td>
        </tr>
        <tr>
          <td colSpan="4" className="report-header">
            <strong>Personal Details</strong>
          </td>
        </tr>
        <tr>
          <td><strong>PAN Number: </strong></td>
          <td>{client.panNumber}</td>
          <td><strong>Father's Name: </strong></td>
          <td>{client.fatherName || "N/A"}</td>
        </tr>
        <tr>
          <td><strong>Marital Status: </strong></td>
          <td>{client.maritalStatus || "N/A"}</td>
          <td><strong>Gender: </strong></td>
          <td>{client.gender || "N/A"}</td>
        </tr>
      </tbody>
    </table>
  );
}

function BankDetails({ banks }) {
  return (
    <table className="w-100">
      <tbody>
        <tr>
          <td colSpan="4" className="report-header">
            <strong>Bank Details</strong>
          </td>
        </tr>
        {banks.map((bank, index) => (
          <tr key={index}>
            <td><strong>IFSC Code: </strong>{bank.ifscCode}</td>
            <td><strong>Account No: </strong>{bank.accountNo}</td>
            <td><strong>Bank Name: </strong>{bank.bankName}</td>
            <td><strong>Account Type: </strong>{bank.accountType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const client = {
    fullName: "John Doe",
    panNumber: "ABCDE1234F",
    fatherName: "Richard Doe",
    maritalStatus: "Married",
    gender: "Male",
    banks: [
      {
        ifscCode: "HDFC0001234",
        accountNo: "1234567890",
        bankName: "HDFC Bank",
        accountType: "Savings",
      },
    ],
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <h2 className="text-right">AY 2024-25</h2>
        <PersonalDetails client={client} />
        <BankDetails banks={client.banks} />
      </div>
    </Router>
  );
}

export default App;
