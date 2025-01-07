import React, { useState } from "react";

const ClauseIVSeventhProviso = () => {
  const [formData, setFormData] = useState({
    salesOrTurnover: "",
    grossReceiptsProfession: "",
    tdsTcsAmount: "",
    depositsAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call)
    console.log("Form submitted with:", formData);
  };

  const handleBackClick = () => {
    window.location.href = "/catalog_2024/more_info_final";
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Clause(iv), seventh proviso to 139(1)</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="row text-content">
            <div className="col-md-6">
              <div className="form-group">
                <span className="m-1">
                  If total sales, turnover or gross receipts of the person in
                  business is higher than ₹ 60 lakh between 1 April 2023 to 31
                  March 2024, please enter the total sales, turnover or gross
                  receipts value.
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="salesOrTurnover"
                  value={formData.salesOrTurnover}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">
                  If your total gross receipts from profession is greater than
                  ₹ 10 lakh between 1 April 2023 to 31 March 2024, please enter
                  the total gross receipts value.
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="grossReceiptsProfession"
                  value={formData.grossReceiptsProfession}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">
                  If total of tax deducted at source and tax collected at
                  source, in case of the person, is greater than ₹ 25 thousand
                  between 1 April 2023 to 31 March 2024, please enter the total
                  of TDS and TCS amount.
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="tdsTcsAmount"
                  value={formData.tdsTcsAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <span className="m-1">
                  If you have deposited a total of ₹ 50 lakh or more in savings
                  accounts between 1 April 2023 to 31 March 2024, please enter
                  the total deposits amount.
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="depositsAmount"
                  value={formData.depositsAmount}
                  onChange={handleChange}
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

export default ClauseIVSeventhProviso;
