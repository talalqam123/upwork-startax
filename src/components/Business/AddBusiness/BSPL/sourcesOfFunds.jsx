import React, { useState, useEffect } from 'react';

const SourcesOfFunds = () => {
    const [values, setValues] = useState({
        // Proprietor's fund
        proprietorsCapital: 0,
        revaluationReserve: 0,
        capitalReserve: 0,
        statutoryReserve: 0,
        anyOtherReserve: 0,
        totalReserves: 0,
        totalProprietorsFund: 0,

        // Loan funds - Secured
        foreignCurrencyLoans: 0,
        rupeeLoansFromBanks: 0,
        rupeeLoansFromOthers: 0,
        totalRupeeLoans: 0,
        totalSecuredLoans: 0,

        // Loan funds - Unsecured
        unsecuredLoansFromBanks: 0,
        unsecuredLoansFromOthers: 0,
        totalUnsecuredLoans: 0,
        totalLoanFunds: 0,

        // Other funds
        deferredTaxLiability: 0,
        advancesFromPersons: 0,
        advancesFromOthers: 0,
        totalAdvances: 0,
        totalSourcesOfFunds: 0
    });

    const handleInputChange = (name, value) => {
        setValues(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    useEffect(() => {
        setValues(prev => ({
            ...prev,
            // Calculate total reserves (1bv)
            totalReserves:
                parseFloat(prev.revaluationReserve || 0) +
                parseFloat(prev.capitalReserve || 0) +
                parseFloat(prev.statutoryReserve || 0) +
                parseFloat(prev.anyOtherReserve || 0),

            // Calculate total proprietor's fund (1c)
            totalProprietorsFund:
                parseFloat(prev.proprietorsCapital || 0) +
                (parseFloat(prev.revaluationReserve || 0) +
                parseFloat(prev.capitalReserve || 0) +
                parseFloat(prev.statutoryReserve || 0) +
                parseFloat(prev.anyOtherReserve || 0)),

            // Calculate total rupee loans (2aiiC)
            totalRupeeLoans:
                parseFloat(prev.rupeeLoansFromBanks || 0) +
                parseFloat(prev.rupeeLoansFromOthers || 0),

            // Calculate total secured loans (2aiii)
            totalSecuredLoans:
                parseFloat(prev.foreignCurrencyLoans || 0) +
                (parseFloat(prev.rupeeLoansFromBanks || 0) +
                parseFloat(prev.rupeeLoansFromOthers || 0)),

            // Calculate total unsecured loans (2biii)
            totalUnsecuredLoans:
                parseFloat(prev.unsecuredLoansFromBanks || 0) +
                parseFloat(prev.unsecuredLoansFromOthers || 0),

            // Calculate total loan funds (2c)
            totalLoanFunds:
                parseFloat(prev.totalSecuredLoans || 0) +
                parseFloat(prev.totalUnsecuredLoans || 0),

            // Calculate total advances (4iii)
            totalAdvances:
                parseFloat(prev.advancesFromPersons || 0) +
                parseFloat(prev.advancesFromOthers || 0),

            // Calculate total sources of funds (5)
            totalSourcesOfFunds:
                parseFloat(prev.totalProprietorsFund || 0) +
                parseFloat(prev.totalLoanFunds || 0) +
                parseFloat(prev.deferredTaxLiability || 0) +
                parseFloat(prev.totalAdvances || 0)
        }));
    }, [
        values.proprietorsCapital,
        values.revaluationReserve,
        values.capitalReserve,
        values.statutoryReserve,
        values.anyOtherReserve,
        values.foreignCurrencyLoans,
        values.rupeeLoansFromBanks,
        values.rupeeLoansFromOthers,
        values.unsecuredLoansFromBanks,
        values.unsecuredLoansFromOthers,
        values.deferredTaxLiability,
        values.advancesFromPersons,
        values.advancesFromOthers,
        values.totalSecuredLoans,
        values.totalUnsecuredLoans
    ]);

    return (
        <form method="POST">
            <div className="card card-body text-content">
                <div className="">
                    <div>
                        <strong>1: Proprietor's fund</strong>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1a: Proprietor's capital</span>
                                <input
                                    type="number"
                                    name="proprietorsCapital"
                                    value={values.proprietorsCapital}
                                    onChange={(e) => handleInputChange('proprietorsCapital', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1b: Reserves and Surplus</span>
                                <input
                                    type="text"
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1bi: Revaluation Reserve</span>
                                <input
                                    type="number"
                                    name="revaluationReserve"
                                    value={values.revaluationReserve}
                                    onChange={(e) => handleInputChange('revaluationReserve', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1bii: Capital Reserve</span>
                                <input
                                    type="number"
                                    name="capitalReserve"
                                    value={values.capitalReserve}
                                    onChange={(e) => handleInputChange('capitalReserve', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1biii: Statutory Reserve</span>
                                <input
                                    type="number"
                                    name="statutoryReserve"
                                    value={values.statutoryReserve}
                                    onChange={(e) => handleInputChange('statutoryReserve', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1biv: Any other Reserve</span>
                                <input
                                    type="number"
                                    name="anyOtherReserve"
                                    value={values.anyOtherReserve}
                                    onChange={(e) => handleInputChange('anyOtherReserve', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1bv: Total (bi+bii+biii+biv)</span>
                                <input
                                    type="number"
                                    name="totalReserves"
                                    value={values.totalReserves}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>1c: Total proprietor's fund (a + bv)</span>
                                <input
                                    type="number"
                                    name="totalProprietorsFund"
                                    value={values.totalProprietorsFund}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <div>
                        <strong>2: Loan funds</strong>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>2a: Secured loans</span>
                                <input
                                    type="number"
                                    name="foreignCurrencyLoans"
                                    value={values.foreignCurrencyLoans}
                                    onChange={(e) => handleInputChange('foreignCurrencyLoans', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>2ai: Foreign Currency Loans</span>
                                <input
                                    type="number"
                                    name="foreignCurrencyLoans"
                                    value={values.foreignCurrencyLoans}
                                    onChange={(e) => handleInputChange('foreignCurrencyLoans', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aii: Rupee Loans</span>
                                <input
                                    type="number"
                                    name="rupeeLoansFromBanks"
                                    value={values.rupeeLoansFromBanks}
                                    onChange={(e) => handleInputChange('rupeeLoansFromBanks', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aiiA: From Banks</span>
                                <input
                                    type="number"
                                    name="rupeeLoansFromBanks"
                                    value={values.rupeeLoansFromBanks}
                                    onChange={(e) => handleInputChange('rupeeLoansFromBanks', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>

                        </div>
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aiiB: From Others</span>
                            <input
                                type="number"
                                name="rupeeLoansFromOthers"
                                value={values.rupeeLoansFromOthers}
                                onChange={(e) => handleInputChange('rupeeLoansFromOthers', e.target.value)}
                                className="form-control rounded-0 flex-grow-1"
                            />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aiiC: Total(iiA + iiB)</span>
                            <input
                                type="number"
                                name="totalRupeeLoans"
                                value={values.totalRupeeLoans}
                                className="form-control rounded-0 flex-grow-1"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aiii: Total(ai + iiC)</span>
                            <input
                                type="number"
                                name="totalSecuredLoans"
                                value={values.totalSecuredLoans}
                                className="form-control rounded-0 flex-grow-1"
                                readOnly
                            />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}><strong>2b: Unsecured loans (including deposits)</strong></span>

                        </div>
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2bi: From Banks</span>
                            <input
                                type="number"
                                name="unsecuredLoansFromBanks"
                                value={values.unsecuredLoansFromBanks}
                                onChange={(e) => handleInputChange('unsecuredLoansFromBanks', e.target.value)}
                                className="form-control rounded-0 flex-grow-1"
                            />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2bii: From others</span>
                            <input
                                type="number"
                                name="unsecuredLoansFromOthers"
                                value={values.unsecuredLoansFromOthers}
                                onChange={(e) => handleInputChange('unsecuredLoansFromOthers', e.target.value)}
                                className="form-control rounded-0 flex-grow-1"
                            />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2biii: Total(bi+bii)</span>
                            <input
                                type="number"
                                name="totalUnsecuredLoans"
                                value={values.totalUnsecuredLoans}
                                className="form-control rounded-0 flex-grow-1"
                                readOnly
                            />
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2c: Total Loan Funds(aiii + biii)</span>
                            <input
                                type="number"
                                name="totalLoanFunds"
                                value={values.totalLoanFunds}
                                className="form-control rounded-0 flex-grow-1"
                                readOnly
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group d-flex align-items-center">
                    <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>3: Deferred tax liability</strong></span>
                    <input
                        type="number"
                        name="deferredTaxLiability"
                        value={values.deferredTaxLiability}
                        onChange={(e) => handleInputChange('deferredTaxLiability', e.target.value)}
                        className="form-control rounded-0 flex-grow-1"
                        style={{ maxWidth: 'calc(100% - 230px)' }}
                    />
                </div>
                <div className="">
                    <div>
                        <strong>4: Advances</strong>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>4i: From persons specified in <br /> section 40A(2)(b) of the I. T. Act</span>
                                <input
                                    type="number"
                                    name="advancesFromPersons"
                                    value={values.advancesFromPersons}
                                    onChange={(e) => handleInputChange('advancesFromPersons', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>4ii: From others</span>
                                <input
                                    type="number"
                                    name="advancesFromOthers"
                                    value={values.advancesFromOthers}
                                    onChange={(e) => handleInputChange('advancesFromOthers', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>4iii: Total Advances (i + ii)</span>
                                <input
                                    type="number"
                                    name="totalAdvances"
                                    value={values.totalAdvances}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>5: Sources of funds(1c + 2c + 3 + 4iii)</span>
                                <input
                                    type="number"
                                    name="totalSourcesOfFunds"
                                    value={values.totalSourcesOfFunds}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SourcesOfFunds;