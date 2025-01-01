import React, { useState } from "react";

const OtherIncomeForm = ({ client, year }) => {
  // State to manage showing/hiding the PF card and other interest card
  const [showPfCard, setShowPfCard] = useState(pfInterestKey !== "");
  const [showOtherInterestCard, setShowOtherInterestCard] = useState(clientOtherIncome?.OTH_INTEREST?.length > 0);
  const [otherInterestIncomes, setOtherInterestIncomes] = useState(clientOtherIncome?.OTH_INTEREST || [{}]);
  const [otherSourceIncomes, setOtherSourceIncomes] = useState(clientOtherIncome?.Other_Income || []);

  // Mock data for demonstration
  const clientOtherIncome = {
    SAV: '1000',
    IFD: '2000',
    TAX: '500',
    OTH_INTEREST: [{ narration: 'Other Interest 1', amount: '300' }],
    Other_Income: [{ source: 'Source 1', narration: 'Other Source 1', amount: '400' }],
  };
  
  const pfInterestKey = "10(11)(iP)";
  const pfInterestAmt = "1500";

  // Toggles
  const togglePfCard = () => setShowPfCard(!showPfCard);
  const toggleOtherInterestCard = () => setShowOtherInterestCard(!showOtherInterestCard);

  // Add and delete handlers
  const addOtherInterestIncome = () => {
    setOtherInterestIncomes([...otherInterestIncomes, { narration: "", amount: "" }]);
  };

  const addOtherSourceIncome = () => {
    setOtherSourceIncomes([...otherSourceIncomes, { source: "", narration: "", amount: "" }]);
  };

  const deleteOtherSourceIncome = (index) => {
    setOtherSourceIncomes(otherSourceIncomes.filter((_, i) => i !== index));
  };

  // Handle changes
  const handleOtherInterestChange = (index, field, value) => {
    const updated = [...otherInterestIncomes];
    updated[index][field] = value;
    setOtherInterestIncomes(updated);
  };

  const handleOtherSourceChange = (index, field, value) => {
    const updated = [...otherSourceIncomes];
    updated[index][field] = value;
    setOtherSourceIncomes(updated);
  };

  return (
    <form id="otherIncomeForm" method="POST" action="/basic_details/store_other_income">
      {/* <input type="hidden" name="client_id" value={client.id} />
      <input type="hidden" name="year" value={year} />
      <input type="hidden" name="tab" value="basic_details" /> */}

      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title"><strong>Interest Income</strong></h3>
        </div>
        <div className="card-body">
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="form-group">
                <label>Interest Income from Saving Bank</label>
                <input type="text" className="form-control rounded-0" name="SAV" defaultValue={clientOtherIncome.SAV} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Interest Income from Deposits</label>
                <input type="text" className="form-control rounded-0" name="IFD" defaultValue={clientOtherIncome.IFD} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Interest from Income Tax Refund</label>
                <input type="text" className="form-control rounded-0" name="TAX" defaultValue={clientOtherIncome.TAX} />
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={togglePfCard}>Add Interest on PF</button>

          {showPfCard && (
            <div className="row mt-3 callout callout-info" id="pf_card">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Interest on PF</label>
                  <select name="pf_interest" className="form-control rounded-0" defaultValue={pfInterestKey}>
                    <option value="">Select Type</option>
                    <option value="10(11)(iP)">Interest on PF 1st Provison 10(11), 10(11)(iiP)</option>
                    <option value="10(11)(iiP)">Interest on PF 2nd Provison 10(11), 10(12)(iP)</option>
                    <option value="10(12)(iP)">Interest on PF 1st Provison 10(12), 10(12)(iiP)</option>
                    <option value="10(12)(iiP)">Interest on PF 2nd Provison 10(12)</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    name="pf_interest_amt"
                    type="text"
                    className="form-control rounded-0"
                    defaultValue={pfInterestAmt}
                  />
                </div>
              </div>
            </div>
          )}

          <br />

          <button type="button" className="btn btn-primary mt-1" onClick={toggleOtherInterestCard}>Add any Other Interest Income</button>

          {showOtherInterestCard && (
            <div className="mt-3 callout callout-info" id="other_income_int_card">
              {otherInterestIncomes.map((item, index) => (
                <div className="row" key={index}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Narration</label>
                      <input
                        type="text"
                        name="other_inc_int_narration[]"
                        className="form-control rounded-0"
                        value={item.narration}
                        onChange={(e) => handleOtherInterestChange(index, "narration", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                        type="text"
                        name="other_inc_int_amount[]"
                        className="form-control rounded-0"
                        value={item.amount}
                        onChange={(e) => handleOtherInterestChange(index, "amount", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn btn-info" type="button" onClick={addOtherInterestIncome}>Add more</button>
            </div>
          )}
        </div>
      </div>

      {/* Repeat similar structure for other sections */}
    </form>
  );
};

export default OtherIncomeForm;
