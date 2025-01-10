import React, { useState } from 'react';

const GrossSalary = () => {
  const [additionalFields, setAdditionalFields] = useState([]);

  // Dummy data for demonstration
  const previousClientSalaryDetails = {
    Salary: {
      total: 87687,
      NatureOfSalaryDtlsType: 87687,
    },
    Perquisites: {
      total: 50000,
    },
    Profit: {
      total: 25000,
    },
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleAddField = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption !== 'Select Additional Details' && !additionalFields.some(field => field.label === selectedOption)) {
      setAdditionalFields([
        ...additionalFields,
        { label: selectedOption, value: '' }
      ]);
    }
    event.target.value = 'Select Additional Details';
  };

  const handleFieldChange = (index, newValue) => {
    const updatedFields = [...additionalFields];
    updatedFields[index].value = newValue;
    setAdditionalFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...additionalFields];
    updatedFields.splice(index, 1);
    setAdditionalFields(updatedFields);
  };

  return (
    <div className="card card-body">
      <div className="pt-3 pb-1 p-tab-c1">
        <span>Gross Salary</span>
      </div>

      <div className="row">
        <div className="accordion col-md-9">
          {/* Salary Details as per 17(1) */}
          <div className="accordion-item form mw-100">
            <div className="accordion-item-header">
              <span className="text-content">Salary Details As per 17(1)</span>
              <div className="col-md-4 d-flex pr-0">
                <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                  {previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.total) : '-'}
                </p>
                <input
                  type="text"
                  className="form-control col-md-9 rounded-0 total_salary inr_field text-content"
                  name="tabs[0][total_salary]"
                  value={previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.total) : ''}
                  readOnly
                />
              </div>
            </div>
            <div className="accordion-item-description-wrapper pr-2">
              <div className="accordion-item-description">
                <div className="form_grid_acor">
                  <div className="form-group row ml-3 justify-content-between">
                    <input type="hidden" className="sal-type" value="1" name="tabs[0][salary_type][]" />
                    <span className="col-md-6 text-content">Basic Salary</span>
                    <div className="col-md-4 d-flex pr-0">
                      <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                        {previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.NatureOfSalaryDtlsType) : '-'}
                      </p>
                      <div className="col-md-9 pr-0">
                        <input
                          type="text"
                          className="form-control rounded-0 salary_amount inr_field"
                          name="tabs[0][salary_amount][]"
                          value={previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.NatureOfSalaryDtlsType) : ''}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Dynamic Additional Fields */}
                  {additionalFields.map((field, index) => (
                    <div key={index} className="form-group row ml-3 justify-content-between">
                      <span className="col-md-6 text-content">{field.label}</span>
                      <div className="col-md-4 d-flex pr-0">
                        <input
                          type="text"
                          className="form-control col-md-9 rounded-0"
                          value={field.value}
                          onChange={(e) => handleFieldChange(index, e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-link text-danger p-0 ml-2"
                          onClick={() => handleRemoveField(index)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="form-group row ml-3 justify-content-between add_salary_div">
                    <select
                      className="form-control col-md-5 other_select text-content"
                      id="OtherSalariesList"
                      onChange={handleAddField}
                    >
                      <option>Select Additional Details</option>
                      <option value="Dearness Allowance">Dearness Allowance</option>
                      <option value="Conveyance Allowance">Conveyance Allowance</option>
                      <option value="House Rent Allowance">House Rent Allowance</option>
                      <option value="Leave Travel Allowance">Leave Travel Allowance</option>
                      <option value="Children Education Allowance">Children Education Allowance</option>
                      <option value="Other Allowance">Other Allowance</option>
                      <option value="Fees/commission">Fees/commission</option>
                      <option value="Advance of salary">Advance of salary</option>
                      <option value="Leave Encashment">Leave Encashment</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add other sections similarly */}
          <div className="accordion-item form mw-100">
            <div className="accordion-item-header">
              <span className="text-content">Perquisites Value u/s 17(2)</span>
              <div className="col-md-4 d-flex pr-0">
                <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                  {previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.total) : '-'}
                </p>
                <input
                  type="text"
                  className="form-control col-md-9 rounded-0 total_salary inr_field text-content"
                  name="tabs[0][total_salary]"
                  value={previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.total) : ''}
                  readOnly
                />
              </div>
            </div>
            <div className="accordion-item-description-wrapper pr-2">
              <div className="accordion-item-description">
                <div className="form_grid_acor">
                  <div className="form-group row ml-3 justify-content-between">
                    <input type="hidden" className="sal-type" value="1" name="tabs[0][salary_type][]" />
                    <span className="col-md-6 text-content">Basic Salary</span>
                    <div className="col-md-4 d-flex pr-0">
                      <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                        {previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.NatureOfSalaryDtlsType) : '-'}
                      </p>
                      <div className="col-md-9 pr-0">
                        <input
                          type="text"
                          className="form-control rounded-0 salary_amount inr_field"
                          name="tabs[0][salary_amount][]"
                          value={previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.NatureOfSalaryDtlsType) : ''}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Dynamic Additional Fields */}
                  {additionalFields.map((field, index) => (
                    <div key={index} className="form-group row ml-3 justify-content-between">
                      <span className="col-md-6 text-content">{field.label}</span>
                      <div className="col-md-4 d-flex pr-0">
                        <input
                          type="text"
                          className="form-control col-md-9 rounded-0"
                          value={field.value}
                          onChange={(e) => handleFieldChange(index, e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-link text-danger p-0 ml-2"
                          onClick={() => handleRemoveField(index)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="form-group row ml-3 justify-content-between add_salary_div">
                    <select
                      className="form-control col-md-5 other_select text-content"
                      id="OtherSalariesList"
                      onChange={handleAddField}
                    >
                      <option>Select Additional Details</option>
                      <option value="Dearness Allowance">Dearness Allowance</option>
                      <option value="Conveyance Allowance">Conveyance Allowance</option>
                      <option value="House Rent Allowance">House Rent Allowance</option>
                      <option value="Leave Travel Allowance">Leave Travel Allowance</option>
                      <option value="Children Education Allowance">Children Education Allowance</option>
                      <option value="Other Allowance">Other Allowance</option>
                      <option value="Fees/commission">Fees/commission</option>
                      <option value="Advance of salary">Advance of salary</option>
                      <option value="Leave Encashment">Leave Encashment</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item form mw-100">
            <div className="accordion-item-header">
              <span className="text-content">Profits in lieu of Salary u/s 17(3)</span>
              <div className="col-md-4 d-flex pr-0">
                <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                  {previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.total) : '-'}
                </p>
                <input
                  type="text"
                  className="form-control col-md-9 rounded-0 total_salary inr_field text-content"
                  name="tabs[0][total_salary]"
                  value={previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.total) : ''}
                  readOnly
                />
              </div>
            </div>
            <div className="accordion-item-description-wrapper pr-2">
              <div className="accordion-item-description">
                <div className="form_grid_acor">
                  <div className="form-group row ml-3 justify-content-between">
                    <input type="hidden" className="sal-type" value="1" name="tabs[0][salary_type][]" />
                    <span className="col-md-6 text-content">Basic Salary</span>
                    <div className="col-md-4 d-flex pr-0">
                      <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                        {previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.NatureOfSalaryDtlsType) : '-'}
                      </p>
                      <div className="col-md-9 pr-0">
                        <input
                          type="text"
                          className="form-control rounded-0 salary_amount inr_field"
                          name="tabs[0][salary_amount][]"
                          value={previousClientSalaryDetails ? formatCurrency(previousClientSalaryDetails.Salary.NatureOfSalaryDtlsType) : ''}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Dynamic Additional Fields */}
                  {additionalFields.map((field, index) => (
                    <div key={index} className="form-group row ml-3 justify-content-between">
                      <span className="col-md-6 text-content">{field.label}</span>
                      <div className="col-md-4 d-flex pr-0">
                        <input
                          type="text"
                          className="form-control col-md-9 rounded-0"
                          value={field.value}
                          onChange={(e) => handleFieldChange(index, e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-link text-danger p-0 ml-2"
                          onClick={() => handleRemoveField(index)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="form-group row ml-3 justify-content-between add_salary_div">
                    <select
                      className="form-control col-md-5 other_select text-content"
                      id="OtherSalariesList"
                      onChange={handleAddField}
                    >
                      <option>Select Additional Details</option>
                      <option value="Dearness Allowance">Dearness Allowance</option>
                      <option value="Conveyance Allowance">Conveyance Allowance</option>
                      <option value="House Rent Allowance">House Rent Allowance</option>
                      <option value="Leave Travel Allowance">Leave Travel Allowance</option>
                      <option value="Children Education Allowance">Children Education Allowance</option>
                      <option value="Other Allowance">Other Allowance</option>
                      <option value="Fees/commission">Fees/commission</option>
                      <option value="Advance of salary">Advance of salary</option>
                      <option value="Leave Encashment">Leave Encashment</option>
                      <option value="Others">Others</option>
                    </select>
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

export default GrossSalary;