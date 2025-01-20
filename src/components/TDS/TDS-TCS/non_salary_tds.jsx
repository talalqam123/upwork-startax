import { Block } from '@mui/icons-material';
import React, { useState } from 'react';
import BackButton from '../../Client Details/Backbutton';

const NonSalaryTDS = () => {
  const initialData = [
    {
      TypeofIncome: '',
      NameofDeductor: '',
      TANofDeductor: '',
      IncomeAgainstTDS: '',
      TotalTaxDeducted: '',
      TaxClaimedForYear: '',
      FinancialYearNonSalary: '2023',
    },
  ];

  const [formData, setFormData] = useState(initialData);
  const [tanError, setTanError] = useState(false);

  const tanPattern = /^(HYD|VPN|BBN|BPL|JBP|CHE|CMB|MRI|DEL|CAL|MRT|AHM|BRD|RKT|SRT|BLR|AGR|KNP|CHN|TVD|ALD|LKN|MUM|NGP|AMR|JLD|PTL|RTK|KLP|NSK|PNE|PTN|RCH|JDH|JPR|SHL)[A-Z][0-9]{5}[A-Z]$/;

  const validateTAN = (tan) => tanPattern.test(tan);

  const handleInputChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
    if (field === 'TANofDeductor' && !validateTAN(value)) {
      setTanError(true);
    } else {
      setTanError(false);
    }
  };

  const addRow = () => {
    setFormData([
      ...formData,
      {
        TypeofIncome: '',
        NameofDeductor: '',
        TANofDeductor: '',
        IncomeAgainstTDS: '',
        TotalTaxDeducted: '',
        TaxClaimedForYear: '',
        FinancialYearNonSalary: '2023',
      },
    ]);
  };

  const deleteRow = (index) => {
    if (formData.length > 1) {
      setFormData(formData.filter((_, i) => i !== index));
    } else {
      const resetData = [...formData];
      Object.keys(resetData[0]).forEach((key) => (resetData[0][key] = ''));
      setFormData(resetData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.some((data) => !validateTAN(data.TANofDeductor))) {
      setTanError(true);
      return;
    }
    // Submit form logic here
  };

  return (
    <div>
    <div className="col-12 mt-3">
    <div className="TDS-Taxes-form-active">
      <div className="d-flex flex-row justify-content-between">
        <div className="pt-3 d-inline">
          <strong>Add a TDS entry (Tax Deducted at Source)</strong>
        </div>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => (window.location.href = `/catalog_2024/tds_other/`)}
        >
          Click to add TDS of another Assessee.
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card card-body">
          <div>
            <strong>Tax Deducted At Source</strong>
          </div>
          {formData.map((data, index) => (
            <div key={index}  className="non-salary-tds-items row align-items-baseline text-content" >
              <div className="col-md-5">
                <div className="row align-items-baseline">
                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label >Type of Income</label>
                      <select
                        name="TypeofIncome[]"
                        className="form-control rounded-0"
                        value={data.TypeofIncome}
                        onChange={(e) => handleInputChange(index, 'TypeofIncome', e.target.value)}
                        required
                      >
                        <option value="">Select Option</option>
                        <option value="OS">Other Sources</option>
                        <option value="HP">House Property</option>
                        <option value="BP">Business & Profession</option>
                        <option value="CG">Capital Gain</option>
                        <option value="EI">Exempt Income</option>
                        <option value="NA">Not Applicable - TDS us 194N</option>
                        <option value="CryptoCg">Crypto - Capital Gain</option>
                        <option value="CryptoBp">Crypto - Business & Profession</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>Name of Deductor *</label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        name="NameofDeductor[]"
                        value={data.NameofDeductor}
                        onChange={(e) => handleInputChange(index, 'NameofDeductor', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>TAN of Deductor *</label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        name="TANofDeductor[]"
                        value={data.TANofDeductor}
                        onChange={(e) => handleInputChange(index, 'TANofDeductor', e.target.value)}
                        required
                      />
                      {tanError && index === formData.findIndex((d) => !validateTAN(d.TANofDeductor)) && (
                        <span className="text-danger">Invalid TAN</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="row align-items-baseline">
                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>Income against TDS was deducted *</label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        name="IncomeAgainstTDS[]"
                        value={data.IncomeAgainstTDS}
                        onChange={(e) => handleInputChange(index, 'IncomeAgainstTDS', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>Total Tax Deducted</label>
                      <input
                        type="number"
                        className="form-control rounded-0"
                        name="TotalTaxDeducted[]"
                        value={data.TotalTaxDeducted}
                        onChange={(e) => handleInputChange(index, 'TotalTaxDeducted', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>Tax claimed for this year *</label>
                      <input
                        type="number"
                        className="form-control rounded-0"
                        name="TaxClaimedForYear[]"
                        value={data.TaxClaimedForYear}
                        onChange={(e) => handleInputChange(index, 'TaxClaimedForYear', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="row align-items-baseline">
                  <div className="col-md-9 px-1">
                    <div className="form-group">
                      <label>TDS was deducted in F.Y</label>
                      <select
                        name="FinancialYearNonSalary[]"
                        className="form-control rounded-0"
                        value={data.FinancialYearNonSalary}
                        onChange={(e) => handleInputChange(index, 'FinancialYearNonSalary', e.target.value)}
                      >
                        {[...Array(11)].map((_, i) => {
                          const year = 2023 - i;
                          return (
                            <option key={year} value={year.toString()}>
                              {`${year}-${year + 1}`}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group d-flex flex-column">
                      <label> &nbsp; </label>
                      <button
                        className="btn text-danger delete-non-salary-tds px-1"
                        type="button"
                        onClick={() => deleteRow(index)}
                      >
                        &#10006;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            className="btn btn-info add-more-non-salary-tds"
            style={{ width: 'max-content' }}
            type="button"
            onClick={addRow}
          >
            Add more
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 d-flex">
            <input
              type="submit"
              style={{ width: 'fit-content' }}
              className="btn btn-block rounded-0 btn-primary"
              value="Submit"
            />
           <BackButton link="/client" />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default NonSalaryTDS;
