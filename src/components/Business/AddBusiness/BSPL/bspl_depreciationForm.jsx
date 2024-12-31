import React from "react";

const DepreciationForm = () => {
  return (
    <div className="bspl_rows_data w-100 px-2">
      <div className="form_heading mb-4">
        <h5 className="mt-3">
          <strong>Depreciation</strong>
        </h5>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="m-0">Depreciation Block</label>
            <select className="form-control">
              <option selected value="Block_5">Plant and Machinery - 15%</option>
              <option value="Block_14">Land - 0%</option>
              <option value="Block_4">Furniture - 10%</option>
              <option value="Block_6">Ships - 20%</option>
              <option value="Block_13">Intangible Assets - 25%</option>
              <option value="Block_1">Buildings - Residential - 5%</option>
              <option value="Block_2">Buildings - Office, Factory, Godowns - 10%</option>
              <option value="Block_3">Buildings - For Infrastructure facilities - 40%</option>
              <option value="Block_7">Plant and Machinery - Buses etc running on Hire. - 30%</option>
              <option value="Block_8">Plant and Machinery - Aeroplanes - 40%</option>
              <option value="Block_9">Plant and Machinery - New Vehicles, Glass or Plastic Containers, etc - 40%</option>
              <option value="Block_10">Plant and Machinery - Computers - 40%</option>
              <option value="Block_11">Plant and Machinery - Energy Saving Devices - 40%</option>
              <option value="Block_12">Plant and Machinery - Pollution Control Equipments - 40%</option>
              <option value="Block_15">Plant and Machinery - Motor Vehicles acquired for hiring business between 23 Aug 2019 & 31 Mar 2020 - 45%</option>
              <option value="Block_16">Plant and Machinery - Motor Vehicles acquired for non-hiring business between 23 Aug 2019 & 31 Mar 2020 - 30%</option>
            </select>
          </div>

          <div className="form-group">
            <label className="m-0">Description</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Opening Amount</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Purchase Amount (Upto October 4)</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Sale Amount (On assets purchased upto October 4)</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Purchase Amount (From October 5)</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Sale Amount (On assets purchased from October 5)</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Date on which sale was made, if any (Optional)</label>
            <input type="text" className="form-control rounded-0 sale_date" />
          </div>

          <div className="form-group">
            <label className="m-0">Personal Usage Percentage</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <label className="m-0">Additional depreciation claimed during the previous A.Y.</label>
            <input type="text" className="form-control rounded-0" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                type="checkbox"
                id="customCheckbox2"
              />
              <label
                htmlFor="customCheckbox2"
                className="custom-control-label"
              >
                Is Block Nil?
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                type="checkbox"
                id="customCheckbox3"
              />
              <label
                htmlFor="customCheckbox3"
                className="custom-control-label"
              >
                Additonal Depreciation?
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex">
          <input
            type="submit"
            style={{ width: "fit-content" }}
            className="btn btn-block rounded-0 btn-primary"
            value="Submit"
          />
          <button
            type="button"
            className="bspl_Back_button btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepreciationForm;
