import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import Papa from 'papaparse';
import {
    addSalaryTab,
    removeSalaryTab,
    updateSalaryTab,
    setActiveTab,
    saveSalaryData,
    updateUnderlinePosition
} from '../../../store/slices/salarySlice';
import GrossSalaryForm from './GrossSalary';
import SalarySection from './DeductionExemption';

const SalaryForm = () => {
    const darkMode = useOutletContext(); // Get darkMode from context
    const dispatch = useDispatch();
    const underlineRef = useRef(null);
    const tabsRef = useRef([]);
    const { salaryTabs, activeTabIndex, loading } = useSelector((state) => state.salary);
    const [pincodeData, setPincodeData] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);

    useEffect(() => {
        updateTabUnderline(activeTabIndex);
    }, [activeTabIndex, salaryTabs]);

    useEffect(() => {
        // Load the CSV data
        const fetchPincodeData = async () => {
            const response = await fetch("/pin_codes.csv");
            const text = await response.text();
            Papa.parse(text, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    setPincodeData(results.data);
                    const uniqueStates = [...new Set(results.data.map(item => item.state))];
                    setStateOptions(uniqueStates);
                },
            });
        };
        fetchPincodeData();
    }, []);

    const updateTabUnderline = (index) => {
        if (!underlineRef.current || !tabsRef.current[index]) return;
        
        const activeTab = tabsRef.current[index];
        const { offsetLeft, offsetWidth } = activeTab;
        
        dispatch(updateUnderlinePosition({
            width: offsetWidth,
            left: offsetLeft
        }));

        underlineRef.current.style.width = `${offsetWidth}px`;
        underlineRef.current.style.left = `${offsetLeft}px`;
    };

    const handleAddSalaryTab = () => {
        dispatch(addSalaryTab());
    };

    const handleRemoveSalaryTab = (index, event) => {
        event.stopPropagation(); // Prevent tab activation when removing
        dispatch(removeSalaryTab(index));
    };

    const handleInputChange = (index, field, value) => {
        if (field === 'pincode') {
            const matchedData = pincodeData.find(
                (entry) => entry.pincode === value
            );
            if (matchedData) {
                dispatch(updateSalaryTab({ 
                    index, 
                    field: 'stateCode', 
                    value: matchedData.state 
                }));
                dispatch(updateSalaryTab({ 
                    index, 
                    field: 'city', 
                    value: matchedData.district 
                }));
            }
        }
        dispatch(updateSalaryTab({ index, field, value }));
    };

    const toggleActiveTab = (index) => {
        dispatch(setActiveTab(index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveSalaryData({ tabs: salaryTabs }));
    };

    return (
        <form className={`salary_form ${darkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
            <div className={`tab-wrapper salary-data ${darkMode ? 'dark-mode' : ''}`}>
                <div className={`tab-header ${darkMode ? 'dark-mode' : ''}`}>
                    <div className="salary_tabs d-flex position-relative">
                        {salaryTabs.map((tab, index) => (
                            <div
                                key={index}
                                ref={(el) => (tabsRef.current[index] = el)}
                                className={`tab-btn d-flex flex-row align-items-center ${activeTabIndex === index ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}
                                onClick={() => toggleActiveTab(index)}
                            >
                                <button className={`salary-tab-button ${darkMode ? 'dark-mode' : ''}`} type="button">
                                    {tab.employerName}
                                </button>
                                {salaryTabs.length > 1 && (
                                    <span
                                        className="text-danger remove-salary"
                                        onClick={(e) => handleRemoveSalaryTab(index, e)}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </span>
                                )}
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
                    <button className="tab-btn-add tab-btn-add-salary" onClick={handleAddSalaryTab}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>

                <div className={`tab-body salary_tabs_body ${darkMode ? 'dark-mode' : ''}`}>
                    {salaryTabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab-content ${activeTabIndex === index ? '' : 'd-none'} ${darkMode ? 'dark-mode' : ''}`}
                            data-tab={index}
                        >
                            <div className={`card card-body ${darkMode ? 'dark-mode' : ''}`}>
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
                                                    <option value="">Select State</option>
                                                    {stateOptions.map((state, idx) => (
                                                        <option key={idx} value={state}>
                                                            {state}
                                                        </option>
                                                    ))}
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
                                                  
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <GrossSalaryForm />
                            <SalarySection />
                        </div>
                    ))}
                </div>
                <div className="row ml-2">
        <div className="col-md-12 mb-4">
          <button
            type="submit"
            id="Client_address_form"
            style={{ width: 'fit-content' }}
            className="btn btn-block btn-primary salary_form_submit"
          >
            Submit
          </button>
        </div>
      </div>
            </div>

            {/* Add submit button */}            

            {/* Add hidden input for tabs */}
            <input
                type="hidden"
                name="tab"
                value={salaryTabs.map((_, index) => index).join(',')}
            />
            {loading && <div className="loading-spinner">Loading...</div>}
        </form>
    );
};

export default SalaryForm;
