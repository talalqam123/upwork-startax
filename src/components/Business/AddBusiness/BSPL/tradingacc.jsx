import React, { useState, useEffect } from "react";

const TradingAcc = () => {
    const [values, setValues] = useState({
        // Revenue from operations
        salesGoodsReceipts: 0,
        saleOfGoods: 0,
        saleOfServices: 0,
        otherOperatingRevenues: 0,
        otherOperatingRevenuesAmount: 0,
        totalRevenueFromOperations: 0,
        grossReceiptsFromProfession: 0,
        dutiesTaxesCessReceived: 0,
        
        // Duties and taxes received
        unionExciseDutiesTrade: 0,
        serviceTaxTrade: 0,
        vatSalesTaxTrade: 0,
        cgstTrade: 0,
        sgstTrade: 0,
        igstTrade: 0,
        utgstTrade: 0,
        otherDutyTaxCessTrade: 0,
        totalDutiesTaxesCessTrade: 0,
        
        // Stock and credits
        closingStockFinishedGoods: 0,
        totalCreditsToTradingAccount: 0,
        openingStockFinishedGoods: 0,
        purchasesNetOfRefunds: 0,
        
        // Direct expenses
        tradingCarriageInward: 0,
        tradingPowerAndFuel: 0,
        tradingOtherDirectExpenses: 0,
        otherDirectExpensesAmount: 0,
        totalTradingDirectExpenses: 0,
        
        // Duties and taxes paid
        customDuty: 0,
        counterVeilingDuty: 0,
        specialAdditionalDuty: 0,
        unionExciseDuty: 0,
        serviceTax: 0,
        vatSalesTax: 0,
        cgst: 0,
        sgst: 0,
        igst: 0,
        utgst: 0,
        otherTaxPaidOrPayable: 0,
        totalDutiesTaxesPaid: 0,
        
        // Cost and profit
        costOfGoodsProducedTransferred: 0,
        grossProfitFromBusiness: 0,
        turnoverFromIntradayTrading: 0,
        incomeFromIntradayTrading: 0
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
            // Calculate Total Revenue from Operations (4aiv)
            totalRevenueFromOperations:
                parseFloat(prev.saleOfGoods || 0) +
                parseFloat(prev.saleOfServices || 0) +
                parseFloat(prev.otherOperatingRevenuesAmount || 0),

            // Calculate Total Duties, Taxes and Cess received (4cix)
            totalDutiesTaxesCessTrade:
                parseFloat(prev.unionExciseDutiesTrade || 0) +
                parseFloat(prev.serviceTaxTrade || 0) +
                parseFloat(prev.vatSalesTaxTrade || 0) +
                parseFloat(prev.cgstTrade || 0) +
                parseFloat(prev.sgstTrade || 0) +
                parseFloat(prev.igstTrade || 0) +
                parseFloat(prev.utgstTrade || 0) +
                parseFloat(prev.otherDutyTaxCessTrade || 0),

            // Calculate Total Trading Direct Expenses (9aiiiA)
            totalTradingDirectExpenses:
                parseFloat(prev.tradingCarriageInward || 0) +
                parseFloat(prev.tradingPowerAndFuel || 0) +
                parseFloat(prev.tradingOtherDirectExpenses || 0),

            // Calculate Total Duties and Taxes Paid (10axii)
            totalDutiesTaxesPaid:
                parseFloat(prev.customDuty || 0) +
                parseFloat(prev.counterVeilingDuty || 0) +
                parseFloat(prev.specialAdditionalDuty || 0) +
                parseFloat(prev.unionExciseDuty || 0) +
                parseFloat(prev.serviceTax || 0) +
                parseFloat(prev.vatSalesTax || 0) +
                parseFloat(prev.cgst || 0) +
                parseFloat(prev.sgst || 0) +
                parseFloat(prev.igst || 0) +
                parseFloat(prev.utgst || 0) +
                parseFloat(prev.otherTaxPaidOrPayable || 0),

            // Calculate Total Credits to Trading Account (6)
            totalCreditsToTradingAccount:
                parseFloat(prev.totalRevenueFromOperations || 0) +
                parseFloat(prev.grossReceiptsFromProfession || 0) +
                parseFloat(prev.totalDutiesTaxesCessTrade || 0) +
                parseFloat(prev.closingStockFinishedGoods || 0),

            // Calculate Gross Profit (12)
            grossProfitFromBusiness:
                parseFloat(prev.totalCreditsToTradingAccount || 0) -
                parseFloat(prev.openingStockFinishedGoods || 0) -
                parseFloat(prev.purchasesNetOfRefunds || 0) -
                parseFloat(prev.totalTradingDirectExpenses || 0) -
                parseFloat(prev.totalDutiesTaxesPaid || 0) -
                parseFloat(prev.costOfGoodsProducedTransferred || 0)
        }));
    }, [
        // ...Add all dependencies based on values used in calculations...
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
        values.customDuty,
        values.counterVeilingDuty,
        values.specialAdditionalDuty,
        values.unionExciseDuty,
        values.serviceTax,
        values.vatSalesTax,
        values.cgst,
        values.sgst,
        values.igst,
        values.utgst,
        values.otherTaxPaidOrPayable,
        values.costOfGoodsProducedTransferred,
        values.totalRevenueFromOperations,
        values.totalDutiesTaxesCessTrade,
        values.totalTradingDirectExpenses,
        values.totalDutiesTaxesPaid,
        values.totalCreditsToTradingAccount
    ]);

    return (
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
    );
};

export default TradingAcc;