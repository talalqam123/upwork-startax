import React, { useState } from 'react';

const ExemptIncomeForm = ({ client, clientExemptIncome, year }) => {
  const [otherPPFIncome, setOtherPPFIncome] = useState(
    clientExemptIncome?.OtherPPFInterestIncome || [{ narration: '', amount: '' }]
  );
  const [otherExemptIncome, setOtherExemptIncome] = useState(
    clientExemptIncome?.OtherExemptIncome || [{ source: '', narration: '', amount: '' }]
  );

  const handleTogglePPF = () => {
    document.getElementById('other_ppf_card').classList.toggle('d-none');
  };

  const handleAddMorePPF = () => {
    setOtherPPFIncome([...otherPPFIncome, { narration: '', amount: '' }]);
  };

  const handleRemoveExemptIncome = (index) => {
    setOtherExemptIncome(
      otherExemptIncome.filter((_, idx) => idx !== index)
    );
  };

  const handleAddMoreExemptIncome = () => {
    setOtherExemptIncome([
      ...otherExemptIncome,
      { source: '', narration: '', amount: '' },
    ]);
  };

  const handlePPFChange = (index, field, value) => {
    const updatedPPFIncome = [...otherPPFIncome];
    updatedPPFIncome[index][field] = value;
    setOtherPPFIncome(updatedPPFIncome);
  };

  const handleExemptIncomeChange = (index, field, value) => {
    const updatedExemptIncome = [...otherExemptIncome];
    updatedExemptIncome[index][field] = value;
    setOtherExemptIncome(updatedExemptIncome);
  };

  return (
    <form id="exempt_income" method="POST" action="/basic_details/store_exempt_income">
      <input type="hidden" name="client_id" value={client.id} />
      <input type="hidden" name="year" value={year} />
      <input type="hidden" name="tab" value="other_income" />

      {/* PPF Section */}
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
                  defaultValue={clientExemptIncome?.PPFInterestIncome || ''}
                />
                <span>Example: Interest earned on PPF</span>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary mt-1"
            type="button"
            onClick={handleTogglePPF}
          >
            Add Any Other Interest from PPF
          </button>
          <div
            className={`mt-3 callout callout-info ${
              !otherPPFIncome.length ? 'd-none' : ''
            }`}
            id="other_ppf_card"
          >
            {otherPPFIncome.map((income, index) => (
              <div className="row" key={index}>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Narration</label>
                    <input
                      type="text"
                      name="other_ppf_narration[]"
                      className="form-control rounded-0"
                      value={income.narration}
                      onChange={(e) =>
                        handlePPFChange(index, 'narration', e.target.value)
                      }
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
                      value={income.amount}
                      onChange={(e) =>
                        handlePPFChange(index, 'amount', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              className="btn btn-info rounded-0"
              type="button"
              onClick={handleAddMorePPF}
            >
              Add More
            </button>
          </div>
        </div>
      </div>

      {/* Other Exempt Income Section */}
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">
            <strong>Other Exempt Income</strong>
          </h3>
        </div>
        <div className="card-body">
          <div className="mt-3" id="other_exempt_income_card">
            {otherExemptIncome.map((income, index) => (
              <div className="row field-row" key={index}>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Source</label>
                    <select
                      className="form-control exempt_select"
                      name="other_exm_inc_source[]"
                      value={income.source}
                      onChange={(e) =>
                        handleExemptIncomeChange(index, 'source', e.target.value)
                      }
                    >
                      <option value="10(10BC)">Sec 10(10BC)</option>
                      <option value="10(10D)">Sec 10(10D)</option>
                      <option value="10(11)">Sec 10(11)</option>
                      <option value="10(12)">Sec 10(12)</option>
                      <option value="10(12C)">Sec 10(12C)</option>
                      <option value="10(13)">Sec 10(13)</option>
                      <option value="10(16)">Sec 10(16)</option>
                      <option value="10(17)">Sec 10(17)</option>
                      <option value="10(17A)">Sec 10(17A)</option>
                      <option value="10(18)">Sec 10(18)</option>
                      <option value="DMDP">Defense medical disability pension</option>
                      <option value="10(19)">Sec 10(19)</option>
                      <option value="10(26)">Sec 10(26)</option>
                      <option value="10(26AAA)">Sec 10(26AAA)</option>
                      <option value="OTH">Any Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Narration</label>
                    <input
                      type="text"
                      name="other_exm_inc_narration[]"
                      className="form-control rounded-0"
                      value={income.narration}
                      onChange={(e) =>
                        handleExemptIncomeChange(index, 'narration', e.target.value)
                      }
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
                      onChange={(e) =>
                        handleExemptIncomeChange(index, 'amount', e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col-md-3 d-flex form-group align-items-end">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleRemoveExemptIncome(index)}
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
    </form>
  );
};

export default ExemptIncomeForm;
