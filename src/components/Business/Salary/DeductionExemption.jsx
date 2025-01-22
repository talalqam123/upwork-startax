import React, { useState, useEffect } from 'react';

const SalarySection = () => {
  const [exemptTotal, setExemptTotal] = useState(0);
  const [deductionTotal, setDeductionTotal] = useState(0);
  const [exemptItems, setExemptItems] = useState([]);

  const exemptOptions = [
    { value: '10(5)', label: 'Sec 10(5) - Leave Travel concession/assistance' },
    { value: '10(6)', label: 'Sec 10(6) - Remuneration received as an official...' },
    // ... add all other options from the original select
  ];

  const handleExemptSelect = (e) => {
    const selected = e.target.value;
    const selectedOption = exemptOptions.find(opt => opt.value === selected);
    
    if (selected === 'OTH') {
      setExemptItems([...exemptItems, {
        type: 'other',
        description: '',
        amount: ''
      }]);
    } else if (selected) {
      setExemptItems([...exemptItems, {
        type: selected,
        description: selectedOption.label,
        amount: ''
      }]);
    }
  };

  const handleRemoveExempt = (index) => {
    const newItems = [...exemptItems];
    newItems.splice(index, 1);
    setExemptItems(newItems);
  };

  const handleAmountChange = (index, value) => {
    const newItems = [...exemptItems];
    newItems[index].amount = value;
    setExemptItems(newItems);
    
    // Recalculate total
    const total = newItems.reduce((sum, item) => 
      sum + (parseInt(item.amount.replace(/,/g, '')) || 0), 0);
    setExemptTotal(total);
  };

  // Add new state for deductions
  const [deductions, setDeductions] = useState({
    standardDeduction: '',
    entertainmentTax: '',
    professionalTax: ''
  });

  const handleDeductionChange = (field, value) => {
    const newDeductions = { ...deductions };
    newDeductions[field] = value;
    setDeductions(newDeductions);

    // Calculate total deductions
    const total = Object.values(newDeductions).reduce((sum, val) => 
      sum + (parseInt(val.replace(/,/g, '')) || 0), 0);
    setDeductionTotal(total);
  };

  // Add new state for accordion
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    if (openAccordion === section) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(section);
    }
  };

  // Add this CSS inline style object
  const infoButtonStyle = {
    position: 'absolute',
    right: '-25px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1
  };

  const inputContainerStyle = {
    position: 'relative',
    width: '100%'
  };

  return (
    <div className="card card-body">
      <div className="pt-3 pb-3 p-tab-c1">
        <span>Over All Exemption Deduction</span>
      </div>

      <div className="row">
        <div className="accordion col-md-9">
          {/* Exempt allowances section */}
          <div className={`accordion-item form mw-100 ${openAccordion === 'exempt' ? 'open' : ''}`}>
            <div 
              className="accordion-item-header"
              onClick={() => toggleAccordion('exempt')}
            >
              <span>Exempt allowances under u/s 10</span>
              <div className="col-md-4 d-flex pr-0">
                <p className="text-red col-md-3 m-0">-</p>
                <input 
                  type="text"
                  className="form-control col-md-9 rounded-0 total_exempt"
                  value={exemptTotal.toLocaleString('en-IN')}
                  readOnly
                  onClick={(e) => e.stopPropagation()} // Prevent accordion toggle when clicking input
                />
              </div>
            </div>

            <div className="accordion-item-description-wrapper pr-2">
              <div className="accordion-item-description">
                <div className="form_grid_acor">
                  {exemptItems.map((item, index) => (
                    <div key={index} className="form-group row ml-3 justify-content-between">
                      {item.type === 'other' ? (
                        <div className="col-md-6 d-flex justify-content-between">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => {
                              const newItems = [...exemptItems];
                              newItems[index].description = e.target.value;
                              setExemptItems(newItems);
                            }}
                          />
                        </div>
                      ) : (
                        <span className="col-md-6">{item.description}</span>
                      )}
                      <div className="col-md-4 d-flex pr-0">
                        <span className="text-red col-md-3">-</span>
                        <div className="col-md-9 p-0 position-relative">
                          <input
                            type="text"
                            className="form-control rounded-0 exempt_amount"
                            value={item.amount}
                            onChange={(e) => handleAmountChange(index, e.target.value)}
                          />
                          <button 
                            className="removeOthIncome remove-btn"
                            onClick={() => handleRemoveExempt(index)}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="form-group row ml-3 justify-content-between add_exempt_div">
                    <select
                      className="form-control col-md-5 other_select text-content"
                      onChange={handleExemptSelect}
                      value=""
                    >
                      <option value="">Select Additional Details</option>
                      {exemptOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deductions section */}
          <div className={`accordion-item form mw-100 ${openAccordion === 'deductions' ? 'open' : ''}`}>
            <div 
              className="accordion-item-header"
              onClick={() => toggleAccordion('deductions')}
            >
              <span>Deductions under u/s 16</span>
              <div className="col-md-4 d-flex pr-0">
                <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>-</p>
                <input 
                  type="text"
                  className="form-control col-md-9 rounded-0 total_deduction inr_field"
                  value={deductionTotal.toLocaleString('en-IN')}
                  readOnly
                  onClick={(e) => e.stopPropagation()} // Prevent accordion toggle when clicking input
                />
              </div>
            </div>

            <div className="accordion-item-description-wrapper pr-2">
              <div className="accordion-item-description">
                <div className="form_grid_acor">
                  {/* Standard Deduction */}
                  <div className="form-group row ml-3 justify-content-between">
                    <span className="col-md-6 text-content">
                      Standard deduction under section 16(ia)
                    </span>
                    <div className="col-md-4 d-flex justify-content-end">
                      <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>-</p>
                      <div className="col-md-9" style={inputContainerStyle}>
                        <input
                          type="text"
                          className="form-control rounded-0 deduction_amount inr_field deduction16ia"
                          value={deductions.standardDeduction}
                          onChange={(e) => handleDeductionChange('standardDeduction', e.target.value)}
                        />
                        <span className="tooltips" style={infoButtonStyle}>
                          <i className="fas fa-info-circle"></i>
                          <span className="tooltips-content">
                            <b>Amount:</b> Up to ₹50,000 of Gross Salary.
                            <br />
                            <b>Applicability:</b> Allowed in both New and Old Tax Regimes.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Entertainment Tax */}
                  <div className="form-group row ml-3 justify-content-between">
                    <span className="col-md-6 text-content">
                      Entertainment tax under section 16(ii)
                    </span>
                    <div className="col-md-4 d-flex justify-content-end">
                      <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>-</p>
                      <div className="col-md-9" style={inputContainerStyle}>
                        <input
                          type="text"
                          className="form-control rounded-0 deduction_amount inr_field"
                          value={deductions.entertainmentTax}
                          onChange={(e) => handleDeductionChange('entertainmentTax', e.target.value)}
                        />
                        <span className="tooltips" style={infoButtonStyle}>
                          <i className="fas fa-info-circle"></i>
                          <span className="tooltips-content">
                            <strong>Applicable to:</strong> Only for Government Employees.
                            <br />
                            <b>Amount:</b> Least of the following three:
                            <br />
                            <li>20% of Basic Salary</li>
                            <li>₹5,000</li>
                            <li>The actual allowance received by the employee.</li>
                            <br />
                            <b>Applicability:</b> Allowed only under the Old Tax Regime.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Tax */}
                  <div className="form-group row ml-3 justify-content-between">
                    <span className="col-md-6 text-content">
                      Professional tax under section 16(iii)
                    </span>
                    <div className="col-md-4 d-flex justify-content-end">
                      <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>-</p>
                      <div className="col-md-9" style={inputContainerStyle}>
                        <input
                          type="text"
                          className="form-control rounded-0 deduction_amount inr_field"
                          value={deductions.professionalTax}
                          onChange={(e) => handleDeductionChange('professionalTax', e.target.value)}
                        />
                        <span className="tooltips" style={infoButtonStyle}>
                          <i className="fas fa-info-circle"></i>
                          <span className="tooltips-content">
                            <b>Amount:</b> As per the actual professional tax paid.
                            <br />
                            <b>Applicability:</b> Allowed only under the Old Tax Regime.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalarySection;
