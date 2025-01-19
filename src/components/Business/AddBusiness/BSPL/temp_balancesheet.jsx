 import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './temp_balancesheet.css'; // Add this import
import PANDL from './p&l';
import PANDL2 from './P&L2.JSX';
import PANDL3 from './p&l3';

const BSPIncome = ({ balancesheet_profitloss = {} }) => {
    const [key, setKey] = useState('proprietorsFund');
    const [values, setValues] = useState({
        proprietorsCapital: "",
        revaluationReserve: "",
        capitalReserve: "",
        statutoryReserve: "",
        anyOtherReserve: "",
        totalReserves: "",
        totalProprietorsFund: "",
        foreignCurrencyLoans: "",
        rupeeLoansFromBanks: "",
        rupeeLoansFromOthers: "",
        totalRupeeLoans: "",
        totalSecuredLoans: "",
        unsecuredLoansFromBanks: "",
        unsecuredLoansFromOthers: "",
        totalUnsecuredLoans: "",
        totalLoanFunds: "",
        deferredTaxLiability: "",
        advancesFromPersons: "",
        advancesFromOthers: "",
        totalAdvances: "",
        totalSourcesOfFunds: "",
        grossBlock: 0,
        depreciation: 0,
        netBlock: 0,
        capitalWorkInProgress: 0,
        totalFixedAssets: 0,
        longTermInvestments: 0,
        govSecuritiesQuoted: 0,
        govSecuritiesUnquoted: 0,
        totalGovSecurities: 0,
        currentAssets: 0,
        inventories: 0,
        sundryDebtors: 0,
        cashBankBalances: 0,
        totalCurrentAssets: 0,
        // Manufacturing Account fields
        openingStockRawMaterial: 0,
        openingStockWorkInProgress: 0,
        totalOpeningStock: 0,
        purchases: 0,
        directWages: 0,
        carriageInward: 0,
        powerAndFuel: 0,
        otherDirectExpenses: 0,
        totalDirectExpenses: 0,
        indirectWages: 0,
        factoryRentAndRates: 0,
        factoryInsurance: 0,
        factoryFuelAndPower: 0,
        factoryGeneralExpenses: 0,
        depreciationOfFactoryMachinery: 0,
        totalFactoryOverheads: 0,
        totalDebitsToManufacturingAccount: 0,
        closingStockRawMaterial: 0,
        closingStockWorkInProgress: 0,
        totalClosingStock: 0,
        costOfGoodsProduced: 0,
        // Trading Account fields
        saleOfGoods: 0,
        saleOfServices: 0,
        otherOperatingRevenues: 0,
        otherOperatingRevenuesAmount: 0,
        grossReceiptsFromProfession: 0,
        salesGoodsReceipts: 0,
        unionExciseDutiesTrade: 0,
        serviceTaxTrade: 0,
        vatSalesTaxTrade: 0,
        cgstTrade: 0,
        sgstTrade: 0,
        igstTrade: 0,
        utgstTrade: 0,
        otherDutyTaxCessTrade: 0,
        dutiesTaxesCessReceived: 0,
        totalDutiesTaxesCessTrade: 0,
        totalRevenueFromOperations: 0,
        closingStockFinishedGoods: 0,
        totalCreditsToTradingAccount: 0,
        openingStockFinishedGoods: 0,
        purchasesNetOfRefunds: 0,
        tradingCarriageInward: 0,
        tradingPowerAndFuel: 0,
        tradingOtherDirectExpenses: 0,
        totalTradingDirectExpenses: 0,
        grossProfitFromBusiness: 0
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
            // Calculate total reserves (1bv)
            totalReserves:
                prev.revaluationReserve +
                prev.capitalReserve +
                prev.statutoryReserve +
                prev.anyOtherReserve,

            // Calculate total proprietor's fund (1c)
            totalProprietorsFund:
                prev.proprietorsCapital +
                (prev.revaluationReserve + prev.capitalReserve + prev.statutoryReserve + prev.anyOtherReserve),

            // Calculate total rupee loans (2aiiC)
            totalRupeeLoans:
                prev.rupeeLoansFromBanks + prev.rupeeLoansFromOthers,

            // Calculate total secured loans (2aiii)
            totalSecuredLoans:
                prev.foreignCurrencyLoans +
                (prev.rupeeLoansFromBanks + prev.rupeeLoansFromOthers),

            // Calculate total unsecured loans (2biii)
            totalUnsecuredLoans:
                prev.unsecuredLoansFromBanks + prev.unsecuredLoansFromOthers,

            // Calculate total loan funds (2c)
            totalLoanFunds:
                (prev.foreignCurrencyLoans + prev.rupeeLoansFromBanks + prev.rupeeLoansFromOthers) +
                (prev.unsecuredLoansFromBanks + prev.unsecuredLoansFromOthers),

            // Calculate total advances (4iii)
            totalAdvances:
                prev.advancesFromPersons + prev.advancesFromOthers,

            // Calculate total sources of funds (5)
            totalSourcesOfFunds:
                (prev.proprietorsCapital + prev.totalReserves) + // 1c
                prev.totalLoanFunds + // 2c
                prev.deferredTaxLiability + // 3
                (prev.advancesFromPersons + prev.advancesFromOthers), // 4iii

            // Calculate Net Block (1c)
            netBlock: prev.grossBlock - prev.depreciation,

            // Calculate Total Fixed Assets (1e)
            totalFixedAssets: (prev.grossBlock - prev.depreciation) + prev.capitalWorkInProgress,

            // Calculate Total Government Securities (2aiii)
            totalGovSecurities: prev.govSecuritiesQuoted + prev.govSecuritiesUnquoted,

            // Calculate Total Current Assets (3aiv)
            totalCurrentAssets: prev.inventories + prev.sundryDebtors + prev.cashBankBalances,

            // Calculate Total Opening Stock (1aiii)
            totalOpeningStock:
                prev.openingStockRawMaterial +
                prev.openingStockWorkInProgress,

            // Calculate Total Direct Expenses
            totalDirectExpenses:
                prev.carriageInward +
                prev.powerAndFuel +
                prev.otherDirectExpenses,

            // Calculate Total Factory Overheads (1evii)
            totalFactoryOverheads:
                prev.indirectWages +
                prev.factoryRentAndRates +
                prev.factoryInsurance +
                prev.factoryFuelAndPower +
                prev.factoryGeneralExpenses +
                prev.depreciationOfFactoryMachinery,

            // Calculate Total Debits to Manufacturing Account (1f)
            totalDebitsToManufacturingAccount:
                prev.totalOpeningStock +
                prev.purchases +
                prev.directWages +
                prev.totalDirectExpenses +
                prev.totalFactoryOverheads,

            // Calculate Total Closing Stock (2aiii)
            totalClosingStock:
                prev.closingStockRawMaterial +
                prev.closingStockWorkInProgress,

            // Calculate Cost of Goods Produced (3)
            costOfGoodsProduced:
                prev.totalDebitsToManufacturingAccount - prev.totalClosingStock,

            // Calculate Total Revenue from Operations (4aiv)
            totalRevenueFromOperations:
                prev.saleOfGoods +
                prev.saleOfServices +
                prev.otherOperatingRevenues,

            // Calculate Total Duties/Taxes/Cess (4cix)
            totalDutiesTaxesCess:
                prev.unionExciseDuties +
                prev.serviceTax +
                prev.vatSalesTax +
                prev.cgst +
                prev.sgst +
                prev.igst +
                prev.utgst +
                prev.otherDutyTaxCess,

            // Calculate Total Revenue with Duties (4d)
            totalRevenueWithDuties:
                (prev.saleOfGoods + prev.saleOfServices + prev.otherOperatingRevenues) +
                prev.grossReceiptsFromProfession +
                prev.totalDutiesTaxesCess,

            // Calculate Total Trading Direct Expenses (9aiiiA)
            totalTradingDirectExpenses:
                prev.tradingCarriageInward +
                prev.tradingPowerAndFuel +
                prev.tradingOtherDirectExpenses,

            // Calculate Total Duties and Taxes Paid (10axii)
            totalDutiesTaxesPaid:
                prev.customDuty +
                prev.counterVeilingDuty +
                prev.specialAdditionalDuty +
                prev.unionExciseDutyPaid +
                prev.serviceTaxPaid +
                prev.vatSalesTaxPaid +
                prev.cgstPaid +
                prev.sgstPaid +
                prev.igstPaid +
                prev.utgstPaid +
                prev.otherTaxPaidOrPayable,

            // Calculate Total Credits to Trading Account (6)
            totalCreditsToTradingAccount:
                prev.totalRevenueWithDuties +
                prev.closingStockFinishedGoods,

            // Calculate Gross Profit (12)
            grossProfitFromBusiness:
                prev.totalCreditsToTradingAccount -
                prev.openingStockFinishedGoods -
                prev.purchasesNetOfRefunds -
                prev.totalTradingDirectExpenses -
                prev.totalDutiesTaxesPaid -
                prev.costOfGoodsProducedTransferred
        }));
    }, [
        values.proprietorsCapital, values.revaluationReserve, values.capitalReserve,
        values.statutoryReserve, values.anyOtherReserve, values.foreignCurrencyLoans,
        values.rupeeLoansFromBanks, values.rupeeLoansFromOthers, values.unsecuredLoansFromBanks,
        values.unsecuredLoansFromOthers, values.deferredTaxLiability, values.advancesFromPersons,
        values.advancesFromOthers, values.grossBlock, values.depreciation,
        values.capitalWorkInProgress, values.govSecuritiesQuoted,
        values.govSecuritiesUnquoted, values.inventories,
        values.sundryDebtors, values.cashBankBalances,
        values.openingStockRawMaterial, values.openingStockWorkInProgress,
        values.purchases, values.directWages, values.carriageInward,
        values.powerAndFuel, values.otherDirectExpenses, values.indirectWages,
        values.factoryRentAndRates, values.factoryInsurance, values.factoryFuelAndPower,
        values.factoryGeneralExpenses, values.depreciationOfFactoryMachinery,
        values.closingStockRawMaterial, values.closingStockWorkInProgress,
        values.saleOfGoods,
        values.saleOfServices,
        values.otherOperatingRevenues,
        values.grossReceiptsFromProfession,
        values.unionExciseDuties,
        values.serviceTax,
        values.vatSalesTax,
        values.cgst,
        values.sgst,
        values.igst,
        values.utgst,
        values.otherDutyTaxCess,
        values.closingStockFinishedGoods,
        values.openingStockFinishedGoods,
        values.purchasesNetOfRefunds,
        values.tradingCarriageInward,
        values.tradingPowerAndFuel,
        values.tradingOtherDirectExpenses,
        values.customDuty,
        values.counterVeilingDuty,
        values.specialAdditionalDuty,
        values.unionExciseDutyPaid,
        values.serviceTaxPaid,
        values.vatSalesTaxPaid,
        values.cgstPaid,
        values.sgstPaid,
        values.igstPaid,
        values.utgstPaid,
        values.otherTaxPaidOrPayable,
        values.costOfGoodsProducedTransferred
    ]);

    // Add to useEffect or create new one for Trading Account calculations
    useEffect(() => {
        setValues(prev => ({
            ...prev,
            // 4aiv: Total Revenue from Operations
            totalRevenueFromOperations:
                parseFloat(prev.saleOfGoods || 0) +
                parseFloat(prev.saleOfServices || 0) +
                parseFloat(prev.otherOperatingRevenuesAmount || 0),

            // 4cix: Total Duties, Taxes and Cess received
            totalDutiesTaxesCessTrade:
                parseFloat(prev.unionExciseDutiesTrade || 0) +
                parseFloat(prev.serviceTaxTrade || 0) +
                parseFloat(prev.vatSalesTaxTrade || 0) +
                parseFloat(prev.cgstTrade || 0) +
                parseFloat(prev.sgstTrade || 0) +
                parseFloat(prev.igstTrade || 0) +
                parseFloat(prev.utgstTrade || 0) +
                parseFloat(prev.otherDutyTaxCessTrade || 0),

            // 4d: Total Revenue with Duties and Taxes
            totalRevenueWithDuties: (
                parseFloat(prev.saleOfGoods || 0) +
                parseFloat(prev.saleOfServices || 0) +
                parseFloat(prev.otherOperatingRevenuesAmount || 0) +
                parseFloat(prev.grossReceiptsFromProfession || 0) +
                (parseFloat(prev.unionExciseDutiesTrade || 0) +
                    parseFloat(prev.serviceTaxTrade || 0) +
                    parseFloat(prev.vatSalesTaxTrade || 0) +
                    parseFloat(prev.cgstTrade || 0) +
                    parseFloat(prev.sgstTrade || 0) +
                    parseFloat(prev.igstTrade || 0) +
                    parseFloat(prev.utgstTrade || 0) +
                    parseFloat(prev.otherDutyTaxCessTrade || 0))
            ),

            // 6: Total Credits to Trading Account
            totalCreditsToTradingAccount:
                (parseFloat(prev.saleOfGoods || 0) +
                    parseFloat(prev.saleOfServices || 0) +
                    parseFloat(prev.otherOperatingRevenuesAmount || 0) +
                    parseFloat(prev.grossReceiptsFromProfession || 0) +
                    parseFloat(prev.totalDutiesTaxesCessTrade || 0)) +
                parseFloat(prev.closingStockFinishedGoods || 0),

            // 9aiiiA: Total Trading Direct Expenses
            totalTradingDirectExpenses:
                parseFloat(prev.tradingCarriageInward || 0) +
                parseFloat(prev.tradingPowerAndFuel || 0) +
                parseFloat(prev.tradingOtherDirectExpenses || 0),

            // 12: Gross Profit from Business
            grossProfitFromBusiness:
                (parseFloat(prev.totalCreditsToTradingAccount || 0)) -
                parseFloat(prev.openingStockFinishedGoods || 0) -
                parseFloat(prev.purchasesNetOfRefunds || 0) -
                parseFloat(prev.totalTradingDirectExpenses || 0) -
                parseFloat(prev.totalDutiesTaxesPaid || 0) -
                parseFloat(prev.costOfGoodsProducedTransferred || 0)
        }));
    }, [
        values.saleOfGoods,
        values.saleOfServices,
        values.otherOperatingRevenuesAmount,
        values.grossReceiptsFromProfession,
        values.unionExciseDutiesTrade,
        values.serviceTaxTrade,
        values.vatSalesTaxTrade,
        values.cgstTrade,
        values.sgstTrade,
        values.igstTrade,
        values.utgstTrade,
        values.otherDutyTaxCessTrade,
        values.closingStockFinishedGoods,
        values.openingStockFinishedGoods,
        values.purchasesNetOfRefunds,
        values.tradingCarriageInward,
        values.tradingPowerAndFuel,
        values.tradingOtherDirectExpenses,
        values.totalDutiesTaxesPaid,
        values.costOfGoodsProducedTransferred,
        values.totalDutiesTaxesCessTrade
    ]);

    return (
        <div className="pt-3 balance-sheet-container">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 custom-tabs"
            >
                <Tab eventKey="sourcesFund" title="Sources of Funds">
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
                                                type="text"
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
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1bii: Capital Reserve</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1biii: Statutory Reserve</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1biv: Any other Reserve</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1bv: Total (bi+bii+biii+biv)</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1c: Total proprietor's fund (a + bv)</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
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
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2ai: Foreign Currency Loans</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aii: Rupee Loans</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aiiA: From Banks</span>
                                            <input
                                                type="text"
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
                </Tab>
                <Tab eventKey="applicationFunds" title="Applications of Funds">
                    <form method="POST">
                        <div className="card card-body text-content">
                            <div className="">
                                <div>
                                    <strong>1: Fixed assets</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1a: Gross: Block</span>
                                            <input
                                                type="number"
                                                name="grossBlock"
                                                value={values.grossBlock}
                                                onChange={(e) => handleInputChange('grossBlock', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1b: Depreciation</span>
                                            <input
                                                type="number"
                                                name="depreciation"
                                                value={values.depreciation}
                                                onChange={(e) => handleInputChange('depreciation', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1e: Total(1c + 1d)</span>
                                            <input
                                                type="number"
                                                name="totalFixedAssets"
                                                value={values.totalFixedAssets}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1c: Net Block(1a-1b)</span>
                                            <input
                                                type="number"
                                                name="netBlock"
                                                value={values.netBlock}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1d: Capital work in progress</span>
                                            <input
                                                type="number"
                                                name="capitalWorkInProgress"
                                                value={values.capitalWorkInProgress}
                                                onChange={(e) => handleInputChange('capitalWorkInProgress', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <strong>2: Investments</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2a: Long-term investments</span>
                                            <input
                                                type="number"
                                                name="longTermInvestments"
                                                value={values.longTermInvestments}
                                                onChange={(e) => handleInputChange('longTermInvestments', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2ai: Government and other Securities - Quoted</span>
                                            <input
                                                type="number"
                                                name="govSecuritiesQuoted"
                                                value={values.govSecuritiesQuoted}
                                                onChange={(e) => handleInputChange('govSecuritiesQuoted', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aii: Government and other Securities - Unquoted</span>
                                            <input
                                                type="number"
                                                name="govSecuritiesUnquoted"
                                                value={values.govSecuritiesUnquoted}
                                                onChange={(e) => handleInputChange('govSecuritiesUnquoted', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aiii: Total(ai + aii)</span>
                                            <input
                                                type="number"
                                                name="totalGovSecurities"
                                                value={values.totalGovSecurities}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div>
                                    <strong>3: Current assets, loans and advances</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>3a: Current assets</span>
                                            <input
                                                type="number"
                                                name="currentAssets"
                                                value={values.currentAssets}
                                                onChange={(e) => handleInputChange('currentAssets', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>3ai: Inventories</span>
                                            <input
                                                type="number"
                                                name="inventories"
                                                value={values.inventories}
                                                onChange={(e) => handleInputChange('inventories', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>3aii: Sundry Debtors</span>
                                            <input
                                                type="number"
                                                name="sundryDebtors"
                                                value={values.sundryDebtors}
                                                onChange={(e) => handleInputChange('sundryDebtors', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>3aiii: Cash and Bank Balances</span>
                                            <input
                                                type="number"
                                                name="cashBankBalances"
                                                value={values.cashBankBalances}
                                                onChange={(e) => handleInputChange('cashBankBalances', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>3aiv: Total Current Assets (i + ii + iii)</span>
                                            <input
                                                type="number"
                                                name="totalCurrentAssets"
                                                value={values.totalCurrentAssets}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Tab>
                <Tab eventKey="manuFacAccount" title="Manufacturing Account">
                    <form method="POST">
                        <div className="card card-body text-content">
                            <div className="">
                                <div>
                                    <strong>1: Opening Inventory</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1ai: Opening stock of raw-material</span>
                                            <input
                                                type="number"
                                                name="openingStockRawMaterial"
                                                value={values.openingStockRawMaterial}
                                                onChange={(e) => handleInputChange('openingStockRawMaterial', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1aii: Opening stock of Work in progress</span>
                                            <input
                                                type="number"
                                                name="openingStockWorkInProgress"
                                                value={values.openingStockWorkInProgress}
                                                onChange={(e) => handleInputChange('openingStockWorkInProgress', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>

                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1aiii: Total (i + ii)</span>
                                            <input
                                                type="number"
                                                name="totalOpeningStock"
                                                value={values.totalOpeningStock}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1b: Purchases (net of refunds and duty or tax, if any)</span>
                                            <input
                                                type="number"
                                                name="purchases"
                                                value={values.purchases}
                                                onChange={(e) => handleInputChange('purchases', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1c: Direct wages</span>
                                            <input
                                                type="number"
                                                name="directWages"
                                                value={values.directWages}
                                                onChange={(e) => handleInputChange('directWages', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1d: Direct expenses</span>
                                            <input
                                                type="number"
                                                name="directExpenses"
                                                value={values.directExpenses}
                                                onChange={(e) => handleInputChange('directExpenses', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1di: Carriage inward</span>
                                            <input
                                                type="number"
                                                name="carriageInward"
                                                value={values.carriageInward}
                                                onChange={(e) => handleInputChange('carriageInward', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1dii: Power and fuel</span>
                                            <input
                                                type="number"
                                                name="powerAndFuel"
                                                value={values.powerAndFuel}
                                                onChange={(e) => handleInputChange('powerAndFuel', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1diii: Other direct expenses</span>
                                            <input
                                                type="number"
                                                name="otherDirectExpenses"
                                                value={values.otherDirectExpenses}
                                                onChange={(e) => handleInputChange('otherDirectExpenses', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1e: Factory Overheads</span>
                                            <input
                                                type="number"
                                                name="factoryOverheads"
                                                value={values.factoryOverheads}
                                                onChange={(e) => handleInputChange('factoryOverheads', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1ei: Indirect wages</span>
                                            <input
                                                type="number"
                                                name="indirectWages"
                                                value={values.indirectWages}
                                                onChange={(e) => handleInputChange('indirectWages', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1eii: Factory rent and rates</span>
                                            <input
                                                type="number"
                                                name="factoryRentAndRates"
                                                value={values.factoryRentAndRates}
                                                onChange={(e) => handleInputChange('factoryRentAndRates', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1eiii: Factory Insurance</span>
                                            <input
                                                type="number"
                                                name="factoryInsurance"
                                                value={values.factoryInsurance}
                                                onChange={(e) => handleInputChange('factoryInsurance', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1eiv: Factory fuel and power</span>
                                            <input
                                                type="number"
                                                name="factoryFuelAndPower"
                                                value={values.factoryFuelAndPower}
                                                onChange={(e) => handleInputChange('factoryFuelAndPower', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1ev: Factory general expenses</span>
                                            <input
                                                type="number"
                                                name="factoryGeneralExpenses"
                                                value={values.factoryGeneralExpenses}
                                                onChange={(e) => handleInputChange('factoryGeneralExpenses', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1evi: Depreciation of factory machinery</span>
                                            <input
                                                type="number"
                                                name="depreciationOfFactoryMachinery"
                                                value={values.depreciationOfFactoryMachinery}
                                                onChange={(e) => handleInputChange('depreciationOfFactoryMachinery', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1evii: Total (i+ii+iii+iv+v+vi)</span>
                                            <input
                                                type="number"
                                                name="totalFactoryOverheads"
                                                value={values.totalFactoryOverheads}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>1f: Total of Debits to<br /> Manufacturing Account (Aiii+B+C+D+Evii)</span>
                                            <input
                                                type="number"
                                                name="totalDebitsToManufacturingAccount"
                                                value={values.totalDebitsToManufacturingAccount}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />



                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <strong>2: Closing Stock</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2ai: Raw material</span>
                                            <input
                                                type="number"
                                                name="closingStockRawMaterial"
                                                value={values.closingStockRawMaterial}
                                                onChange={(e) => handleInputChange('closingStockRawMaterial', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aii: Work-in-progresss</span>
                                            <input
                                                type="number"
                                                name="closingStockWorkInProgress"
                                                value={values.closingStockWorkInProgress}
                                                onChange={(e) => handleInputChange('closingStockWorkInProgress', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>



                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>2aiii: Total (2i +2ii)</span>
                                            <input
                                                type="number"
                                                name="totalClosingStock"
                                                value={values.totalClosingStock}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>3: Cost of Goods <br />Produced – transferred to <br />Trading Account (1F-2)</strong></span>
                                <input
                                    type="number"
                                    name="costOfGoodsProduced"
                                    value={values.costOfGoodsProduced}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                    style={{ maxWidth: 'calc(100% - 230px)' }}
                                />
                            </div>
                        </div>
                    </form>
                </Tab>
                <Tab eventKey="tradingAccount" title="Trading Account">
                    <form method="POST">
                        <div className="card card-body text-content">
                            <div className="">
                                <div>
                                    <strong>4: Revenue from operations</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4a: Sales/ Gross receipts of business</span>
                                            <input
                                                type="number"
                                                name="salesGoodsReceipts"
                                                value={values.salesGoodsReceipts}
                                                onChange={(e) => handleInputChange('salesGoodsReceipts', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4ai: Sale of goods</span>
                                            <input
                                                type="number"
                                                name="saleOfGoods"
                                                value={values.saleOfGoods}
                                                onChange={(e) => handleInputChange('saleOfGoods', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>

                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4aii: Sale of services  </span>
                                            <input
                                                type="number"
                                                name="saleOfServices"
                                                value={values.saleOfServices}
                                                onChange={(e) => handleInputChange('saleOfServices', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4aiii: Other operating revenues (specify nature and amount)</span>
                                            <input
                                                type="number"
                                                name="otherOperatingRevenues"
                                                value={values.otherOperatingRevenues}
                                                onChange={(e) => handleInputChange('otherOperatingRevenues', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1 mr-2"
                                            />
                                            <input
                                                type="number"
                                                name="otherOperatingRevenuesAmount"
                                                value={values.otherOperatingRevenuesAmount}
                                                onChange={(e) => handleInputChange('otherOperatingRevenuesAmount', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4aiv: Total(i+ii+iii)</span>
                                            <input
                                                type="number"
                                                name="totalRevenueFromOperations"
                                                value={values.totalRevenueFromOperations}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4b: Gross receipts from Profession</span>
                                            <input
                                                type="number"
                                                name="grossReceiptsFromProfession"
                                                value={values.grossReceiptsFromProfession}
                                                onChange={(e) => handleInputChange('grossReceiptsFromProfession', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4c: Duties, taxes and cess received or
                                                receivable <br />in respect of goods and services sold or supplied</span>
                                            <input
                                                type="number"
                                                name="dutiesTaxesCessReceived"
                                                value={values.dutiesTaxesCessReceived}
                                                onChange={(e) => handleInputChange('dutiesTaxesCessReceived', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div><div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4ci: Union Excise duties</span>
                                            <input
                                                type="number"
                                                name="unionExciseDutiesTrade"
                                                value={values.unionExciseDutiesTrade}
                                                onChange={(e) => handleInputChange('unionExciseDutiesTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4cii: Service Taxs</span>
                                            <input
                                                type="number"
                                                name="serviceTaxTrade"
                                                value={values.serviceTaxTrade}
                                                onChange={(e) => handleInputChange('serviceTaxTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>

                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>5: Closing Stock of Finished Stocks</strong></span>
                                            <input
                                                type="number"
                                                name="closingStockFinishedGoods"
                                                value={values.closingStockFinishedGoods}
                                                onChange={(e) => handleInputChange('closingStockFinishedGoods', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                                style={{ maxWidth: 'calc(100% - 230px)' }}
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>6: Total of credits to Trading Account (4D + 5 )</strong></span>
                                            <input
                                                type="number"
                                                name="totalCreditsToTradingAccount"
                                                value={values.totalCreditsToTradingAccount}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                                style={{ maxWidth: 'calc(100% - 230px)' }}
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>7: Opening Stock of Finished Goods</strong></span>
                                            <input
                                                type="number"
                                                name="openingStockFinishedGoods"
                                                value={values.openingStockFinishedGoods}
                                                onChange={(e) => handleInputChange('openingStockFinishedGoods', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                                style={{ maxWidth: 'calc(100% - 230px)' }}
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>8: Purchases (net of refunds and duty or tax, if any)</strong></span>
                                            <input
                                                type="number"
                                                name="purchasesNetOfRefunds"
                                                value={values.purchasesNetOfRefunds}
                                                onChange={(e) => handleInputChange('purchasesNetOfRefunds', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                                style={{ maxWidth: 'calc(100% - 230px)' }}
                                            />
                                        </div>


                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4ciii: VAT/ Sales tax</span>
                                            <input
                                                type="number"
                                                name="vatSalesTaxTrade"
                                                value={values.vatSalesTaxTrade}
                                                onChange={(e) => handleInputChange('vatSalesTaxTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4civ: Central Goods & Service Tax (CGST)</span>
                                            <input
                                                type="number"
                                                name="cgstTrade"
                                                value={values.cgstTrade}
                                                onChange={(e) => handleInputChange('cgstTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4cv: State Goods & Services Tax (SGST)</span>
                                            <input
                                                type="number"
                                                name="sgstTrade"
                                                value={values.sgstTrade}
                                                onChange={(e) => handleInputChange('sgstTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4cvi: Integrated Goods & Services Tax (IGST)</span>
                                            <input
                                                type="number"
                                                name="igstTrade"
                                                value={values.igstTrade}
                                                onChange={(e) => handleInputChange('igstTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4cvii: Union Territory Goods & Services Tax (UTGST)</span>
                                            <input
                                                type="number"
                                                name="utgstTrade"
                                                value={values.utgstTrade}
                                                onChange={(e) => handleInputChange('utgstTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4cviii: Any other duty, tax and cess</span>
                                            <input
                                                type="number"
                                                name="otherDutyTaxCessTrade"
                                                value={values.otherDutyTaxCessTrade}
                                                onChange={(e) => handleInputChange('otherDutyTaxCessTrade', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4cix: Total (i + ii + iii + iv +v+ vi+vii+viii)</span>
                                            <input
                                                type="number"
                                                name="totalDutiesTaxesCessTrade"
                                                value={values.totalDutiesTaxesCessTrade}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>4d: Total Revenue from operations (Aiv + B +Cix)</span>
                                            <input
                                                type="number"
                                                name="totalRevenueFromOperations"
                                                value={values.totalRevenueFromOperations}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <strong>9: Direct Expenses</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>9ai: Carriage inward</span>
                                            <input
                                                type="number"
                                                name="tradingCarriageInward"
                                                value={values.tradingCarriageInward}
                                                onChange={(e) => handleInputChange('tradingCarriageInward', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>


                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>9aiii: Other direct expenses</span>
                                            <input
                                                type="number"
                                                name="tradingOtherDirectExpenses"
                                                value={values.tradingOtherDirectExpenses}
                                                onChange={(e) => handleInputChange('tradingOtherDirectExpenses', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1 mr-2"
                                            />
                                            <input
                                                type="number"
                                                name="otherDirectExpensesAmount"
                                                value={values.otherDirectExpensesAmount}
                                                onChange={(e) => handleInputChange('otherDirectExpensesAmount', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>9aii: Power and fuel</span>
                                            <input
                                                type="number"
                                                name="tradingPowerAndFuel"
                                                value={values.tradingPowerAndFuel}
                                                onChange={(e) => handleInputChange('tradingPowerAndFuel', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>9aiiiA: Total</span>
                                            <input
                                                type="number"
                                                name="totalTradingDirectExpenses"
                                                value={values.totalTradingDirectExpenses}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <strong>10: Duties and taxes, paid or payable, in respect of goods and services purchased</strong>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10ai: Custom duty</span>
                                            <input
                                                type="number"
                                                name="customDuty"
                                                value={values.customDuty}
                                                onChange={(e) => handleInputChange('customDuty', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>


                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10aii: Counter veiling duty</span>
                                            <input
                                                type="number"
                                                name="counterVeilingDuty"
                                                value={values.counterVeilingDuty}
                                                onChange={(e) => handleInputChange('counterVeilingDuty', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1 "
                                            />

                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10aiii: Special additional duty</span>
                                            <input
                                                type="number"
                                                name="specialAdditionalDuty"
                                                value={values.specialAdditionalDuty}
                                                onChange={(e) => handleInputChange('specialAdditionalDuty', e.target.value)}
                                                className="form-contr ol rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10aiv: Union excise duty</span>
                                            <input
                                                type="number"
                                                name="unionExciseDuty"
                                                value={values.unionExciseDuty}
                                                onChange={(e) => handleInputChange('unionExciseDuty', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10av: Service Tax</span>
                                            <input
                                                type="number"
                                                name="serviceTax"
                                                value={values.serviceTax}
                                                onChange={(e) => handleInputChange('serviceTax', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10avi: VAT/ Sales tax</span>
                                            <input
                                                type="number"
                                                name="vatSalesTax"
                                                value={values.vatSalesTax}
                                                onChange={(e) => handleInputChange('vatSalesTax', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10avii: Central Goods & Service Tax (CGST)</span>
                                            <input
                                                type="number"
                                                name="cgst"
                                                value={values.cgst}
                                                onChange={(e) => handleInputChange('cgst', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10aviii: State Goods & Services Tax (SGST)</span>
                                            <input
                                                type="number"
                                                name="sgst"
                                                value={values.sgst}
                                                onChange={(e) => handleInputChange('sgst', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10aix: Integrated Goods & Services Tax (IGST)</span>
                                            <input
                                                type="number"
                                                name="igst"
                                                value={values.igst}
                                                onChange={(e) => handleInputChange('igst', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10ax: Union Territory Goods & Services Tax (UTGST)</span>
                                            <input
                                                type="number"
                                                name="utgst"
                                                value={values.utgst}
                                                onChange={(e) => handleInputChange('utgst', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10axi: Any other tax, paid or payable</span>
                                            <input
                                                type="number"
                                                name="otherTaxPaidOrPayable"
                                                value={values.otherTaxPaidOrPayable}
                                                onChange={(e) => handleInputChange('otherTaxPaidOrPayable', e.target.value)}
                                                className="form-control rounded-0 flex-grow-1"
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <span style={{ marginLeft: '30px', minWidth: '200px' }}>10axii: Total (10i + 10ii + 10iii + <br /> 10iv + 10v + 10vi + 10vii + 10viii + 10ix + 10x + 10xi)</span>
                                            <input
                                                type="number"
                                                name="totalDutiesTaxesPaid"
                                                value={values.totalDutiesTaxesPaid}
                                                className="form-control rounded-0 flex-grow-1"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>11: Cost of goods produced - <br />Transferred from Manufacturing Account</strong></span>
                                <input
                                    type="number"
                                    name="costOfGoodsProducedTransferred"
                                    value={values.costOfGoodsProducedTransferred}
                                    onChange={(e) => handleInputChange('costOfGoodsProducedTransferred', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                    style={{ maxWidth: 'calc(100% - 230px)' }}
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>12: Gross Profit from <br />Business/Profession - transferred<br /> to Profit and<br /> Loss account (6-7-8-9-10xii-11)</strong></span>
                                <input
                                    type="number"
                                    name="grossProfitFromBusiness"
                                    value={values.grossProfitFromBusiness}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                    style={{ maxWidth: 'calc(100% - 230px)' }}
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>12a: Turnover from Intraday Trading</span>
                                <input
                                    type="number"
                                    name="turnoverFromIntradayTrading"
                                    value={values.turnoverFromIntradayTrading}
                                    onChange={(e) => handleInputChange('turnoverFromIntradayTrading', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>12b: Income from Intraday Trading - transferred to Profit and Loss account</span>
                                <input
                                    type="number"
                                    name="incomeFromIntradayTrading"
                                    value={values.incomeFromIntradayTrading}
                                    onChange={(e) => handleInputChange('incomeFromIntradayTrading', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                    </form>
                </Tab>

                <Tab eventKey="P&L" title="P & L">
                    <PANDL /> 
                </Tab>
                <Tab eventKey="P&L2" title="P & L">
                    <PANDL2 />
                </Tab>
                <Tab eventKey="P&L3" title="P & L">
                    <PANDL3 />
                </Tab>
            </Tabs>
        </div >
    );
};

export default BSPIncome;