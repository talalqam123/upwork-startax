import React, { useState } from 'react';
import moment from 'moment';
import InputMask from 'react-input-mask';

const TdsOtherDetails = () => {
  const [losses, setLosses] = useState([{ AY: '', category: '', amount: '' }]);
  const [depreciation, setDepreciation] = useState([{ AY: '', amount: '' }]);
  const [lossDates, setLossDates] = useState([{ AY: '', due_date: '', filling_date: '' }]);

  const handleAddLoss = () => {
    setLosses([...losses, { AY: '', category: '', amount: '' }]);
  };

  const handleAddDepreciation = () => {
    setDepreciation([...depreciation, { AY: '', amount: '' }]);
  };

  const handleInputChange = (index, field, value, setFunction, data) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setFunction(updatedData);
  };

  const formatAmount = (value) => {
    const formatted = value.replace(/,/g, '');
    return isNaN(formatted) ? '' : Number(formatted).toLocaleString('en-IN');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cleanLosses = losses.map((item) => ({ ...item, amount: item.amount.replace(/,/g, '') }));
    const cleanDepreciation = depreciation.map((item) => ({ ...item, amount: item.amount.replace(/,/g, '') }));
    console.log(cleanLosses, cleanDepreciation, lossDates);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="pt-3">
        <strong>Details of Previous Years' Losses</strong>
      </div>
      <div className="card card-body text-content">
        {losses.map((loss, index) => (
          <div className="row mt-3 losses_data" key={index}>
            <div className="col-md-4">
              <div className="form-group">
                <label>Assessment Year of the Loss</label>
                <select
                  name="loss_ay[]"
                  className="form-control rounded-0"
                  value={loss.AY}
                  onChange={(e) => handleInputChange(index, 'AY', e.target.value, setLosses, losses)}
                >
                  <option value="">Select Option</option>
                  {[...Array(43)].map((_, i) => {
                    const year = 2023 - i;
                    return (
                      <option key={year} value={year}>{`${year}-${year + 1}`}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Loss Category</label>
                <select
                  name="loss_cat[]"
                  className="form-control rounded-0"
                  value={loss.category}
                  onChange={(e) => handleInputChange(index, 'category', e.target.value, setLosses, losses)}
                >
                  <option value="">Select Option</option>
                  <option value="BusinessAndProfession">Business Profession</option>
                  <option value="HouseProperty">House Property</option>
                  <option value="LongTermCapitalGain">Long Term Cap Gain</option>
                  <option value="RaceHorses">Income from Race Horses</option>
                  <option value="ShortTermCapitalGain">Short Term Cap Gain</option>
                  <option value="Speculation">Speculation</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Loss Amount</label>
                <input
                  name="loss_amt[]"
                  type="text"
                  className="form-control rounded-0 inr_field"
                  value={loss.amount}
                  onChange={(e) =>
                    handleInputChange(index, 'amount', formatAmount(e.target.value), setLosses, losses)
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="btn btn-info add-more-loss"
          type="button"
          style={{ width: 'fit-content' }}
          onClick={handleAddLoss}
        >
          Add more
        </button>
      </div>

      <div className="card card-body">
        <div className="form_heading">
          <div>
            <strong>Depreciation Loss from Previous Years</strong>
          </div>
        </div>
        {depreciation.map((depr, index) => (
          <div className="row mt-3 depreciation_data" key={index}>
            <div className="col-md-4">
              <div className="form-group">
                <label>Assessment Year</label>
                <select
                  name="depreciation_ay[]"
                  className="form-control rounded-0"
                  value={depr.AY}
                  onChange={(e) =>
                    handleInputChange(index, 'AY', e.target.value, setDepreciation, depreciation)
                  }
                >
                  <option value="">Select Option</option>
                  {[...Array(43)].map((_, i) => {
                    const year = 2023 - i;
                    return (
                      <option key={year} value={year}>{`${year}-${year + 1}`}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Amount</label>
                <input
                  name="depreciation_amt[]"
                  type="text"
                  className="form-control rounded-0 inr_field"
                  value={depr.amount}
                  onChange={(e) =>
                    handleInputChange(index, 'amount', formatAmount(e.target.value), setDepreciation, depreciation)
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="btn btn-info add-more-depreciation"
          type="button"
          style={{ width: 'fit-content' }}
          onClick={handleAddDepreciation}
        >
          Add more
        </button>
      </div>

      <div className="card card-body">
        <div className="form_heading">
          <div>
            <strong>Filing and Due Dates for Loss Set-off in Previous Years</strong>
          </div>
        </div>
        <table className="table" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th>Assessment Year</th>
              <th>Due Date</th>
              <th>Filing Date</th>
            </tr>
          </thead>
          <tbody>
            {lossDates.map((lossDate, index) => (
              <tr key={index}>
                <td>
                  {lossDate.AY}-{parseInt(lossDate.AY) + 1}
                  <input
                    type="hidden"
                    value={lossDate.AY}
                    name="previous_loss_ay[]"
                  />
                </td>
                <td>
                  <InputMask
                    mask="99/99/9999"
                    value={lossDate.due_date}
                    onChange={(e) =>
                      handleInputChange(index, 'due_date', e.target.value, setLossDates, lossDates)
                    }
                    className="form-control rounded-0"
                  />
                </td>
                <td>
                  <InputMask
                    mask="99/99/9999"
                    value={lossDate.filling_date}
                    onChange={(e) =>
                      handleInputChange(index, 'filling_date', e.target.value, setLossDates, lossDates)
                    }
                    className="form-control rounded-0"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <input
            type="submit"
            style={{ width: 'fit-content' }}
            className="btn btn-block rounded-0 btn-primary"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
};

export default TdsOtherDetails;
