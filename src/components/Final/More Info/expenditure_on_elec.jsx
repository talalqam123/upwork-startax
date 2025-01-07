import React, { useState } from "react";

const ExpenditureOnElectricityConsumption = () => {
  const [expenditureOnElectricity, setExpenditureOnElectricity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted with:", { expenditureOnElectricity });
  };

  const handleBackClick = () => {
    window.location.href = "/catalog_2024/more_info_final";
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Expenditure on Electricity Consumption</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="row text-content">
            <div className="col-md-6">
              <div className="form-group">
                <label className="m-1">
                  If you have incurred an expenditure of a total amount of more
                  than ₹ 1 lakh on electricity consumption between 1 April 2023
                  to 31 March 2024, please enter the total expense amount.
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="expenditure_on_electricity"
                  value={expenditureOnElectricity}
                  onChange={(e) => setExpenditureOnElectricity(e.target.value)}
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
            <button
              type="button"
              className="btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenditureOnElectricityConsumption;