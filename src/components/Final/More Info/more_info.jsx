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
            link: "/client/final/more-info/resedential",
          },
          {
            label: "Unlisted Shares",
            link: "/client/final/more-info/unlisted",
          },
          {
            label: "Directorship Details",
            link: "/client/final/more-info/directorship",
          },
          {
            label: "Foreign Assets, Incomes & Taxes",
            link: "/client/final/more-info/foreign-assets",
          },
          {
            label: "Schedule Specified Person Income",
            link: "/client/final/more-info/schedule-spi",
          },
          {
            label: "Schedule AL: Assets & Liabilities",
            link: "/client/final/more-info/schedule-al",
          },
          {
            label: "Current Account Deposits",
            link: "/client/final/more-info/current-deposits",
          },
          {
            label: "Expenditure on Foreign Travel",
            link: "/client/final/more-info/foreign-travel",
          },
          {
            label: "Expenditure on Electricity Consumption",
            link: "/client/final/more-info/electricity-consumption",
          },
          {
            label: "Clause(iv), seventh proviso to 139(1)",
            link: "/client/final/more-info/clause-iv",
          },
          {
            label: "TRP (TAX RETURN PREPARER)",
            link: "/client/final/more-info/trp",
          },
          {
            label: "Representative Assessee",
            link: "/client/final/more-info/assessee",
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
