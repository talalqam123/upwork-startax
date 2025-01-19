import React from 'react';
import BackButton from '../../Backbutton';  // Fixed: Proper component name casing

const SpeculativeIncomeForm = ({ clientRelId }) => {
  return (
    <div>
    <div className="col-12 mt-3">
    <div className="rows_data">
      <form action="#">
        <div className="card card-body">
          <div className="form_heading">
            <div className="mt-3">
              <strong>Edit Presumptive Income Under Section 44AE</strong>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Nature of Business */}
              <div className="form-group">
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
              <div className="form-group">
                <label className="m-1 text-content">Trade Name</label>
                <input type="text" className="form-control rounded-0" />
              </div>
              {/* Description */}
              <div className="form-group">
                <label className="m-1 text-content">Description</label>
                <input type="text" className="form-control rounded-0" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 d-flex">
            <input
              type="submit"
              style={{ width: 'fit-content' }}
              className="btn btn-block rounded-0 btn-primary"
              value="Submit"
            />
            <BackButton link="/client/income/business" />  {/* Fixed: Proper prop passing */}
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SpeculativeIncomeForm;
