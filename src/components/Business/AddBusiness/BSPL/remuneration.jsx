import React from "react";
import BackButton from "../../../Client Details/Backbutton";

function RemunerationForm() {
  return (
    <div className="card card-body p-4">
      <div className="col-12 mt-3">
        <div className="rows_data">
          <form method="POST">
            {/* Card: Nature of Business */}
            <div className="card card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_heading">
                    <div className="mt-3">
                      <strong>Nature of Business Details</strong>
                    </div>
                  </div>
                  {/* Nature of Business */}
                  <div className="form-group">
                    <label className="m-1 text-content">Nature of Business</label>
                    <select className="form-control rounded-0">
                      <option value="">Select Option</option>
                      <option value="CGovt">Central Government</option>
                      <option value="SGovt">State Government</option>
                      <option value="PSU">Public Sector Unit</option>
                      <option value="PE">Pensioners - Central Government</option>
                      <option value="PESG">Pensioners - State Government</option>
                      <option value="PEPS">Pensioners - PSU</option>
                      <option value="PEO">Pensioners - Others</option>
                    </select>
                  </div>
                  {/* Trade Name */}
                  <div className="form-group">
                    <label className="m-1 text-content">Trade Name</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                  {/* Description */}
                  <div className="form-group">
                    <label className="m-1 text-content">Description</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_heading">
                    <div className="mt-3">
                      <strong>Total Revenue/Turnover</strong>
                    </div>
                  </div>
                  {/* Revenue via Cash */}
                  <div className="form-group">
                    <label className="m-1 text-content">Revenue via Cash</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                  {/* Revenue via any other mode */}
                  <div className="form-group">
                    <label className="m-1 text-content">Revenue via any other mode</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                  {/* Revenue via banking modes */}
                  <div className="form-group">
                    <label className="m-1 text-content">Revenue via banking modes</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Total Income/Profit */}
            <div className="card card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_heading">
                    <div className="mt-3">
                      <strong>Total Income/Profit as per your calculation</strong>
                    </div>
                  </div>
                  {/* Profit via Cash */}
                  <div className="form-group">
                    <label className="m-1 text-content">Profit via Cash</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                  {/* Profit via any other mode */}
                  <div className="form-group">
                    <label className="m-1 text-content">Profit via any other mode</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                  {/* Profit via banking modes */}
                  <div className="form-group">
                    <label className="m-1 text-content">Profit via banking modes</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit and Back Buttons */}
            <div className="row">
              <div className="col-md-12 d-flex">
                <input
                  type="submit"
                  style={{ width: "fit-content" }}
                  className="btn btn-block rounded-0 btn-primary"
                  value="Submit"
                />
                <BackButton link={"/client"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RemunerationForm;
