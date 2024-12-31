import React from "react";

const ESRDetailsForm = () => {
  return (
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
          <button
            type="button"
            onClick={() => window.location.href = "{% url 'catalog_2024:business' client_rel_id=client_rel_id %}"}
            className="bspl_Back_button btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESRDetailsForm;
