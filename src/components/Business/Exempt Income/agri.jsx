import React, { useState } from 'react';

const AgricultureIncome = ({ clientExemptIncome }) => {
  const [agriLandDetails, setAgriLandDetails] = useState(clientExemptIncome.AgricultureLand || []);
  const [netIncome, setNetIncome] = useState(clientExemptIncome.NetAgriIncOrOthrIncRule7 || 0);

  const calculateNetIncome = () => {
    const grossIncome = parseFloat(document.getElementById('GrossAgriRecpt').value.replace(/,/g, '')) || 0;
    const expenditure = parseFloat(document.getElementById('ExpIncAgri').value.replace(/,/g, '')) || 0;
    const unabsorbedLoss = parseFloat(document.getElementById('UnabAgriLossPrev8').value.replace(/,/g, '')) || 0;
    const agriIncomePortion = parseFloat(document.getElementById('AgriIncRule7and8').value.replace(/,/g, '')) || 0;

    const calculatedNetIncome = Math.max(0, Math.floor(grossIncome - (expenditure + unabsorbedLoss + agriIncomePortion)));
    setNetIncome(calculatedNetIncome);
  };

  const addMoreLand = () => {
    setAgriLandDetails([...agriLandDetails, { pincode: '', district: '', measurement: '', ownership: '', waterSource: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...agriLandDetails];
    updatedDetails[index][field] = value;
    setAgriLandDetails(updatedDetails);
  };

  const removeLandDetail = (index) => {
    const updatedDetails = agriLandDetails.filter((_, i) => i !== index);
    setAgriLandDetails(updatedDetails);
  };

  return (
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">
          <strong>Agriculture Income</strong>
        </h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group d-flex">
              <label className="m-10" style={{ width: '20%' }}>Gross Agriculture Receipt</label>
              <input
                type="text"
                className="form-control rounded-0"
                name="GrossAgriRecpt"
                id="GrossAgriRecpt"
                defaultValue={clientExemptIncome.GrossAgriRecpt}
                onChange={calculateNetIncome}
              />
            </div>

            <div className="form-group d-flex">
              <label className="m-0" style={{ width: '20%' }}>Expenditure On Agriculture</label>
              <input
                type="text"
                className="form-control rounded-0"
                name="ExpIncAgri"
                id="ExpIncAgri"
                defaultValue={clientExemptIncome.ExpIncAgri}
                onChange={calculateNetIncome}
              />
            </div>

            <div className="form-group d-flex">
              <label className="m-0" style={{ width: '20%' }}>Net Agriculture Receipt (Auto-calculated)</label>
              <input
                type="text"
                id="NetAgriInc"
                className="form-control rounded-0"
                disabled
                value={netIncome}
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group d-flex">
              <label className="m-0" style={{ width: '20%' }}>Unabsorbed Agriculture Loss</label>
              <input
                type="text"
                className="form-control rounded-0"
                name="UnabAgriLossPrev8"
                id="UnabAgriLossPrev8"
                defaultValue={clientExemptIncome.UnabAgriLossPrev8}
                onChange={calculateNetIncome}
              />
            </div>

            <div className="form-group d-flex">
              <label className="m-0" style={{ width: '20%' }}>
                Agricultural income portion relating to Rule 7, 7A, 7B(1), 7B(1A) and 8 (from Sl. No. 39 of Sch. BP)
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                name="AgriIncRule7and8"
                id="AgriIncRule7and8"
                defaultValue={clientExemptIncome.AgriIncRule7and8}
                onChange={calculateNetIncome}
              />
            </div>
          </div>
        </div>

        {netIncome > 500000 && (
          <div className="row" id="agri_land_div">
            <div className="form_heading">
              <h5 className="mt-3">
                <strong>Agriculture Land Details</strong>
              </h5>
              <span>These fields are optional. Enter these values if Net Agriculture Receipt exceeds Rs. 5 Lakhs:</span>
            </div>

            <div className="col-md-12">
              <table className="table table-responsive" id="agri_land_table">
                <tbody>
                  {agriLandDetails.map((land, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-group">
                          <label className="m-0">Pincode</label>
                          <input
                            type="number"
                            className="form-control rounded-0"
                            value={land.pincode}
                            onChange={(e) => handleInputChange(index, 'pincode', e.target.value)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label className="m-0">Name Of District</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            value={land.district}
                            onChange={(e) => handleInputChange(index, 'district', e.target.value)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label className="m-0">Measurement (Acres)</label>
                          <input
                            type="number"
                            className="form-control rounded-0"
                            value={land.measurement}
                            onChange={(e) => handleInputChange(index, 'measurement', e.target.value)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label className="m-0">Ownership Status</label>
                          <select
                            className="form-control rounded-0"
                            value={land.ownership}
                            onChange={(e) => handleInputChange(index, 'ownership', e.target.value)}
                          >
                            <option value="">Select Option</option>
                            <option value="O">Owned</option>
                            <option value="H">Held on Lease</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label className="m-0">Source of water</label>
                          <select
                            className="form-control rounded-0"
                            value={land.waterSource}
                            onChange={(e) => handleInputChange(index, 'waterSource', e.target.value)}
                          >
                            <option value="">Select Option</option>
                            <option value="IRG">Irrigated</option>
                            <option value="RF">Rain-Fed</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="form-group d-flex" style={{ flexDirection: 'column' }}>
                          <label className="m-0">Cancel</label>
                          <button className="btn btn-danger" onClick={() => removeLandDetail(index)}>
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                className="mb-3 w-auto btn btn-block bg-gradient-primary btn-flat"
                onClick={addMoreLand}
              >
                Add More
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <button id="submit_exempt_income" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
};

export default AgricultureIncome;
