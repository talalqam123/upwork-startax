import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAddressBook,
  faMoneyBill,
  faHandHoldingDollar,
  faReceipt,
  faFileInvoice,
  faUser,
  faLocationDot,
  faBuildingColumns,
  faClipboard,
  faBriefcase,
  faHouse,
  faChartLine,
  faMoneyBillTransfer,
  faMoneyCheck,
  faFileContract,
  faFileSignature,
  faFingerprint,
  faFileCircleCheck,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation, Routes, Route, Navigate, useMatch } from "react-router-dom";
import BasicDetailsForm from "../Permanent Details/BasicDetails";
import AddressForm from "../Permanent Details/Address";
import BankDetails from "../Permanent Details/Banks";
import AdditionalDetails from "../Permanent Details/Additional_Details";
import SalaryPage from "../Business/Salary/Salary";
import IncomeUnder44AD from "../Business/incmeunder44ad";
import HousePropertyForm from "../Business/House Property/houseproperty";
import CapitalGains from "../Business/Capital Gains/capitalgains_index";
import ExemptIncomeForm from "../Business/Exempt Income/exempt_income";
import OtherIncomeForm from "../Business/Other Income/otherincome";
import DeductionForm from "../Deductions/80c_to_80g";
import MoreDeductions from "../Deductions/more_deductions";
import OtherDeductions from "../Deductions/other_deductions";
import ExportSummary from "../Final/Filing/filling";
import AdvancedInfo from "../Final/More Info/more_info";
import SelfAssessment from "../TDS/Self Assessment/self_assessment";
import TdsTcsComponent from "../TDS/tds_tcs";
import TdsOtherDetails from "../TDS/Other Details/other_details";
import LoadingBar from '../LoadingBar';
import RemunerationForm from "../Business/AddBusiness/BSPL/remuneration";
import BSPLIncomeForm from "../Business/AddBusiness/BSPL/bspl_income";
import NoBooksOfAccountIncome from "../Business/AddBusiness/no.ofbook_accounts";
import SpeculativeIncomeForm from "../Business/AddBusiness/speculativeincomeform";
import GSTDetailsForm from "../Business/Financial Staements & Schedules/gst";
import BusinessIncomeForm from "../Business/Financial Staements & Schedules/schedule_bp";
import ScheduleOI from "../Business/Financial Staements & Schedules/schedule_oi";
import AuditorDetailsForm from "../Business/Audit Details/auditordetails";
import Form3CA3CB from "../Business/Audit Details/3ca_3cb_3_cd";
import DetailsOfTradingConcern from "../Business/Quantitave Details/trading_concern";
import ManufacturingAcc from "../Business/AddBusiness/BSPL/manufacturingAcc";
import BSPIncome from "../Business/AddBusiness/BSPL/temp_balancesheet"; // Add BSPIncome component
import DepreciationForm from "../Business/AddBusiness/BSPL/bspl_depreciationForm"; // Add DepreciationForm component
import ScheduleICDSForm from "../Business/AddBusiness/BSPL/bspl_scheduleicds";
import ESRDetailsForm from "../Business/AddBusiness/BSPL/bspl_esrdetails";
import ShareDebenturesForm from "../Business/Capital Gains/share_debentures";
import VDAIncomeForm from "../Business/Capital Gains/vda_income";
import MutualFunds from "../Business/Capital Gains/mutual_funds";
import StockOptionsForm from "../Business/Capital Gains/stock_rsu";
import LandOrBuildingForm from "../Business/Capital Gains/landorbuilding_form";
import OtherAssetForm from "../Business/Capital Gains/any_other_asset";
import DeemedCapitalGainsForm from "../Business/Capital Gains/deemed_capital_gain";
import NonSalaryTDS from "../TDS/TDS-TCS/non_salary_tds";
import TdsOnProperty from "../TDS/TDS-TCS/tds_property";
import TCSForm from "../TDS/TDS-TCS/tcs_form";
import DeferredTaxESOPs from "../TDS/TDS-TCS/deferred_info";
import ResidentialStatus from "../Final/More Info/resedential";
import UnlistedShares from "../Final/More Info/unlistedshare";
import DirectorshipDetails from "../Final/More Info/directorship";
import ForeignAssetsIncomes from "../Final/More Info/Advanced Info/Foreign Assets/Foreignassets";
import ScheduleSPI from "../Final/More Info/schedule_spi";
import PropertyDetails from "../Final/More Info/schedule_al";
import ExpenditureOnForeignTravel from "../Final/More Info/expenditure_on_foreign";
import ExpenditureOnElectricityConsumption from "../Final/More Info/expenditure_on_elec";
import ClauseIVSeventhProviso from "../Final/More Info/clause.iv";
import TrpInfoForm from "../Final/More Info/trpinfo";
import RepresentativeAssesseeForm from "../Final/More Info/Representative_assesse";
import ForeignBank from "../Final/More Info/Advanced Info/Foreign Assets/foreignbank";
import ForeignCustodialAccount from "../Final/More Info/Advanced Info/Foreign Assets/foreign_custodial";
import ForeignEquityDebtInterest from "../Final/More Info/Advanced Info/Foreign Assets/foreign_equity";
import ForeignCashValueInsurance from "../Final/More Info/Advanced Info/Foreign Assets/foreign_casvalue";
import FinancialInterestForm from "../Final/More Info/Advanced Info/Foreign Assets/foreign_interest";
import ImmovablePropertyForm from "../Final/More Info/Advanced Info/Foreign Assets/immovable_prop";
import OtherAssets from "../Final/More Info/Advanced Info/Foreign Assets/other_assets";
import AccountsHavingSigningAuthority from "../Final/More Info/Advanced Info/Foreign Assets/signing_authority";
import TrustOutsideIndiaTrustee from "../Final/More Info/Advanced Info/Foreign Assets/trust_outside_india";
import OtherSourcesIncomeOutsideIndia from "../Final/More Info/Advanced Info/Foreign Assets/other_income";
import ImportTdsTcs from "../TDS/ImportTdsTcs";
const TABS_CONFIG = {
  "Permanent Details": {
    icon: faAddressBook,
    path: "permanent",
    subTabs: {
      "Basic Details": { Component: BasicDetailsForm, path: "basic", icon: faUser },
      "Address": { Component: AddressForm, path: "address", icon: faLocationDot },
      "Bank": { Component: BankDetails, path: "bank", icon: faBuildingColumns },
      "Additional Details": { Component: AdditionalDetails, path: "additional", icon: faClipboard }
    }
  },
  "Income": {
    icon: faMoneyBill,
    path: "income",
    subTabs: {
      "Salary": { Component: SalaryPage, path: "salary", icon: faBriefcase },
      "Business": { 
        Component: IncomeUnder44AD, 
        path: "business", 
        icon: faHandHoldingDollar,
        subRoutes: {
          "remuneration": RemunerationForm,
          "bspl": BSPLIncomeForm,  
          "no-books": NoBooksOfAccountIncome,
          "speculative": SpeculativeIncomeForm,
          "gst": GSTDetailsForm,
          "schedule-bp": BusinessIncomeForm,
          "schedule-oi": ScheduleOI,
          "auditor": AuditorDetailsForm,
          "form-3ca-3cb": Form3CA3CB,
          "trading": DetailsOfTradingConcern,
          "manufacturing-raw": ManufacturingAcc,  // You'll need to create this component
          "fill-bspl": BSPIncome, // Add route for Fill BSPL
          "bspl/depreciation": DepreciationForm, // You'll need to create this component
          "bspl/icds": ScheduleICDSForm, // You'll need to create this component
          "bspl/esr": ESRDetailsForm, // You'll need to create this component
        }
      },
      "House Property": { Component: HousePropertyForm, path: "house", icon: faHouse},
      "Capital Gains": { Component: CapitalGains, path: "capital-gains", icon: faChartLine,
        subRoutes: {
            "debentures": ShareDebenturesForm,
            "vda-income": VDAIncomeForm,
            "mutual-funds": MutualFunds,
            "stock-rsu": StockOptionsForm,
            "landbuilding" : LandOrBuildingForm,
            "other-asset" : OtherAssetForm,
            "deemed" :DeemedCapitalGainsForm
        }

       },
      "Exempt Income": { Component: ExemptIncomeForm, path: "exempt", icon: faMoneyBillTransfer },
      "Other Income": { Component: OtherIncomeForm, path: "other", icon: faMoneyCheck }
    }
  },
  "Deduction": {
    icon: faReceipt,
    path: "deduction",
    subTabs: {
      "80C to 80G": { Component: DeductionForm, path: "80c-to-80g", icon: faFileContract },
      "More Deductions": { Component: MoreDeductions, path: "more-deductions", icon: faFileSignature },
      "Other Deductions": { Component: OtherDeductions, path: "other-deductions", icon: faFingerprint }
    }
  },
  "TDS/Taxes": {
    icon: faFileInvoice,
    path: "tds-taxes",
    subTabs: {
      "TDS/TCS": { Component: TdsTcsComponent, path: "tds-tcs", icon: faFileContract,
        subRoutes:{
            "import" : ImportTdsTcs,
            "non-salary": NonSalaryTDS,
            "sale-rent": TdsOnProperty,
            "tcs": TCSForm,
            "esops" : DeferredTaxESOPs
        }

       },
      "Self Assessment": { Component: SelfAssessment, path: "self-assessment", icon: faFileSignature },
      "Other Details": { Component: TdsOtherDetails, path: "other-details", icon: faClipboard },
      "AIS/TIS": {  Component: () => <div>AIS/TIS Component</div>, path: "ais-tis", icon: faFileCircleCheck }
    }
  },
  "Final": {
    icon: faFileInvoice,
    path: "final",
    defaultSubTab: "Filing", // Add this line to set default subtab
    subTabs: {
       // Move Filing to be first
      "More Info": { 
        Component: AdvancedInfo, 
        path: "more-info",
        subRoutes: {
             "resedential" : ResidentialStatus,
             "unlisted" :UnlistedShares,
             "directorship":  DirectorshipDetails,
             "foreign-assets" : ForeignAssetsIncomes,
             "schedule-spi": ScheduleSPI,
             "schedule-al": PropertyDetails,
             "current-deposits" :null,
             "foreign-travel" :ExpenditureOnForeignTravel,
             "electricity-consumption" :ExpenditureOnElectricityConsumption,
             "clause-iv" :ClauseIVSeventhProviso,
             "trp" : TrpInfoForm,
             "assessee" : RepresentativeAssesseeForm,
            // Foreign Assets Routes
            "foreign-assets/foreign-bank" : ForeignBank,
            "foreign-assets/foreign-custodial-account" : ForeignCustodialAccount,
            "foreign-assets/foreign-equity-debt-interest" : ForeignEquityDebtInterest,
            "foreign-assets/foreign-cash-value-insurance" : ForeignCashValueInsurance,
            "foreign-assets/financial-interest" : FinancialInterestForm,
            "foreign-assets/immovable-property" : ImmovablePropertyForm,
            "foreign-assets/other-assets" : OtherAssets,
            "foreign-assets/signing-authority" : AccountsHavingSigningAuthority,
            "foreign-assets/trust-outside-india-trustee" : TrustOutsideIndiaTrustee,
            "foreign-assets/other-sources-income-outside-india" : OtherSourcesIncomeOutsideIndia
        }
       },
       "Filing": { Component: ExportSummary, path: "filing" },
      "Utility": { 
        Component: () => <div>Utility Component</div>, // Add a placeholder component
        path: "utility",
        icon: faTools // Add appropriate icon
      }
    }
  }
};

const ClientDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const match = useMatch('/client/*');

    // Add state for client name
    const [clientName, setClientName] = useState("Client");

    // Get client data from location state
    useEffect(() => {
        console.log('Current location:', location); // Debug log
        console.log('Location state:', location.state); // Debug log
        console.log('localStorage:', localStorage.getItem('currentClient')); // Debug log

        const setClientInfo = (clientData) => {
            if (clientData?.first_name) {
                setClientName(clientData.first_name);
                localStorage.setItem('currentClient', JSON.stringify(clientData));
            }
        };

        if (location.state?.client) {
            setClientInfo(location.state.client);
        } else {
            // If no state, try localStorage
            const savedClient = localStorage.getItem('currentClient');
            if (savedClient) {
                try {
                    const parsedClient = JSON.parse(savedClient);
                    setClientInfo(parsedClient);
                } catch (e) {
                    console.error('Error parsing saved client:', e);
                    // If there's an error, redirect to dashboard
                    navigate('/');
                }
            } else {
                // If no saved client data, redirect to dashboard
                navigate('/');
            }
        }
    }, [location, navigate]);

    // Get initial active tabs from URL on component mount
    const getInitialTabs = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const mainPath = pathSegments[1]; // after 'client'
        const subPath = pathSegments[2];

        let initialMainTab = "Permanent Details";
        let initialSubTab = "Basic Details";

        // Match exact paths only
        Object.entries(TABS_CONFIG).forEach(([tabName, tabConfig]) => {
            if (tabConfig.path === mainPath) {
                initialMainTab = tabName;
                const subTabEntry = Object.entries(tabConfig.subTabs).find(
                    ([_, subTabConfig]) => subTabConfig.path === subPath
                );
                if (subTabEntry) {
                    initialSubTab = subTabEntry[0];
                }
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
    const [isLoading, setIsLoading] = useState(false);
    const [contentOpacity, setContentOpacity] = useState(1);
    const TRANSITION_DURATION = 500; // 500ms for transition

    const simulateLoading = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), TRANSITION_DURATION);
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

    // Memoize the navigation functions to prevent unnecessary re-renders
    const handleTabChange = useCallback((tab) => {
        setContentOpacity(0.1);
        setIsLoading(true);
        const defaultSubTab = TABS_CONFIG[tab].defaultSubTab || Object.keys(TABS_CONFIG[tab].subTabs)[0];
        const newPath = `/client/${TABS_CONFIG[tab].path}/${TABS_CONFIG[tab].subTabs[defaultSubTab].path}`;
        
        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
            setActiveTab(tab);
            setActiveSubTab(defaultSubTab);
            navigate(newPath, { replace: true });
            
            // Delay opacity restoration
            setTimeout(() => {
                setContentOpacity(1);
                setIsLoading(false);
            }, TRANSITION_DURATION / 2);
        });
    }, [navigate]);

    const handleSubTabChange = useCallback((mainTab, subTab) => {
        setContentOpacity(0.1);
        setIsLoading(true);
        
        // Add check for valid paths
        if (!TABS_CONFIG[mainTab]?.subTabs[subTab]?.path) {
            console.error('Invalid path configuration');
            return;
        }

        const newPath = `/client/${TABS_CONFIG[mainTab].path}/${TABS_CONFIG[mainTab].subTabs[subTab].path}`;
        
        requestAnimationFrame(() => {
            setActiveSubTab(subTab);
            navigate(newPath, { replace: true });
            
            setTimeout(() => {
                setContentOpacity(1);
                setIsLoading(false);
            }, TRANSITION_DURATION / 2);
        });
    }, [navigate]);

    // Update URL handling
    useEffect(() => {
        const cleanupPath = location.pathname.replace('/client/', '');
        const [mainPath, subPath] = cleanupPath.split('/');

        if (!mainPath) {
            navigate('/client/permanent/basic', { replace: true });
            return;
        }

        // Add validation to prevent invalid routes
        let foundTab = false;
        let foundSubTab = false;

        Object.entries(TABS_CONFIG).forEach(([tabName, tabConfig]) => {
            if (tabConfig.path === mainPath) {
                setActiveTab(tabName);
                foundTab = true;
                Object.entries(tabConfig.subTabs).forEach(([subTabName, subTabConfig]) => {
                    if (subTabConfig.path === subPath) {
                        setActiveSubTab(subTabName);
                        foundSubTab = true;
                    }
                });
            }
        });

        // Redirect to default route if invalid path
        if (!foundTab || !foundSubTab) {
            navigate('/client/permanent/basic', { replace: true });
        }
    }, [location.pathname, navigate]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const getFilteredTabs = () => {
        if (!searchQuery) return [];
        
        const results = [];
        Object.entries(TABS_CONFIG).forEach(([tabName, config]) => {
            Object.entries(config.subTabs).forEach(([subTabName, subTabConfig]) => {
                // Search in both main tab and subtab names, case-insensitive
                if (
                    tabName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    subTabName.toLowerCase().includes(searchQuery.toLowerCase())
                ) {
                    results.push({
                        category: tabName,
                        tabName: subTabName,
                        path: `${config.path}/${subTabConfig.path}`,
                        icon: subTabConfig.icon
                    });
                }
            });
        });
        return results;
    };

    const handleSearchSelect = (result) => {
        setContentOpacity(0.1); // Start fade out
        simulateLoading();
        
        setTimeout(() => {
            const mainTab = result.category;
            const subTab = result.tabName;
            
            setActiveTab(mainTab);
            setActiveSubTab(subTab);
            
            // Navigate to the correct path using the TABS_CONFIG
            const mainPath = TABS_CONFIG[mainTab].path;
            const subPath = TABS_CONFIG[mainTab].subTabs[subTab].path;
            navigate(`/client/${mainPath}/${subPath}`, { replace: true });
            
            setSearchQuery(""); // Clear search
            setContentOpacity(1); // Fade in
        }, TRANSITION_DURATION / 2);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const contentStyles = {
        transition: 'opacity 0.5s ease',
        opacity: contentOpacity,
    };

    // Fix the year modal JSX syntax error
    const yearModalContent = (
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
    );

    // Update document title when tab or client name changes
    useEffect(() => {
        document.title = `Startax: ${clientName} : ${activeTab}`;
    }, [clientName, activeTab]);

    return (
        <>
            <LoadingBar isLoading={isLoading} duration={TRANSITION_DURATION} />
            {/* Main content */}
            <section className="content">
                <div className="container-fluid pt-1 px-0 pr-2">
                    {/* EXAMPLE */}
                    <div className="card card-default " style = {{"marginBottom" : 0                    }}>
                        <div className="row mx-0 align-items-center card-header toP_br">
                            <h3
                                className="card-title col-md-3 col-sm-12 m-0"
                                id="client-full-name"
                                role="button"
                                onClick={() => {
                                    // handle redirection
                                }}
                            >
                                {clientName} {/* Update this line */}
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
                                        <div className="dropdown-menu show w-100" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                            {getFilteredTabs().length > 0 ? (
                                                getFilteredTabs().map((result, index) => (
                                                    <button
                                                        key={index}
                                                        className="dropdown-item d-flex align-items-center"
                                                        onClick={() => handleSearchSelect(result)}
                                                    >
                                                        <FontAwesomeIcon icon={result.icon} className="mr-2" />
                                                        <span>{result.category} - {result.tabName}</span>
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
                            {yearModalContent}
                        </div>

                        <div className="card-body px-0">
                            <div className="row mx-0">
                                <div className="col-md-12 px-0">
                                    <div className="process-sec-cntnt mt-3" style={{ gap: "8px" }}>
                                        {/* Main Tabs */}
                                        <div className="process-tab-btns">
                                            <ul>
                                                {Object.entries(TABS_CONFIG).map(([tab, config]) => (
                                                    <li
                                                        key={tab}
                                                        className={`btn btn-block bg-gradient-primary btn-flat ${tab === activeTab ? "active" : ""}`}
                                                        onClick={() => handleTabChange(tab)}
                                                    >
                                                        <FontAwesomeIcon icon={config.icon} className="mr-2" />
                                                        <span>{tab}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tab Content */}
                                        <div className="process-tabs-cntnt">
                                            <div className="p-tab-cntnt inner_tabs_collec active">
                                                <div className="p-tab-c1">
                                                    <span>
                                                        <FontAwesomeIcon icon={TABS_CONFIG[activeTab].icon} className="mr-2" />
                                                        {activeTab}
                                                    </span>
                                                    
                                                    {/* Sub Tabs */}
                                                    <div className="inerr_taabs-tab-btns mb-4">
                                                        <ul>
                                                            {Object.entries(TABS_CONFIG[activeTab].subTabs).map(([subTab, subTabConfig]) => (
                                                                <li
                                                                    key={subTab}
                                                                    className={`btn btn-block btn-outline-primary btn-flat ${subTab === activeSubTab ? "active" : ""}`}
                                                                    onClick={() => handleSubTabChange(activeTab, subTab)}
                                                                >
                                                                    <FontAwesomeIcon icon={subTabConfig.icon} className="mr-2" />
                                                                    <span>{subTab}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Routed Content */}
                                                    <div className="mt-3 inerr-tab-cntnt active" style={contentStyles}>
                                                        <Routes>
                                                            {Object.entries(TABS_CONFIG).map(([tabName, tabConfig]) => (
                                                                Object.entries(tabConfig.subTabs).map(([subTabName, subTabConfig]) => {
                                                                    const SubTabComponent = subTabConfig.Component;
                                                                    return (
                                                                        <React.Fragment key={`${tabConfig.path}/${subTabConfig.path}`}>
                                                                            {SubTabComponent && (
                                                                                <Route
                                                                                    path={`${tabConfig.path}/${subTabConfig.path}`}
                                                                                    element={<SubTabComponent />}
                                                                                />
                                                                            )}
                                                                            {/* Add subroutes if they exist */}
                                                                            {subTabConfig.subRoutes && Object.entries(subTabConfig.subRoutes).map(([subRoutePath, SubRouteComponent]) => (
                                                                                <Route
                                                                                    key={`${tabConfig.path}/${subTabConfig.path}/${subRoutePath}`}
                                                                                    path={`${tabConfig.path}/${subTabConfig.path}/${subRoutePath}`}
                                                                                    element={<SubRouteComponent />}
                                                                                />
                                                                            ))}
                                                                        </React.Fragment>
                                                                    );
                                                                })
                                                            ))}
                                                            <Route
                                                                path="/"
                                                                element={<Navigate to="permanent/basic" replace />}
                                                            />
                                                            <Route path="*" element={<Navigate to="permanent/basic" replace />} />
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
