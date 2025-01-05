import React, { useState } from "react";

const ExportForm = () => {
  const [summary, setSummary] = useState({
    newRegimeSalary: 50000,
    oldRegimeSalary: 45000,
    newRegimeNetSalary: 48000,
    oldRegimeNetSalary: 43000,
    newRegimeBusiness: 20000,
    oldRegimeBusiness: 18000,
    newRegimeCapitalGain: 15000,
    oldRegimeCapitalGain: 12000,
    newRegimeOtherSources: 10000,
    oldRegimeOtherSources: 9000,
    newRegimeHouseProperty: 8000,
    oldRegimeHouseProperty: 7000,
    newRegimeGrossTotalIncome: 150000,
    oldRegimeGrossTotalIncome: 140000,
    newRegimeDeduction80cTo80u: 20000,
    oldRegimeDeduction80cTo80u: 25000,
    newRegimeTotalIncome: 130000,
    oldRegimeTotalIncome: 115000,
    newRegimeTaxOnIncome: 10000,
    oldRegimeTaxOnIncome: 9500,
    newRegimeSurcharge: 500,
    oldRegimeSurcharge: 450,
    newRegimeHealthAndEducation: 400,
    oldRegimeHealthAndEducation: 350,
    newRegimeTaxPayable: 10400,
    oldRegimeTaxPayable: 10300,
  });

  const [showAddChallanForm, setShowAddChallanForm] = useState(false);
  const [showPayChallanForm, setShowPayChallanForm] = useState(false);
  const [jsonValidation, setJsonValidation] = useState(0);

  const handleValidateJson = (e) => {
    e.preventDefault();
    setJsonValidation(1);
    document.getElementById("JSONExportForm").submit();
  };

  const openAddChallan = () => {
    setShowAddChallanForm(true);
    setShowPayChallanForm(false);
  };

  const openPayChallan = () => {
    setShowAddChallanForm(false);
    setShowPayChallanForm(true);
  };

  return (
    <>
      <form
        action="{% url 'basic_details:export_json' %}"
        method="get"
        id="JSONExportForm"
      >
        <div className="card card-default">
          <div className="card-header">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h3 className="card-title">Export</h3>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="modal"
                data-target="#filling-status"
              >
                Filling Status
              </button>
            </div>
          </div>
          <div className="card-body row text-content">
            <div className="input-group mb-3 col-md-6">
              <div className="custom-file">
                <input type="hidden" name="client_id" value="{{client_id}}" />
                <input type="hidden" name="year" value="{{year}}" />
                <input
                  type="hidden"
                  name="json_validation"
                  value={jsonValidation}
                />
                <select
                  className="form-control rounded-0 m-3"
                  name="itr_type"
                >
                  <option>ITR1</option>
                  <option>ITR2</option>
                  <option>ITR3</option>
                  <option>ITR4</option>
                  <option>ITR5</option>
                  <option>ITR6</option>
                  <option>ITR7</option>
                </select>
              </div>
            </div>
            <div className="col-auto m-1">
              <button
                type="submit"
                id="validate_json_btn"
                style={{ width: "fit-content" }}
                className="btn btn-block btn-primary form-control"
                onClick={handleValidateJson}
              >
                Validate JSON
              </button>
            </div>
            <div className="col-auto m-1">
              <input
                type="submit"
                style={{ width: "fit-content" }}
                className="btn btn-block btn-primary form-control"
                value="Download JSON"
              />
            </div>
            <div className="col-auto m-1">
              <a
                className="btn btn-primary btn-block form-control align-content-center rounded-0"
                style={{ width: "fit-content" }}
                role="button"
                href="{% url 'basic_details:export_report' year=client_year client_rel_id=client_rel_id %}"
              >
                Export Report
              </a>
            </div>
          </div>
        </div>
      </form>

      <div className="card card-body">
        <div className="row text-content summary-box">
          <div className="col-md-6 col-sm-8 col-xs-12 py-5 mx-auto">
            <div>
              <div
                className="text-center mb-4"
                style={{ fontWeight: "6" }}
              >
                <strong>Summary</strong>
              </div>

              <table className="table table-striped table-bordered">
                <thead>
                  <tr className="bg-blue">
                    <th className="text-left" scope="col">Income</th>
                    <th className="text-center" scope="col">New Regime</th>
                    <th className="text-right" scope="col">Old Regime</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-left" scope="row">Salary</th>
                    <td className="text-center">{summary.newRegimeSalary}</td>
                    <td className="text-right">{summary.oldRegimeSalary}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">Net Salary</th>
                    <td className="text-center">{summary.newRegimeNetSalary}</td>
                    <td className="text-right">{summary.oldRegimeNetSalary}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">Business</th>
                    <td className="text-center">{summary.newRegimeBusiness}</td>
                    <td className="text-right">{summary.oldRegimeBusiness}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">Capital Gain</th>
                    <td className="text-center">{summary.newRegimeCapitalGain}</td>
                    <td className="text-right">{summary.oldRegimeCapitalGain}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">Other Sources</th>
                    <td className="text-center">{summary.newRegimeOtherSources}</td>
                    <td className="text-right">{summary.oldRegimeOtherSources}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">House Property</th>
                    <td className="text-center">{summary.newRegimeHouseProperty}</td>
                    <td className="text-right">{summary.oldRegimeHouseProperty}</td>
                  </tr>
                  <tr className="bg-blue">
                    <th className="text-left" scope="row">Gross Total Income</th>
                    <td className="text-center">{summary.newRegimeGrossTotalIncome}</td>
                    <td className="text-right">{summary.oldRegimeGrossTotalIncome}</td>
                  </tr>
                  <tr className="bg-coral">
                    <th className="text-left" scope="row">Total Income</th>
                    <td className="text-center">{summary.newRegimeTotalIncome}</td>
                    <td className="text-right">{summary.oldRegimeTotalIncome}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">Tax on Income</th>
                    <td className="text-center">{summary.newRegimeTaxOnIncome}</td>
                    <td className="text-right">{summary.oldRegimeTaxOnIncome}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">Surcharge</th>
                    <td className="text-center">{summary.newRegimeSurcharge}</td>
                    <td className="text-right">{summary.oldRegimeSurcharge}</td>
                  </tr>
                  <tr>
                    <th className="text-left" scope="row">Health and Education</th>
                    <td className="text-center">{summary.newRegimeHealthAndEducation}</td>
                    <td className="text-right">{summary.oldRegimeHealthAndEducation}</td>
                  </tr>
                  <tr className="bg-blue">
                    <th className="text-left" scope="row">Tax Payable</th>
                    <td className="text-center">{summary.newRegimeTaxPayable}</td>
                    <td className="text-right">{summary.oldRegimeTaxPayable}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <button className="btn btn-primary btn-block" onClick={openAddChallan}>
            Add Challan
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary btn-block" onClick={openPayChallan}>
            Pay Challan
          </button>
        </div>
      </div>

      {showAddChallanForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddChallanForm(false)}>
              &times;
            </span>
            <h2>Add Challan Form</h2>
            {/* Add your form fields here */}
          </div>
        </div>
      )}

      {showPayChallanForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowPayChallanForm(false)}>
              &times;
            </span>
            <h2>Pay Challan Form</h2>
            {/* Add your form fields here */}
          </div>
        </div>
      )}
    </>
  );
};

export default ExportForm;
