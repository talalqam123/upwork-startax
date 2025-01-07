import React, { useState } from "react";


const ClientSummary = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [incomeTaxPassword, setIncomeTaxPassword] = useState("");

  const fetchPayloadAndRunScript = async () => {
    console.log("Button calling --------------------");
    try {
      const payloadResponse = await fetch(`/home/send-request-to-client/client_rel_id/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!payloadResponse.ok) {
        throw new Error("Failed to fetch payload");
      }

      const payload = await payloadResponse.json();
      console.log("Fetched Payload:", payload);

      const response = await fetch("http://127.0.0.1:12345/run-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from client API:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="row Cus_Cards">
      {/* Basic Details Card */}
      <div className="col-md-4">
        <div className="card card-widget widget-user h-100">
          <div className="widget-user-header h-auto bg-info d-flex flex-row justify-content-between">
            <div><strong>Basic Details</strong></div>
            <a href="/basic_details/permanent_basic">
              <i className="fas fa-edit"></i>
            </a>
          </div>
          <div className="card-body pt-0 text-content">
            <div className="row pa-4">
              <div className="col-sm-12 d-flex">
                <div className="description-block ml-2 text-left row d-flex">
                  <div className="col-md-4"><strong>Client Type</strong></div>
                  <span className="description-text text-uppercase col-md-8">CLIENT TYPE</span>
                  <div className="col-md-4"><strong>Name</strong></div>
                  <span className="description-text text-uppercase col-md-8">CLIENT NAME</span>
                  <div className="col-md-4"><strong>Father's Name</strong></div>
                  <span className="description-text text-uppercase col-md-8">FATHER'S NAME</span>
                  <div className="col-md-4"><strong>Pan Number</strong></div>
                  <span className="description-text text-uppercase col-md-8">PAN NUMBER</span>
                  <div className="col-md-4"><strong>Gender</strong></div>
                  <span className="description-text text-uppercase col-md-8">GENDER</span>
                  <div className="col-md-4"><strong>Date of Birth</strong></div>
                  <span className="description-text text-uppercase col-md-8">DATE OF BIRTH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="col-md-4">
        <div className="card card-widget widget-user h-100">
          <div className="widget-user-header h-auto bg-info d-flex flex-row justify-content-between">
            <div><strong>Address</strong></div>
            <a href="/basic_details/permanent_address">
              <i className="fas fa-edit"></i>
            </a>
          </div>
          <div className="card-body p-0">
            <div className="row text-content">
              <div className="col-sm-12 d-flex border-right">
                <div className="description-block ml-4 text-left row w-100">
                  <span className="description-text text-uppercase col-12">
                    ADDRESS DETAILS HERE
                  </span>
                  <div className="col-md-4"><strong>Mobile Number</strong></div>
                  <span className="description-text text-uppercase col-md-8">PHONE NUMBER</span>
                  <div className="col-md-4"><strong>Email</strong></div>
                  <span className="description-text text-uppercase col-md-8">EMAIL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Income Tax Password Card */}
      <div className="col-md-4">
        <div className="card card-widget widget-user h-100">
          <div className="widget-user-header h-auto bg-info d-flex flex-row justify-content-between">
            <div><strong>INCOME TAX PASSWORD</strong></div>
            <a href="#" data-toggle="modal" data-target="#incometaxmodel">
              <i className="fas fa-edit"></i>
            </a>
          </div>
          <div className="card-body p-0">
            <div className="row text-content">
              <div className="col-sm-12 d-flex border-right">
                <div className="form-group password-field ml-4 mt-4 text-left row w-10">
                  <div className="m-2"><strong>Password</strong></div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control rounded-0"
                    value={incomeTaxPassword}
                    placeholder="Please create Income Tax password"
                    readOnly
                  />
                  <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="col-md-12 mt-3">
        <div className="card card-widget widget-user h-100">
          <div className="widget-user-header h-auto bg-info d-flex flex-row justify-content-between">
            <div>A. Y. CLIENT YEAR</div>
            <a href="/basic_details/permanent_basic">
              <i className="fas fa-edit"></i>
            </a>
          </div>
          <div className="card-footer ma-0 pa-0">
            <div className="row pa-4 ma-0 gx-5 text-content">
              <div className="col-md-2">
                <div><strong>File Type</strong></div>
                <span className="description-text text-lowercase">Original</span>
              </div>
              <div className="col-md-4">
                <div style={{ marginLeft: "1.2rem" }}><strong>Latest News</strong></div>
                <ul className="timeline-3">
                  <li>
                    <a href="#">New Web Design</a>
                    <p className="mt-2">21 March, 2014</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <div><strong>ITR: itr 4</strong></div>
              </div>
              <div className="col-md-2">
                <div><strong>View Details</strong></div>
                <button className="btn btn-outline-primary mt-2" onClick={fetchPayloadAndRunScript}>
                  <i className="fas fa-download"></i> Test Button Dev
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSummary;
