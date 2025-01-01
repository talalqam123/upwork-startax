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
        },
    ]);

    const [activeTab, setActiveTab] = useState(0);
    const underlineRef = useRef(null);
    const tabsRef = useRef([]);

    const handlePropertyChange = (index, field, value) => {
        const updatedProperties = [...houseProperties];
        updatedProperties[index][field] = value;
        setHouseProperties(updatedProperties);
    };


    const addHouse = () => {
        setHouseProperties([
            ...houseProperties,
            { PropertyType: "", PropertyOwner: "", PropCoOwnedFlg: "NO", CoOwners: [], Tenants: [], rentIncome: 0, municipalTax: 0, deduction: 0, netIncome: 0 },
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
