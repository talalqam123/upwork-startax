import React from "react";
import { useNavigate } from "react-router-dom";

const BSPLIncomeForm = ({ clientId, year }) => {
  const navigate = useNavigate();

  const bsplButtons = [
    {
      id: "01",
      title: "Balance Sheet + P&L Account",
      path: "/client/income/business/fill-bspl",
      buttonText: "Fill BSPL"
    },
    {
      id: "02",
      title: "Depreciation",
      path: "/client/income/business/bspl/depreciation",
      buttonText: "Fill Depreciation"
    },
    {
      id: "03",
      title: "Schedule ICDS",
      path: "/client/income/business/bspl/icds",
      buttonText: "Fill ICDS"
    },
    {
      id: "04",
      title: "Schedule ESR",
      path: "/client/income/business/bspl/esr",
      buttonText: "Fill ESR"
    }
  ];

  return (
    <div className="col-12 mt-3">
      <div className="rows_data bspl_tab">
        <form method="POST" action="/basic_details/store_balancesheet_profitloss">
          {/* CSRF Token (for Django-like backend) */}
          <input type="hidden" name="csrfmiddlewaretoken" value="YOUR_CSRF_TOKEN" />
          <input type="hidden" name="client_id" value={clientId} />
          <input type="hidden" name="year" value={year} />

          <div className="bspl_main_row d-block">
            <div className="card card-body">
              <div className="form_heading">
                <div className="mt-3">
                  <strong>Regular Business for ITR-3 (No Books of Account Maintained)</strong>
                </div>
              </div>

              <div className="row">
                {/* Nature of Business */}
                <div className="form-group col-md-4">
                  <label className="m-1 text-content">Nature of Business</label>
                  <select className="form-control rounded-0">
                    <option value="">Select Option</option>
                    <option value="CGovt">Central Government</option>
                    <option value="SGovt">State Government</option>
                    <option value="PSU">Public Sector Unit</option>
                    <option value="PE">Pensioners - Central Government</option>
                    <option value="PESG">Pensioners - State Government</option>
                    <option value="PEPS">Pensioners - PSU</option>
                    <option value="PEO">Pensioners - Others</option>
                  </select>
                </div>

                {/* Trade Name */}
                <div className="form-group col-md-4">
                  <label className="m-1 text-content">Trade Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>

                {/* Description */}
                <div className="form-group col-md-4">
                  <label className="m-1 text-content">Description</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
              </div>

              {/* BSPL Tabs */}
              <div className="row mt-5 bspl_inr_tabs_button">
                {bsplButtons.map(button => (
                  <div className="col-md-8 mt-4" key={button.id}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="headin_iner row w-100">
                        <div className="col-9">
                          <strong>{button.id}</strong> {button.title}
                        </div>
                        <button
                          type="button"
                          onClick={() => navigate(button.path)}
                          className="buton_tabs_ac btn col-3 w-auto btn-block bg-gradient-info btn-flat text-sm"
                        >
                          {button.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BSPLIncomeForm;
