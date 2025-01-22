import React, { useState, useEffect } from 'react';
import BusinessTabs from './BusinessTabs';
import BuisinessBase from './business_base';
import Income44ADA from './Income44ADA';
import Income44AE from './Income44AE';
import AddClientModal from './AddclientModal';
import Income44ADAModal from './Income44ADAModal';
import Income44AEModal from './Income44AEModal';

// Add business options array
const BUSINESS_OPTIONS = [
    { value: 'RETAIL', label: 'Retail Trading' },
    { value: 'WHOLESALE', label: 'Wholesale Business' },
    { value: 'SERVICES', label: 'Service Provider' },
];

const Income44AD = () => {
    const [isAnyIncomeFilled, setIsAnyIncomeFilled] = useState(false);
    const [formData, setFormData] = useState({
        nature_of_business: [
            {
                CodeAD_label: '',
                CodeAD: '',
                NameOfBusinessAD: '',
                DescriptionAD: ''
            }
        ],
        GrsTotalTrnOverInCash: '',
        GrsTrnOverAnyOthMode: '',
        GrsTrnOverBank: '',
        GrsPrftInCash: '',
        GrsPrftOverAnyOthMode: '',
        GrsPrftOverBank: '',
        TotalProfit44AD: ''
    });

    // State for auto-calculation controls
    const [isTyped44adProfitCash, setIsTyped44adProfitCash] = useState(false);
    const [isTyped44adProfitOther, setIsTyped44adProfitOther] = useState(false);
    const [isTyped44adProfitBank, setIsTyped44adProfitBank] = useState(false);

    // Add state for search
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    // Format currency in Indian format
    const formatCurrency = (value) => {
        if (!value) return '';
        value = value.toString().replace(/,/g, '');
        const number = parseInt(value, 10);
        if (isNaN(number)) return '';
        return number.toLocaleString('en-IN');
    };

    // Calculate totals
    const calculateTotals = () => {
        const cashRevenue = parseInt(formData.GrsTotalTrnOverInCash?.replace(/,/g, '') || 0);
        const otherRevenue = parseInt(formData.GrsTrnOverAnyOthMode?.replace(/,/g, '') || 0);
        const bankRevenue = parseInt(formData.GrsTrnOverBank?.replace(/,/g, '') || 0);

        const grossRevenue = cashRevenue + otherRevenue + bankRevenue;
        const totalProfit =
            parseInt(formData.GrsPrftInCash?.replace(/,/g, '') || 0) +
            parseInt(formData.GrsPrftOverAnyOthMode?.replace(/,/g, '') || 0) +
            parseInt(formData.GrsPrftOverBank?.replace(/,/g, '') || 0);

        return {
            grossRevenue: formatCurrency(grossRevenue),
            totalProfit: formatCurrency(totalProfit)
        };
    };

    // Handle revenue changes with auto-calculation
    const handleRevenueChange = (field, value) => {
        const updatedValue = formatCurrency(value);
        setFormData(prev => ({ ...prev, [field]: updatedValue }));

        // Auto calculate profits
        if (field === 'GrsTotalTrnOverInCash' && !isTyped44adProfitCash) {
            const profit = Math.round(parseInt(value.replace(/,/g, '') || 0) * 0.08);
            setFormData(prev => ({
                ...prev,
                GrsPrftInCash: formatCurrency(profit)
            }));
        }
        // Similar logic for other modes and bank
        // ... (similar handlers for other revenue types)
    };

    // Calculate profits for cash transactions (8%)
    const calculateCashProfit = (value) => {
        if (!isTyped44adProfitCash) {
            const profit = Math.round(parseInt(value.replace(/,/g, '') || 0) * 0.08);
            setFormData(prev => ({
                ...prev,
                GrsPrftInCash: formatCurrency(profit)
            }));
        }
    };

    // Calculate profits for other mode transactions (8%)
    const calculateOtherProfit = (value) => {
        if (!isTyped44adProfitOther) {
            const profit = Math.round(parseInt(value.replace(/,/g, '') || 0) * 0.08);
            setFormData(prev => ({
                ...prev,
                GrsPrftOverAnyOthMode: formatCurrency(profit)
            }));
        }
    };

    // Calculate profits for bank transactions (6%)
    const calculateBankProfit = (value) => {
        if (!isTyped44adProfitBank) {
            const profit = Math.round(parseInt(value.replace(/,/g, '') || 0) * 0.06);
            setFormData(prev => ({
                ...prev,
                GrsPrftOverBank: formatCurrency(profit)
            }));
        }
    };

    // Validate minimum profit percentage
    const validateProfitPercentage = (revenue, profit, minPercentage) => {
        const revenueValue = parseInt(revenue.replace(/,/g, '') || 0);
        const profitValue = parseInt(profit.replace(/,/g, '') || 0);
        const minProfit = revenueValue * (minPercentage / 100);
        return profitValue >= minProfit;
    };

    // Handle business form
    const handleBusinessChange = (index, field, value, label = '') => {
        const updatedBusinesses = [...formData.nature_of_business];
        if (field === 'CodeAD') {
            updatedBusinesses[index] = {
                ...updatedBusinesses[index],
                CodeAD: value,
                CodeAD_label: label || value
            };
        } else {
            updatedBusinesses[index] = {
                ...updatedBusinesses[index],
                [field]: value
            };
        }
        setFormData(prev => ({
            ...prev,
            nature_of_business: updatedBusinesses
        }));
        setSearchTerm('');
        setShowDropdown(false);
    };

    const handleAddBusiness = () => {
        setFormData(prev => ({
            ...prev,
            nature_of_business: [
                ...prev.nature_of_business,
                {
                    CodeAD_label: '',
                    CodeAD: '',
                    NameOfBusinessAD: '',
                    DescriptionAD: ''
                }
            ]
        }));
    };

    const handleRemoveBusiness = (index) => {
        if (formData.nature_of_business.length === 1) {
            setFormData(prev => ({
                ...prev,
                nature_of_business: [{
                    CodeAD_label: '',
                    CodeAD: '',
                    NameOfBusinessAD: '',
                    DescriptionAD: ''
                }]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                nature_of_business: prev.nature_of_business.filter((_, i) => i !== index)
            }));
        }
    };

    // Add new state for active tab
    const [activeTab, setActiveTab] = useState('44AD');
    const [show44ADModal, setShow44ADModal] = useState(false);
    const [show44ADAModal, setShow44ADAModal] = useState(false);
    const [show44AEModal, setShow44AEModal] = useState(false);

    // Tab content components
    const render44ADContent = () => (
        <div>
            {/* Business Nature Details Card */}
            <div className="card card-primary">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>Nature of Business Details</strong>
                        <button className="btn btn-outline-light mr-2 rounded-0" type="button">
                            Copy From Previous Year
                        </button>
                    </div>
                </div>

                <div className="card-body">
                    {formData.nature_of_business.map((business, index) => (
                        <div key={index} className="row business_list">
                            <div className="form-group col-md-3">
                                <label className="m-1 text-content">
                                    Nature of Business <span className="text-danger">*</span>
                                </label>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control rounded-0"
                                        value={searchTerm || business.CodeAD_label}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setShowDropdown(true);
                                        }}
                                        onFocus={() => setShowDropdown(true)}
                                        placeholder="Search business type..."
                                    />
                                    {showDropdown && (
                                        <div className="dropdown-menu show w-100" style={{ position: 'absolute', zIndex: 1000 }}>
                                            {BUSINESS_OPTIONS.filter(option =>
                                                option.label.toLowerCase().includes(searchTerm.toLowerCase())
                                            ).map(option => (
                                                <button
                                                    key={option.value}
                                                    className="dropdown-item"
                                                    onClick={() => handleBusinessChange(index, 'CodeAD', option.value, option.label)}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                            {BUSINESS_OPTIONS.filter(option =>
                                                option.label.toLowerCase().includes(searchTerm.toLowerCase())
                                            ).length === 0 && (
                                                <div className="dropdown-item text-muted">No matches found</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-group col-md-3">
                                <label className="m-1 text-content">
                                    Trade Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control rounded-0"
                                    value={business.NameOfBusinessAD}
                                    onChange={(e) => handleBusinessChange(index, 'NameOfBusinessAD', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label className="m-1 text-content">Description</label>
                                <input
                                    type="text"
                                    className="form-control rounded-0"
                                    value={business.DescriptionAD}
                                    onChange={(e) => handleBusinessChange(index, 'DescriptionAD', e.target.value)}
                                />
                            </div>

                            <div className="col-md-3">
                                <button
                                    className="btn btn-danger remove_business btn-sm mt-4"
                                    type="button"
                                    onClick={() => handleRemoveBusiness(index)}
                                >
                                    <i className="fas fa-trash" />
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        className="btn btn-info add_more_business rounded-0"
                        type="button"
                        onClick={handleAddBusiness}
                    >
                        Add More
                    </button>
                </div>
            </div>

            {/* Revenue Details Card */}
            <div className="card card-primary">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <strong>Total Revenue/Turnover</strong>
                        <strong>
                            Gross Revenue : Rs. <span className="gross_revenue">{calculateTotals().grossRevenue}</span>
                        </strong>
                    </div>
                </div>

                <div className="card-body">
                    <small className="help-block text-danger" id="44ad_error_message"></small>
                    <div className="row">
                        {/* Revenue Inputs */}
                        <div className="form-group col-md-3">
                            <label className="m-1 w-100 text-content">
                                Revenue via Cash
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0 revenue_input"
                                value={formData.GrsTotalTrnOverInCash}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    handleRevenueChange('GrsTotalTrnOverInCash', value);
                                    calculateCashProfit(value);
                                }}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="m-1 w-100 text-content">
                                Revenue via any other mode
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0 revenue_input"
                                value={formData.GrsTrnOverAnyOthMode}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    handleRevenueChange('GrsTrnOverAnyOthMode', value);
                                    calculateOtherProfit(value);
                                }}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="m-1 w-100 text-content">
                                Revenue via banking modes
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0 revenue_input"
                                value={formData.GrsTrnOverBank}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    handleRevenueChange('GrsTrnOverBank', value);
                                    calculateBankProfit(value);
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        {/* Profit Inputs */}
                        <div className="form-group col-md-3">
                            <label className="m-1 w-100 text-content">
                                Profit via Cash
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0 profit_input"
                                value={formData.GrsPrftInCash}
                                onChange={(e) => {
                                    setIsTyped44adProfitCash(true);
                                    const value = e.target.value;
                                    handleRevenueChange('GrsPrftInCash', value);
                                    if (!validateProfitPercentage(formData.GrsTotalTrnOverInCash, value, 8)) {
                                        document.getElementById('submitbtn').disabled = true;
                                        document.getElementById('44ad_error_message').textContent =
                                            'Profit via cash cannot be less than 8% of revenue via cash';
                                    } else {
                                        document.getElementById('submitbtn').disabled = false;
                                        document.getElementById('44ad_error_message').textContent = '';
                                    }
                                }}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="m-1 w-100 text-content">
                                Profit via any other mode
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0 profit_input"
                                value={formData.GrsPrftOverAnyOthMode}
                                onChange={(e) => {
                                    setIsTyped44adProfitOther(true);
                                    const value = e.target.value;
                                    handleRevenueChange('GrsPrftOverAnyOthMode', value);
                                    if (!validateProfitPercentage(formData.GrsTrnOverAnyOthMode, value, 8)) {
                                        document.getElementById('submitbtn').disabled = true;
                                        document.getElementById('44ad_error_message').textContent =
                                            'Profit via other mode cannot be less than 8% of revenue via other mode';
                                    } else {
                                        document.getElementById('submitbtn').disabled = false;
                                        document.getElementById('44ad_error_message').textContent = '';
                                    }
                                }}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="m-1 w-100 text-content">
                                Profit via banking modes
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0 profit_input"
                                value={formData.GrsPrftOverBank}
                                onChange={(e) => {
                                    setIsTyped44adProfitBank(true);
                                    const value = e.target.value;
                                    handleRevenueChange('GrsPrftOverBank', value);
                                    if (!validateProfitPercentage(formData.GrsTrnOverBank, value, 6)) {
                                        document.getElementById('submitbtn').disabled = true;
                                        document.getElementById('44ad_error_message').textContent =
                                            'Profit via bank cannot be less than 6% of revenue via bank';
                                    } else {
                                        document.getElementById('submitbtn').disabled = false;
                                        document.getElementById('44ad_error_message').textContent = '';
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <strong>
                            Total profit : <span id="total_profit_44ad">{calculateTotals().totalProfit}</span>
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );

    const render44ADAContent = () => (
        <div>
            
           <Income44ADA />
        </div>
    );

    const render44AEContent = () => (
        <div>
           
           <Income44AE/>
        </div>
    );

    // Render active tab content
    const renderActiveTabContent = () => {
        switch (activeTab) {
            case '44AD':
                return render44ADContent();
            case '44ADA':
                return render44ADAContent();
            case '44AE':
                return render44AEContent();
            default:
                return render44ADContent();
        }
    };
  const [showModal, setShowModal] = useState(false);
    return (
        <div className="col-12">
            <div className="card card-primary card-outline card-tabs">
                {/* Tabs Header */}
                <div className="card-header p-0 pt-1 border-bottom-0">
                    <ul className="nav nav-tabs">
                        {[
                            { id: '44AD', label: 'Income Under 44AD', setModal: setShow44ADModal },
                            { id: '44ADA', label: 'Income Under 44ADA', setModal: setShow44ADAModal },
                            { id: '44AE', label: 'Income Under 44AE', setModal: setShow44AEModal }
                        ].map(tab => (
                            <li key={tab.id} className="nav-item d-flex flex-row">
                                <a
                                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {tab.label}
                                    <button 
                                        type="button" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            tab.setModal(true);
                                        }}
                                        className="align-self-center tooltips income-info-button ml-2"
                                    >
                                        <i className="fas fa-info-circle" />
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
             
                {/* Form Content */}
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="card-body">
                        {renderActiveTabContent()}
                    </div>
                    <div className="card-footer">
                        <div className="col-md-12 d-flex justify-content-end">
                            <input
                                type="submit"
                                id="submitbtn"
                                style={{ width: "fit-content" }}
                                className="btn btn-block rounded-0 btn-primary"
                                value="Submit"
                            />
                            
                        </div>

                    </div>
                    <BuisinessBase />
                   
                </form>

            </div >
            <AddClientModal
        showModal={show44ADModal}
        onClose={() => setShow44ADModal(false)}
      />
      <Income44ADAModal
        showModal={show44ADAModal}
        onClose={() => setShow44ADAModal(false)}
      />
      <Income44AEModal
        showModal={show44AEModal}
        onClose={() => setShow44AEModal(false)}
      />
        </div >
    );
};

export default Income44AD;
