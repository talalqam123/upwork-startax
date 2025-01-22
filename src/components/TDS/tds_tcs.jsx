import React from "react";
import { useNavigate } from "react-router-dom";

const TdsTcsComponent = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="row tds-tsx-div">
      <div className="d-flex flex-row justify-content-between w-100 mx-4">
        <div className="pt-3">
          <strong>Add a TDS entry (Tax Deducted at Source)</strong>
        </div>
        <button
          className="btn bg-gradient-info btn-flat"
          onClick={() => handleRedirect('/client/tds-taxes/tds-tcs/import')}
        >
          Import TDS/TCS
        </button>
      </div>

      <div className="col-md-8 mt-4 ml-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="headin_iner row w-100">
            <div className="col-9">
              <strong>Non Salary TDS/TCS</strong>
            </div>
          </div>
          <button
            className="tds-tsx-buttons btn w-auto btn-block bg-gradient-info btn-flat col-3 text-sm"
            onClick={() => handleRedirect('/client/tds-taxes/tds-tcs/non-salary')}
          >
            Non Salary TDS
          </button>
        </div>
      </div>

      <div className="col-md-8 mt-4 ml-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="headin_iner row w-100">
            <div className="col-9">
              <strong>TDS on Sale/Rent of Immovable Property</strong>
            </div>
          </div>
          <button
            className="tds-tsx-buttons btn h-auto w-auto btn-block bg-gradient-info btn-flat col-3 text-sm"
            onClick={() => handleRedirect('/client/tds-taxes/tds-tcs/sale-rent')}
          >
            Add TDS on Sale/Rent of Immovable Property
          </button>
        </div>
      </div>

      <div className="col-md-8 mt-4 ml-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="headin_iner row w-100">
            <div className="col-9">
              <strong>Taxes Collected at Source (TCS)</strong>
            </div>
          </div>
          <button
            className="tds-tsx-buttons btn h-auto w-auto btn-block bg-gradient-info btn-flat col-3 text-sm"
            onClick={() => handleRedirect('/client/tds-taxes/tds-tcs/tcs')}
          >
            Taxes Collected at Source (TCS)
          </button>
        </div>
      </div>

      <div className="col-md-8 mt-4 ml-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="headin_iner row w-100">
            <div className="col-9">
              <strong>Tax Deferred on ESOPs (Section 80IAC)</strong>
            </div>
          </div>
          <button
            className="tds-tsx-buttons btn h-auto w-auto btn-block bg-gradient-info btn-flat col-3 text-sm"
            onClick={() => handleRedirect('/client/tds-taxes/tds-tcs/esops')}
          >
            Tax Deferred on ESOPs (Section 80IAC)
          </button>
        </div>

        <div className="row mt-4 text-content">
          <div className="col-md-12">
            <div className="form-group">
              <label>PAN of the Employer (Startup) *</label>
              <input type="text" className="form-control rounded-0" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>DPIIT Reg. No of the Employer (Startup)</label>
              <input type="text" className="form-control rounded-0" />
            </div>
          </div>
          <div className="col-md-12">
            <input
              type="submit"
              style={{ width: "fit-content" }}
              className="btn btn-block rounded-0 btn-primary"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TdsTcsComponent;
