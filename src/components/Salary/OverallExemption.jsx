import React, { useState } from 'react';

const OverallExemptionDeduction = ({ previousClientSalaryDetails }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const [availableOptions, setAvailableOptions] = useState([
        { value: '10(5)', label: 'Sec 10(5) - Leave Travel concession/assistance' },
        { value: '10(6)', label: 'Sec 10(6) - Remuneration received as an official' },
        { value: '10(7)', label: 'Sec 10(7) - Allowances or perquisites paid outside India' },
        { value: '10(10)', label: 'Sec 10(10) - Death-cum-retirement gratuity received' },
        { value: '10(10A)', label: 'Sec 10(10A) - Commuted value of pension received' },
        { value: '10(10AA)', label: 'Sec 10(10AA) - Earned leave encashment on Retirement' },
        { value: '10(10B)(i)', label: 'Sec 10(10B)(i) - First proviso - Compensation limit' },
        { value: '10(10B)(ii)', label: 'Sec 10(10B)(ii) - Second proviso - Compensation approved' },
        { value: '10(10C)', label: 'Sec 10(10C) - Voluntary retirement/termination service' },
        { value: '10(10CC)', label: 'Sec 10(10CC) - Tax paid by employer on non-monetary perquisite' },
        { value: '10(13A)', label: 'Sec 10(13A) - Allowance for house rent' },
        { value: '10(14)(i)', label: 'Sec 10(14)(i) - Prescribed Allowances or benefits' },
        { value: '10(14)(ii)', label: 'Sec 10(14)(ii) - Allowances for personal expenses' },
        { value: '10(14)(i)(115BAC)', label: 'Sec 10(14)(i)(115BAC) - Allowances as per Rule 2BB' },
        { value: '10(14)(ii)(115BAC)', label: 'Sec 10(14)(ii)(115BAC) - Transport allowance' },
        { value: 'EIC', label: 'Exempt income for judges' },
        { value: 'OTH', label: 'Any Other' },
    ]);

    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = availableOptions.find(option => option.value === selectedValue);

        if (selectedOption) {
            setSelectedOptions([...selectedOptions, selectedOption]);
            setInputValues({ ...inputValues, [selectedValue]: '' });
            setAvailableOptions(availableOptions.filter(option => option.value !== selectedValue));
        }
    };

    const handleInputChange = (value, key) => {
        setInputValues({ ...inputValues, [key]: value });
    };

    const handleDeleteOption = (value) => {
        const removedOption = selectedOptions.find(option => option.value === value);
        setSelectedOptions(selectedOptions.filter(option => option.value !== value));
        setInputValues(({ [value]: _, ...rest }) => rest); // Remove from inputValues
        if (removedOption) {
            setAvailableOptions([...availableOptions, removedOption].sort((a, b) => a.label.localeCompare(b.label)));
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const dummyData = {
        AllwncExemptUs10: {
            TotalAllwncExemptUs10: 50000,
        },
        DeductionUs16: 20000,
        DeductionUs16ia: 50000,
        EntertainmntalwncUs16ii: 3000,
        ProfessionalTaxUs16iii: 2500,
    };

    const data = previousClientSalaryDetails || dummyData;

    return (
        <div className="card card-body">
            <div className="pt-3 pb-3 p-tab-c1">
                <span>Over All Exemption Deduction</span>
            </div>

            <div className="row">
                <div className="accordion col-md-9">
                    <div className="accordion-item form mw-100">
                        <div className="accordion-item-header">
                            <span>Exempt allowances under u/s 10</span>
                            <div className="col-md-4 d-flex pr-0">
                                <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                                    {data?.AllwncExemptUs10?.TotalAllwncExemptUs10
                                        ? formatCurrency(data.AllwncExemptUs10.TotalAllwncExemptUs10)
                                        : '-'}
                                </p>
                                <input
                                    type="text"
                                    className="form-control col-md-9 rounded-0 total_exempt col-md-4 inr_field"
                                    name="tabs[0][total_allowance]"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="accordion-item-description-wrapper pr-2">
                            <div className="accordion-item-description">
                                <div className="form_grid_acor">
                                    {/* Render Selected Options (with Inputs and Cross Button) Above Dropdown */}
                                    {selectedOptions.map((option) => (
                                        <div key={option.value} className="form-group row ml-3 justify-content-between add_exempt_div">
                                            <span className="col-md-5 text-content">{option.label}</span>
                                            <div className="col-md-4 d-flex justify-content-end pr-0">
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 col-md-9"
                                                    value={inputValues[option.value]}
                                                    onChange={(e) => handleInputChange(e.target.value, option.value)}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm ml-2"
                                                    onClick={() => handleDeleteOption(option.value)}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Dropdown for Selecting Additional Details */}
                                    <div className="form-group row ml-3 justify-content-between add_exempt_div">
                                        <select
                                            className="form-control col-md-5 other_select text-content"
                                            id="OtherExemptList"
                                            onChange={handleOptionSelect}
                                        >
                                            <option value="">Select Additional Details</option>
                                            {availableOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add other sections like Deductions under u/s 16 as needed */}
                    <div className="accordion-item form mw-100">
                        <div className="accordion-item-header">
                            <span>Deductions under u/s 16</span>
                            <div className="col-md-4 d-flex pr-0">
                                <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                                    {data?.DeductionUs16
                                        ? formatCurrency(data.DeductionUs16)
                                        : '-'}
                                </p>
                                <input
                                    type="text"
                                    className="form-control col-md-9 rounded-0 total_deduction col-md-4 inr_field"
                                    name="tabs[0][total_deduction]"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="accordion-item-description-wrapper pr-2">
                            <div className="accordion-item-description">
                                <div className="form_grid_acor">
                                    <div className="form-group row ml-3 justify-content-between">
                                        <span className="col-md-6 text-content">Standard deduction under section 16(ia)</span>
                                        <div className="col-md-4 d-flex justify-content-end">
                                            <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                                                {data?.DeductionUs16ia
                                                    ? formatCurrency(data.DeductionUs16ia)
                                                    : '-'}
                                            </p>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 col-md-9 deduction_amount inr_field deduction16ia"
                                                name="tabs[0][DeductionUs16ia]"
                                            />
                                            <span className="tooltips">
                                                <i className="fas fa-info-circle"></i>
                                                <span className="tooltips-content">
                                                    <b>Amount:</b> Up to ₹50,000 of Gross Salary.
                                                    <br />
                                                    <b>Applicability:</b> Allowed in both New and Old Tax Regimes.
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group row ml-3 justify-content-between">
                                        <span className="col-md-6 text-content">Entertainment tax under section 16(ii)</span>
                                        <div className="col-md-4 d-flex justify-content-end">
                                            <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                                                {data?.EntertainmntalwncUs16ii
                                                    ? formatCurrency(data.EntertainmntalwncUs16ii)
                                                    : '-'}
                                            </p>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 col-md-9 deduction_amount inr_field"
                                                name="tabs[0][EntertainmntalwncUs16ii]"
                                            />
                                            <span className="tooltips">
                                                <i className="fas fa-info-circle"></i>
                                                <span className="tooltips-content">
                                                    <strong>Applicable to:</strong> Only for Government Employees.
                                                    <br />
                                                    <b>Amount:</b> Least of the following three:
                                                    <ul>
                                                        <li>20% of Basic Salary</li>
                                                        <li>₹5,000</li>
                                                        <li>The actual allowance received by the employee.</li>
                                                    </ul>
                                                    <b>Applicability:</b> Allowed only under the Old Tax Regime.
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group row ml-3 justify-content-between">
                                        <span className="col-md-6 text-content">Professional tax under section 16(iii)</span>
                                        <div className="col-md-4 d-flex justify-content-end">
                                            <p className="text-red col-md-3 m-0" style={{ fontSize: '12px' }}>
                                                {data?.ProfessionalTaxUs16iii
                                                    ? formatCurrency(data.ProfessionalTaxUs16iii)
                                                    : '-'}
                                            </p>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 col-md-9 deduction_amount inr_field"
                                                name="tabs[0][ProfessionalTaxUs16iii]"
                                            />
                                            <span className="tooltips">
                                                <i className="fas fa-info-circle"></i>
                                                <span className="tooltips-content">
                                                    <b>Amount:</b> As per the actual professional tax paid.
                                                    <br />
                                                    <b>Applicability:</b> Allowed only under the Old Tax Regime.
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverallExemptionDeduction;


