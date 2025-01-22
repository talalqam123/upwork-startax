import React, { useState } from "react";
import BackButton from "../../Client Details/Backbutton";


const VDAIncomeForm = ({ clientId, clientRelId }) => {
  const [assets, setAssets] = useState([{

        asset_name: "",
        buy_date: "",
        sell_date: "",
        buy_value: "",
        sell_value: "",
        income_head: "",
        gains: "",

  }]);

  const handleInputChange = (index, field, value) => {
    const updatedAssets = [...assets];
    updatedAssets[index][field] = value;

    if (field === "buy_value" || field === "sell_value") {
      const buyValue = Number(updatedAssets[index].buy_value || 0);
      const sellValue = Number(updatedAssets[index].sell_value || 0);
      updatedAssets[index].gains = sellValue - buyValue;
    }

    setAssets(updatedAssets);
  };

  const addNewAsset = () => {
    setAssets([
      ...assets,
      {
        asset_name: "",
        buy_date: "",
        sell_date: "",
        buy_value: "",
        sell_value: "",
        income_head: "",
        gains: "",
      },
    ]);
  };

  const removeAsset = (index) => {
    setAssets(assets.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted data:", assets);
    // Add form submission logic here
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="card card-primary">
        <div className="card-header">
          <div className="card-title">
            <strong>Assets from Crypto wallets</strong>
          </div>
        </div>
        <div className="card-body text-content">
          <div className="col-md-12">
            <span>*As per the tax laws from ITD, all the positive gains from VDA assets will be taxable</span>
          </div>
          <input type="hidden" name="client_id" value={clientId} />
          <div className="col-md-12">
            <table className="table table-responsive vda_table">
              <tbody>
                {assets.map((data, index) => (
                  <tr className="crypto-asset align-items-baseline" key={index}>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group">
                        <label className="m-0">Asset name</label>
                        <input
                          type="text"
                          name="asset_name[]"
                          value={data.asset_name}
                          className="form-control rounded-0"
                          onChange={(e) => handleInputChange(index, "asset_name", e.target.value)}
                        />
                      </div>
                    </td>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group">
                        <label className="m-0">Buy date</label>
                        <input
                          type="text"
                          name="buy_date[]"
                          value={data.buy_date}
                          className="form-control rounded-0 date-input"
                          maxLength="10"
                          onChange={(e) => handleInputChange(index, "buy_date", e.target.value)}
                        />
                      </div>
                    </td>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group">
                        <label className="m-0">Sell date</label>
                        <input
                          type="text"
                          name="sell_date[]"
                          value={data.sell_date}
                          className="form-control rounded-0 date-input"
                          maxLength="10"
                          onChange={(e) => handleInputChange(index, "sell_date", e.target.value)}
                        />
                      </div>
                    </td>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group">
                        <label className="m-0">Buy value</label>
                        <input
                          type="number"
                          name="buy_value[]"
                          value={data.buy_value}
                          className="form-control rounded-0"
                          onChange={(e) => handleInputChange(index, "buy_value", e.target.value)}
                        />
                      </div>
                    </td>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group">
                        <label className="m-0">Sell value</label>
                        <input
                          type="number"
                          name="sell_value[]"
                          value={data.sell_value}
                          className="form-control rounded-0"
                          onChange={(e) => handleInputChange(index, "sell_value", e.target.value)}
                        />
                      </div>
                    </td>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group">
                        <label className="m-0">Income head</label>
                        <select
                          name="income_head[]"
                          value={data.income_head}
                          className="form-control rounded-0"
                          onChange={(e) => handleInputChange(index, "income_head", e.target.value)}
                        >
                          <option value="">Select Option</option>
                          <option value="IRG">Capital Gains</option>
                          <option value="RF">Business Income</option>
                        </select>
                      </div>
                    </td>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group">
                        <label className="m-0">Gains*</label>
                        <input
                          type="number"
                          name="gains[]"
                          value={data.gains}
                          className="form-control rounded-0"
                          readOnly
                          style={{
                            backgroundColor: data.gains < 0 ? "#dc3545" : "inherit",
                          }}
                        />
                      </div>
                    </td>
                    <td style={{ verticalAlign: "bottom" }}>
                      <div className="form-group d-flex" style={{ flexDirection: "column" }}>
                        <label className="m-0">Cancel</label>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeAsset(index)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="mb-3 w-auto btn btn-block bg-primary btn-flat"
              onClick={addNewAsset}
            >
              Add More
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex">
          <button
            type="submit"
            style={{ width: "fit-content" }}
            className="btn btn-block rounded-0 btn-primary"
          >
            Submit
          </button>
          <BackButton link="/client/income/capital-gains" />
        </div>
      </div>
    </form>
  );
};

export default VDAIncomeForm;
