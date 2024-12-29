import React, { useState } from "react";
import BasicDetailsForm from "./BasicDetails";
import AddressForm from "./Address";
import BankDetails from "./Banks";
import AdditionalDetails from "./Additional_Details";
import SalaryPage from "./Salary/Salary";
import IncomeUnder44AD from "./Business/incmeunder44ad";
const ClientDetails = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState("2024");
    const [isYearModalOpen, setIsYearModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Permanent Details");
    const [activePermanentTab, setActivePermanentTab] = useState("Basic Details");
    const [activeIncomeTab, setActiveIncomeTab] = useState("Salary");
    const clientYear = 2024;
    const clientRelId = 'client123';
    const address = {
        residence_type: 'foreign',
        residence_no: '123',
        road_street: 'Street ABC',
        pincode: '12345',
        zip_code: '98765',
        phone_number: '9876543210',
        state_code: 'NY',
        district: 'District XYZ',
        email: 'client@example.com',
        country_mobile_code: '+1',
        address: 'Area 1',
        country: 'US',
    };

    const states = [
        ['NY', 'New York'],
        ['CA', 'California'],
        ['TX', 'Texas'],
    ];

    const countries = [
        ['US', 'United States'],
        ['IN', 'India'],
    ];

    const allClients = [
        {
            relative_id: 'client123',
            full_name: 'John Doe',
            pan_number: 'ABCDE1234F',
            fathers_name: 'Robert Doe',
            address: {
                residence_type: 'foreign',
                residence_no: '123',
                road_street: 'Street ABC',
                pincode: '12345',
                zip_code: '98765',
                phone_number: '9876543210',
                state_code: 'NY',
                district: 'District XYZ',
                email: 'client@example.com',
                country_mobile_code: '+1',
                address: 'Area 1',
                country: 'US',
            }
        },
        // Add more clients as needed
    ];

    const dummyNotes = [
        { id: 1, note: 'Complete profile setup', date_created: new Date(), is_compleated: false },
        { id: 2, note: 'Update MSME registration details', date_created: new Date(), is_compleated: true },
    ];

    const dummyAdditionalDetails = {
        passport_no: 'A1234567',
        voter_id_no: '1234567890',
        nationality: 'CountryX',
        qualification: 'Bachelor of Science',
        occupation: 'Engineer',
        marital_status: 'Married',
    };

    const dummyUdyamDetails = {
        is_msme: 'Yes',
        registration_date: '01/01/2020',
        major_activity: 'Manufacturing',
        msme_registration_no: 'MSME123456',
        enterpris_type: 'small',
    };

    // const clientYear = 2023;
  const clientId = '12345';
  const clientSalaryDetails = [
    {
      EmployerName: 'Employer 1',
      EmployerCategory: 'CGOV',
      EmployerAddress: {
        TanNumber: 'ABCDE1234F',
        TDSDeducted: '5000',
        Address: '123 Street, City',
        PinCode: '123456',
        StateCode: 'UP',
        City: 'Lucknow',
      },
      Salary: {
        total: '1000000',
        NatureOfSalaryDtlsType: [],
      },
      Perquisites: {
        total: '20000',
        NatureOfPerquisitesType: [],
      },
      Profit: {
        total: '15000',
        NatureOfProfitInLieuOfSalaryType: [],
      },
      AllwncExemptUs10: {
        TotalAllwncExemptUs10: '5000',
        AllwncExemptUs10Dtls: [],
      },
      DeductionUs16: '50000',
    },
  ];
//   const states = [
//     { code: 'UP', name: 'Uttar Pradesh' },
//     { code: 'DL', name: 'Delhi' },
//     { code: 'MH', name: 'Maharashtra' },
//   ];
  const previousClientSalaryDetails = [
    {
      EmployerName: 'Previous Employer 1',
      EmployerCategory: 'SGOV',
      EmployerAddress: {
        TanNumber: 'XYZDE5678F',
        TDSDeducted: '3000',
        Address: '456 Lane, City',
        PinCode: '654321',
        StateCode: 'DL',
        City: 'New Delhi',
      },
      Salary: {
        total: '800000',
        NatureOfSalaryDtlsType: [],
      },
      Perquisites: {
        total: '10000',
        NatureOfPerquisitesType: [],
      },
      Profit: {
        total: '5000',
        NatureOfProfitInLieuOfSalaryType: [],
      },
      AllwncExemptUs10: {
        TotalAllwncExemptUs10: '3000',
        AllwncExemptUs10Dtls: [],
      },
      DeductionUs16: '30000',
    },
  ];
  const dummyIncome44AD = {
    nature_of_business: [
      { CodeAD_label: 'Business 1', NameOfBusinessAD: 'Shop', DescriptionAD: 'Retail Store' },
    ],
    GrsTotalTrnOverInCash: 10000,
    GrsTrnOverAnyOthMode: 5000,
    GrsTrnOverBank: 20000,
    GrsPrftInCash: 3000,
    GrsPrftOverAnyOthMode: 1000,
    GrsPrftOverBank: 7000,
    isAnyIncomeFilled: true,
  };
  
  

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };



    return (
        <div className="content-wrapper">
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
                                onClick={() => {
                                    // handle redirection
                                }}
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
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <div className="w-100 bg-white search-element" id="search-list-div">
                                        <table className="table m-0" id="searchlist"></table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <button
                                    className="btn btn-primary rounded-0 w-100"
                                    onClick={() => {
                                        // handle redirect
                                    }}
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
                                        {/* Tabs */}
                                        <div className="process-tab-btns">
                                            <ul>
                                                {["Permanent Details", "Income", "Deduction", "TDS/Taxes", "Final"].map((tabName) => (
                                                    <li
                                                        key={tabName}
                                                        className={`btn btn-block bg-gradient-primary btn-flat ${tabName === activeTab ? "active" : ""}`}
                                                        onClick={() => setActiveTab(tabName)} // Set the clicked tab as active
                                                    >
                                                        <span>{tabName}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tabs content */}
                                        <div className="process-tabs-cntnt">
                                            {/* Permanent Details Tab */}
                                            {activeTab === "Permanent Details" && (
                                                <div className="basic_details_collasp p-tab-cntnt inner_tabs_collec active">
                                                    <div className="p-tab-c1">
                                                        <span>01 Permanent Details</span>
                                                        <div className="inerr_taabs-tab-btns mb-4">
                                                            <ul>
                                                                {["Basic Details", "Address", "Bank", "Additional Details"].map((option) => (
                                                                    <li
                                                                        key={option}
                                                                        className={`btn btn-block btn-outline-primary btn-flat ${option === activePermanentTab ? "active" : ""}`}
                                                                        onClick={() => setActivePermanentTab(option)}
                                                                    >
                                                                        <span>{option}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="mt-3 inerr-tab-cntnt active">
                                                            {activePermanentTab === "Basic Details" && <BasicDetailsForm />}
                                                            {activePermanentTab === "Address" && (
                                                                <AddressForm
                                                                    clientYear={clientYear}
                                                                    clientRelId={clientRelId}
                                                                    address={address}
                                                                    states={states}
                                                                    countries={countries}
                                                                    allClients={allClients}
                                                                />
                                                            )}
                                                            {activePermanentTab === "Bank" && (
                                                                <BankDetails clientId={1} clientYear={2024} clientRelId={1001} />
                                                            )}
                                                            {activePermanentTab === "Additional Details" && (
                                                                <AdditionalDetails
                                                                    clientId={1}
                                                                    clientYear={2024}
                                                                    clientRelId={101}
                                                                    notes={dummyNotes}
                                                                    additionalDetails={dummyAdditionalDetails}
                                                                    udyamDetails={dummyUdyamDetails}
                                                                />
                                                            )}
                                                        </div>

                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === "Income" && (
                                                <div className="income_collasp p-tab-cntnt inner_tabs_collec active">
                                                    <div className="p-tab-c1">
                                                        <span>02 Income</span>
                                                        <div className="inerr_taabs-tab-btns mb-4">
                                                            <ul>
                                                                {["Salary", "Business", "House Property", "Capital Gains", "Exempt Income", "Other Income"].map((option) => (
                                                                    <li
                                                                        key={option}
                                                                        className={`btn btn-block btn-outline-primary btn-flat ${option === activeIncomeTab ? "active" : ""}`}
                                                                        onClick={() => setActiveIncomeTab(option)}
                                                                    >
                                                                        <span>{option}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="mt-3 inerr-tab-cntnt active">
                                                            {activeIncomeTab === "Salary" && (<SalaryPage
         />)}
                                                            {activeIncomeTab === "Business" && <IncomeUnder44AD clientFullName="John Doe"
                                                            clientRelId="12345"
                                                            income44AD={dummyIncome44AD}
                                                            year="2023-24"
                                                            />}
                                                            {activeIncomeTab === "House Property" && <div>House Property Content</div>}
                                                            {activeIncomeTab === "Capital Gains" && <div>Capital Gains Content</div>}
                                                            {activeIncomeTab === "Exempt Income" && <div>Exempt Income Content</div>}
                                                            {activeIncomeTab === "Other Income" && <div>Other Income Content</div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Other Tabs like Income, Deduction, etc */}
                                            {/* Similar structure for the other tabs... */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EXAMPLE End */}
                </div>
            </section>
        </div>
    );
};

export default ClientDetails;
