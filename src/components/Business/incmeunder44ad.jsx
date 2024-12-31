import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BuisinessBase from './business_base';

function ControlledTabsExample({ clientFullName, clientRelId, income44AD, year }) {
    const dummyData = {
        proprtrCapital: 50000,
        resrveSurplus: 20000,
        revalReserve: 15000,
        capitlReserve: 10000,
        statutoryReserve: 5000,
        otherReserve: 3000,
        totalReserve: 33000,
        totalProprtrFund: 83000,
        securedLoans: 40000,
        foreignLoans: 20000,
        rupeeLoans: 20000,
        rupeeFromBanks: 12000,
        rupeeFromOthers: 8000,
        totalRupeeLoans: 20000,
        totalSecuredLoans: 60000,
        unsecuredLoans: 15000,
        unsecFromBanks: 7000,
        unsecFromOthers: 8000,
        totalUnsecLoans: 15000,
        totalLoanFunds: 75000,
        deferredTax: 10000,
        advances40A: 5000,
        advancesOthers: 15000,
        totalAdvances: 20000,
        totalSourcesOfFunds: 168000,
      };
      
    const [key, setKey] = useState('income44ad');

    // Placeholder content for other tabs
    const IncomeUnder44ADA = () => (
        <div>
            <h2>Income Under 44ADA</h2>
            <p>Content for Income Under 44ADA will go here.</p>
        </div>
    );

    const IncomeUnder44AE = () => (
        <div>
            <h2>Income Under 44AE</h2>
            <p>Content for Income Under 44AE will go here.</p>
        </div>
    );

    // Form logic for Income Under 44AD
    const IncomeUnder44AD = () => {
        const [businesses, setBusinesses] = useState(income44AD.nature_of_business || []);
        const [revenue, setRevenue] = useState({
            viaCash: income44AD.GrsTotalTrnOverInCash || 0,
            viaOther: income44AD.GrsTrnOverAnyOthMode || 0,
            viaBank: income44AD.GrsTrnOverBank || 0,
        });

        const addBusiness = () => {
            setBusinesses([
                ...businesses,
                { CodeAD_label: '', NameOfBusinessAD: '', DescriptionAD: '' },
            ]);
        };

        const removeBusiness = (index) => {
            const updatedBusinesses = businesses.filter((_, i) => i !== index);
            setBusinesses(updatedBusinesses);
        };

        const handleRevenueChange = (field, value) => {
            setRevenue({ ...revenue, [field]: value });
        };

        const handleProfitChange = (field, value) => {
            setProfit({ ...profit, [field]: value });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            const formData = {
                businesses,
                revenue,
                profit,
            };
            console.log('Form Data:', formData);
        };

        return (
            
           <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="card card-primary">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <strong>Nature of Business Details</strong>
                            <button
                                className="btn btn-outline-light mr-2 rounded-0"
                                type="button"
                                onClick={() => alert('Copying data from previous year...')}
                            >
                                Copy From Previous Year
                            </button>
                        </div>
                    </div>

                    <div className="card-body">
                        {businesses.map((business, index) => (
                            <div key={index} className="row business_list">
                                <div className="form-group col-md-3">
                                    <label>Nature of Business</label>
                                    <select
                                        className="form-control"
                                        value={business.CodeAD_label}
                                        onChange={(e) => {
                                            const updatedBusinesses = [...businesses];
                                            updatedBusinesses[index].CodeAD_label = e.target.value;
                                            setBusinesses(updatedBusinesses);
                                        }}
                                    >
                                        <option value="">Select</option>
                                        <option value="Business 1">Business 1</option>
                                        <option value="Business 2">Business 2</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-3">
                                    <label className="m-1 text-content">Trade Name <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control rounded-0"
                                        name={`NameOfBusinessAD_${index}`}
                                        value={business.NameOfBusinessAD}
                                        onChange={(e) => handleBusinessChange(index, 'NameOfBusinessAD', e.target.value)}
                                    />
                                </div>

                                <div className="form-group col-md-3">
                                    <label className="m-1 text-content">Description</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-0"
                                        name={`DescriptionAD_${index}`}
                                        value={business.DescriptionAD}
                                        onChange={(e) => handleBusinessChange(index, 'DescriptionAD', e.target.value)}
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
                            onClick={addBusiness}
                        >
                            Add More
                        </button>
                    </div>
                </div>

                {/* Total Revenue/Turnover Section */}
                <div className="card card-primary">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <strong>Total Revenue/Turnover</strong>
                            <strong>
                                Gross Revenue : Rs. <span className="gross_revenue">{revenue.viaCash + revenue.viaOther + revenue.viaBank}</span>
                            </strong>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="row">
                            {['viaCash', 'viaOther', 'viaBank'].map((key, index) => (
                                <div key={index} className="form-group col-md-3">
                                    <label className="m-1 w-100 text-content">
                                        Revenue via {key.replace('via', '')}
                                        <span className="text-red float-right text-content">1234</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-0 revenue_input inr_field"
                                        name={`GrsTotalTrnOver${key}`}
                                        value={revenue[key]}
                                        onChange={(e) => handleRevenueChange(key, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="col-md-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary rounded-0 btn-block" style={{ width: 'fit-content' }}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <BuisinessBase />

            </div>
        );
    };

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="income44ad" title="Income Under 44AD">
                <IncomeUnder44AD />
            </Tab>
            <Tab eventKey="income44ada" title="Income Under 44ADA">
                <IncomeUnder44ADA />
            </Tab>
            <Tab eventKey="income44ae" title="Income Under 44AE">
                <IncomeUnder44AE />
            </Tab>
        </Tabs>
    );
}

export default ControlledTabsExample;
