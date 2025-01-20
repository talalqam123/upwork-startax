import React from "react";
import BackButton from "../../../Client Details/Backbutton";

const ESRDetailsForm = () => {
  return (
    <div>
    <div className="col-12 mt-3">
    <div className="bspl_rows_data w-100 px-2">
      <div className="form_heading mb-4">
        <h5 className="mt-3">
          <strong>ESR Details</strong>
        </h5>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Section</th>
            <th>Amount Debited to P&L</th>
            <th>Amount of Deduction Allowable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>35(1)(i)</td>
            <td><input className="form-control" /></td>
            <td><input className="form-control" /></td>
          </tr>
          <tr>
            <td>35(1)(ii)</td>
            <td><input className="form-control" /></td>
            <td><input className="form-control" /></td>
          </tr>
          <tr>
            <td>35(1)(iii)</td>
            <td><input className="form-control" /></td>
            <td><input className="form-control" /></td>
          </tr>
          <tr>
            <td>35(1)(iv)</td>
            <td><input className="form-control" /></td>
            <td><input className="form-control" /></td>
          </tr>
          <tr>
            <td>35(2AA)</td>
            <td><input className="form-control" /></td>
            <td><input className="form-control" /></td>
          </tr>
          <tr>
            <td>35(2AB)</td>
            <td><input className="form-control" /></td>
            <td><input className="form-control" /></td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <div className="col-md-12 d-flex">
          <input
            type="submit"
            style={{ width: "fit-content" }}
            className="btn btn-block rounded-0 btn-primary"
            value="Submit"
          />
          <BackButton link="/client/income/business" />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ESRDetailsForm;
