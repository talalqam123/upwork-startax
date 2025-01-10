import React, { useState } from 'react';
import BusinessTabs from './BusinessTabs';

const Income44ADA = () => {
    const [formData, setFormData] = useState({
        nature_of_business: [
            {
                CodeADA_label: '',
                CodeADA: '',
                NameOfBusinessADA: '',
                DescriptionADA: ''
            }
        ],
        GrsTotalTrnOverInCash44ADA: '',
        GrsTrnOverAnyOthMode44ADA: '',
        GrsTrnOverBank44ADA: '',
        TotPersumptiveInc44ADA: ''
    });

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
        const cashRevenue = parseInt(formData.GrsTotalTrnOverInCash44ADA?.replace(/,/g, '') || 0);
        const otherRevenue = parseInt(formData.GrsTrnOverAnyOthMode44ADA?.replace(/,/g, '') || 0);
        const bankRevenue = parseInt(formData.GrsTrnOverBank44ADA?.replace(/,/g, '') || 0);

        const grossRevenue = cashRevenue + otherRevenue + bankRevenue;
        const defaultIncome = Math.round(grossRevenue * 0.5); // 50% by default

        return {
            grossRevenue: formatCurrency(grossRevenue),
            defaultIncome: formatCurrency(defaultIncome)
        };
    };

    // Handle revenue changes
    const handleRevenueChange = (field, value) => {
        const updatedValue = formatCurrency(value);
        setFormData(prev => ({ ...prev, [field]: updatedValue }));

        // Auto calculate total presumptive income (50% of gross revenue)
        const totals = calculateTotals();
        setFormData(prev => ({
            ...prev,
            TotPersumptiveInc44ADA: totals.defaultIncome
        }));
    };

    // Handle business form
    const handleBusinessChange = (index, field, value) => {
        const updatedBusinesses = [...formData.nature_of_business];
        updatedBusinesses[index][field] = value;
        setFormData(prev => ({
            ...prev,
            nature_of_business: updatedBusinesses
        }));
    };

    const handleAddBusiness = () => {
        setFormData(prev => ({
            ...prev,
            nature_of_business: [
                ...prev.nature_of_business,
                {
                    CodeADA_label: '',
                    CodeADA: '',
                    NameOfBusinessADA: '',
                    DescriptionADA: ''
                }
            ]
        }));
    };

    const handleRemoveBusiness = (index) => {
        if (formData.nature_of_business.length === 1) {
            setFormData(prev => ({
                ...prev,
                nature_of_business: [{
                    CodeADA_label: '',
                    CodeADA: '',
                    NameOfBusinessADA: '',
                    DescriptionADA: ''
                }]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                nature_of_business: prev.nature_of_business.filter((_, i) => i !== index)
            }));
        }
    };

    // Validate total income (must be at least 50% of gross revenue)
    const validateTotalIncome = (value) => {
        const totals = calculateTotals();
        const minIncome = parseInt(totals.defaultIncome.replace(/,/g, ''));
        const inputIncome = parseInt(value.replace(/,/g, ''));

        if (inputIncome < minIncome) {
            document.getElementById('incomeaddasubmit').disabled = true;
            document.getElementById('44ada_error_message').textContent =
                'Total income cannot be less than 50% of gross revenue';
        } else {
            document.getElementById('incomeaddasubmit').disabled = false;
            document.getElementById('44ada_error_message').textContent = '';
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Validate the entire form
        const totals = calculateTotals();
        const minIncome = parseInt(totals.defaultIncome.replace(/,/g, ''));
        const inputIncome = parseInt(formData.TotPersumptiveInc44ADA?.replace(/,/g, '') || 0);

        if (inputIncome < minIncome) {
            document.getElementById('44ada_error_message').textContent =
                'Total income cannot be less than 50% of gross revenue';
            return;
        }

        // Submit form data
        console.log('Form submitted:', formData);
        // Add your API call or submission logic here
    };

    return (

        <>

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
                                <select
                                    className="form-control business_name"
                                    value={business.CodeADA}
                                    onChange={(e) => handleBusinessChange(index, 'CodeADA', e.target.value)}
                                    required
                                >
                                    <option value="">Select Business</option>
                                    {/* Add business options here */}
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <label className="m-1 text-content">
                                    Trade Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control rounded-0"
                                    value={business.NameOfBusinessADA}
                                    onChange={(e) => handleBusinessChange(index, 'NameOfBusinessADA', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group col-md-3">
                                <label className="m-1 text-content">Description</label>
                                <input
                                    type="text"
                                    className="form-control rounded-0"
                                    value={business.DescriptionADA}
                                    onChange={(e) => handleBusinessChange(index, 'DescriptionADA', e.target.value)}
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
                            Gross Revenue : Rs. <span className="gross_revenue_44ada">
                                {calculateTotals().grossRevenue}
                            </span>
                        </strong>
                    </div>
                </div>

                <div className="card-body">
                    <small className="help-block text-danger" id="44ada_error_message"></small>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label className="w-100 m-1 text-content">
                                Revenue via Cash
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                id="revenuecash"
                                className="form-control rounded-0 revenue_input_44ada"
                                value={formData.GrsTotalTrnOverInCash44ADA}
                                onChange={(e) => handleRevenueChange('GrsTotalTrnOverInCash44ADA', e.target.value)}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="w-100 m-1 text-content">
                                Revenue via any other mode
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                id="revenueothher"
                                className="form-control rounded-0 revenue_input_44ada"
                                value={formData.GrsTrnOverAnyOthMode44ADA}
                                onChange={(e) => handleRevenueChange('GrsTrnOverAnyOthMode44ADA', e.target.value)}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="w-100 m-1 text-content">
                                Revenue via banking modes
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                id="revbandnokeadda"
                                className="form-control rounded-0 revenue_input_44ada"
                                value={formData.GrsTrnOverBank44ADA}
                                onChange={(e) => handleRevenueChange('GrsTrnOverBank44ADA', e.target.value)}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label className="w-100 m-1 text-content">
                                Total Income
                                <span className="text-red float-right">-</span>
                            </label>
                            <input
                                type="text"
                                id="totalincomeadda"
                                className="form-control rounded-0 total_income_44ada"
                                value={formData.TotPersumptiveInc44ADA}
                                onChange={(e) => {
                                    const value = formatCurrency(e.target.value);
                                    setFormData(prev => ({
                                        ...prev,
                                        TotPersumptiveInc44ADA: value
                                    }));
                                    validateTotalIncome(value);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>



        </>

    );
};

export default Income44ADA;
