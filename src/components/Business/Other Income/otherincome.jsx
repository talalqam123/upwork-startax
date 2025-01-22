import React, { useState, useEffect } from "react";

const OtherIncomeForm = () => {
  const [pfVisible, setPfVisible] = useState(false);
  const [otherInterestVisible, setOtherInterestVisible] = useState(false);
  const [otherInterestIncomes, setOtherInterestIncomes] = useState([{
    narration: "",
    amount: "",
  }]);
  const [otherSources, setOtherSources] = useState([{
    source: "",
    narration: "",
    amount: "",
  }]);

  const [dividendIncomes, setDividendIncomes] = useState([{
    description: '',
    amount: '',
    period: 'Upto15Of6'
  }]);

  const [taxableDividendIncomes, setTaxableDividendIncomes] = useState([{
    description: '',
    amount: '',
    period: 'Upto15Of6'
  }]);

  const handleAddDividendIncome = () => {
    setDividendIncomes([...dividendIncomes, {
      description: '',
      amount: '',
      period: 'Upto15Of6'
    }]);
  };

  const handleAddTaxableDividendIncome = () => {
    setTaxableDividendIncomes([...taxableDividendIncomes, {
      description: '',
      amount: '',
      period: 'Upto15Of6'
    }]);
  };

  const handleDividendChange = (index, field, value, isTaxable = false) => {
    const setState = isTaxable ? setTaxableDividendIncomes : setDividendIncomes;
    const state = isTaxable ? taxableDividendIncomes : dividendIncomes;
    
    const updatedIncomes = [...state];
    updatedIncomes[index][field] = field === 'amount' ? formatIndianNumber(value) : value;
    setState(updatedIncomes);
  };

  const handleRemoveDividendIncome = (index, isTaxable = false) => {
    if (isTaxable) {
      setTaxableDividendIncomes(taxableDividendIncomes.filter((_, i) => i !== index));
    } else {
      setDividendIncomes(dividendIncomes.filter((_, i) => i !== index));
    }
  };

  const formatIndianNumber = (value) => {
    value = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    let integer = value;
    let lastThreeDigits = integer.slice(-3);
    let otherDigits = integer.slice(0, -3);

    if (otherDigits !== "") {
      lastThreeDigits = "," + lastThreeDigits;
    }
    integer = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeDigits;

    return integer;
  };
  const handleAddOtherInterestIncome = () => {
    setOtherInterestIncomes([...otherInterestIncomes, { narration: "", amount: "" }]);
  };

  const handleAddOtherSourceIncome = () => {
    setOtherSources([...otherSources, { source: "", narration: "", amount: "" }]);
  };

 
  const [gifts, setGifts] = useState([
    {
      giftKey: "Aggrtvaluewithoutcons562x",
      narration: "",
      amount: "",
    },
  ]);

  const handleAddGift = () => {
    setGifts([
      ...gifts,
      { giftKey: "Aggrtvaluewithoutcons562x", narration: "", amount: "" },
    ]);
  };
  const handleDeleteOtherSourceIncome = (index) => {
    setOtherSources(otherSources.filter((_, i) => i !== index));
  };
  const handleRemoveGift = (index) => {
    // const updatedGifts = gifts.filter((_, i) => i !== index);
    // setGifts(updatedGifts);
    setGifts(gifts.filter((_, i) => i !== index));

  };

  const handleInput = (event, setState, index, field) => {
    const value = event.target.value;
    const formattedValue = formatIndianNumber(value);

    setState((prevState) => {
      const updatedState = [...prevState];
      updatedState[index][field] = formattedValue;
      return updatedState;
    });
  };
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        source: "",
        amount: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const updateField = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <form id="otherIncomeForm" method="POST" action="/store_other_income/">
      <input type="hidden" name="client_id" value="1" />
      <input type="hidden" name="year" value="2024" />
      <input type="hidden" name="tab" value="basic_details" />

      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title"><strong>Interest Income</strong></h3>
        </div>
        <div className="card-body">
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="form-group">
                <label>Interest Income from Saving Bank</label>
                <input type="text" className="form-control rounded-0" name="SAV" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Interest Income from Deposits</label>
                <input type="text" className="form-control rounded-0" name="IFD" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Interest from Income Tax Refund</label>
                <input type="text" className="form-control rounded-0" name="TAX" />
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={() => setPfVisible(!pfVisible)}>
            Add Interest on PF
          </button>

          {pfVisible && (
            <div className="row mt-3 callout callout-info">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Interest on PF</label>
                  <select name="pf_interest" className="form-control rounded-0">
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
                  type="text"
                  className="form-control inr_field"
                  onInput={(e) => e.target.value = formatIndianNumber(e.target.value)}
                />                </div>
              </div>
            </div>
          )}
          <br />
          <button type="button" className="btn btn-primary mt-1" onClick={() => setOtherInterestVisible(!otherInterestVisible)}>
            Add any Other Interest Income
          </button>

          {otherInterestVisible && (
            <div className="mt-3 callout callout-info">
              {otherInterestIncomes.map((income, index) => (
                <div className="row" key={index}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Narration</label>
                      <input
                        type="text"
                        name="other_inc_int_narration[]"
                        className="form-control rounded-0"
                        value={income.narration}
                        onChange={(e) => {
                          const newIncomes = [...otherInterestIncomes];
                          newIncomes[index].narration = e.target.value;
                          setOtherInterestIncomes(newIncomes);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                      type="text"
                      className="form-control inr_field"
                      value={income.amount}
                      onChange={(e) => handleInput(e, setOtherInterestIncomes, index, "amount")}
                    />
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" className="btn btn-info" onClick={handleAddOtherInterestIncome}>
                Add more
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title"><strong>Other Source Income</strong></h3>
        </div>
        <div className="card-body">
          {otherSources.map((source, index) => (
            <div className="row field-row" key={index}>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Source</label>
                  <select
                    className="form-control dynamic-select"
                    name="other_inc_source[]"
                    value={source.source}
                    onChange={(e) => {
                      const newSources = [...otherSources];
                      newSources[index].source = e.target.value;
                      setOtherSources(newSources);
                    }}
                  >
                    <option value="">Please select</option>
                    <option value="FamilyPension">Family pension</option>
                    <option value="NOT89A">Income from Retirement Benefit account maintained in a notified country u/s 89A</option>
                    <option value="OTHNOT89A">Income from Retirement Benefit account maintained in a country other than a country notified u/s 89A</option>
                    <option value="LtryPzzlChrgblUs115BB">Income from lotteries, puzzles, races, card games etc u/s 115BB</option>
                    <option value="IncChrgblUs115BBJ">Income from online gaming u/s 115BBJ</option>
                    <option value="5ACA1a">Income from GDR purchased in foreign currency -resident u/s 115ACA(1)(a)</option>
                    <option value="5BBF">Tax on income from patent 115BBF</option>
                    <option value="562iii">Rental income from machinery, plants, buildings</option>
                    <option value="CashCreditsUs68">Cash credits u/s 68</option>
                    <option value="UnExplndInvstmntsUs69">Unexplained investments u/s 69</option>
                    <option value="UnExplndMoneyUs69A">Unexplained investments u/s 69A</option>
                    <option value="UnDsclsdInvstmntsUs69B">Undisclosed investments etc. u/s 69</option>
                    <option value="UnExplndExpndtrUs69C">Unexplained expenditure etc u/s 69C</option>
                    <option value="AmtBrwdRepaidOnHundiUs69D">Amount borrowed or repaid on hundi u/s 69D</option>
                    <option value="AnyOtherIncome">Others</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Narration</label>
                  <input
                    type="text"
                    name="other_inc_narration[]"
                    className="form-control rounded-0"
                    value={source.narration}
                    onChange={(e) =>
                      handleOtherIncomeChange(index, "narration", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Amount</label>
                  <input
                  type="text"
                  className="form-control inr_field"
                  value={source.amount}
                  onChange={(e) => handleInput(e, setOtherSources, index, "amount")}
                />
                </div>
              </div>
              <div className="col-md-3 d-flex form-group align-items-end">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => handleDeleteOtherSourceIncome(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddOtherSourceIncome}
          >
            Add more Other Income
          </button>
        </div>
      </div>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">
            <strong>
              Income From Gift Received u/s 56(2)(x),56(2)(xii),56(2)(xiii)
            </strong>
          </h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <span>
                Enter details of income to be reported u/s 56(2)(x) Following gifts
                are non-taxable and need not be reported in the tax return.
              </span>
              <ul>
                <li>
                  Gift received from Relative, on occasion of marriage, will,
                  inheritance, Trust are not taxable
                </li>
                <li>
                  Gift received other than listed assets below are not taxable
                </li>
                <li>Gift received up to Rs 50,000 is non-taxable</li>
              </ul>
            </div>

            <div className="col-md-12">
              <table className="table table-responsive gift_table">
                <tbody>
                  {gifts.map((gift, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-group">
                          <label>Nature of Gift Asset</label>
                          <select
                            name="562x[]"
                            className="form-control rounded-0"
                            value={gift.giftKey}
                            onChange={(e) =>
                              handleInputChange(index, "giftKey", e.target.value)
                            }
                          >
                            <option value="Aggrtvaluewithoutcons562x">
                              Money/Cash Received without Consideration
                            </option>
                            <option value="Immovpropwithoutcons562x">
                              Immovable Property is received without
                              Consideration
                            </option>
                            <option value="Immovpropinadeqcons562x">
                              Immovable Property is received for inadequate
                              Consideration
                            </option>
                            <option value="Anyotherpropwithoutcons562x">
                              Any other property received without consideration
                            </option>
                            <option value="Anyotherpropinadeqcons562x">
                              Any other Property is received for inadequate
                              Consideration
                            </option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            name="562x_narration[]"
                            className="form-control rounded-0"
                            value={gift.narration}
                            onChange={(e) =>
                              handleInputChange(index, "narration", e.target.value)
                            }
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label>Taxable Amount</label>
                          <input
                  type="text"
                  className="form-control inr_field"
                  value={gift.amount}
                  onChange={(e) => handleInput(e, setGifts, index, "amount")}
                />
                        </div>
                      </td>
                      <td>
                        <div
                          className="form-group d-flex"
                          style={{ flexDirection: "column" }}
                        >
                          <label>Cancel</label>
                          <div
                            className="btn btn-danger rounded-0"
                            onClick={() => handleRemoveGift(index)}
                          >
                            <i className="fas fa-trash"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="btn btn-info add_gift_btn"
                type="button"
                onClick={handleAddGift}
              >
                {gifts.length === 0 ? "Add Gift Income" : "Add More"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">
          <strong>Special Tax Rate Income</strong>
        </h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-responsive special_inc_table">
              <tbody>
                {rows.length > 0 ? (
                  rows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-group">
                          <label>Source</label>
                          <select
                            name="special_inc_source[]"
                            className="form-control rounded-0"
                            value={row.source}
                            onChange={(e) =>
                              updateField(index, "source", e.target.value)
                            }
                          >
                            <option value="5A1aii">
                              Interest received from government/Indian concerns
                              received in foreign currency 115A(1)(a)(ii)
                            </option>
                            <option value="5A1aiia">
                              Interest from Infrastructure Debt Fund
                              -:115A(1)(a)(iia)
                            </option>
                            <option value="5A1aiiaa">
                              Interest as per Sec. 194LC(1) -:115A(1)(a)(iiaa)
                            </option>
                            <option value="5A1aiiaaP">
                              Income received by non-resident as referred in
                              proviso to section 194LC(1) - 5A1aiiaaP
                              :115A(1)(a)(iiaa)
                            </option>
                            <option value="5A1aiiab">
                              Interest as per Sec. 194LD -:115A(1)(a)(iiab)
                            </option>
                            <option value="5A1aiiac">
                              Interest as per Sec. 194LBA -:115A(1)(a)(iiac)
                            </option>
                            <option value="5BBA">
                              Tax on non-residents sportsmen or sports
                              associations - 5BBA:115BBA
                            </option>
                            {/* Add other options as needed */}
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <label>Taxable Amount</label>
                          <input
                            type="text"
                            name="special_inc_amount[]"
                            className="form-control rounded-0 inr_field"
                            value={row.amount}
                  onChange={(e) => handleInput(e, setRows, index, "amount")}
                          />
                          {/* <input
                  type="text"
                  className="form-control inr_field"
                  name="special_inc_amount[]"
                  value={row.amount}
                  onChange={(e) => handleInput(e, setRows, index, "amount")}
                /> */}
                        </div>
                      </td>
                      <td>
                        <div
                          className="form-group d-flex"
                          style={{ flexDirection: "column" }}
                        >
                          <label>Cancel</label>
                          <div
                            className="btn btn-danger rounded-0"
                            onClick={() => removeRow(index)}
                          >
                            <i className="fas fa-trash"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      No Special Tax Income Added.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <button
              className="btn btn-info add_special_inc_btn rounded-0"
              type="button"
              onClick={addRow}
            >
              {rows.length === 0 ? "Add Special Income" : "Add More"}
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">
            <strong>Dividend Income</strong>
          </h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <table class="table table-responsive div_inc_table">
                <tbody>
                  {dividendIncomes.map((income, index) => (
                    <tr key={index}>
                      <td className="col-md-5">
                        <div className="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            name="div_inc_desc[]"
                            className="form-control rounded-0"
                            value={income.description}
                            onChange={(e) => handleDividendChange(index, 'description', e.target.value)}
                          />
                        </div>
                      </td>
                      <td className="col-md-3">
                        <div className="form-group">
                          <label>Amount</label>
                          <input
                            type="text"
                            name="div_inc_amount[]"
                            className="form-control rounded-0 inr_field"
                            value={income.amount}
                            onChange={(e) => handleDividendChange(index, 'amount', e.target.value)}
                          />
                        </div>
                      </td>
                      <td className="col-md-3">
                        <div className="form-group">
                          <label>Period</label>
                          <select
                            name="div_inc_source[]"
                            className="form-control rounded-0"
                            value={income.period}
                            onChange={(e) => handleDividendChange(index, 'period', e.target.value)}
                          >
                            <option value="Upto15Of6">Upto 15 June</option>
                            <option value="Upto15Of9">From 15 June To 15 Sep</option>
                            <option value="Up16Of9To15Of12">From 16 Sep To 15 Dec</option>
                            <option value="Up16Of12To15Of3">From 16 Dec To 15 Mar</option>
                            <option value="Up16Of3To31Of3">From 16 Mar To 31 Mar</option>
                          </select>
                        </div>
                      </td>
                      <td className="col-md-1">
                        <div className="form-group d-flex" style={{ flexDirection: "column" }}>
                          <label>Cancel</label>
                          <button
                            type="button"
                            className="btn btn-danger rounded-0"
                            onClick={() => handleRemoveDividendIncome(index)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-info add_div_inc_btn rounded-0" type="button" onClick={handleAddDividendIncome}>
                Add More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">
            <strong>Dividend Income u/s 56(2)(i) (Taxable)</strong>
            <span className="tooltips">
              <i className="fas fa-info-circle"></i>
              <span className="tooltips-content">
                Under section 56(2)(i) of the Income Tax Act, dividend income is taxable if it exceeds ₹10 lakh in a financial year.<br />
                It is considered 'Income from Other Sources' and taxed accordingly.
              </span>
            </span>
          </h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <table class="table table-responsive div_tax_inc_table">
                <tbody>
                  {taxableDividendIncomes.map((income, index) => (
                    <tr key={index}>
                      <td className="col-md-5">
                        <div className="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            name="div_tax_inc_desc[]"
                            className="form-control rounded-0"
                            value={income.description}
                            onChange={(e) => handleDividendChange(index, 'description', e.target.value, true)}
                          />
                        </div>
                      </td>
                      <td className="col-md-3">
                        <div className="form-group">
                          <label>Amount</label>
                          <input
                            type="text"
                            name="div_tax_inc_amount[]"
                            className="form-control rounded-0 inr_field"
                            value={income.amount}
                            onChange={(e) => handleDividendChange(index, 'amount', e.target.value, true)}
                          />
                        </div>
                      </td>
                      <td className="col-md-3">
                        <div className="form-group">
                          <label>Period</label>
                          <select
                            name="div_tax_inc_period[]"
                            className="form-control rounded-0"
                            value={income.period}
                            onChange={(e) => handleDividendChange(index, 'period', e.target.value, true)}
                          >
                            <option value="Upto15Of6">Upto 15 June</option>
                            <option value="Upto15Of9">From 15 June To 15 Sep</option>
                            <option value="Up16Of9To15Of12">From 16 Sep To 15 Dec</option>
                            <option value="Up16Of12To15Of3">From 16 Dec To 15 Mar</option>
                            <option value="Up16Of3To31Of3">From 16 Mar To 31 Mar</option>
                          </select>
                        </div>
                      </td>
                      <td className="col-md-1">
                        <div className="form-group d-flex" style={{ flexDirection: "column" }}>
                          <label>Cancel</label>
                          <button
                            type="button"
                            className="btn btn-danger rounded-0"
                            onClick={() => handleRemoveDividendIncome(index, true)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-info add_div_tax_inc_btn rounded-0" type="button" onClick={handleAddTaxableDividendIncome}>
                Add More
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="row mt-4">
        <div className="col-md-12 d-flex">
          <input
            type="submit"
            style={{ width: "fit-content" }}
            className="btn btn-block btn-primary"
            value="Submit"
            id="other_income_submit"
          />
        </div>
      </div>
    </form>
  )
};

export default OtherIncomeForm