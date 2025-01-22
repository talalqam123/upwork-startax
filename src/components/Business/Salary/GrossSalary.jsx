import React, { useState } from 'react';


const GrossSalaryForm = () => {
  const [formData, setFormData] = useState({
    salary: {
      basic: '',
      items: [],
      total: '0'
    },
    perquisites: {
      items: [],
      total: '0'
    },
    profits: {
      items: [],
      total: '0'
    }
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

  // Options for different selectors
  const salaryOptions = [
    { value: '2', label: 'Dearness Allowance' },
    { value: '3', label: 'Conveyance Allowance' },
    { value: '4', label: 'House Rent Allowance' },
    { value: '5', label: 'Leave Travel Allowance' },
    { value: '6', label: 'Children Education Allowance' },
    { value: 'OTH', label: 'Others' }
  ];

  const perquisiteOptions = [
    { value: '1', label: 'Accommodation' },
    { value: '2', label: 'Cars / Other Automotive' },
    { value: '3', label: 'Sweeper, gardener, watchman or personal attendant' },
    { value: '4', label: 'Gas, electricity, water' },
    { value: '5', label: 'Interest free or concessional loans' },
    { value: '6', label: 'Holiday expenses' },
    { value: '7', label: 'Free or concessional travel' },
    { value: '8', label: 'Free meals' },
    { value: '9', label: 'Free education' },
    { value: '10', label: 'Stock options (eligible start-up)' },
    { value: 'OTH', label: 'Other benefits or amenities' }
  ];

  const profitOptions = [
    { value: '1', label: 'Compensation from employer for termination' },
    { value: '2', label: 'Payment from employer or provident fund' },
    { value: '3', label: 'Amount received before joining or after cessation' },
    { value: 'OTH', label: 'Any Other' }
  ];

  const formatCurrency = (value) => {
    if (!value) return '';
    const numValue = typeof value === 'string' ? value.replace(/,/g, '') : value;
    return Number(numValue).toLocaleString('en-IN');
  };

  const calculateTotal = (section) => {
    const basicAmount = section === 'salary' ? parseFloat(formData.salary.basic.replace(/,/g, '') || 0) : 0;
    const itemsTotal = formData[section].items.reduce((sum, item) => {
      return sum + parseFloat(item.amount.replace(/,/g, '') || 0);
    }, 0);
    return formatCurrency(basicAmount + itemsTotal);
  };

  const handleBasicSalaryChange = (e) => {
    const value = formatCurrency(e.target.value.replace(/,/g, ''));
    setFormData(prev => ({
      ...prev,
      salary: {
        ...prev.salary,
        basic: value
      }
    }));
    updateTotals();
  };

  const handleItemAdd = (section, selectedOption) => {
    if (!selectedOption) return;

    const newItem = {
      type: selectedOption.value,
      title: selectedOption.label,
      amount: '',
      narration: selectedOption.value === 'OTH' ? '' : undefined
    };

    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        items: [...prev[section].items, newItem]
      }
    }));
  };

  const handleItemAmountChange = (section, index, value) => {
    const formattedValue = formatCurrency(value.replace(/,/g, ''));
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        items: prev[section].items.map((item, i) => 
          i === index ? { ...item, amount: formattedValue } : item
        )
      }
    }));
    updateTotals();
  };

  const handleItemRemove = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        items: prev[section].items.filter((_, i) => i !== index)
      }
    }));
    updateTotals();
  };

  const updateTotals = () => {
    setFormData(prev => ({
      ...prev,
      salary: { ...prev.salary, total: calculateTotal('salary') },
      perquisites: { ...prev.perquisites, total: calculateTotal('perquisites') },
      profits: { ...prev.profits, total: calculateTotal('profits') }
    }));
  };

  const renderSection = (title, section, options, total) => (
    <div className={`accordion-item form mw-100 ${activeAccordion === section ? 'open' : ''}`}>
      <div 
        className="accordion-item-header"
        onClick={() => setActiveAccordion(activeAccordion === section ? null : section)}
      >
        <span className="text-content">{title}</span>
        <div className="col-md-4 d-flex pr-0">
        <p className="text-red col-md-3 m-0">-</p>
          <input 
            type="text"
            className="form-control col-md-9 rounded-0 total_salary inr_field"
            value={formData[section].total}
            readOnly
          />
        </div>
      </div>
      
      <div className="accordion-item-description-wrapper pr-2">
        <div className="accordion-item-description">
          <div className="form_grid_acor">
            {section === 'salary' && (
              <div className="form-group row ml-3 justify-content-between">
                <span className="col-md-6 text-content">Basic Salary</span>
                <div className="col-md-4 d-flex pr-0">
                <p className="text-red col-md-3 m-0">-</p>
                  <div className="col-md-9 pr-0">
                    <input
                      type="text"
                      className="form-control rounded-0 salary_amount inr_field"
                      value={formData.salary.basic}
                      onChange={handleBasicSalaryChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Items List */}
            {formData[section].items.map((item, index) => (
              <div key={index} className="form-group row ml-3 justify-content-between">
                <div className="col-md-6 d-flex">
                  
                  <span className="col-md-6 text-content">{item.title}</span>
                  
                  {item.type === 'OTH' && (
                    
                    <input
                      type="text"
                      className="form-control rounded-0 ml-2"
                      placeholder="Specify"
                      value={item.narration || ''}
                      onChange={(e) => {
                        const newItems = [...formData[section].items];
                        newItems[index].narration = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          [section]: { ...prev[section], items: newItems }
                        }));
                      }}
                    />
                  )}
                </div>
                <div className="col-md-4 d-flex pr-0">
                <p className="text-red col-md-3 m-0">-</p>
                  <div className="col-md-9 pr-0 position-relative">
                    
                    <input
                      type="text"
                      className="form-control rounded-0 amount_field inr_field"
                      value={item.amount}
                      onChange={(e) => handleItemAmountChange(section, index, e.target.value)}
                    />
                    <button
                      className="remove-btn"
                      onClick={() => handleItemRemove(section, index)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Item Selector */}
            <div className="form-group row ml-3 justify-content-between">
              <select
                className="form-control col-md-5 other_select text-content"
                onChange={(e) => {
                  const option = options.find(opt => opt.value === e.target.value);
                  if (option) handleItemAdd(section, option);
                  e.target.value = '';
                }}
              >
                <option value="">Select Additional Details</option>
                {options
                  .filter(option => !formData[section].items.some(item => item.type === option.value))
                  .map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card card-body">
      <div className="pt-3 pb-1 p-tab-c1">
        <span>Gross Salary</span>
      </div>
      <div className="row">
        <div className="accordion col-md-9">
          {renderSection('Salary Details As per 17(1)', 'salary', salaryOptions)}
          {renderSection('Perquisites Value u/s 17(2)', 'perquisites', perquisiteOptions)}
          {renderSection('Profits in lieu of Salary u/s 17(3)', 'profits', profitOptions)}
        </div>
      </div>
    </div>
  );
};

export default GrossSalaryForm;
