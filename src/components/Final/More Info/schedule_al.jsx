import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import countrycode from '../../../../public/countrycode.json'
import Papa from "papaparse";
const PropertyDetails = () => {
    const [form2data, setForm2Data] = useState({
        deposits_in_bank: '',
        shares_and_securities: '',
        insurance_policies: '',
        cash_in_hand: '',
        loans_and_advances_given: '',
        jewellery_bullion: '',
        vehicles: '',
        artwork: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm2Data({ ...form2data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form2data);
        // Add form submission logic here (e.g., API call)
    };

    const [addressTabs, setAddressTabs] = useState([{
        prop_desc: '',
        prop_amt: '',
        residence_type: 'indian',
        residence_no: '',
        road_street: '',
        pin_code: '',
        zip_code: '',
        mobile_number: '',
        State: '',
        country_code_mobile: '',
        residence_name: '',
        locality_or_area: '',
        district: '',
        email: '',
        country_code: ''
    }]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        initializeAddressTabs();
    }, []);

    const initializeAddressTabs = () => {
        setActiveTab(0);
    };

    const addAddressTab = () => {
        setAddressTabs([
            ...addressTabs,
            {
                prop_desc: '',
                prop_amt: '',
                residence_type: 'indian',
                residence_no: '',
                road_street: '',
                pin_code: '',
                zip_code: '',
                mobile_number: '',
                State: '',
                country_code_mobile: '',
                residence_name: '',
                locality_or_area: '',
                district: '',
                email: '',
                country_code: ''
            }
        ]);
        setActiveTab(addressTabs.length);
    };

    const removeAddressTab = (index) => {
        if (addressTabs.length > 1) {
            const updatedTabs = addressTabs.filter((_, i) => i !== index);
            setAddressTabs(updatedTabs);
            setActiveTab(index > 0 ? index - 1 : 0);
        } else {
            const resetTabs = addressTabs.map((tab, i) =>
                i === index
                    ? {
                        prop_desc: '',
                        prop_amt: '',
                        residence_type: 'indian',
                        residence_no: '',
                        road_street: '',
                        pin_code: '',
                        zip_code: '',
                        mobile_number: '',
                        State: '',
                        country_code_mobile: '',
                        residence_name: '',
                        locality_or_area: '',
                        district: '',
                        email: '',
                        country_code: ''
                    }
                    : tab
            );
            setAddressTabs(resetTabs);
        }
    };

    const handleALInputChange = (index, field, value) => {
        const updatedTabs = [...addressTabs];
        updatedTabs[index][field] = value;
        setAddressTabs(updatedTabs);
    };
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

    const [llpTabs, setLlpTabs] = useState([createEmptyTab(0)]);


    function createEmptyTab(index) {
        return {
            index,
            name: '',
            pan: '',
            investment: '',
            address: {
                residenceType: 'indian',
                residenceNo: '',
                roadOrStreet: '',
                pinCode: '',
                mobileNumber: '',
                residenceName: '',
                localityOrArea: '',
                district: '',
                email: '',
                state: ''
            }
        };
    }

    const handleAddTab = () => {
        setLlpTabs([...llpTabs, createEmptyTab(llpTabs.length)]);
        setActiveTab(llpTabs.length);
    };

    const handleRemoveTab = (index) => {
        if (llpTabs.length > 1) {
            const updatedTabs = llpTabs.filter((tab) => tab.index !== index);
            setLlpTabs(updatedTabs);
            setActiveTab(updatedTabs.length - 1);
        } else {
            const resetTab = createEmptyTab(0);
            setLlpTabs([resetTab]);
        }
    };

    const handleLLPInputChange = (tabIndex, field, value) => {
        const updatedTabs = llpTabs.map((tab) => {
            if (tab.index === tabIndex) {
                if (field in tab.address) {
                    tab.address[field] = value;
                } else {
                    tab[field] = value;
                }
            }
            return tab;
        });
        setLlpTabs(updatedTabs);
    };

    useEffect(() => {
        setActiveTab(llpTabs.length - 1);
    }, [llpTabs]);

    const renderAddressTabButtons = () => {
        return addressTabs.map((_, index) => (
            <div
                key={index}
                className={`address-tab-btn tab-btn d-flex flex-row align-items-center ${activeTab === index ? 'active' : ''
                    }`}
                data-index={index}
                onClick={() => setActiveTab(index)}
            >
                <button className="salary-tab-button" type="button">
                    Address {index + 1}
                </button>
                <span
                    className="text-danger remove-property"
                    onClick={() => removeAddressTab(index)}
                >
                    <i className="fas fa-trash"></i>
                </span>
            </div>
        ));
    };

    const renderAddressTabs = () => {
        return addressTabs.map((tab, index) => (
            <div
                key={index}
                className={`address-tab-content ${activeTab === index ? '' : 'd-none'}`}
                data-tab={index}
            >
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="m-1">Description</label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            value={tab.prop_desc}
                            onChange={(e) => handleALInputChange(index, 'prop_desc', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="m-1">Amount</label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            value={tab.prop_amt}
                            onChange={(e) => handleALInputChange(index, 'prop_amt', e.target.value)}
                        />
                    </div>
                </div>
                {/* Other fields go here... */}
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
        ));
    };

    return (
        <div>
    <div className="col-12 mt-3">
        <div className="TDS-Taxes-form-active">
            <div className="pt-3">
                <strong>Schedule AL: Assets and Liabilities at the end of the Financial Year</strong>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card-body d-flex flex-row">

                    <div className="text-content col-md-6 mr-2">
                        <h3 className="mb-4">
                            <strong>Financial assets</strong>
                        </h3>
                        <div className="card col-md-12">
                            <div className="form-group">
                                <label className="m-1">Deposits in Bank</label>
                                <span>Total balance in any savings bank accounts, fixed deposits, current accounts, etc.</span>
                                <input type="text" className="form-control rounded-0" name="deposits_in_bank" value={form2data.deposits_in_bank} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label className="m-1">Shares and securities</label>
                                <span>Stocks, mutual funds, etc</span>
                                <input type="text" className="form-control rounded-0" name="shares_and_securities" value={form2data.shares_and_securities} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label className="m-1">Insurance Policies</label>
                                <span>Sum Assured from any insurance policies you hold.</span>
                                <input type="text" className="form-control rounded-0" name="insurance_policies" value={form2data.insurance_policies} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="m-1">Cash in hand</label>
                                <span>Enter the total amount of physical cash you have (Rupee notes, etc).</span>
                                <input type="text" className="form-control rounded-0" name="cash_in_hand" value={form2data.cash_in_hand} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="m-1">Loans and Advances Given</label>
                                <span>Fill this if you have given a loan to someone.</span>
                                <input type="text" className="form-control rounded-0" name="loans_and_advances_given" value={form2data.loans_and_advances_given} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="text-content col-md-6 mr-6">
                        <h3 className="mb-4">
                            <strong>Other Assets</strong>
                        </h3>
                        <div className="card col-md-12">
                            <div className="form-group">
                                <label className="m-1">Jewellery, bullion etc.</label>
                                <span>Includes any jewellery, precious metals (gold, silver) or precious stones (diamonds, etc) that you own.</span>
                                <input type="text" className="form-control rounded-0" name="jewellery_bullion" value={form2data.jewellery_bullion} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label className="m-1">Vehicles</label>
                                <span>Cars, motor vehicles, and even yachts, boats and aircrafts.</span>
                                <input type="text" className="form-control rounded-0" name="vehicles" value={form2data.vehicles} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label className="m-1">Artwork</label>
                                <span>Painting, sculptures or any work of art, including archaeological collections</span>
                                <input type="text" className="form-control rounded-0" name="artwork" value={form2data.artwork} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>



                <div className="card-body">
                    <h3 className="mb-4">
                        <strong>Property details</strong>
                    </h3>
                    <div className="property_adress_form">
                        <input type="hidden" name="property-tabs" value={JSON.stringify(addressTabs)} />
                        <div className="tab-wrapper property-adress-data">
                            <div className="tab-header">
                                <div className="adress_tabs d-flex">
                                    {renderAddressTabButtons()}
                                    <div className="address-underline"></div>
                                </div>
                                <button
                                    className="tab-btn-add tab-btn-add-adress-details"
                                    type="button"
                                    onClick={addAddressTab}
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="property_tabs_body mt-4">
                                {renderAddressTabs()}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-3">
                            <strong>Are you a partner or have made an investment in any Partnership Firm/LLP/AOP?</strong>
                        </div>

                        <div className="card-body">
                            <h3 className="mb-4">
                                <strong>Partnership Firm/LLP/AOP details</strong>
                            </h3>
                            <div className="llp_adress_form">
                                <input type="hidden" name="llp-tabs" value={llpTabs.map((tab) => tab.index).join(',')} />
                                <div className="tab-wrapper llp-adress-data">
                                    <div className="tab-header">
                                        <div className="llp_tabs d-flex">
                                            {llpTabs.map((tab) => (
                                                <div
                                                    key={tab.index}
                                                    className={`llp-tab-btn tab-btn d-flex flex-row align-items-center ${activeTab === tab.index ? 'active' : ''}`}
                                                    onClick={() => setActiveTab(tab.index)}
                                                >
                                                    <button className="salary-tab-button" type="button">
                                                        Firm/LLP/AOP {tab.index + 1}
                                                    </button>
                                                    <span className="text-danger remove-llp" onClick={() => handleRemoveTab(tab.index)}>
                                                        <i className="fas fa-trash"></i>
                                                    </span>
                                                </div>
                                            ))}
                                            <div className="llp-underline" style={{ width: '100%' }}></div>
                                        </div>
                                        <button className="tab-btn-add tab-btn-add-llp-details" type="button" onClick={handleAddTab}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="llp_tabs_body mt-4">
                                        {llpTabs.map((tab) => (
                                            <div
                                                key={tab.index}
                                                className={`llp-tab-content ${activeTab === tab.index ? '' : 'd-none'}`}
                                            >
                                                <div className="d-flex justify-content-between col-md-12">
                                                    <div className="form-group col-md-4">
                                                        <label className="m-1">Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control rounded-0"
                                                            value={tab.name}
                                                            onChange={(e) => handleLLPInputChange(tab.index, 'name', e.target.value)}
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label className="m-1">PAN of firm</label>
                                                        <input
                                                            type="text"
                                                            className="form-control rounded-0"
                                                            value={tab.pan}
                                                            onChange={(e) => handleLLPInputChange(tab.index, 'pan', e.target.value)}
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label className="m-1">Investment</label>
                                                        <input
                                                            type="text"
                                                            className="form-control rounded-0"
                                                            value={tab.investment}
                                                            onChange={(e) => handleLLPInputChange(tab.index, 'investment', e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div>
                                                            <strong>Address</strong>
                                                        </div>
                                                    </div>

                                                    <div className="row text-content">
                                                        <div className="col-md-6">
                                                            <div className="form-group w-100">
                                                                <label className="m-1">Residence Type</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control rounded-0 residence_type"
                                                                    value={tab.address.residenceType}
                                                                    readOnly
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="m-1">Residence No <span className="text-danger">*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.residenceNo}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'residenceNo', e.target.value)}
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="m-1">Road or Street <small>(optional)</small></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.roadOrStreet}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'roadOrStreet', e.target.value)}
                                                                />
                                                            </div>

                                                            <div className="form-group pin_code_div">
                                                                <label className="m-1">Pincode <span className="text-danger">*</span></label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.pinCode}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'pinCode', e.target.value)}
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="m-1">Mobile Number <span className="text-danger">*</span></label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.mobileNumber}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'mobileNumber', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="m-1">Residence Name <small>(optional)</small></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.residenceName}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'residenceName', e.target.value)}
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="m-1">Locality or Area <span className="text-danger">*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.localityOrArea}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'localityOrArea', e.target.value)}
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="m-1">City / Town / District <span className="text-danger">*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.district}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'district', e.target.value)}
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="m-1">Email Address <span className="text-danger">*</span></label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.email}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'email', e.target.value)}
                                                                />
                                                            </div>

                                                            <div className="form-group state_code_div">
                                                                <label className="m-1">State <span className="text-danger">*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control rounded-0"
                                                                    value={tab.address.state}
                                                                    onChange={(e) => handleLLPInputChange(tab.index, 'state', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default PropertyDetails;
