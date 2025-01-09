import React from "react";
import { useNavigate } from "react-router-dom";
const AdvancedInfo = () => {
  const navigate = useNavigate()
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <div>
       
      <div className="pt-3">
        <strong>[Optional] Advanced Info, required only in a few cases</strong>
      </div>

      <div className="row mx-0 tds-tsx-div">
        {[
          {
            label: "Residential Status",
            link: "/client/final/residential_status/",
          },
          {
            label: "Unlisted Shares",
            link: "/client/final/unlisted_shares/",
          },
          {
            label: "Directorship Details",
            link: "/client/final/directorship_details/",
          },
          {
            label: "Foreign Assets, Incomes & Taxes",
            link: "/client/final/foreign_assets_incomes_taxes/",
          },
          {
            label: "Schedule Specified Person Income",
            link: "/client/final/schedule_spi/",
          },
          {
            label: "Schedule AL: Assets & Liabilities",
            link: "/client/final/schedule_al/",
          },
          {
            label: "Current Account Deposits",
            link: "/client/final/current_account_deposits/",
          },
          {
            label: "Expenditure on Foreign Travel",
            link: "/client/final/expenditure_on_foreign_travel/",
          },
          {
            label: "Expenditure on Electricity Consumption",
            link: "/client/final/expenditure_on_electricity_consumption/",
          },
          {
            label: "Clause(iv), seventh proviso to 139(1)",
            link: "/client/final/clause_iv_seventh/",
          },
          {
            label: "TRP (TAX RETURN PREPARER)",
            link: "/client/final/trp_info/",
          },
          {
            label: "Representative Assessee",
            link: "/client/final/assessee_info/",
          },
        ].map((item, index) => (
          <div key={index} className="col-md-12 mt-4 card card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="headin_iner w-50 d-block">
                <div className="m-0">
                  <strong>{item.label}</strong>
                </div>
              </div>
              <button
                className="tds-tsx-button btn h-auto w-auto btn-block bg-gradient-info btn-flat col-md-3"
                onClick={() => handleNavigation(item.link)}
              >
                Add {item.label} Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedInfo;
