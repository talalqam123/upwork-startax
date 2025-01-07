import React, { useState } from "react";

const ScheduleSPI = () => {
  const [spiData, setSpiData] = useState([
    {
      spi_name_of_person: "",
      spi_pan_of_person: "",
      spi_relationship: "",
      spi_amount: "",
      spi_head_of_income: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedSpiData = [...spiData];
    updatedSpiData[index][field] = value;
    setSpiData(updatedSpiData);
  };

  const addMoreSpiIncome = () => {
    setSpiData([
      ...spiData,
      {
        spi_name_of_person: "",
        spi_pan_of_person: "",
        spi_relationship: "",
        spi_amount: "",
        spi_head_of_income: "",
      },
    ]);
  };

  const removeSpiIncome = (index) => {
    if (spiData.length > 1) {
      const updatedSpiData = spiData.filter((_, i) => i !== index);
      setSpiData(updatedSpiData);
    } else {
      const updatedSpiData = [...spiData];
      updatedSpiData[index] = {
        spi_name_of_person: "",
        spi_pan_of_person: "",
        spi_relationship: "",
        spi_amount: "",
        spi_head_of_income: "",
      };
      setSpiData(updatedSpiData);
    }
  };

  const validateForm = () => {
    return spiData.every((data) => {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      const incomeHeadRegex = /^(SA|HP|CG|OS|EI)$/;

      return (
        data.spi_name_of_person.length > 0 &&
        data.spi_name_of_person.length <= 125 &&
        panRegex.test(data.spi_pan_of_person) &&
        data.spi_relationship.length > 0 &&
        data.spi_relationship.length <= 50 &&
        !isNaN(data.spi_amount) &&
        data.spi_amount >= -99999999999999 &&
        data.spi_amount <= 99999999999999 &&
        incomeHeadRegex.test(data.spi_head_of_income)
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", spiData);
    } else {
      alert("Please correct the errors in the form");
    }
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Schedule Specified Person Income</strong>
      </div>
      <form id="shceduleSpiForm" onSubmit={handleSubmit}>
        <div className="card card-body">
          <span className="mb-4">
            <strong>
              If you have income of specified person (spouse, minor child, etc.) to be
              included in assessee tax return, please fill the details here.
              <br />
              Income of the minor child, in excess of Rs. 1,500 per child, to be
              included.
            </strong>
          </span>
          {spiData.map((data, index) => (
            <div key={index} className="row schedule-spi-items align-items-top mt-3">
              <div className="col-md-2">
                <div className="form-group">
                  <label className="mb-1">Specified Person Name</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    value={data.spi_name_of_person}
                    onChange={(e) =>
                      handleInputChange(index, "spi_name_of_person", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label className="mb-1">PAN of Person</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    value={data.spi_pan_of_person}
                    onChange={(e) =>
                      handleInputChange(index, "spi_pan_of_person", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label className="mb-1">Relationship</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    value={data.spi_relationship}
                    onChange={(e) =>
                      handleInputChange(index, "spi_relationship", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label className="mb-1">Amount</label>
                  <input
                    type="number"
                    className="form-control rounded-0"
                    value={data.spi_amount}
                    onChange={(e) =>
                      handleInputChange(index, "spi_amount", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Head of Income in which included</label>
                  <select
                    className="form-control rounded-0"
                    value={data.spi_head_of_income}
                    onChange={(e) =>
                      handleInputChange(index, "spi_head_of_income", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="OS">Other Sources</option>
                    <option value="HP">House Property</option>
                    <option value="SA">Salary Income</option>
                    <option value="CG">Capital Gain</option>
                    <option value="EI">Exempt Income</option>
                  </select>
                </div>
              </div>
              <div className="col-md-1">
                <div className="form-group d-flex flex-column">
                  <label>&nbsp;</label>
                  <button
                    style={{ width: "fit-content" }}
                    className="btn text-danger text-left cancel-spi px-1"
                    type="button"
                    onClick={() => removeSpiIncome(index)}
                  >
                    &#10006;
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            style={{ width: "fit-content" }}
            className="col-2 float-center mb-3 btn btn-block bg-gradient-primary btn-flat add-more-spi-income"
            onClick={addMoreSpiIncome}
          >
            Add More
          </button>
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
              onClick={() => window.location.href = '/some-url'}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScheduleSPI;
