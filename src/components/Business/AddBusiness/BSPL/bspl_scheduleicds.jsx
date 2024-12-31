import React from "react";

const ScheduleICDSForm = () => {
  return (
    <div className="bspl_rows_data w-100 px-2">
      <div className="form_heading mb-4">
        <h5 className="mt-3">
          <strong>
            Schedule ICDS: Effect of Income Computation Disclosure Standards on
            profit
          </strong>
        </h5>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="m-0">Valuation of Inventories</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Construction Contracts</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Revenue Recognition</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Tangible Fixed Assets</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Changes in Foreign Exchange Rates</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Government Grants</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Securities</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Borrowing Costs</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">
              Provisions, Contingent Liabilities and Contingent Assets
            </label>
            <input type="text" className="form-control rounded-0" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 d-flex">
          <input
            type="submit"
            style={{ width: "fit-content" }}
            className="btn btn-block rounded-0 btn-primary"
            value="Submit"
          />
          <button
            type="button"
            className="bspl_Back_button btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleICDSForm;
