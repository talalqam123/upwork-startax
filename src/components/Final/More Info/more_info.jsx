import React from "react";
import RepresentativeAssesseeForm from ".//Representative_assesse";
const AdvancedInfo = () => {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div>
        <RepresentativeAssesseeForm/>
      <div className="pt-3">
        <strong>[Optional] Advanced Info, required only in a few cases</strong>
      </div>

      <div className="row mx-0 tds-tsx-div">
        {[
          {
            label: "Residential Status",
            url: "/catalog_2024/residential_status/",
          },
          {
            label: "Unlisted Shares",
            url: "/catalog_2024/unlisted_shares/",
          },
          {
            label: "Directorship Details",
            url: "/catalog_2024/directorship_details/",
          },
          {
            label: "Foreign Assets, Incomes & Taxes",
            url: "/catalog_2024/foreign_assets_incomes_taxes/",
          },
          {
            label: "Schedule Specified Person Income",
            url: "/catalog_2024/schedule_spi/",
          },
          {
            label: "Schedule AL: Assets & Liabilities",
            url: "/catalog_2024/schedule_al/",
          },
          {
            label: "Current Account Deposits",
            url: "/catalog_2024/current_account_deposits/",
          },
          {
            label: "Expenditure on Foreign Travel",
            url: "/catalog_2024/expenditure_on_foreign_travel/",
          },
          {
            label: "Expenditure on Electricity Consumption",
            url: "/catalog_2024/expenditure_on_electricity_consumption/",
          },
          {
            label: "Clause(iv), seventh proviso to 139(1)",
            url: "/catalog_2024/clause_iv_seventh/",
          },
          {
            label: "TRP (TAX RETURN PREPARER)",
            url: "/catalog_2024/trp_info/",
          },
          {
            label: "Representative Assessee",
            url: "/catalog_2024/assessee_info/",
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
                onClick={() => handleNavigation(item.url)}
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
