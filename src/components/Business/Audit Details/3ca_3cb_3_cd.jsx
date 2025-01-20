import React, { useState } from "react";
import BackButton from "../../Client Details/Backbutton";

const Form3CA3CB = ({ clientFullName, clientRelId }) => {
  const [amountNotCredited, setAmountNotCredited] = useState("");

  const handleInputChange = (event) => {
    setAmountNotCredited(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", amountNotCredited);
    // Add your submission logic here
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="rows_data">
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="form_heading pb-4">
            <div>
              <strong>{clientFullName}: Form 3CA/3CB - 3CD</strong>
            </div>
            <div className="mt-3">
              <strong>Other Information</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form_input_grp">
                <label className="text-content">
                  Amounts not credited to the profit and loss account *
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  value={amountNotCredited}
                  onChange={handleInputChange}
                />
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
            <BackButton link="/client" />``
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Form3CA3CB;
