import React from 'react';
import BackButton from '../../../Backbutton';

const FillBSPLForm = () => {
  return (
    <div className="col-12 mt-3">
      <div className="card card-body">
        <div className="form_heading mb-4">
          <h5><strong>Fill BSPL Details</strong></h5>
        </div>
        
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" className="form-control rounded-0" />
              </div>
              
              <div className="form-group">
                <label>Financial Year</label>
                <input type="text" className="form-control rounded-0" />
              </div>

              <div className="form-group">
                <label>Total Revenue</label>
                <input type="number" className="form-control rounded-0" />
              </div>
              
              <div className="form-group">
                <label>Total Expenses</label>
                <input type="number" className="form-control rounded-0" />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="form-group">
                <label>Net Profit/Loss</label>
                <input type="number" className="form-control rounded-0" />
              </div>
              
              <div className="form-group">
                <label>Total Assets</label>
                <input type="number" className="form-control rounded-0" />
              </div>
              
              <div className="form-group">
                <label>Total Liabilities</label>
                <input type="number" className="form-control rounded-0" />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12 d-flex">
              <input 
                type="submit" 
                value="Submit"
                className="btn btn-primary rounded-0" 
                style={{ width: "fit-content" }}
              />
              <BackButton link="/client/income/business/bspl" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillBSPLForm;
