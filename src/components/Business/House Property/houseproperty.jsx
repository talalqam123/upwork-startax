import React, { useState, useEffect, useRef } from "react";

const HousePropertyForm = ({ clientId, year }) => {
  const [houseProperties, setHouseProperties] = useState([
    {
      PropertyType: "",
      PropertyOwner: "",
      PropCoOwnedFlg: "NO",
      CoOwners: [],
      Tenants: [],
      rentIncome: 0,
      municipalTax: 0,
      deduction: 0,
      netIncome: 0,
      item: {
        AddressDetailWithZipCode: {
          HouseNo: "",
          PremiseName: "",
          Road: "",
          StateCode: "",
          PinCode: "",
          Area: "",
          CityOrTownOrDistrict: "",
          CountryCode: "",
        },
      }
    },
  ]);
  const states = [
    ["NY", "New York"],
    ["CA", "California"],
    ["TX", "Texas"],
  ];

  const countries = [
    { code: "US", name: "United States" },
    { code: "IN", name: "India" },
    { code: "CA", name: "Canada" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const underlineRef = useRef(null);
  const tabsRef = useRef([]);

  const handlePropertyChange = (index, field, value) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[index][field] = value;
    setHouseProperties(updatedProperties);
  };

  const handleAddTenant = (index) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[index].Tenants.push({
      TenantName: "",
      TenantContact: "",
      TenantPAN: "",
    });
    setHouseProperties(updatedProperties);
  };

  const handleRemoveTenant = (propertyIndex, tenantIndex) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[propertyIndex].Tenants.splice(tenantIndex, 1);
    setHouseProperties(updatedProperties);
  };

  const handleTenantInputChange = (propertyIndex, tenantIndex, field, value) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[propertyIndex].Tenants[tenantIndex][field] = value;
    setHouseProperties(updatedProperties);
  };
  const handleCheckboxChange = (index) => {
    const updatedProperties = [...houseProperties];
    if (updatedProperties[index].PropCoOwnedFlg === "YES") {
      updatedProperties[index] = { ...updatedProperties[index], PropCoOwnedFlg: "NO", CoOwners: [] };
    } else {
      updatedProperties[index].PropCoOwnedFlg = "YES";
    }
    setHouseProperties(updatedProperties);
  };

  const handleAddCoOwner = (index) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[index].CoOwners.push({
      NameCoOwner: "",
      PAN_CoOwner: "",
      Aadhaar_CoOwner: "",
      PercentShareProperty: "",
    });
    setHouseProperties(updatedProperties);
  };

  const handleRemoveCoOwner = (propertyIndex, coOwnerIndex) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[propertyIndex].CoOwners.splice(coOwnerIndex, 1);
    setHouseProperties(updatedProperties);
  };

  const handleCoOwnerInputChange = (propertyIndex, coOwnerIndex, field, value) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[propertyIndex].CoOwners[coOwnerIndex][field] = value;
    setHouseProperties(updatedProperties);
  };

  const addHouse = () => {
    setHouseProperties([
      ...houseProperties,
      {
        PropertyType: "", PropertyOwner: "", PropCoOwnedFlg: "NO", CoOwners: [], Tenants: [], rentIncome: 0, municipalTax: 0, deduction: 0, netIncome: 0, item: {
          AddressDetailWithZipCode: {
            HouseNo: "123",
            PremiseName: "Premise 1",
            Road: "Main Road",
            StateCode: "NY",
            PinCode: "10001",
            Area: "Area 1",
            CityOrTownOrDistrict: "New York",
            CountryCode: "US",
          },
        }
      },
    ]);
    setActiveTab(houseProperties.length); // Set the newly added house as active
  };

  const removeHouse = (index) => {
    if (houseProperties.length > 1) {
      const updatedProperties = houseProperties.filter((_, i) => i !== index);
      setHouseProperties(updatedProperties);
      setActiveTab((prev) => (prev >= updatedProperties.length ? updatedProperties.length - 1 : prev));
    }
  };

  useEffect(() => {
    if (tabsRef.current[activeTab]) {
      const activeTabElement = tabsRef.current[activeTab];
      const underlineElement = underlineRef.current;
      underlineElement.style.width = `${activeTabElement.offsetWidth}px`;
      underlineElement.style.left = `${activeTabElement.offsetLeft}px`;
    }
  }, [activeTab]);

  useEffect(() => {
    // Only calculate income for valid property types
    if (['D', 'R'].includes(houseProperties[activeTab]?.PropertyType)) {
      const rentIncomeParsed = houseProperties[activeTab].rentIncome || 0;
      const municipalTaxParsed = houseProperties[activeTab].municipalTax || 0;

      const calculatedDeduction = (rentIncomeParsed - municipalTaxParsed) * 0.30;
      const calculatedNetIncome = rentIncomeParsed - municipalTaxParsed - calculatedDeduction;

      const updatedProperties = [...houseProperties];
      updatedProperties[activeTab].deduction = calculatedDeduction;
      updatedProperties[activeTab].netIncome = calculatedNetIncome;
      setHouseProperties(updatedProperties);
    }
  }, [activeTab, houseProperties]);

  const handleRentIncomeChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    const updatedProperties = [...houseProperties];
    updatedProperties[activeTab].rentIncome = value;
    setHouseProperties(updatedProperties);
  };

  const handleMunicipalTaxChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    const updatedProperties = [...houseProperties];
    updatedProperties[activeTab].municipalTax = value;
    setHouseProperties(updatedProperties);
  };

  const handleOwnerShareChange = (e) => {
    const updatedProperties = [...houseProperties];
    updatedProperties[activeTab].ownerShare = e.target.value;
    setHouseProperties(updatedProperties);
  };

  const formatCurrency = (amount) => {
    return Number(amount).toLocaleString('en-in');
  };

  const rentIncome = houseProperties[activeTab]?.rentIncome || 0;
  const municipalTax = houseProperties[activeTab]?.municipalTax || 0;
  const deduction = houseProperties[activeTab]?.deduction || 0;
  const netIncome = houseProperties[activeTab]?.netIncome || 0;
  const ownerShare = houseProperties[activeTab]?.ownerShare || 100;




  return (
    <form className="house_form" method="POST" action="/basic_details/store_house_data/">
      <input type="hidden" name="client_id" value={clientId} />
      <input type="hidden" name="year" value={year} />
      <input type="hidden" name="tab" value="" />
      <input type="hidden" name="redirect" value="true" />

      <div className="tab-wrapper">
        <div className="tab-header">
          <div className="house_tabs d-flex position-relative">
            {houseProperties.map((_, index) => (
              <div
                key={index}
                className={`tab-btn d-flex flex-row align-items-center ${index === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                ref={(el) => (tabsRef.current[index] = el)}
              >
                <button type="button" className="salary-tab-button">
                  House {index + 1}
                </button>
                <span
                  className="text-danger remove-house"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeHouse(index);
                  }}
                >
                  <i className="fas fa-trash"></i>
                </span>
              </div>
            ))}
            <div
              ref={underlineRef}
              className="underline position-absolute"
              style={{
                height: "2px",
                backgroundColor: "purple",
                bottom: "0",
                transition: "width 0.3s, left 0.3s",
              }}
            ></div>
          </div>
          <button type="button" className="tab-btn-add tab-btn-add-house" onClick={addHouse}>
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="tab-body house_tabs_body">
          {houseProperties.map((property, index) => (
            <div key={index} className={`tab-content ${index === activeTab ? "" : "d-none"}`}>
              <div className="card card-primary">
                <div className="card-header">
                  <h5 className="card-title">
                    <strong>House Property Details</strong>
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Type of House Property</label>
                        <select
                          name={`tabs[${index}][PropertyType]`}
                          className="form-control rounded-0 property_type"
                          value={property.PropertyType}
                          onChange={(e) => handlePropertyChange(index, "PropertyType", e.target.value)}
                        >
                          <option value="">Select Option</option>
                          <option value="L">Let Out</option>
                          <option value="D">Deemed Let Out Property</option>
                          <option value="S">Self-Occupied House Property</option>
                          <option value="R">Rental Property</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Owner of the Property</label>
                        <select
                          name={`tabs[${index}][PropertyOwner]`}
                          className="form-control rounded-0"
                          value={property.PropertyOwner}
                          onChange={(e) => handlePropertyChange(index, "PropertyOwner", e.target.value)}
                        >
                          <option value="">Select Option</option>
                          <option value="SE">Self</option>
                          <option value="MI">Minor</option>
                          <option value="SP">Spouse</option>
                          <option value="OT">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-primary">
                <div className="card-header">
                  <strong>Property Ownership</strong>
                </div>
                <div className="card-body">
                  <div className="row text-content">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Name of Owner</label>
                        <input
                          type="text"
                          name={`tabs[${index}][OwnerName]`}
                          className="form-control rounded-0"
                          required
                          value={property.OwnerName || ""}
                          onChange={(e) => handlePropertyChange(index, "OwnerName", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>PAN of Owner</label>
                        <input
                          type="text"
                          name={`tabs[${index}][OwnerPAN]`}
                          className="form-control rounded-0"
                          required
                          value={property.OwnerPAN || ""}
                          onChange={(e) => handlePropertyChange(index, "OwnerPAN", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Percentage Share</label>
                        <input
                          type="number"
                          name={`tabs[${index}][AsseseeShareProperty]`}
                          className="form-control rounded-0 owner_share"
                          required
                          max="100"
                          min="0"
                          value={property.AsseseeShareProperty || 100}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="row my-2">
                  <div className="col-6 col-md-4">
                    <strong>Do property has co-owners?</strong>
                  </div>
                  <div className="custom-control custom-switch col-2">
                    <input
                      type="checkbox"
                      className="custom-control-input co-owner-check"
                      id={`co-owner-check-${index}`}
                      checked={property.PropCoOwnedFlg === "YES"}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label
                      className="custom-control-label text-content"
                      htmlFor={`co-owner-check-${index}`}
                    ></label>
                  </div>
                </div>

                {property.PropCoOwnedFlg === "YES" && (
                  <div className="card card-primary co-owner-div">
                    <div className="card-header">
                      <div>
                        <strong>Co-Owners Details</strong>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <table className="table table-responsive co-owner-table text-content">
                            <tbody>
                              {property.CoOwners.map((coOwner, coOwnerIndex) => (
                                <tr key={coOwnerIndex}>
                                  <td>
                                    <div className="form-group">
                                      <label className="m-0">Name of Co-Owners</label>
                                      <input
                                        type="text"
                                        className="form-control rounded-0"
                                        value={coOwner.NameCoOwner}
                                        onChange={(e) =>
                                          handleCoOwnerInputChange(index, coOwnerIndex, "NameCoOwner", e.target.value)
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-group">
                                      <label className="m-0">PAN of Co-Owners</label>
                                      <input
                                        type="text"
                                        className="form-control rounded-0"
                                        value={coOwner.PAN_CoOwner}
                                        onChange={(e) =>
                                          handleCoOwnerInputChange(index, coOwnerIndex, "PAN_CoOwner", e.target.value)
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-group">
                                      <label className="m-0">Aadhaar of Co-Owners</label>
                                      <input
                                        type="number"
                                        className="form-control rounded-0"
                                        value={coOwner.Aadhaar_CoOwner}
                                        onChange={(e) =>
                                          handleCoOwnerInputChange(index, coOwnerIndex, "Aadhaar_CoOwner", e.target.value)
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-group">
                                      <label className="m-0">Percentage Share</label>
                                      <input
                                        type="number"
                                        className="form-control rounded-0"
                                        value={coOwner.PercentShareProperty}
                                        onChange={(e) =>
                                          handleCoOwnerInputChange(
                                            index,
                                            coOwnerIndex,
                                            "PercentShareProperty",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm rounded-0"
                                      onClick={() => handleRemoveCoOwner(index, coOwnerIndex)}
                                    >
                                      <i className="fas fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm rounded-0 mt-2"
                            onClick={() => handleAddCoOwner(index)}
                          >
                            <i className="fas fa-plus"></i> Add Co-Owner
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="card card-primary d-none income-div">
                <div className="card-header">
                  <div><strong>Income earned from the House Property</strong></div>
                </div>
                <div className="card-body">
                  <table className="table text-content">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Gross Value</th>
                        <th>Percentage Share</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="col-4">A. Total Annual Rent received</td>
                        <td className="col-4">
                          <input
                            className="form-control rent_income inr_field rounded-0"
                            type="text"
                            value={formatCurrency(rentIncome)}
                            onChange={handleRentIncomeChange}
                          />
                        </td>
                        <td className="col-4">
                          <input
                            className="form-control rent_income_percent inr_field rounded-0"
                            type="text"
                            value={formatCurrency((rentIncome * ownerShare) / 100)}
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="col-4">B. Municipal Tax</td>
                        <td className="col-4">
                          <input
                            className="form-control municipal_tax inr_field rounded-0"
                            type="text"
                            value={formatCurrency(municipalTax)}
                            onChange={handleMunicipalTaxChange}
                          />
                        </td>
                        <td className="col-4">
                          <input
                            className="form-control municipal_tax_percent inr_field rounded-0"
                            type="text"
                            value={formatCurrency((municipalTax * ownerShare) / 100)}
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="col-4">C. Standard Deduction u/s 24A (30% of (A-B))</td>
                        <td className="col-4">
                          <input
                            className="form-control deduction inr_field rounded-0"
                            type="text"
                            value={formatCurrency(deduction)}
                            readOnly
                          />
                        </td>
                        <td className="col-4">
                          <input
                            className="form-control deduction_percent inr_field rounded-0"
                            type="text"
                            value={formatCurrency((deduction * ownerShare) / 100)}
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="col-4">D. Net Income (A-B-C)</td>
                        <td className="col-4">
                          <input
                            className="form-control net_income inr_field rounded-0"
                            type="text"
                            value={formatCurrency(netIncome)}
                            readOnly
                          />
                        </td>
                        <td className="col-4">
                          <input
                            className="form-control net_income_percent inr_field rounded-0"
                            type="text"
                            value={formatCurrency((netIncome * ownerShare) / 100)}
                            readOnly
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <input
                    className="form-control owner_share inr_field rounded-0"
                    type="number"
                    value={ownerShare}
                    onChange={handleOwnerShareChange}
                    placeholder="Owner Share (%)"
                  />
                </div>
              </div>
              <div className="card card-primary">
                <div className="card-header">
                  <h5 className="card-title">
                    <strong>Tenant Details</strong>
                  </h5>
                </div>
                <div className="card-body">
                  {property.Tenants.map((tenant, tenantIndex) => (
                    <div key={tenantIndex} className="row mb-3">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Tenant Name</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            value={tenant.TenantName}
                            onChange={(e) =>
                              handleTenantInputChange(index, tenantIndex, "TenantName", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Tenant Contact</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            value={tenant.TenantContact}
                            onChange={(e) =>
                              handleTenantInputChange(index, tenantIndex, "TenantContact", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Tenant PAN</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            value={tenant.TenantPAN}
                            onChange={(e) =>
                              handleTenantInputChange(index, tenantIndex, "TenantPAN", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="form-group d-flex" style={{"flex-direction": " column"}} >
                         <label class="m-0">Cancel</label>
                        <button
                          type="button"
                          className="cancel btn btn-danger"
                          onClick={() => handleRemoveTenant(index, tenantIndex)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                      {/* <div class="form-group d-flex" style={{ "flex-direction": " column" }} >
                        <label class="m-0">Cancel</label>
                        <div class="cancel btn btn-danger">
                          <i class="fas fa-trash"></i>
                        </div>
                      </div> */}
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-primary btn-sm rounded-0 mt-2"
                    onClick={() => handleAddTenant(index)}
                  >
                    <i className="fas fa-plus"></i> Add Tenant
                  </button>
                </div>
              </div>
              <div className="card card-primary">
                <div className="card-header">
                  <div>
                    <strong>House Property Address</strong>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row text-content">
                    <div className="col-md-6">
                      {/* Flat/Door/Block Number */}
                      <div className="form-group">
                        <label>Flat/Door/Block Number *</label>
                        <input
                          type="text"
                          name="HouseNo"
                          className="form-control rounded-0"
                          value={property.item.AddressDetailWithZipCode.HouseNo}
                        />
                      </div>

                      {/* Premise Name */}
                      <div className="form-group">
                        <label>Premise Name (Optional)</label>
                        <input
                          type="text"
                          name="PremiseName"
                          className="form-control rounded-0"
                          value={property.item.AddressDetailWithZipCode.PremiseName}
                        />
                      </div>

                      {/* Road / Street */}
                      <div className="form-group">
                        <label>Road / Street (Optional)</label>
                        <input
                          type="text"
                          name="Road"
                          className="form-control rounded-0"
                          value={property.item.AddressDetailWithZipCode.Road}
                        />
                      </div>

                      {/* State */}
                      <div className="form-group">
                        <label>State *</label>
                        <select
                          name="StateCode"
                          className="form-control rounded-0 state_code"
                          value={property.item.AddressDetailWithZipCode.StateCode}
                        >
                          <option value="">Select Option</option>
                          {states.map(([code, name]) => (
                            <option value={code} key={code}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      {/* Pincode */}
                      <div className="form-group">
                        <label>Pincode</label>
                        <input
                          type="number"
                          className="form-control rounded-0 pincode"
                          name="PinCode"
                          value={property.item.AddressDetailWithZipCode.PinCode}
                        />
                      </div>

                      {/* Area / Locality */}
                      <div className="form-group">
                        <label>Area / Locality *</label>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          name="Area"
                          value={property.item.AddressDetailWithZipCode.Area}
                        />
                      </div>

                      {/* Town / City */}
                      <div className="form-group">
                        <label>Town / City *</label>
                        <input
                          type="text"
                          className="form-control rounded-0 city"
                          name="CityOrTownOrDistrict"
                          value={property.item.AddressDetailWithZipCode.CityOrTownOrDistrict}
                        />
                      </div>

                      {/* Country */}
                      <div className="form-group">
                        <label>Country *</label>
                        <select
                          name="CountryCode"
                          className="form-control rounded-0"
                          value={property.item.AddressDetailWithZipCode.CountryCode}
                        >
                          <option value="">Select Option</option>
                          {countries.map(({ code, name }) => (
                            <option value={code} key={code}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          ))}

        </div>
      </div>

      <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary rounded-0">
          Submit
        </button>
      </div>
    </form>
  );
};

export default HousePropertyForm;
