import React, { useState, useEffect, useRef } from "react";

const HousePropertyForm = ({ clientId, year }) => {
    const [houseProperties, setHouseProperties] = useState([
        {
            PropertyType: "",
            PropertyOwner: "",
            PropCoOwnedFlg: "NO",
            CoOwners: [],
            rentIncome: 0,
            municipalTax: 0,
            deduction: 0,
            netIncome: 0,
            TenantDetails: [],
        },
    ]);

    const [activeTab, setActiveTab] = useState(0);
    const underlineRef = useRef(null);
    const tabsRef = useRef([]);

    // Tenant management functions
    const handleAddTenant = (propertyIndex) => {
        const updatedProperties = [...houseProperties];
        updatedProperties[propertyIndex].TenantDetails.push({
            NameofTenant: "",
            PANofTenant: "",
            AadhaarofTenant: "",
        });
        setHouseProperties(updatedProperties);
    };

    const handleRemoveTenant = (propertyIndex, tenantIndex) => {
        const updatedProperties = [...houseProperties];
        updatedProperties[propertyIndex].TenantDetails.splice(tenantIndex, 1);
        setHouseProperties(updatedProperties);
    };

    const handleTenantInputChange = (propertyIndex, tenantIndex, field, value) => {
        const updatedProperties = [...houseProperties];
        updatedProperties[propertyIndex].TenantDetails[tenantIndex][field] = value;
        setHouseProperties(updatedProperties);
    };

    const addHouse = () => {
        setHouseProperties([
            ...houseProperties,
            {
                PropertyType: "",
                PropertyOwner: "",
                PropCoOwnedFlg: "NO",
                CoOwners: [],
                rentIncome: 0,
                municipalTax: 0,
                deduction: 0,
                netIncome: 0,
                TenantDetails: [],
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
                                    {/* Property Type and Owner Selection */}
                                    {/* ... (Existing Property Fields) ... */}

                                    {/* Tenant Details Section */}
                                    <div className="card card-primary mt-3">
                                        <div className="card-header">
                                            <strong>Tenant Details</strong>
                                        </div>
                                        <div className="card-body">
                                            {property.TenantDetails.map((tenant, tenantIndex) => (
                                                <div key={tenantIndex} className="row mb-3">
                                                    <div className="col-md-4">
                                                        <input
                                                            type="text"
                                                            placeholder="Name of Tenant"
                                                            className="form-control rounded-0"
                                                            value={tenant.NameofTenant}
                                                            onChange={(e) =>
                                                                handleTenantInputChange(index, tenantIndex, "NameofTenant", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="text"
                                                            placeholder="PAN of Tenant"
                                                            className="form-control rounded-0"
                                                            value={tenant.PANofTenant}
                                                            onChange={(e) =>
                                                                handleTenantInputChange(index, tenantIndex, "PANofTenant", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="text"
                                                            placeholder="Aadhaar of Tenant"
                                                            className="form-control rounded-0"
                                                            value={tenant.AadhaarofTenant}
                                                            onChange={(e) =>
                                                                handleTenantInputChange(index, tenantIndex, "AadhaarofTenant", e.target.value)
                                                            }
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger btn-sm mt-2"
                                                            onClick={() => handleRemoveTenant(index, tenantIndex)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                onClick={() => handleAddTenant(index)}
                                            >
                                                Add Tenant
                                            </button>
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
