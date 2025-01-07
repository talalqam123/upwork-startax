import React, { useState } from 'react';

const ScheduleAL = () => {
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

    return (
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
            </form>
        </div>
    );
};

export default ScheduleAL;
