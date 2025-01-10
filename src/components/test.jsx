import React, { useState } from "react";

const BankDetails = () => {
    const [bankDetails, setBankDetails] = useState([
        { ifscCode: "", bankName: "", accountNo: "", accountType: "SB", refund: false },
    ]);

    const bankData = {
        ABPB: "ADITYA BIRLA PAYMENTS BANK",
        AIRP: "AIRTEL PAYMENTS BANK LIMITED",
        ALLA: "ALLAHABAD BANK",
        // Add the remaining bank codes and names here
    };

    const handleAddRow = () => {
        setBankDetails((prevDetails) => [
            ...prevDetails,
            { ifscCode: "", bankName: "", accountNo: "", accountType: "SB", refund: false },
        ]);
    };

    const handleInputChange = (index, field, value) => {
        setBankDetails((prevDetails) => {
            const updatedDetails = [...prevDetails];
            updatedDetails[index][field] = value;

            // Automatically update the bank name if IFSC code changes
            if (field === "ifscCode") {
                const bankCode = value.slice(0, 4).toUpperCase();
                updatedDetails[index].bankName = bankData[bankCode] || "";
            }

            return updatedDetails;
        });
    };

    const handleDeleteRow = (index) => {
        if (bankDetails.length > 1) {
            setBankDetails((prevDetails) => prevDetails.filter((_, i) => i !== index));
        } else {
            setBankDetails([{ ifscCode: "", bankName: "", accountNo: "", accountType: "SB", refund: false }]);
        }
    };

    const handleRefundChange = (index) => {
        setBankDetails((prevDetails) =>
            prevDetails.map((detail, i) => ({
                ...detail,
                refund: i === index, // Only set refund to true for the selected row
            }))
        );
    };

    const validateFields = (fields) => {
        const validators = {
            ifscCode: {
                notEmpty: {
                    message: "IFSC Code is required and cannot be empty",
                },
                regexp: {
                    regexp: /^[A-Z]{4}[0][A-Z0-9]{6}$/,
                    message: "The IFSC Code must be 11 characters long with the format: XXXX0YYYYYY",
                },
            },
            bankName: {
                notEmpty: {
                    message: "Bank Name is required and cannot be empty",
                },
                stringLength: {
                    max: 125,
                    message: "Bank Name must be less than 125 characters long",
                },
            },
            accountNo: {
                notEmpty: {
                    message: "Bank Account No is required and cannot be empty",
                },
                regexp: {
                    regexp: /^[a-zA-Z0-9]{1,20}$/,
                    message: "Bank Account No must be up to 20 characters long and can include letters and numbers",
                },
            },
            accountType: {
                notEmpty: {
                    message: "Account Type is required and cannot be empty",
                },
                regexp: {
                    regexp: /^(SB|CA|CC|OD|NRO|OTH)$/,
                    message: "Bank Account Type must be one of SB, CA, CC, OD, NRO, OTH",
                },
            },
        };

        const errors = {};
        for (const [field, value] of Object.entries(fields)) {
            const rules = validators[field];
            if (rules) {
                if (rules.notEmpty && !value) {
                    errors[field] = rules.notEmpty.message;
                } else if (rules.regexp && !rules.regexp.regexp.test(value)) {
                    errors[field] = rules.regexp.message;
                } else if (
                    rules.stringLength &&
                    value.length > rules.stringLength.max
                ) {
                    errors[field] = rules.stringLength.message;
                }
            }
        }
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', banks);
    };
    return (
        <form id="createbankform" onSubmit={handleSubmit}>
            <div className="card card-primary">
                <div className="card-header">
                    <div className="card-title">
                        <strong>Aadhaar Details</strong>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row text-content">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="m-1">Aadhaar No</label>
                                <input
                                    type="number"
                                    name="Aadhaar_card_number"
                                    className="form-control rounded-0 text-uppercase"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="m-1">Aadhaar Enrollment No</label>
                                <input
                                    type="number"
                                    name="Aadhaar_enrollment_number"
                                    className="form-control rounded-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-success mt-3">
                <div className="card-header">
                    <div className="card-title">
                        <strong>Bank Detail Type</strong>
                    </div>
                </div>
                <div className="card-body text-content" id="bank-detail-type-id">
                    {bankDetails.map((bank, index) => (
                        <div className="row bank-card" key={index}>
                            <div className="form-group col-md-2">
                                <label className="m-1">IFSC Code</label>
                                <input
                                    type="text"
                                    name={`bank_isfc_code_${index}`}
                                    className="ifsc_code form-control rounded-0 text-uppercase"
                                    value={bank.ifscCode}
                                    onChange={(e) => handleInputChange(index, "ifscCode", e.target.value)}
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="m-1">Bank Name</label>
                                <input
                                    type="text"
                                    name={`bank_name_${index}`}
                                    className="bankNameClass form-control rounded-0"
                                    value={bank.bankName}
                                    readOnly
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="m-1">Bank Account No</label>
                                <input
                                    type="text"
                                    name={`bank_acount_no_${index}`}
                                    className="form-control rounded-0"
                                    value={bank.accountNo}
                                    onChange={(e) => handleInputChange(index, "accountNo", e.target.value)}
                                />
                            </div>
                            <div className="form-group col-md-2">
                                <label className="m-1">Account Type</label>
                                <select
                                    name={`bank_acount_type_${index}`}
                                    className="form-control rounded-0"
                                    value={bank.accountType}
                                    onChange={(e) => handleInputChange(index, "accountType", e.target.value)}
                                >
                                    <option value="SB">Savings Account</option>
                                    <option value="CA">Current Account</option>
                                    <option value="CC">Cash Credit Account</option>
                                    <option value="OD">Over Draft Account</option>
                                    <option value="NRO">Non Resident Account</option>
                                    <option value="OTH">Other</option>
                                </select>
                            </div>
                            <div className="form-group text-center col-md-1">
                                <label className="m-1">Refund</label>
                                <div className="custom-control mt-1 custom-checkbox">
                                    <input
                                        id={`refund_${index}`}
                                        className="custom-control-input custom-control-input-primary refund"
                                        type="checkbox"
                                        checked={bank.refund}
                                        onChange={() => handleRefundChange(index)}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor={`refund_${index}`}
                                    ></label>
                                </div>
                            </div>
                            <div className="form-group col-md-1" style={{ marginTop: "21px" }}>
                                <button
                                    className="btn btn-danger delete-bank"
                                    type="button"
                                    onClick={() => handleDeleteRow(index)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        className="btn btn-info add-more-non-salary-tds"
                        type="button"
                        onClick={handleAddRow}
                    >
                        Add More
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <input
                        type="submit"
                        id="submit_client_bank_form"
                        style={{ width: 'fit-content' }}
                        className="btn btn-block rounded-0 btn-primary"
                        value="Submit"
                    />
                </div>
            </div>
        </form>
    );
};

export default BankDetails;