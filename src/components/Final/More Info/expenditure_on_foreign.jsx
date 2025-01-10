import React, { useState } from "react";
import BackButton from "../../Backbutton";

const ExpenditureOnForeignTravel = () => {
  const [expenditureForeignTravel, setExpenditureForeignTravel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form Submitted with Expenditure:", expenditureForeignTravel);
  };

  const handleBack = () => {
    window.location.href = "/catalog_2024/more_info_final"; // Adjust the URL based on your routing
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Expenditure on Foreign Travel</strong>
      </div>

      <form onSubmit={handleSubmit} method="POST">
        <div className="card card-body">
          <div className="row text-content">
            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1">
                  If you have incurred an expenditure of a total amount of more
                  than ₹2 lakhs on Foreign Travel between 1 April 2023 to 31 March
                  2024, please enter the total expense amount.
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="expenditure_foreign_travel"
                  value={expenditureForeignTravel}
                  onChange={(e) => setExpenditureForeignTravel(e.target.value)}
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
            <BackButton link="/client" />
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
  );
};

export default ExpenditureOnForeignTravel;
