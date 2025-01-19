import React, { useState } from "react";
import BackButton from "../../Backbutton";

const ResidentialStatus = () => {
  const [resStatus, setResStatus] = useState("");

  const handleRadioChange = (event) => {
    setResStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Selected Residential Status:", resStatus);
  };

  const handleBack = () => {
    window.location.href = "/catalog_2024/more_info_final/";
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Residential Status</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div className="mb-4">
            <strong>Please select a relevant option</strong>
          </div>

          <div className="row text-content">
            {[
              {
                id: "exampleRadios1",
                value: "RES1",
                label: (
                  <>
                    <strong>Resident:</strong> You were in India for 182 days or
                    more from 1 April 2023 to 31 March 2024
                  </>
                ),
              },
              {
                id: "exampleRadios2",
                value: "RES2",
                label: (
                  <>
                    <strong>Resident:</strong> You were in India for 60 days or
                    more from 1 April 2023 to 31 March 2024, and have been in
                    India for 365 days or more from 1 April 2019 to 31 March
                    2023
                  </>
                ),
              },
              {
                id: "exampleRadios3",
                value: "RES3",
                label: (
                  <>
                    <strong>Resident:</strong> You are a citizen of India, who
                    left India for the purpose of employment, as a member of the
                    crew of an Indian ship and were in India for 182 days or
                    more from 1 April 2023 to 31 March 2024 and 365 days or more
                    from 1 April 2019 to 31 March 2023
                  </>
                ),
              },
              {
                id: "exampleRadios4",
                value: "RES4",
                label: (
                  <>
                    <strong>Resident:</strong> You are a citizen of India or a
                    person of Indian origin and have come on a visit to India
                    during the previous year and were in India for a) 182 days
                    or more from 1 April 2023 to 31 March 2024 and 365 days or
                    more from 1 April 2019 to 31 March 2023; or b) 120 days or
                    more from 1 April 2023 to 31 March 2024 and 365 days or more
                    from 1 April 2019 to 31 March 2023 if the total income,
                    other than income from foreign sources, exceeds Rs. 15 lakh
                  </>
                ),
              },
              {
                id: "exampleRadios5",
                value: "NOR1",
                label: (
                  <>
                    <strong>Resident but not Ordinarily Resident:</strong> You
                    are a citizen of India or person of Indian origin, who comes
                    on a visit to India, having total income, other than the
                    income from foreign sources, exceeding Rs. 15 lakh and have
                    been in India for 120 days or more but less than 182 days
                    from 1 April 2023 to 31 March 2024
                  </>
                ),
              },
              {
                id: "exampleRadios6",
                value: "NOR2",
                label: (
                  <>
                    <strong>Resident but not Ordinarily Resident:</strong> You
                    are a citizen of India having total income, other than the
                    income from foreign sources, exceeding Rs. 15 lakh during
                    the previous year and not liable to tax in any other country
                    or territory by reason of your domicile or residence or any
                    other criteria of similar nature
                  </>
                ),
              },
              {
                id: "exampleRadios7",
                value: "NOR3",
                label: (
                  <>
                    <strong>Resident but not Ordinarily Resident:</strong> You
                    have been non-resident in India in 9 out of 10 years from 1
                    April 2014 to 31 March 2023
                  </>
                ),
              },
              {
                id: "exampleRadios8",
                value: "NOR4",
                label: (
                  <>
                    <strong>Resident but not Ordinarily Resident:</strong> You
                    have been in India for 729 days or less from 1 April 2016 to
                    31 March 2023
                  </>
                ),
              },
              {
                id: "exampleRadios9",
                value: "NRI",
                label: (
                  <>
                    <strong>Non-Resident:</strong> You were a non-resident
                    during the period 1 April 2023 to 31 March 2024
                  </>
                ),
              },
            ].map((option) => (
              <div className="form-check mb-4" key={option.id}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="res_status"
                  id={option.id}
                  value={option.value}
                  checked={resStatus === option.value}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor={option.id}>
                  {option.label}
                </label>
              </div>
            ))}
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
           <BackButton link="/client/final/more-info" />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ResidentialStatus;
