import React from "react";

const NoBooksOfAccountIncome = () => {
  const handleBack = () => {
    window.location.href = "{% url 'catalog_2024:business' client_rel_id=client_rel_id %}";
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="rows_data">
      <form action="#">
        <div className="card card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form_heading">
                <div className="mt-3">
                  <strong>Nature of Business Details</strong>
                </div>
              </div>
              <div className="form-group mt-3">
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
              <div className="form-group">
                <label className="m-1 text-content">Trade Name</label>
                <input type="text" className="form-control rounded-0" />
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Description</label>
                <input type="text" className="form-control rounded-0" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form_heading">
                <div className="mt-3">
                  <strong>Total Revenue/Turnover</strong>
                </div>
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Revenue via Cash</label>
                <input type="text" className="form-control rounded-0" />
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Revenue via any other mode</label>
                <input type="text" className="form-control rounded-0" />
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Revenue via banking modes</label>
                <input type="text" className="form-control rounded-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form_heading">
                <div className="mt-3">
                  <strong>Total Income/Profit as per your calculation</strong>
                </div>
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Profit via Cash</label>
                <input type="text" className="form-control rounded-0" />
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Profit via any other mode</label>
                <input type="text" className="form-control rounded-0" />
              </div>
              <div className="form-group">
                <label className="m-1 text-content">Profit via banking modes</label>
                <input type="text" className="form-control rounded-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex">
            <input type="submit" className="btn btn-primary" value="Submit" />
            <button
              type="button"
              onClick={handleBack}
              className="Back_button btn bg-gradient-warning text-white ml-4"
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default NoBooksOfAccountIncome;
