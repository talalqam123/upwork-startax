import React, { useState, useEffect } from "react";
import BackButton from "../../Backbutton";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./unlistedShares.css";

const UnlistedShares = () => {
    const [tabs, setTabs] = useState([
        {
            company_name: "",
            company_pan: "",
            company_type: "",
            openning_bal_shares: "",
            openning_bal_shares_cost: "",
            aquired_shares_during_year: "",
            aquired_shares_purchase_date: "",
            shares_face_value: "",
            shares_issue_price: "",
            shares_purchase_price: "",
            shares_transferred: "",
            sale_consideration: "",
            closing_bal_shares: "",
            closing_bal_shares_cost_aquisition: "",
        },
    ]);

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        updateUnlistedShareIndex();
    }, [tabs]);

    const addTab = () => {
        setTabs([
            ...tabs,
            {
                company_name: "",
                company_pan: "",
                company_type: "",
                openning_bal_shares: "",
                openning_bal_shares_cost: "",
                aquired_shares_during_year: "",
                aquired_shares_purchase_date: "",
                shares_face_value: "",
                shares_issue_price: "",
                shares_purchase_price: "",
                shares_transferred: "",
                sale_consideration: "",
                closing_bal_shares: "",
                closing_bal_shares_cost_aquisition: "",
            },
        ]);
        setActiveTab(tabs.length);
    };

    const removeTab = (index) => {
        setTabs((prevTabs) => {
            if (prevTabs.length > 1) {
                const updatedTabs = prevTabs.filter((_, i) => i !== index);

                // Adjust the activeTab index
                setActiveTab((prevActiveTab) => {
                    if (prevActiveTab === index) {
                        // If the active tab was deleted, select the next tab, or the previous one if the last was deleted
                        return index < updatedTabs.length ? index : updatedTabs.length - 1;
                    } else if (prevActiveTab > index) {
                        // If the active tab index was after the deleted tab, decrement it
                        return prevActiveTab - 1;
                    } else {
                        // No adjustment needed
                        return prevActiveTab;
                    }
                });

                return updatedTabs;
            } else {
                // When only one tab is left, do nothing (no reset)
                return prevTabs;
            }
        });
    };

    const handleInputChange = (index, field, value) => {
        const updatedTabs = [...tabs];
        updatedTabs[index][field] = value;
        setTabs(updatedTabs);
    };

    const updateUnlistedShareIndex = () => {
        const tabIndices = tabs.map((_, index) => index);
        document.querySelector('input[name="tab"]').value = JSON.stringify(tabIndices);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="p-tab-c1">
                    <span>Edit Unlisted Share</span>
                </div>
            </div>

            <form action="/store_unlisted_shares" className="card" method="POST">
                <input type="hidden" name="client_id" value="" />
                <input type="hidden" name="year" value="" />
                <input type="hidden" name="tab" value="[]" />
                <input type="hidden" name="redirect" value="true" />

                <div className="TDS-Taxes-form-active unlisted_shares_form">
                    <div className="tab-wrapper unlisted-shares-data">
                        <div className="tab-header">
                            <div className="shares_tabs d-flex">
                                {tabs.map((tab, index) => (
                                    <div
                                        className={`tab-btn d-flex flex-row align-items-center ${activeTab === index ? "active" : ""}`}
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <button className="salary-tab-button" type="button">
                                            {tab.company_name || `Company ${index + 1}`}
                                        </button>
                                        <span
                                            className="text-danger remove-unlisted-shares"
                                            data-toggle="modal"
                                            data-target="#deleteModal"
                                            onClick={() => removeTab(index)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </span>
                                    </div>
                                ))}
                                <div className="underline"></div>
                            </div>
                            <button
                                className="tab-btn-add tab-btn-add-company-details"
                                type="button"
                                onClick={addTab}
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>

                        <div className="tab-body unlisted_share_tabs_body">
                            {tabs.map((tab, index) => (
                                <div
                                    className={`tab-content ${activeTab === index ? "" : "d-none"}`}
                                    key={index}
                                    data-tab={index}
                                >
                                    <div className="card card-body tab-wrapper m-4">
                                        <div className="mb-4">
                                            <strong>Company Details</strong>
                                        </div>
                                        <div className="row text-content">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Name of Company *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-0 company_name"
                                                        maxLength="125"
                                                        value={tab.company_name}
                                                        onChange={(e) =>
                                                            handleInputChange(index, "company_name", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>PAN of Company *</label>
                                                    <span>
                                                        Use 'NNNNN0000N', in case the PAN of delisted company
                                                        cannot be obtained.
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-0"
                                                        value={tab.company_pan}
                                                        onChange={(e) =>
                                                            handleInputChange(index, "company_pan", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Company type *</label>
                                                    <select
                                                        className="form-control rounded-0"
                                                        value={tab.company_type}
                                                        onChange={(e) =>
                                                            handleInputChange(index, "company_type", e.target.value)
                                                        }
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="D">Domestic</option>
                                                        <option value="F">Foreign</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Additional sections (Opening Balance, Shares Acquired, etc.) here */}

                                    <div className="card card-body m-4">
                                        <div className="mb-4">
                                            <strong>Opening Balance</strong>
                                        </div>
                                        <div className="row text-content">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>No. of shares *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.openning_bal_shares}
                                                        className="form-control rounded-0 inr_field"
                                                        maxLength="99999999999999"
                                                        min="0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "openning_bal_shares", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Cost of acquisition *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.openning_bal_shares_cost}
                                                        className="form-control rounded-0"
                                                        step="0.01"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "openning_bal_shares_cost", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-body  m-4">
                                        <div className="mb-4">
                                            <strong>Shares acquired during the year</strong>
                                        </div>
                                        <div className="row text-content">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>No. of shares *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.aquired_shares_during_year}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "aquired_shares_during_year", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Date of Purchase *</label>
                                                    <input
                                                        type="date"
                                                        value={tab.aquired_shares_purchase_date}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "aquired_shares_purchase_date", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Face Value Per Share *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.shares_face_value}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "shares_face_value", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Issue Price Per Share (In case of fresh share) *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.shares_issue_price}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "shares_issue_price", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Purchase Price Per Share (In case purchased from existing shareholder) *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.shares_purchase_price}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "shares_purchase_price", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-body m-4">
                                        <div className="mb-4">
                                            <strong>Shares transferred during the year</strong>
                                        </div>
                                        <div className="row text-content">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>No. of shares *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.shares_transferred}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "shares_transferred", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Sale Consideration *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.sale_consideration}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "sale_consideration", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-body ml-4 mr-4">
                                        <div className="mb-4">
                                            <strong>Closing Balance</strong>
                                        </div>
                                        <div className="row text-content">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>No. of shares *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.closing_bal_shares}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "closing_bal_shares", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Cost of acquisition *</label>
                                                    <input
                                                        type="text"
                                                        value={tab.closing_bal_shares_cost_aquisition}
                                                        className="form-control rounded-0"
                                                        onChange={(e) =>
                                                            handleInputChange(index, "closing_bal_shares_cost_aquisition", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </div>

                        <div className="row mt-4 ml-2">
                            <div className="col-md-12 d-flex">
                                <input
                                    type="submit"
                                    style={{ width: "fit-content" }}
                                    className="btn btn-block rounded-0 btn-primary"
                                    value="Submit"
                                />
                               <BackButton link="/client/final/more-info" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* Tab delete confirmation modal */}
            <div
                className="modal fade"
                id="deleteModal"
                tabIndex="-1"
                aria-labelledby="deleteModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">
                                Confirmation
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">Do you want to delete?</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                No
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => removeTab(activeTab)}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnlistedShares;
