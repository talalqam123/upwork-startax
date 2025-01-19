import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Routes, Route, Navigate } from "react-router-dom";
import BasicDetailsForm from "./BasicDetails";
import AddressForm from "./Address";
import BankDetails from "./Banks";
import AdditionalDetails from "./Additional_Details";
import SalaryPage from "./Salary/Salary";
import IncomeUnder44AD from "./Business/incmeunder44ad";
import HousePropertyForm from "./Business/House Property/houseproperty";
import CapitalGains from "./Business/Capital Gains/capitalgains_index";
import ExemptIncomeForm from "./Business/Exempt Income/exempt_income";
import OtherIncomeForm from "./Business/Other Income/otherincome";
import DeductionForm from "./Deductions/80c_to_80g";
import MoreDeductions from "./Deductions/more_deductions";
import OtherDeductions from "./Deductions/other_deductions";
import ExportSummary from "./Final/Filing/filling";
import AdvancedInfo from "./Final/More Info/more_info";
import SelfAssessment from "./TDS/Self Assessment/self_assessment";
import TdsTcsComponent from "./TDS/tds_tcs";
import TdsOtherDetails from "./TDS/Other Details/other_details";

// Separate permanent details config into its own constant
const PERMANENT_DETAILS = {
    icon: "01",
    path: "permanent",
    subTabs: {
        "Basic Details": { Component: BasicDetailsForm, path: "basic" },
        "Address": { Component: AddressForm, path: "address" },
        "Bank": { Component: BankDetails, path: "bank" },
        "Additional Details": { Component: AdditionalDetails, path: "additional" }
    }
};

// Main tabs config without Permanent Details
const TABS_CONFIG = {
    "Income": {
        icon: "02",
        path: "income",
        subTabs: {
            "Salary": { Component: SalaryPage, path: "salary" },
            "Business": { Component: IncomeUnder44AD, path: "business" },
            "House Property": { Component: HousePropertyForm, path: "house" },
            "Capital Gains": { Component: CapitalGains, path: "capital-gains" },
            "Exempt Income": { Component: ExemptIncomeForm, path: "exempt" },
            "Other Income": { Component: OtherIncomeForm, path: "other" }
        }
    },
    "Deduction": {
        icon: "03",
        path: "deduction",
        subTabs: {
            "80C to 80G": { Component: DeductionForm, path: "80c-to-80g" },
            "More Deductions": { Component: MoreDeductions, path: "more-deductions" },
            "Other Deductions": { Component: OtherDeductions, path: "other-deductions" }
        }
    },
    "TDS/Taxes": {
        icon: "04",
        path: "tds-taxes",
        subTabs: {
            "TDS/TCS": { Component: TdsTcsComponent, path: "tds-tcs" },
            "Self Assessment": { Component: SelfAssessment, path: "self-assessment" },
            "Other Details": { Component: TdsOtherDetails, path: "other-details" },
            "AIS/TIS": { Component: null, path: "ais-tis" }
        }
    },
    "Final": {
        icon: "05",
        path: "final",
        subTabs: {
            "More Info": { Component: AdvancedInfo, path: "more-info" },
            "Filing": { Component: ExportSummary, path: "filing" },
            "Utility": { Component: null, path: "utility" }
        }
    }
};

const ClientDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get initial active tabs from URL on component mount
    const getInitialTabs = () => {
        const path = location.pathname.split('/');
        // Remove empty string and 'client' from path
        const [mainPath, subPath] = path.filter(p => p && p !== 'client');
        
        let initialMainTab = "Permanent Details";
        let initialSubTab = "Basic Details";

        // Find matching tab configuration from URL
        Object.entries(TABS_CONFIG).forEach(([tabName, tabConfig]) => {
            if (tabConfig.path === mainPath) {
                initialMainTab = tabName;
                Object.entries(tabConfig.subTabs).forEach(([subTabName, subTabConfig]) => {
                    if (subTabConfig.path === subPath) {
                        initialSubTab = subTabName;
                    }
                });
            }
        });

        return { mainTab: initialMainTab, subTab: initialSubTab };
    };

    const { mainTab, subTab } = getInitialTabs();
    const [activeTab, setActiveTab] = useState(mainTab);
    const [activeSubTab, setActiveSubTab] = useState(subTab);
    
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState("2024");
    const [isYearModalOpen, setIsYearModalOpen] = useState(false);

    const handleClientNameClick = () => {
        setActiveTab("Permanent Details");
        const defaultSubTab = Object.keys(PERMANENT_DETAILS.subTabs)[0];
        setActiveSubTab(defaultSubTab);
        navigate(`/client/${PERMANENT_DETAILS.path}/${PERMANENT_DETAILS.subTabs[defaultSubTab].path}`);
    };

    const getCurrentConfig = () => {
        return activeTab === "Permanent Details" ? PERMANENT_DETAILS : TABS_CONFIG[activeTab];
    };

    // Update active tabs based on route changes
    useEffect(() => {
        const path = location.pathname.split('/');
        // Remove empty string and 'client' from path
        const [mainPath, subPath] = path.filter(p => p && p !== 'client');

        if (!mainPath) return; // Don't update if no path

        Object.entries(TABS_CONFIG).forEach(([tabName, tabConfig]) => {
            if (tabConfig.path === mainPath) {
                setActiveTab(tabName);
                Object.entries(tabConfig.subTabs).forEach(([subTabName, subTabConfig]) => {
                    if (subTabConfig.path === subPath) {
                        setActiveSubTab(subTabName);
                    }
                });
            }
        });
    }, [location.pathname]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        const defaultSubTab = Object.keys(TABS_CONFIG[tab].subTabs)[0];
        setActiveSubTab(defaultSubTab);
        navigate(`/client/${TABS_CONFIG[tab].path}/${TABS_CONFIG[tab].subTabs[defaultSubTab].path}`);
    };

    const handleSubTabChange = (mainTab, subTab) => {
        setActiveSubTab(subTab);
        const config = mainTab === "Permanent Details" ? PERMANENT_DETAILS : TABS_CONFIG[mainTab];
        navigate(`/client/${config.path}/${config.subTabs[subTab].path}`);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const getFilteredTabs = () => {
        if (!searchQuery) return [];
        
        const results = [];
        Object.entries(TABS_CONFIG).forEach(([tab, config]) => {
            Object.keys(config.subTabs).forEach(subTab => {
                if (tab.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    subTab.toLowerCase().includes(searchQuery.toLowerCase())) {
                    results.push({ category: tab, tabName: subTab });
                }
            });
        });
        return results;
    };

    const handleSearchSelect = (result) => {
        setActiveTab(result.category);
        setActiveSubTab(result.tabName);
        setSearchQuery("");
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid pt-1 px-0 pr-2">
                    {/* EXAMPLE */}
                    <div className="card card-default">
                        <div className="row mx-0 align-items-center card-header toP_br">
                            <h3
                                className="card-title col-md-3 col-sm-12 m-0"
                                id="client-full-name"
                                role="button"
                                onClick={handleClientNameClick}
                                style={{ cursor: 'pointer' }}
                            >
                                {"Client Full Name"}
                            </h3>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="input-group shadow-sm input-group-sm flex-column">
                                    <div className="input-group-append bg-light border-0" style={{ height: "40px" }}>
                                        <input
                                            className="form-control bg-light border-0 search-element"
                                            type="search"
                                            style={{ height: "40px" }}
                                            id="search-query"
                                            aria-label="Search"
                                            placeholder="Type here or press '/' to search input fields"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                    {/* Dropdown for Search Results */}
                                    {searchQuery && (
                                        <div className="dropdown-menu show w-100">
                                            {getFilteredTabs().length > 0 ? (
                                                getFilteredTabs().map((tab, index) => (
                                                    <button
                                                        key={index}
                                                        className="dropdown-item"
                                                        onClick={() => handleSearchSelect(tab)}
                                                    >
                                                        {tab.category} - {tab.tabName}
                                                    </button>
                                                ))
                                            ) : (
                                                <span className="dropdown-item text-muted">No matches found</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <button
                                    className="btn btn-primary rounded-0 w-100"
                                    onClick={() => navigate('/basic_details/26AIS')}
                                >
                                    26AS and AIS Import
                                </button>
                            </div>

                            {/* Modal */}
                            <div className="modal fade" id="staticBackdrop" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">
                                                Select Income Type
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" style={{ fontSize: "xx-large" }}>
                                                    &times;
                                                </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    {/* Checkboxes */}
                                                    {["Salary", "Business", "House Property", "Capital Gain", "Other Income", "VDA Income", "Exempt Income"].map((incomeType) => (
                                                        <div className="form-check" key={incomeType}>
                                                            <input className="form-check-input" type="checkbox" value="" id={incomeType} />
                                                            <label className="form-check-label" htmlFor={incomeType}>
                                                                {incomeType}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="form-group m-0 p-0">
                                    <select className="form-control rounded-0" style={{ width: "100%" }} value={selectedYear} onChange={handleYearChange}>
                                        {["2024", "2023", "2022", "2021", "2020"].map((year) => (
                                            <option key={year} value={year}>
                                                {year}-{parseInt(year) + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Year Change Modal */}
                            <div className="modal fade" id="change_year_modal" style={{ display: isYearModalOpen ? "block" : "none" }} aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <p>Are you sure you want to change year?</p>
                                        </div>
                                        <div className="modal-footer justify-content-between">
                                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => setIsYearModalOpen(false)}>
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Yes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body px-0">
                            <div className="row mx-0">
                                <div className="col-md-12 px-0">
                                    <div className="process-sec-cntnt mt-3" style={{ gap: "8px" }}>
                                        {/* Main Tabs */}
                                        <div className="process-tab-btns">
                                            <ul>
                                                {Object.keys(TABS_CONFIG).map((tab) => (
                                                    <li
                                                        key={tab}
                                                        className={`btn btn-block bg-gradient-primary btn-flat ${tab === activeTab ? "active" : ""}`}
                                                        onClick={() => handleTabChange(tab)}
                                                    >
                                                        <span>{tab}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tab Content */}
                                        <div className="process-tabs-cntnt">
                                            <div className="p-tab-cntnt inner_tabs_collec active">
                                                <div className="p-tab-c1">
                                                    <span>{getCurrentConfig()?.icon} {activeTab}</span>
                                                    
                                                    {/* Sub Tabs */}
                                                    <div className="inerr_taabs-tab-btns mb-4">
                                                        <ul>
                                                            {Object.keys(getCurrentConfig()?.subTabs || {}).map((subTab) => (
                                                                <li
                                                                    key={subTab}
                                                                    className={`btn btn-block btn-outline-primary btn-flat ${subTab === activeSubTab ? "active" : ""}`}
                                                                    onClick={() => handleSubTabChange(activeTab, subTab)}
                                                                >
                                                                    <span>{subTab}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Routed Content */}
                                                    <div className="mt-3 inerr-tab-cntnt active">
                                                        <Routes>
                                                            {/* Permanent Details Routes */}
                                                            {Object.entries(PERMANENT_DETAILS.subTabs).map(([subTabName, subTabConfig]) => {
                                                                const SubTabComponent = subTabConfig.Component;
                                                                return SubTabComponent && (
                                                                    <Route
                                                                        key={`permanent/${subTabConfig.path}`}
                                                                        path={`permanent/${subTabConfig.path}`}
                                                                        element={<SubTabComponent />}
                                                                    />
                                                                );
                                                            })}

                                                            {/* Regular Tab Routes */}
                                                            {Object.entries(TABS_CONFIG).map(([tabName, tabConfig]) => (
                                                                Object.entries(tabConfig.subTabs).map(([subTabName, subTabConfig]) => {
                                                                    const SubTabComponent = subTabConfig.Component;
                                                                    return SubTabComponent && (
                                                                        <Route
                                                                            key={`${tabConfig.path}/${subTabConfig.path}`}
                                                                            path={`${tabConfig.path}/${subTabConfig.path}`}
                                                                            element={<SubTabComponent />}
                                                                        />
                                                                    );
                                                                })
                                                            ))}
                                                            
                                                            <Route
                                                                path="/"
                                                                element={<Navigate to="permanent/basic" replace />}
                                                            />
                                                        </Routes>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EXAMPLE End */}
                </div>
            </section>
        </>
    );
};

export default ClientDetails;
