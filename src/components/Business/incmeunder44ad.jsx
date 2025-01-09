
import React, { useState } from "react";
import codead from "../../codead.json"
import BuisinessBase from "./business_base";
const IncomeUnder44AD = () => {
    const [activeTab, setActiveTab] = useState("44AD"); // Track active tab

    // State for Income Under 44AD
    const [businesses44AD, setBusinesses44AD] = useState([
        { CodeAD_label: "", NameOfBusinessAD: "", DescriptionAD: "" },
    ]);
    const [formValues44AD, setFormValues44AD] = useState({
        GrsTotalTrnOverInCash: "",
        GrsTrnOverAnyOthMode: "",
        GrsTrnOverBank: "",
        GrsPrftInCash: "",
        GrsPrftOverAnyOthMode: "",
        GrsPrftOverBank: "",
        TotalProfit44AD: "",
    });

    // State for Income Under 44ADA
    const [businesses44ADA, setBusinesses44ADA] = useState([
        { CodeADA_label: "", NameOfBusinessADA: "", DescriptionADA: "" },
    ]);
    const [formValues44ADA, setFormValues44ADA] = useState({
        GrsTotalTrnOverInCash: "",
        GrsTrnOverAnyOthMode: "",
        GrsTrnOverBank: "",
        GrsPrftInCash: "",
        GrsPrftOverAnyOthMode: "",
        GrsPrftOverBank: "",
        TotalProfit44ADA: "",
    });

    const options = codead.CodeAD.description
        .split(";")
        .filter((item) => item.trim() !== "");

    // Common Handlers
    const handleBusinessChange = (index, field, value, type) => {
        if (type === "44AD") {
            const updatedBusinesses = [...businesses44AD];
            updatedBusinesses[index][field] = value;
            setBusinesses44AD(updatedBusinesses);
        } else if (type === "44ADA") {
            const updatedBusinesses = [...businesses44ADA];
            updatedBusinesses[index][field] = value;
            setBusinesses44ADA(updatedBusinesses);
        }
    };

    const addBusiness = (type) => {
        if (type === "44AD") {
            setBusinesses44AD([...businesses44AD, { CodeAD_label: "", NameOfBusinessAD: "", DescriptionAD: "" }]);
        } else if (type === "44ADA") {
            setBusinesses44ADA([...businesses44ADA, { CodeADA_label: "", NameOfBusinessADA: "", DescriptionADA: "" }]);
        }
    };

    const removeBusiness = (index, type) => {
        if (type === "44AD") {
            const updatedBusinesses = businesses44AD.filter((_, i) => i !== index);
            setBusinesses44AD(updatedBusinesses);
        } else if (type === "44ADA") {
            const updatedBusinesses = businesses44ADA.filter((_, i) => i !== index);
            setBusinesses44ADA(updatedBusinesses);
        }
    };

    const handleInputChange = (field, value, type) => {
        if (type === "44AD") {
            setFormValues44AD({ ...formValues44AD, [field]: value });
        } else if (type === "44ADA") {
            setFormValues44ADA({ ...formValues44ADA, [field]: value });
        }
    };

    return (
        <div>
            <div className="col-12 d-flex flex-row justify-content-between px-0 mb-2">
                <div className="d-flex flex-row">
                    <button
                        className={`buton_tabs_ac btn ${true ? "bg-danger" : "bg-gradient-info"} btn-flat mr-2`}
                    >
                        {true && <i className="fas fa-exclamation-triangle"></i>} Financial Particulars
                    </button>
                    <button className="buton_tabs_ac btn bg-gradient-info btn-flat">
                        Add GST Details
                    </button>
                </div>
            </div>

            <div className="card card-primary card-outline card-tabs">
                <div className="card-header p-0 pt-1 border-bottom-0">
                    <ul className="nav nav-tabs">
                        <li
                            className={`nav-item d-flex flex-row nav-link ${activeTab === "44AD" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("44AD")}
                        >
                            <a className="mr-2">Income Under 44AD</a>
                            <button
                                type="button"
                                className="align-self-center tooltips income-info-button"
                            >
                                <i className="fas fa-info-circle"></i>
                            </button>
                        </li>
                        <li
                            className={`nav-item d-flex flex-row nav-link ${activeTab === "44ADA" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("44ADA")}
                        >
                            <a className="mr-2">Income Under 44ADA</a>
                            <button
                                type="button"
                                className="align-self-center tooltips income-info-button"
                            >
                                <i className="fas fa-info-circle"></i>
                            </button>
                        </li>
                    </ul>
                </div>

                <form method="POST">
                    <input type="hidden" name="client_id" value="123" />
                    <input type="hidden" name="year" value="2023" />

                    <div className="card-body">
                        {activeTab === "44AD" && (
                            <div className="tab-pane fade active show">
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
                                        {businesses44AD.map((business, index) => (
                                            <div className="row business_list" key={index}>
                                                <div className="form-group col-md-3 custom-select2">
                                                    <label className="m-1 text-content">
                                                        Nature of Business <span className="text-danger">*</span>
                                                    </label>
                                                    <select
                                                        className="form-control rounded-0 business_name"
                                                        value={business.CodeAD_label}
                                                        onChange={(e) =>
                                                            handleBusinessChange(index, "CodeAD_label", e.target.value)
                                                        }
                                                    >
                                                        {options.map((option, index) => (
                                                            <option key={index} value={option.trim()}>
                                                                {option.trim()}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="form-group col-md-3">
                                                    <label className="m-1 text-content">
                                                        Trade Name <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-0"
                                                        value={business.NameOfBusinessAD}
                                                        onChange={(e) =>
                                                            handleBusinessChange(index, "NameOfBusinessAD", e.target.value, "44AD")
                                                        }
                                                    />
                                                </div>

                                                <div className="form-group col-md-3">
                                                    <label className="m-1 text-content">Description</label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-0"
                                                        value={business.DescriptionAD}
                                                        onChange={(e) =>
                                                            handleBusinessChange(index, "DescriptionAD", e.target.value, "44AD")
                                                        }
                                                    />
                                                </div>

                                                <div className="col-md-3">
                                                    <button
                                                        className="btn btn-danger remove_business btn-sm mt-4"
                                                        type="button"
                                                        onClick={() => removeBusiness(index)}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            className="btn btn-info add_more_business rounded-0"
                                            type="button"
                                            onClick={() => addBusiness("44AD")}
                                        >
                                            Add More
                                        </button>
                                    </div>
                                </div>

                                <div className="card card-primary">
                                    <div className="card-header">
                                        <div className="d-flex justify-content-between">
                                            <strong>Total Revenue/Turnover</strong>
                                            <strong>
                                                Gross Revenue: Rs.
                                                <span className="gross_revenue">12345</span>
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Revenue via Cash
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44AD.GrsTotalTrnOverInCash}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTotalTrnOverInCash", e.target.value, "44AD")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Revenue via any other mode
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44AD.GrsTrnOverAnyOthMode}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverAnyOthMode", e.target.value, "44AD")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Revenue via banking modes
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44AD.GrsTrnOverBank}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverBank", e.target.value, "44AD")
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Profit via Cash
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44AD.GrsTotalTrnOverInCash}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTotalTrnOverInCash", e.target.value, "44AD")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Profit via any other mode
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44AD.GrsTrnOverAnyOthMode}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverAnyOthMode", e.target.value, "44AD")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Profit via banking modes
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44AD.GrsTrnOverBank}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverBank", e.target.value, "44AD")
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "44ADA" && (
                            <div className="tab-pane fade active show">
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
                                        {businesses44ADA.map((business, index) => (
                                            <div className="row business_list" key={index}>
                                                <div className="form-group col-md-3 custom-select2">
                                                    <label className="m-1 text-content">
                                                        Nature of Business <span className="text-danger">*</span>
                                                    </label>
                                                    <select
                                                        className="form-control rounded-0 business_name"
                                                        value={business.CodeADA_label}
                                                        onChange={(e) =>
                                                            handleBusinessChange(index, "CodeAD_label", e.target.value, "44ADA")
                                                        }
                                                    >
                                                        {options.map((option, index) => (
                                                            <option key={index} value={option.trim()}>
                                                                {option.trim()}
                                                            </option>
                                                        ))}
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
                                                        onChange={(e) =>
                                                            handleBusinessChange(index, "NameOfBusinessAD", e.target.value, "44ADA")
                                                        }
                                                    />
                                                </div>

                                                <div className="form-group col-md-3">
                                                    <label className="m-1 text-content">Description</label>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-0"
                                                        value={business.DescriptionADA}
                                                        onChange={(e) =>
                                                            handleBusinessChange(index, "DescriptionAD", e.target.value, "44ADA")
                                                        }
                                                    />
                                                </div>

                                                <div className="col-md-3">
                                                    <button
                                                        className="btn btn-danger remove_business btn-sm mt-4"
                                                        type="button"
                                                        onClick={() => removeBusiness(index)}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            className="btn btn-info add_more_business rounded-0"
                                            type="button"
                                            onClick={() => addBusiness("44ADA")}
                                        >
                                            Add More
                                        </button>
                                    </div>
                                </div>

                                <div className="card card-primary">
                                    <div className="card-header">
                                        <div className="d-flex justify-content-between">
                                            <strong>Total Revenue/Turnover</strong>
                                            <strong>
                                                Gross Revenue: Rs.
                                                <span className="gross_revenue">12345</span>
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Revenue via Cash
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44ADA.GrsTotalTrnOverInCash}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTotalTrnOverInCash", e.target.value, "44ADA")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Revenue via any other mode
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44ADA.GrsTrnOverAnyOthMode}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverAnyOthMode", e.target.value, "44ADA")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Revenue via banking modes
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44ADA.GrsTrnOverBank}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverBank", e.target.value, "44ADA")
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Profit via Cash
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44ADA.GrsTotalTrnOverInCash}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTotalTrnOverInCash", e.target.value, "44ADA")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Profit via any other mode
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44ADA.GrsTrnOverAnyOthMode}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverAnyOthMode", e.target.value, "44ADA")
                                                    }
                                                />
                                            </div>

                                            <div className="form-group col-md-3">
                                                <label className="m-1 w-100 text-content">
                                                    Profit via banking modes
                                                    <span className="text-red float-right text-content">1234</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-0 revenue_input"
                                                    value={formValues44ADA.GrsTrnOverBank}
                                                    onChange={(e) =>
                                                        handleInputChange("GrsTrnOverBank", e.target.value, "44ADA")
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="card-footer">
                        <div className="col-md-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary rounded-0 btn-block" style={{ width: 'fit-content' }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                <BuisinessBase  />
            </div>
        </div>
    );
};

export default IncomeUnder44AD;
