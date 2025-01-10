import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../Backbutton";

const ShareDebenturesForm = ({ clientRelId }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        otherIncome: "",
        amount: "",
        date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div>
    <div className="col-12 mt-3">
        <div className="rows_data">
            <form onSubmit={handleSubmit}>
                <div className="card card-body">
                    <div className="form_heading">
                        <div className="mt-3">
                            <strong>Share/Debentures</strong>
                        </div>
                    </div>
                    <div className="row mt-3 text-content">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Other Income</label>
                                <input
                                    type="text"
                                    name="otherIncome"
                                    className="form-control rounded-0"
                                    value={formData.otherIncome}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Amount</label>
                                <input
                                    type="text"
                                    name="amount"
                                    className="form-control rounded-0"
                                    value={formData.amount}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control rounded-0"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 d-flex">
                        <input
                            type="submit"
                            style={{ width: "fit-content" }}
                            className="btn btn-block rounded-0 btn-primary"
                            value="Submit"
                        />
                        <BackButton link="/client" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
    );
};

export default ShareDebenturesForm;
