import React from "react";

const ForeignAssetsIncomes = () => {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="card card-body">
        <div className="pt-3">
          <strong>Foreign Assets, Incomes & Taxes</strong>
        </div>

        <div className="row text-content">
          <div className="col-md-6">
            <div className="form-group">
              <h6>Schedule FSI</h6>
              <button className="btn btn-block bg-gradient-primary btn-flat">
                Details of Income accruing or arising outside India
              </button>
            </div>

            <div className="form-group">
              <h6>Schedule TR</h6>
              <button className="btn btn-block bg-gradient-primary btn-flat">
                Details of Taxes Paid outside India
              </button>
            </div>

            <div className="form-group">
              <h6>Schedule FA</h6>
              <span>
                <strong>Instructions:</strong>
                You need to fill this section if you are a resident of India and
                have foreign assets in any of the following categories.
                <br />
                No need to fill this if you are a 'non-resident' or
                'not-ordinarily resident'
              </span>
            </div>
          </div>
        </div>

        <div className="card card-body pt-4">
          <div className="row mt-2 inr_tabs_button">
            <div className="col-md-12">
              <strong>Details of Foreign Assets</strong>
            </div>

            {[
              { id: 1, label: "Details Of Foreign Bank", url: "foreign_bank" },
              {
                id: 2,
                label: "Details Of Foreign Custodial Account",
                url: "foreign_custodial_account",
              },
              {
                id: 3,
                label: "Details Of Foreign Equity Debt Interest",
                url: "foreign_equity_debt_interest",
              },
              {
                id: 4,
                label: "Details Of Foreign Cash Value Insurance",
                url: "foreign_cash_value_insurance",
              },
              {
                id: 5,
                label: "Details Of Financial Interest",
                url: "financial_interest",
              },
              {
                id: 6,
                label: "Details Of Immovable Property",
                url: "immovable_property",
              },
              {
                id: 7,
                label: "Details Of Other Assets",
                url: "other_assets",
              },
              {
                id: 8,
                label: "Details Of Accounts Having Signing Authority",
                url: "accounts_having_signing_authority",
              },
              {
                id: 9,
                label: "Details Of Trust Outside India Trustee",
                url: "trust_outside_india_trustee",
              },
              {
                id: 10,
                label: "Details Of Other Sources Income Outside India",
                url: "other_sources_income_outside_india",
              },
            ].map((item) => (
              <div className="col-md-8 mt-4" key={item.id}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="headin_iner row w-100">
                    <div className="col-9">
                      <strong>{item.id < 10 ? `0${item.id}` : item.id} </strong>
                      {item.label}
                    </div>
                    <button
                      onClick={() => navigateTo(`/${item.url}`)}
                      className="buton_tabs_ac btn col-3 w-auto btn-block bg-gradient-info btn-flat text-sm"
                    >
                      Add Details
                    </button>
                  </div>
                </div>
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
            <button
              type="button"
              className="btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
              onClick={() => navigateTo("/more_info_final")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignAssetsIncomes;
