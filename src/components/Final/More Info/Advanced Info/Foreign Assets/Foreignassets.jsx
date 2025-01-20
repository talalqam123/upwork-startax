import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../../Client Details/Backbutton";
const ForeignAssetsIncomes = () => {
  const navigate = useNavigate();  // Added missing parentheses here
  const navigateTo = (link) => {
    navigate(link);
  };

  return (
    <div>
    <div className="col-12 mt-3">
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
              { 
                id: 1, 
                label: "Details Of Foreign Bank", 
                link: "/client/final/more-info/foreign-assets/foreign-bank" 
              },
              {
                id: 2,
                label: "Details Of Foreign Custodial Account",
                link: "/client/final/more-info/foreign-assets/foreign-custodial-account",
              },
              {
                id: 3,
                label: "Details Of Foreign Equity Debt Interest",
                link: "/client/final/more-info/foreign-assets/foreign-equity-debt-interest",
              },
              {
                id: 4,
                label: "Details Of Foreign Cash Value Insurance",
                link: "/client/final/more-info/foreign-assets/foreign-cash-value-insurance",
              },
              {
                id: 5,
                label: "Details Of Financial Interest",
                link: "/client/final/more-info/foreign-assets/financial-interest",
              },
              {
                id: 6,
                label: "Details Of Immovable Property",
                link: "/client/final/more-info/foreign-assets/immovable-property",
              },
              {
                id: 7,
                label: "Details Of Other Assets",
                link: "/client/final/more-info/foreign-assets/other-assets",
              },
              {
                id: 8,
                label: "Details Of Accounts Having Signing Authority",
                link: "/client/final/more-info/foreign-assets/signing-authority",
              },
              {
                id: 9,
                label: "Details Of Trust Outside India Trustee",
                link: "/client/final/more-info/foreign-assets/trust-outside-india-trustee",
              },
              {
                id: 10,
                label: "Details Of Other Sources Income Outside India",
                link: "/client/final/more-info/foreign-assets/other-sources-income-outside-india",
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
                      onClick={() => navigateTo(item.link)}
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
            <BackButton link="/client" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ForeignAssetsIncomes;
