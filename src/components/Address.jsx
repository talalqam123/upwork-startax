import React, { useState, useEffect } from "react";
import countrycode from '../../public/countrycode.json'
import Papa from "papaparse";
const AddressForm = () => {
  const [formState, setFormState] = useState({
    residence_type: "indian",
    residence_no: "",
    residence_name: "",
    road_street: "",
    pin_code: "",
    zip_code: "",
    mobile_number: "",
    state_code: "",
    district: "",
    email: "",
    country_code_mobile: "",
    locality_or_area: "",
    country_code: "",
    country_name: "",
  });

  const [clients, setClients] = useState([]);
  const [pincodeData, setPincodeData] = useState([]);

  useEffect(() => {
    // Fetch or set client data if needed
    const fetchedClients = []; // Replace with actual data fetching logic
    setClients(fetchedClients);
  }, []);
  useEffect(() => {
    // Load the CSV data
    const fetchPincodeData = async () => {
      const response = await fetch("/pin_codes.csv"); // Adjust the path
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setPincodeData(results.data);
        },
      });
    };
    fetchPincodeData();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === "pin_code") {
      const matchedData = pincodeData.find(
        (entry) => entry.pincode === value
      );
      if (matchedData) {
        setFormState((prevState) => ({
          ...prevState,
          district: matchedData.district,
          state_code: matchedData.state,
        }));
      }
    }
    if (name === "country_code") {
      // Match country code and auto-fill the country name
      const matchedCountry = Object.keys(countrycode).find(
        (key) => countrycode[key] === parseInt(value)
      );
      setFormState((prevState) => ({
        ...prevState,
        country_name: matchedCountry || "",
      }));
    }
  };
  const handleResidenceTypeChange = (type) => {
    setFormState({ ...formState, residence_type: type });
  };

  const handleClientSelect = (client) => {
    setFormState({
      residence_type: client.residence_type,
      residence_no: client.residence_no,
      residence_name: client.residence_name,
      road_street: client.road_street,
      pin_code: client.pincode,
      zip_code: client.zip_code,
      mobile_number: client.phone_number,
      state_code: client.state_code,
      district: client.district,
      email: client.email,
      country_code_mobile: client.country_mobile_code,
      locality_or_area: client.locality_or_area,
      country_code: client.country_code,
    });
  };

  const toggleVisibility = (type) => {
    const isIndian = type === "indian";
    return {
      pinCodeVisible: isIndian,
      stateCodeVisible: isIndian,
      countryCodeVisible: !isIndian,
      zipCodeVisible: !isIndian,
      countryMobileCodeVisible: !isIndian,
      districCodenotVisible: !isIndian,
      districCodeVisible: isIndian

    };
  };

  const {
    pinCodeVisible,
    stateCodeVisible,
    countryCodeVisible,
    zipCodeVisible,
    countryMobileCodeVisible,
    districCodeVisible,
    districCodenotVisible
  } = toggleVisibility(formState.residence_type);

  return (
    <form id="editClientaddressForm" method="POST">
      <input type="hidden" name="year" value="" />
      <input type="hidden" name="tab" value="bank" />
      <div className="card card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <strong>Address</strong>
          </div>
          <button
            className="btn btn-info"
            type="button"
            data-toggle="modal"
            data-target="#CopyAddressModal"
          >
            Copy Address From Other Client
          </button>
        </div>

        <div className="row text-content">
          <div className="col-md-12">
            <div className="form-group w-100">
              <label className="m-1">Residence Type</label>
              <div className="clearfix col-md-6 d-flex form-group justify-content-between">
                <div className="icheck-primary d-inline">
                  <input
                    type="radio"
                    id="indian"
                    name="residence_type"
                    checked={formState.residence_type === "indian"}
                    onChange={() => handleResidenceTypeChange("indian")}
                  />
                  <label htmlFor="indian">Indian</label>
                </div>
                <div className="icheck-primary d-inline">
                  <input
                    type="radio"
                    id="foreign"
                    name="residence_type"
                    checked={formState.residence_type === "foreign"}
                    onChange={() => handleResidenceTypeChange("foreign")}
                  />
                  <label htmlFor="foreign">Foreign</label>
                </div>
              </div>
            </div>
          </div>

          {/* Residence Number */}
          <div className="col-md-6">
            <div className="form-group">
              <label className="m-1">
                Residence No <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="residence_no"
                className="form-control rounded-0"
                required
                value={formState.residence_no}
                onChange={handleInputChange}
              />
            </div>

            {/* Road or Street */}
            <div className="form-group">
              <label className="m-1">Road or Street (optional)</label>
              <input
                type="text"
                name="road_street"
                className="form-control rounded-0"
                value={formState.road_street}
                onChange={handleInputChange}
              />
            </div>

            {/* Pin Code */}
            {pinCodeVisible && (
              <div className="form-group pin_code_div">
                <label className="m-1">
                  Pincode <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  name="pin_code"
                  className="form-control rounded-0"
                  required
                  value={formState.pin_code}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {/* Pin Code */}
            {zipCodeVisible && (
              <div className="form-group pin_code_div">
                <label className="m-1">
                  ZipCode <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  name="zip_code"
                  className="form-control rounded-0"
                  maxLength={8}
                  required
                  value={formState.zip_code}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name=""
                className="form-control"
                value={formState.mobile_number}
                onChange={handleInputChange}
              />
            </div>
            {stateCodeVisible && (
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state_code"
                  className="form-control"
                  value={formState.state_code}
                  readOnly
                />
              </div>
            )}
             {countryMobileCodeVisible && (
              <div className="form-group">
                <label>Country Code</label>
                <input
                  type="number"
                  name="country_code"
                  className="form-control"
                  value={formState.country_code}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {/* More fields go here */}
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="m-1">
                Residence Name
              </label>
              <input
                type="text"
                name="residence_name"
                className="form-control rounded-0"
                required
                value={formState.residence_name}
                onChange={handleInputChange}
              />
            </div>

            {/* Road or Street */}
            <div className="form-group">
              <label className="m-1">Locality or Area</label>
              <input
                type="text"
                name="locality_or_area"
                className="form-control rounded-0"
                value={formState.locality_or_area}
                onChange={handleInputChange}
              />
            </div>
            {/* Road or Street */}
            {districCodeVisible && (
              <div className="form-group">
                <label>City / Town / District</label>
                <input
                  type="text"
                  name="district"
                  className="form-control"
                  value={formState.district}
                  readOnly
                />
              </div>
            )}
            {districCodenotVisible && (
              <div className="form-group">
                <label>City / Town / District</label>
                <input
                  type="text"
                  name="district"
                  className="form-control"
                  value={formState.district}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formState.email}
                onChange={handleInputChange}
              />
            </div>
           
            {/* Country Name */}
            {countryCodeVisible && (
              <div className="form-group">
                <label>Country Name</label>
                <input
                  type="text"
                  name="country_name"
                  className="form-control"
                  value={formState.country_name}
                  readOnly
                />
              </div>
            )}
            {/* More fields go here */}
          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button
            type="submit"
            id="Client_address_form"
            className="btn btn-block rounded-0 btn-primary"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Copy Address Modal */}
      <div
        className="modal fade"
        id="CopyAddressModal"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header align-items-center">
              <h4 className="modal-title">Copy Address From Other Client</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                id="searchInput"
                type="text"
                placeholder="Search"
              />
              <table
                id="ClientList"
                className="table table-bordered table-striped w-100"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>PAN</th>
                    <th>Father Name</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr
                      key={client.relative_id}
                      onClick={() => handleClientSelect(client)}
                    >
                      <td>{client.full_name}</td>
                      <td>{client.pan_number}</td>
                      <td>{client.fathers_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
