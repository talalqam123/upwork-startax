import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';

const PANDL3 = () => {
    const [values, setValues] = useState({
        // Gift and Donation
        giftExpenses: "",
        donationExpenses: "",

        // Rates and Taxes
        ratesAndTaxes: "",
        unionExciseDuty: "",
        serviceTax: "",
        vatSalesTax: "",
        cess: "",
        cgst: "",
        sgst: "",
        igst: "",
        utgst: "",
        otherRateTaxDutyCess: "",
        totalRatesAndTaxes: "",

        // Bad Debts
        badDebts: "",
        badDebtsPan: "",
        badDebtsOthers: "",
        badDebtsLessThanOneLakh: "",
        totalBadDebts: "",

        // Provisions and Profit
        provisionForBadDebts: "",
        otherProvisions: "",
        profitBeforeInterestDepreciationTaxes: "",

        // Interest
        interest: "",
        interestPaidOutsideIndia: "",
        interestToOthers: "",
        totalInterest: "",

        // Final calculations
        depreciationAmortisation: "",
        netProfitBeforeTaxes: "",
        provisionForCurrentTax: "",
        provisionForDeferredTax: "",
        profitAfterTax: "",
        balanceBroughtForward: "",
        amountAvailableForAppropriation: "",
        transferredToReservesAndSurplus: "",
        balanceCarriedToBalanceSheet: ""
    });

    const handleInputChange = (name, value) => {
        setValues(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    // Calculate totals
    useEffect(() => {
        setValues(prev => ({
            ...prev,
            // Calculate Total Rates and Taxes (44x)
            totalRatesAndTaxes:
                parseFloat(prev.unionExciseDuty || 0) +
                parseFloat(prev.serviceTax || 0) +
                parseFloat(prev.vatSalesTax || 0) +
                parseFloat(prev.cess || 0) +
                parseFloat(prev.cgst || 0) +
                parseFloat(prev.sgst || 0) +
                parseFloat(prev.igst || 0) +
                parseFloat(prev.utgst || 0) +
                parseFloat(prev.otherRateTaxDutyCess || 0),

            // Calculate Total Bad Debts (47iv)
            totalBadDebts:
                parseFloat(prev.badDebtsPan || 0) +
                parseFloat(prev.badDebtsOthers || 0) +
                parseFloat(prev.badDebtsLessThanOneLakh || 0),

            // Calculate Total Interest (51iii)
            totalInterest:
                parseFloat(prev.interestPaidOutsideIndia || 0) +
                parseFloat(prev.interestToOthers || 0),

            // Calculate Net Profit Before Taxes (53)
            netProfitBeforeTaxes:
                parseFloat(prev.profitBeforeInterestDepreciationTaxes || 0) -
                parseFloat(prev.totalInterest || 0) -
                parseFloat(prev.depreciationAmortisation || 0),

            // Calculate Profit After Tax (56)
            profitAfterTax:
                parseFloat(prev.netProfitBeforeTaxes || 0) -
                parseFloat(prev.provisionForCurrentTax || 0) -
                parseFloat(prev.provisionForDeferredTax || 0),

            // Calculate Amount Available for Appropriation (58)
            amountAvailableForAppropriation:
                parseFloat(prev.profitAfterTax || 0) +
                parseFloat(prev.balanceBroughtForward || 0),

            // Calculate Balance Carried to Balance Sheet (60)
            balanceCarriedToBalanceSheet:
                parseFloat(prev.amountAvailableForAppropriation || 0) -
                parseFloat(prev.transferredToReservesAndSurplus || 0)
        }));
    }, [
        values.unionExciseDuty, values.serviceTax, values.vatSalesTax,
        values.cess, values.cgst, values.sgst, values.igst,
        values.utgst, values.otherRateTaxDutyCess,
        values.badDebtsPan, values.badDebtsOthers, values.badDebtsLessThanOneLakh,
        values.interestPaidOutsideIndia, values.interestToOthers,
        values.profitBeforeInterestDepreciationTaxes, values.depreciationAmortisation,
        values.provisionForCurrentTax, values.provisionForDeferredTax,
        values.balanceBroughtForward, values.transferredToReservesAndSurplus
    ]);

    return (
        <form method="POST">
            <div className="card card-body text-content">
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>42: Gift</strong></span>
                        <input
                            type="number"
                            name="giftExpenses"
                            value={values.giftExpenses}
                            onChange={(e) => handleInputChange('giftExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>43: Donation</strong></span>
                        <input
                            type="number"
                            name="donationExpenses"
                            value={values.donationExpenses}
                            onChange={(e) => handleInputChange('donationExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>44: Rates and taxes, paid or payable<br /> to Government or any local body<br /> (excluding taxes on income)</strong></span>
                        <input
                            type="number"
                            name="ratesAndTaxes"
                            value={values.ratesAndTaxes}
                            onChange={(e) => handleInputChange('ratesAndTaxes', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>44i: Union excise duty</span>
                                <input
                                    type="number"
                                    name="unionExciseDuty"
                                    value={values.unionExciseDuty}
                                    onChange={(e) => handleInputChange('unionExciseDuty', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>44ii: Service tax</span>
                                <input
                                    type="number"
                                    name="serviceTax"
                                    value={values.serviceTax}
                                    onChange={(e) => handleInputChange('serviceTax', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>44iii: VAT/ Sales tax</span>
                                <input
                                    type="number"
                                    name="vatSalesTax"
                                    value={values.vatSalesTax}
                                    onChange={(e) => handleInputChange('vatSalesTax', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>44iv: Cess</span>
                                <input
                                    type="number"
                                    name="cess"
                                    value={values.cess}
                                    onChange={(e) => handleInputChange('cess', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>44v: Central Goods & Service Tax (CGST) </span>
                                <input
                                    type="number"
                                    name="cgst"
                                    value={values.cgst}
                                    onChange={(e) => handleInputChange('cgst', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>444vi: State Goods & Services Tax (SGST)</span>
                                <input
                                    type="number"
                                    name="sgst"
                                    value={values.sgst}
                                    onChange={(e) => handleInputChange('sgst', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>444vii: Integrated Goods & Services Tax (IGST)</span>
                                <input
                                    type="number"
                                    name="igst"
                                    value={values.igst}
                                    onChange={(e) => handleInputChange('igst', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>44viii: Union Territory Goods & Services Tax (UTGST)</span>
                                <input
                                    type="number"
                                    name="utgst"
                                    value={values.utgst}
                                    onChange={(e) => handleInputChange('utgst', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>44ix: Any other rate, tax, duty or cess including STT and CTT</span>
                                <input
                                    type="number"
                                    name="otherRateTaxDutyCess"
                                    value={values.otherRateTaxDutyCess}
                                    onChange={(e) => handleInputChange('otherRateTaxDutyCess', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>444x: Total rates and taxes paid<br /> or payable (44i + 44ii + 44iii + 44iv<br /> + 44v + 44vi + 44vii + 44viii + 44ix)</span>
                                <input
                                    type="number"
                                    name="totalRatesAndTaxes"
                                    value={values.totalRatesAndTaxes}
                                    onChange={(e) => handleInputChange('totalRatesAndTaxes', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>45: Audit fee</strong></span>
                        <input
                            type="number"
                            name="auditFee"
                            value={values.auditFee}
                            onChange={(e) => handleInputChange('auditFee', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>46: Other expenses (specify nature and amount)</strong></span>
                        <input
                            type="number"
                            name="otherExpensesNature"
                            value={values.otherExpensesNature}
                            onChange={(e) => handleInputChange('otherExpensesNature', e.target.value)}
                            className="form-control rounded-0 flex-grow-1 mr-2"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                        <input
                            type="number"
                            name="otherExpensesAmount"
                            value={values.otherExpensesAmount}
                            onChange={(e) => handleInputChange('otherExpensesAmount', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>47: Bad debts</strong></span>
                        <input
                            type="number"
                            name="badDebts"
                            value={values.badDebts}
                            onChange={(e) => handleInputChange('badDebts', e.target.value)}
                            className="form-control rounded-0 flex-grow-1 "
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>47i: Bad debts (specify PAN of<br /> the person, if available, for<br /> whom Bad Debt for amount<br /> of Rs. 1 lakh or more is<br />claimed and amount)</span>
                                <input
                                    type="number"
                                    name="badDebtsPan"
                                    value={values.badDebtsPan}
                                    onChange={(e) => handleInputChange('badDebtsPan', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>47ii: Others (more than<br /> Rs. 1 lakh) where PAN is not <br />available</span>
                                <input
                                    type="number"
                                    name="badDebtsOthers"
                                    value={values.badDebtsOthers}
                                    onChange={(e) => handleInputChange('badDebtsOthers', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>47iii: Others (amounts less than Rs. 1 lakh)</span>
                                <input
                                    type="number"
                                    name="badDebtsLessThanOneLakh"
                                    value={values.badDebtsLessThanOneLakh}
                                    onChange={(e) => handleInputChange('badDebtsLessThanOneLakh', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>47iv: Total Bad Debt (47i (All PAN) + 47ii + 47iii)</span>
                                <input
                                    type="number"
                                    name="totalBadDebts"
                                    value={values.totalBadDebts}
                                    onChange={(e) => handleInputChange('totalBadDebts', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>48: Provision for bad and doubtful debts</strong></span>
                        <input
                            type="number"
                            name="provisionForBadDebts"
                            value={values.provisionForBadDebts}
                            onChange={(e) => handleInputChange('provisionForBadDebts', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>49: Other provisions</strong></span>
                        <input
                            type="number"
                            name="otherProvisions"
                            value={values.otherProvisions}
                            onChange={(e) => handleInputChange('otherProvisions', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>50: Profit before interest,<br /> depreciation and taxes</strong></span>
                        <input
                            type="number"
                            name="profitBeforeInterestDepreciationTaxes"
                            value={values.profitBeforeInterestDepreciationTaxes}
                            onChange={(e) => handleInputChange('profitBeforeInterestDepreciationTaxes', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="">
                        <div className="form-group d-flex align-items-center">
                            <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>51: Interest</strong></span>
                            <input
                                type="number"
                                name="interest"
                                value={values.interest}
                                onChange={(e) => handleInputChange('interest', e.target.value)}
                                className="form-control rounded-0 flex-grow-1"
                                style={{ maxWidth: 'calc(100% - 230px)' }}
                            />
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group d-flex align-items-center">
                                    <span style={{ marginLeft: '30px', minWidth: '200px' }}>51i: Paid outside India, or paid<br /> in India to a non-resident other<br /> than a company or a foreign company</span>
                                    <input
                                        type="number"
                                        name="interestPaidOutsideIndia"
                                        value={values.interestPaidOutsideIndia}
                                        onChange={(e) => handleInputChange('interestPaidOutsideIndia', e.target.value)}
                                        className="form-control rounded-0 flex-grow-1"
                                    />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <span style={{ marginLeft: '30px', minWidth: '200px' }}>51ii: To others</span>
                                    <input
                                        type="number"
                                        name="interestToOthers"
                                        value={values.interestToOthers}
                                        onChange={(e) => handleInputChange('interestToOthers', e.target.value)}
                                        className="form-control rounded-0 flex-grow-1"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group d-flex align-items-center">
                                    <span style={{ marginLeft: '30px', minWidth: '200px' }}>51iii: Total (i + ii)</span>
                                    <input
                                        type="number"
                                        name="totalInterest"
                                        value={values.totalInterest}
                                        onChange={(e) => handleInputChange('totalInterest', e.target.value)}
                                        className="form-control rounded-0 flex-grow-1"
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>52: Depreciation and amortisation</strong></span>
                        <input
                            type="number"
                            name="depreciationAmortisation"
                            value={values.depreciationAmortisation}
                            onChange={(e) => handleInputChange('depreciationAmortisation', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>53: Net Profit before taxes</strong></span>
                        <input
                            type="number"
                            name="netProfitBeforeTaxes"
                            value={values.netProfitBeforeTaxes}
                            onChange={(e) => handleInputChange('netProfitBeforeTaxes', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>54: Provision for current tax</strong></span>
                        <input
                            type="number"
                            name="provisionForCurrentTax"
                            value={values.provisionForCurrentTax}
                            onChange={(e) => handleInputChange('provisionForCurrentTax', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>55: Provision for Deferred Tax</strong></span>
                        <input
                            type="number"
                            name="provisionForDeferredTax"
                            value={values.provisionForDeferredTax}
                            onChange={(e) => handleInputChange('provisionForDeferredTax', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>56: Profit after tax</strong></span>
                        <input
                            type="number"
                            name="profitAfterTax"
                            value={values.profitAfterTax}
                            onChange={(e) => handleInputChange('profitAfterTax', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>57: Balance brought forward from previous year</strong></span>
                        <input
                            type="number"
                            name="balanceBroughtForward"
                            value={values.balanceBroughtForward}
                            onChange={(e) => handleInputChange('balanceBroughtForward', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>58: Amount available for appropriation</strong></span>
                        <input
                            type="number"
                            name="amountAvailableForAppropriation"
                            value={values.amountAvailableForAppropriation}
                            onChange={(e) => handleInputChange('amountAvailableForAppropriation', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>59: Transferred to reserves and surplus</strong></span>
                        <input
                            type="number"
                            name="transferredToReservesAndSurplus"
                            value={values.transferredToReservesAndSurplus}
                            onChange={(e) => handleInputChange('transferredToReservesAndSurplus', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>60: Balance carried to balance sheet in proprietor’s account</strong></span>
                        <input
                            type="number"
                            name="balanceCarriedToBalanceSheet"
                            value={values.balanceCarriedToBalanceSheet}
                            onChange={(e) => handleInputChange('balanceCarriedToBalanceSheet', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PANDL3;