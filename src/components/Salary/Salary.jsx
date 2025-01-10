import React, { useState, useEffect } from 'react';

const SalaryForm = () => {
    const [salaryTabs, setSalaryTabs] = useState([
        {
            employerName: 'Employer 1',
            empType: '',
            tanNumber: '',
            tds: '',
            address: '',
            pincode: '',
            stateCode: '',
            city: '',
        },
    ]);

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleAddSalaryTab = () => {
        setSalaryTabs([
            ...salaryTabs,
            {
                employerName: `Employer ${salaryTabs.length + 1}`,
                empType: '',
                tanNumber: '',
                tds: '',
                address: '',
                pincode: '',
                stateCode: '',
                city: '',
            },
        ]);
        setActiveTabIndex(salaryTabs.length);
    };

    const handleRemoveSalaryTab = (index) => {
        if (salaryTabs.length > 1) {
            setSalaryTabs(salaryTabs.filter((_, i) => i !== index));
            setActiveTabIndex(Math.max(0, activeTabIndex - 1));
        } else {
            // Reset the tab instead of removing the last one
            const resetTabs = [...salaryTabs];
            resetTabs[index] = {
                employerName: `Employer 1`,
                empType: '',
                tanNumber: '',
                tds: '',
                address: '',
                pincode: '',
                stateCode: '',
                city: '',
            };
            setSalaryTabs(resetTabs);
        }
    };

    const handleInputChange = (index, field, value) => {
        const updatedTabs = [...salaryTabs];
        updatedTabs[index][field] = value;
        setSalaryTabs(updatedTabs);
    };

    const toggleActiveTab = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div className="tab-wrapper salary-data">
            <div className="tab-header">
                <div className="salary_tabs d-flex">
                    {salaryTabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab-btn d-flex flex-row align-items-center ${activeTabIndex === index ? 'active' : ''}`}
                            onClick={() => toggleActiveTab(index)}
                        >
                            <button className="salary-tab-button" type="button">
                                {tab.employerName}
                            </button>
                            <span
                                className="text-danger remove-salary"
                                onClick={() => handleRemoveSalaryTab(index)}
                            >
                                <i className="fas fa-trash"></i>
                            </span>
                        </div>
                    ))}
                    <div className="underline"></div>
                </div>
                <button className="tab-btn-add tab-btn-add-salary" onClick={handleAddSalaryTab}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            <div className="tab-body salary_tabs_body">
                {salaryTabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-content ${activeTabIndex === index ? '' : 'd-none'}`}
                        data-tab={index}
                    >
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="m-1 text-content">Name of the Employer *</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-0 emp_name"
                                            value={tab.employerName}
                                            onChange={(e) => handleInputChange(index, 'employerName', e.target.value)}
                                            maxLength="125"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="m-1 text-content">Employer Type/Category *</label>
                                        <select
                                            className="form-control rounded-0"
                                            value={tab.empType}
                                            onChange={(e) => handleInputChange(index, 'empType', e.target.value)}
                                        >
                                            <option value="">Select Option</option>
                                            <option value="CGOV">Central Government</option>
                                            <option value="SGOV">State Government</option>
                                            <option value="PSU">Public Sector Unit</option>
                                            <option value="PE">Pensioners - Central Government</option>
                                            <option value="PESG">Pensioners - State Government</option>
                                            <option value="PEPS">Pensioners - PSU</option>
                                            <option value="PEO">Pensioners - Others</option>
                                            <option value="OTH">Others</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="m-1 text-content">Tan Number</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-0"
                                            value={tab.tanNumber}
                                            onChange={(e) => handleInputChange(index, 'tanNumber', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="m-1 text-content">Salary TDS Deducted</label>
                                        <input
                                            type="number"
                                            className="form-control rounded-0"
                                            value={tab.tds}
                                            onChange={(e) => handleInputChange(index, 'tds', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="pt-1 m-0 mb-1 d-flex">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={!!tab.address}
                                        onChange={(e) =>
                                            handleInputChange(index, 'address', e.target.checked ? ' ' : '')
                                        }
                                    />
                                    <span className="slider-switch round"></span>
                                </label>
                                <span className="toggleAddressLabel">
                                    {tab.address ? 'Hide Address' : 'Show Address (Mandatory in ITR-2 or ITR-3)'}
                                </span>
                            </p>

                            {tab.address && (
                                <div className="row address-row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="m-0">Address Full Line</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-0"
                                                value={tab.address}
                                                onChange={(e) => handleInputChange(index, 'address', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="m-0">Pincode</label>
                                            <input
                                                type="number"
                                                className="form-control rounded-0 pincode"
                                                value={tab.pincode}
                                                onChange={(e) => handleInputChange(index, 'pincode', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="m-0">State Code</label>
                                            <select
                                                className="form-control rounded-0 state_code"
                                                value={tab.stateCode}
                                                onChange={(e) => handleInputChange(index, 'stateCode', e.target.value)}
                                            >
                                                <option value="">Select Option</option>
                                                {/* Add state options dynamically */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="m-0">City / Town / District</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 city"
                                                value={tab.city}
                                                onChange={(e) => handleInputChange(index, 'city', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalaryForm;
