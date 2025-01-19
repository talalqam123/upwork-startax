import React, { useState } from 'react';

const BSPIncome = ({ balancesheet_profitloss = {} }) => {
    const [expandable, setExpandable] = useState(false);

    const toggleExpandable = () => {
        setExpandable(!expandable);
    };

    return (
        <div className="card card-body">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <strong>1. Sources of Funds</strong>
                </div>
            </div>

            <div className="row text-content">
                <div className="col-md-6">
                    {/* Proprietor's Fund Section */}
                    <div className="form-group">
                        <label className="m-1">Proprietor's capital</label>
                        <input
                            type="number"
                            name="proprtrCapital"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.proprtrCapital}
                        />
                    </div>

                    <div className="form-group">
                        <label className="m-1">Reserves and Surplus</label>
                        <input
                            type="number"
                            name="resrveSurplus"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.resrveSurplus}
                        />
                    </div>

                    <div className="form-group">
                        <label className="m-1">Revaluation Reserve</label>
                        <input
                            type="number"
                            name="revalReserve"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.revalReserve}
                        />
                    </div>

                    <div className="form-group">
                        <label className="m-1">Capital Reserve</label>
                        <input
                            type="number"
                            name="capitlReserve"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.capitlReserve}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    {/* Loan Funds Section */}
                    <div className="form-group">
                        <label className="m-1">Foreign Currency Loans</label>
                        <input
                            type="number"
                            name="foreignLoans"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.foreignLoans}
                        />
                    </div>

                    <div className="form-group">
                        <label className="m-1">Rupee Loans from Banks</label>
                        <input
                            type="number"
                            name="rupeeFromBanks"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.rupeeFromBanks}
                        />
                    </div>

                    <div className="form-group">
                        <label className="m-1">Rupee Loans from Others</label>
                        <input
                            type="number"
                            name="rupeeFromOthers"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.rupeeFromOthers}
                        />
                    </div>

                    <div className="form-group">
                        <label className="m-1">Total Rupee Loans</label>
                        <input
                            type="number"
                            name="totalRupeeLoans"
                            className="form-control rounded-0"
                            value={balancesheet_profitloss.totalRupeeLoans}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSPIncome;
