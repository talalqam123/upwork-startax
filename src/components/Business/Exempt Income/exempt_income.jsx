import React, { useState } from 'react';

const ExemptIncome = () => {
    const [clientExemptIncome, setClientExemptIncome] = useState({
        PPFInterestIncome: '',
        OtherPPFInterestIncome: [],
        OtherExemptIncome: [
            { source: '10(10BC)', narration: '', amount: '' } // Default row
        ],
        GrossAgriRecpt: '',
        ExpIncAgri: '',
        NetAgriIncOrOthrIncRule7: '',
        UnabAgriLossPrev8: '',
        AgriIncRule7and8: '',
        AgricultureLand: [],

    });

    const [otherPPFs, setOtherPPFs] = useState([]);

    const handleToggleOtherPPF = () => {
        const otherPPFCard = document.getElementById('other_ppf_card');
        if (otherPPFCard) {
            otherPPFCard.classList.toggle('d-none');
        }
    };

    const handleAddMoreOtherPPF = () => {
        const newPPF = { narration: '', amount: '' };
        setOtherPPFs((prev) => [...prev, newPPF]);

        setClientExemptIncome((prev) => ({
            ...prev,
            OtherPPFInterestIncome: [...prev.OtherPPFInterestIncome, newPPF],
        }));
    };


    const handleOtherPPFChange = (index, field, value) => {
        const updatedPPFs = [...otherPPFs];
        updatedPPFs[index][field] = value;
        setOtherPPFs(updatedPPFs);
    };

    const handleAddMoreExemptIncome = () => {
        setClientExemptIncome(prevState => ({
            ...prevState,
            OtherExemptIncome: [...prevState.OtherExemptIncome, { source: '', narration: '', amount: '' }]
        }));
    };

    const handleExemptIncomeChange = (index, field, value) => {
        const updatedExemptIncome = [...clientExemptIncome.OtherExemptIncome];
        updatedExemptIncome[index][field] = value;
        setClientExemptIncome({ ...clientExemptIncome, OtherExemptIncome: updatedExemptIncome });
    };
    const handleDeleteExemptIncome = (index) => {
        if (index !== 0) {
            const updatedExemptIncome = clientExemptIncome.OtherExemptIncome.filter((_, i) => i !== index);
            setClientExemptIncome({ ...clientExemptIncome, OtherExemptIncome: updatedExemptIncome });
        }
    };


    const calculateNetIncome = () => {
        const grossIncome = parseFloat(clientExemptIncome.GrossAgriRecpt.replace(/,/g, '')) || 0;
        const expenditure = parseFloat(clientExemptIncome.ExpIncAgri.replace(/,/g, '')) || 0;
        const unabsorbedLoss = parseFloat(clientExemptIncome.UnabAgriLossPrev8.replace(/,/g, '')) || 0;
        const agriIncomePortion = parseFloat(clientExemptIncome.AgriIncRule7and8.replace(/,/g, '')) || 0;

        const netIncome = Math.max(0, Math.floor(grossIncome - (expenditure + unabsorbedLoss + agriIncomePortion)));

        setClientExemptIncome((prev) => ({
            ...prev,
            NetAgriIncOrOthrIncRule7: netIncome,
        }));

        if (netIncome > 500000) {
            document.getElementById('agri_land_div').classList.remove('d-none');
        } else {
            document.getElementById('agri_land_div').classList.add('d-none');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientExemptIncome((prev) => ({ ...prev, [name]: value }));
    };

    const addMoreLand = () => {
        setClientExemptIncome((prev) => ({
            ...prev,
            AgricultureLand: [
                ...prev.AgricultureLand,
                {
                    PinCode: '',
                    NameOfDistrict: '',
                    MeasurementOfLand: '',
                    AgriLandOwnedFlag: '',
                    AgriLandIrrigatedFlag: '',
                },
            ],
        }));
    };

    const removeLand = (index) => {
        setClientExemptIncome((prev) => {
            const updatedLand = [...prev.AgricultureLand];
            updatedLand.splice(index, 1);
            return { ...prev, AgricultureLand: updatedLand };
        });
    };
    return (
        <form id="exempt_income" method="POST">
            {/* <input type="hidden" name="client_id" value="1" />
      <input type="hidden" name="year" value="2024" />
      <input type="hidden" name="tab" value="other_income" /> */}
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">
                        <strong>Exempt Income</strong>
                    </h3>
                </div>
                <div className="card-body">
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Interest Income from PPF</label>
                                <input
                                    type="text"
                                    className="form-control rounded-0 inr_field"
                                    name="PPF"
                                    value={clientExemptIncome.PPFInterestIncome}
                                    onChange={(e) => setClientExemptIncome({ ...clientExemptIncome, PPFInterestIncome: e.target.value })}
                                />
                                <span>Example: Interest earned on PPF</span>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary mt-1"
                        type="button"
                        onClick={handleToggleOtherPPF}
                    >
                        Add Any Other Interest from PPF
                    </button>
                    <div
                        className={`mt-3 callout callout-info ${clientExemptIncome.OtherPPFInterestIncome.length === 0 ? 'd-none' : ''}`}
                        id="other_ppf_card"
                    >
                        {otherPPFs.map((ppf, index) => (
                            <div className="row" key={index}>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Narration</label>
                                        <input
                                            type="text"
                                            name="other_ppf_narration[]"
                                            className="form-control rounded-0"
                                            value={ppf.narration}
                                            onChange={(e) => handleOtherPPFChange(index, 'narration', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input
                                            type="text"
                                            name="other_ppf_amount[]"
                                            className="form-control rounded-0 inr_field"
                                            value={ppf.amount}
                                            onChange={(e) => handleOtherPPFChange(index, 'amount', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            className="btn btn-info rounded-0"
                            type="button"
                            onClick={handleAddMoreOtherPPF}
                        >
                            Add More
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">
                        <strong>Other Exempt Income</strong>
                    </h3>
                </div>
                <div className="card-body">
                    <div className="mt-3" id="other_exempt_income_card">
                        {clientExemptIncome.OtherExemptIncome.map((income, index) => (
                            <div className="row field-row" key={index}>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Source</label>
                                        <select
                                            className="form-control exempt_select"
                                            name="other_exm_inc_source[]"
                                            value={income.source}
                                            onChange={(e) => handleExemptIncomeChange(index, 'source', e.target.value)}
                                        >
                                            <option value="10(10BC)">Sec 10(10BC)-Any amount from the Central/State Govt./local authority by way of compensation on account of any disaster</option>
                                            <option value="10(10D)">Sec 10(10D)- Any sum received under a life insurance policy except mentioned in sub-clause(a) to(d)</option>
                                            <option value="10(11)">Sec 10(11)-Statutory Provident Fund received</option>
                                            <option value="10(12)">Sec 10(12)-Recognised Provident Fund received</option>
                                            <option value="10(12C)">Sec 10(12C)-Any payment from Agniveer Corpus Fund to a person enrolled under the Agnipath Scheme or to his nominee</option>
                                            <option value="10(13)">Sec 10(13)-Approved superannuation fund received</option>
                                            <option value="10(16)">Sec 10(16)-Scholarships granted to meet the cost of education</option>
                                            <option value="10(17)">Sec 10(17)-Allowance MP/MLA/MLC</option>
                                            <option value="10(17A)">Sec 10(17A)-Award instituted by Government</option>
                                            <option value="10(18)">Sec 10(18)-Pension received by winner of "Param Vir Chakra" or "Maha Vir Chakra" or "Vir Chakra" or such other gallantry award</option>
                                            <option value="DMDP">Defense medical disability pension</option>
                                            <option value="10(19)">Sec 10(19)-Armed Forces Family pension in case of death during operational duty</option>
                                            <option value="10(26)">Sec 10(26)-Any income as referred to in section 10(26)</option>
                                            <option value="10(26AAA)">Sec 10(26AAA)-Any income as referred to in section 10(26AAA)</option>
                                            <option value="OTH">Any Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group narration_input">
                                        <label>Narration</label><span id="requiredIndicator"> </span>
                                        <input
                                            type="text"
                                            name="other_exm_inc_narration[]"
                                            className="form-control rounded-0"
                                            value={income.narration}
                                            onChange={(e) => handleExemptIncomeChange(index, 'narration', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input
                                            type="text"
                                            name="other_exm_inc_amount[]"
                                            className="form-control rounded-0 inr_field"
                                            value={income.amount}
                                            onChange={(e) => handleExemptIncomeChange(index, 'amount', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex form-group align-items-end">
                                    <button
                                        className="btn btn-danger"
                                        type="button"
                                        onClick={() => handleDeleteExemptIncome(index)}
                                        disabled={index === 0} // Disable for the first row
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="btn btn-info mt-1"
                        type="button"
                        onClick={handleAddMoreExemptIncome}
                    >
                        Add Other Exempt Income
                    </button>
                </div>
            </div>
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
                value={clientExemptIncome.GrossAgriRecpt}
                onChange={handleInputChange}
                onInput={calculateNetIncome}
              />
            </div>

            <div className="form-group d-flex">
              <label className="m-0" style={{ width: '20%' }}>Expenditure On Agriculture</label>
              <input
                type="text"
                className="form-control rounded-0"
                name="ExpIncAgri"
                value={clientExemptIncome.ExpIncAgri}
                onChange={handleInputChange}
                onInput={calculateNetIncome}
              />
            </div>

            <div className="form-group d-flex">
              <label className="m-0" style={{ width: '20%' }}>Net Agriculture Receipt (Auto-calculated)</label>
              <input
                type="text"
                id="NetAgriInc"
                className="form-control rounded-0"
                disabled
                value={clientExemptIncome.NetAgriIncOrOthrIncRule7}
              />
              <input
                type="hidden"
                name="NetAgriIncOrOthrIncRule7"
                id="NetAgriIncOrOthrIncRule7"
                value={clientExemptIncome.NetAgriIncOrOthrIncRule7}
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
                value={clientExemptIncome.UnabAgriLossPrev8}
                onChange={handleInputChange}
                onInput={calculateNetIncome}
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
                value={clientExemptIncome.AgriIncRule7and8}
                onChange={handleInputChange}
                onInput={calculateNetIncome}
              />
            </div>
          </div>
        </div>

        <div className={`row ${clientExemptIncome.AgricultureLand.length === 0 ? 'd-none' : ''}`} id="agri_land_div">
          <div className="form_heading">
            <h5 className="mt-3">
              <strong>Agriculture Land Details</strong>
            </h5>
            <span>These fields are optional. Enter these values if Net Agriculture Receipt exceeds Rs. 5 Lakhs:</span>
          </div>

          <div className="col-md-12">
            <table className="table table-responsive" id="agri_land_table">
              <tbody>
                {clientExemptIncome.AgricultureLand.map((land, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-group">
                        <label className="m-0">Pincode</label>
                        <input
                          type="number"
                          className="form-control rounded-0"
                          value={land.PinCode}
                          onChange={(e) => {
                            const updatedLand = [...clientExemptIncome.AgricultureLand];
                            updatedLand[index].PinCode = e.target.value;
                            setClientExemptIncome((prev) => ({ ...prev, AgricultureLand: updatedLand }));
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-group">
                        <label className="m-0">Name Of District</label>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          value={land.NameOfDistrict}
                          onChange={(e) => {
                            const updatedLand = [...clientExemptIncome.AgricultureLand];
                            updatedLand[index].NameOfDistrict = e.target.value;
                            setClientExemptIncome((prev) => ({ ...prev, AgricultureLand: updatedLand }));
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-group">
                        <label className="m-0">Measurement (Acres)</label>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          value={land.MeasurementOfLand}
                          onChange={(e) => {
                            const updatedLand = [...clientExemptIncome.AgricultureLand];
                            updatedLand[index].MeasurementOfLand = e.target.value;
                            setClientExemptIncome((prev) => ({ ...prev, AgricultureLand: updatedLand }));
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-group">
                        <label className="m-0">Ownership Status</label>
                        <select
                          className="form-control rounded-0"
                          value={land.AgriLandOwnedFlag}
                          onChange={(e) => {
                            const updatedLand = [...clientExemptIncome.AgricultureLand];
                            updatedLand[index].AgriLandOwnedFlag = e.target.value;
                            setClientExemptIncome((prev) => ({ ...prev, AgricultureLand: updatedLand }));
                          }}
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
                          value={land.AgriLandIrrigatedFlag}
                          onChange={(e) => {
                            const updatedLand = [...clientExemptIncome.AgricultureLand];
                            updatedLand[index].AgriLandIrrigatedFlag = e.target.value;
                            setClientExemptIncome((prev) => ({ ...prev, AgricultureLand: updatedLand }));
                          }}
                        >
                          <option value="">Select Option</option>
                          <option value="IRG">Irrigated</option>
                          <option value="RF">Rain-Fed</option>
                        </select>
                      </div>
                    </td>
                   
                    <td>
                    {index > 0 && (
                      <div className="form-group d-flex" style={{ flexDirection: 'column' }}>
                        <label className="m-0">Cancel</label>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeLand(index)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    )}
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
      </div>
      <div style={{ display: 'flex' }}>
        <button id="submit_exempt_income" className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </div>
        </form>
    );
};

export default ExemptIncome;
