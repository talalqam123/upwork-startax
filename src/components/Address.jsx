import React, { useState, useEffect } from 'react';

const AddressForm = ({ clientYear, clientRelId, address, states, countries, allClients }) => {
  const [formData, setFormData] = useState({
    residence_type: address?.residence_type || 'indian',
    residence_no: address?.residence_no || '',
    road_street: address?.road_street || '',
    pin_code: address?.pincode || '',
    zip_code: address?.zip_code || '',
    mobile_number: address?.phone_number || '',
    state_code: address?.state_code || '',
    district: address?.district || '',
    email: address?.email || '',
    country_code_mobile: address?.country_mobile_code || '',
    locality_or_area: address?.address || '',
    country_code: address?.country || ''
  });

  const [filteredClients, setFilteredClients] = useState(allClients);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setFilteredClients(
      allClients.filter(client =>
        client.full_name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, allClients]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleResidenceTypeChange = (type) => {
    setFormData({ ...formData, residence_type: type });
  };

  const handleClientSelection = (client) => {
    const selectedAddress = client.address;
    setFormData({
      residence_type: selectedAddress.residence_type || 'indian',
      residence_no: selectedAddress.residence_no || '',
      residence_name: selectedAddress.residence_name || '',
      road_street: selectedAddress.road_street || '',
      pin_code: selectedAddress.pincode || '',
      zip_code: selectedAddress.zip_code || '',
      mobile_number: selectedAddress.phone_number || '',
      state_code: selectedAddress.state_code || '',
      district: selectedAddress.district || '',
      email: selectedAddress.email || '',
      country_code_mobile: selectedAddress.country_mobile_code || '',
      locality_or_area: selectedAddress.address || '',
      country_code: selectedAddress.country || ''
    });
  };

  const isIndian = formData.residence_type === 'indian';

  return (
    <form id="editClientaddressForm" method="POST" action={`basic_details/permanent_address/${clientYear}/${clientRelId}`}>
      <input type="hidden" name="year" value={clientYear} />
      <input type="hidden" name="tab" value="bank" />
      <div className="card card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <strong> Address</strong>
          </div>
          <button
            className="btn btn-info"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#CopyAddressModal"
          >
            Copy Address From Other Client
          </button>
        </div>

        <div className="row text-content">
          <div className="col-md-12">
            <div className="form-group w-100">
              <label className="m-1">Residence Type</label>
              <div className="clearfix col-md-6 d-flex form-group justify-content-between">
                <div className="form-check">
                  <input
                    type="radio"
                    id="indian"
                    className="form-check-input"
                    checked={isIndian}
                    onChange={() => handleResidenceTypeChange('indian')}
                  />
                  <label htmlFor="indian" className="form-check-label">
                    Indian
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="foreign"
                    className="form-check-input"
                    checked={!isIndian}
                    onChange={() => handleResidenceTypeChange('foreign')}
                  />
                  <label htmlFor="foreign" className="form-check-label">
                    Foreign
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Input fields */}
          <div className="col-md-6">
            <div className="form-group">
              <label className="m-1">Residence No <span className="text-danger">*</span></label>
              <input
                type="text"
                name="residence_no"
                className="form-control"
                value={formData.residence_no}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="m-1">Road or Street (optional)</label>
              <input
                type="text"
                name="road_street"
                className="form-control"
                value={formData.road_street}
                onChange={handleInputChange}
              />
            </div>

            {isIndian ? (
              <div className="form-group">
                <label className="m-1">Pincode <span className="text-danger">*</span></label>
                <input
                  type="number"
                  name="pin_code"
                  className="form-control"
                  value={formData.pin_code}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ) : (
              <div className="form-group">
                <label className="m-1">Zip Code</label>
                <input
                  type="number"
                  name="zip_code"
                  className="form-control"
                  value={formData.zip_code}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className="form-group">
              <label className="m-1">Mobile Number <span className="text-danger">*</span></label>
              <input
                type="number"
                name="mobile_number"
                className="form-control"
                value={formData.mobile_number}
                onChange={handleInputChange}
                required
              />
            </div>

            {isIndian && (
              <div className="form-group">
                <label className="m-1">State <span className="text-danger">*</span></label>
                <select
                  name="state_code"
                  className="form-control"
                  value={formData.state_code}
                  onChange={handleInputChange}
                  required
                >
                  <option hidden>Select State</option>
                  {states.map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="col-md-6">
            {/* Additional input fields */}
          </div>
        </div>

        <div className="modal fade" id="CopyAddressModal" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Copy Address From Other Client</h4>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search"
                />

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>PAN</th>
                      <th>Father Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map(client => (
                      <tr
                        key={client.relative_id}
                        onClick={() => handleClientSelection(client)}
                      >
                        <td>{client.full_name}</td>
                        <td>{client.pan_number}</td>
                        <td>{client.fathers_name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
