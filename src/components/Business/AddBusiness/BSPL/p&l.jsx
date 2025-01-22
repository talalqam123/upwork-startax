import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';

const PANDL = () => {
    const [values, setValues] = useState({
        grossProfitFromTrading: "",
        otherIncome: "",
        rentIncome: "",
        commissionIncome: "",
        dividendIncome: "",
        interestIncome: "",
        profitOnSaleOfFixedAssets: "",
        profitOnSaleOfSecurities: "",
        profitOnSaleOfOtherInvestment: "",
        gainOnForeignExchangeFluctuation: "",
        profitOnConversionOfInventory: "",
        agriculturalIncome: "",
        otherIncomeNature: "",
        otherIncomeAmount: "",
        totalOtherIncome: "",
        totalCreditsToPLAccount: "",
        freightOutward: "",
        consumptionOfStoresAndSpareParts: "",
        powerAndFuel: "",
        rents: "",
        repairsToBuilding: "",
        repairsToMachinery: "",
        compensationToEmployees: "",
        salariesAndWages: "",
        bonus: "",
        reimbursementOfMedicalExpenses: "",
        leaveEncashment: "",
        leaveTravelBenefits: "",
        contributionToSuperannuationFund: "",
        contributionToProvidentFund: "",
        contributionToGratuityFund: "",
        contributionToOtherFund: "",
        otherBenefitToEmployees: "",
        totalCompensationToEmployees: "",
        compensationToNonResidents: "",
        amountPaidToNonResidents: ""
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
            // Calculate Total Other Income (14xii)
            totalOtherIncome:
                parseFloat(prev.rentIncome || 0) +
                parseFloat(prev.commissionIncome || 0) +
                parseFloat(prev.dividendIncome || 0) +
                parseFloat(prev.interestIncome || 0) +
                parseFloat(prev.profitOnSaleOfFixedAssets || 0) +
                parseFloat(prev.profitOnSaleOfSecurities || 0) +
                parseFloat(prev.profitOnSaleOfOtherInvestment || 0) +
                parseFloat(prev.gainOnForeignExchangeFluctuation || 0) +
                parseFloat(prev.profitOnConversionOfInventory || 0) +
                parseFloat(prev.agriculturalIncome || 0) +
                parseFloat(prev.otherIncomeAmount || 0),

            // Calculate Total Credits to P&L Account (15)
            totalCreditsToPLAccount:
                parseFloat(prev.grossProfitFromTrading || 0) +
                parseFloat(prev.totalOtherIncome || 0),

            // Calculate Total Compensation to Employees (22xi)
            totalCompensationToEmployees:
                parseFloat(prev.salariesAndWages || 0) +
                parseFloat(prev.bonus || 0) +
                parseFloat(prev.reimbursementOfMedicalExpenses || 0) +
                parseFloat(prev.leaveEncashment || 0) +
                parseFloat(prev.leaveTravelBenefits || 0) +
                parseFloat(prev.contributionToSuperannuationFund || 0) +
                parseFloat(prev.contributionToProvidentFund || 0) +
                parseFloat(prev.contributionToGratuityFund || 0) +
                parseFloat(prev.contributionToOtherFund || 0) +
                parseFloat(prev.otherBenefitToEmployees || 0)
        }));
    }, [
        values.rentIncome,
        values.commissionIncome,
        values.dividendIncome,
        values.interestIncome,
        values.profitOnSaleOfFixedAssets,
        values.profitOnSaleOfSecurities,
        values.profitOnSaleOfOtherInvestment,
        values.gainOnForeignExchangeFluctuation,
        values.profitOnConversionOfInventory,
        values.agriculturalIncome,
        values.otherIncomeAmount,
        values.grossProfitFromTrading,
        values.salariesAndWages,
        values.bonus,
        values.reimbursementOfMedicalExpenses,
        values.leaveEncashment,
        values.leaveTravelBenefits,
        values.contributionToSuperannuationFund,
        values.contributionToProvidentFund,
        values.contributionToGratuityFund,
        values.contributionToOtherFund,
        values.otherBenefitToEmployees
    ]);

    return (
        <form method="POST">
            <div className="card card-body text-content">
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>13: Gross profit <br /> transferred from Trading Account</strong></span>
                        <input
                            type="number"
                            name="grossProfitFromTrading"
                            value={values.grossProfitFromTrading}
                            onChange={(e) => handleInputChange('grossProfitFromTrading', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>14: Other income</strong></span>
                        <input
                            type="number"
                            name="otherIncome"
                            value={values.otherIncome}
                            onChange={(e) => handleInputChange('otherIncome', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14i: Rent</span>
                                <input
                                    type="number"
                                    name="rentIncome"
                                    value={values.rentIncome}
                                    onChange={(e) => handleInputChange('rentIncome', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14ii: Commission</span>
                                <input
                                    type="number"
                                    name="commissionIncome"
                                    value={values.commissionIncome}
                                    onChange={(e) => handleInputChange('commissionIncome', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14iii: Dividend income</span>
                                <input
                                    type="number"
                                    name="dividendIncome"
                                    value={values.dividendIncome}
                                    onChange={(e) => handleInputChange('dividendIncome', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14iv: Interest income</span>
                                <input
                                    type="number"
                                    name="interestIncome"
                                    value={values.interestIncome}
                                    onChange={(e) => handleInputChange('interestIncome', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14v: Profit on sale of fixed assets</span>
                                <input
                                    type="number"
                                    name="profitOnSaleOfFixedAssets"
                                    value={values.profitOnSaleOfFixedAssets}
                                    onChange={(e) => handleInputChange('profitOnSaleOfFixedAssets', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14vi: Profit on sale of <br /> investment being securities chargeable to Securities <br /> Transaction Tax (STT)</span>
                                <input
                                    type="number"
                                    name="profitOnSaleOfSecurities"
                                    value={values.profitOnSaleOfSecurities}
                                    onChange={(e) => handleInputChange('profitOnSaleOfSecurities', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14vii: Profit on sale of other investment</span>
                                <input
                                    type="number"
                                    name="profitOnSaleOfOtherInvestment"
                                    value={values.profitOnSaleOfOtherInvestment}
                                    onChange={(e) => handleInputChange('profitOnSaleOfOtherInvestment', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14viii: Gain (Loss) on account<br /> of foreign exchange fluctuation u/s 43AA</span>
                                <input
                                    type="number"
                                    name="gainOnForeignExchangeFluctuation"
                                    value={values.gainOnForeignExchangeFluctuation}
                                    onChange={(e) => handleInputChange('gainOnForeignExchangeFluctuation', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14ix: Profit on conversion of <br /> inventory into capital asset u/s<br /> 28(via) (Fair Market Value of<br /> inventory as on the date of conversion)</span>
                                <input
                                    type="number"
                                    name="profitOnConversionOfInventory"
                                    value={values.profitOnConversionOfInventory}
                                    onChange={(e) => handleInputChange('profitOnConversionOfInventory', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14x: Agricultural income</span>
                                <input
                                    type="number"
                                    name="agriculturalIncome"
                                    value={values.agriculturalIncome}
                                    onChange={(e) => handleInputChange('agriculturalIncome', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14xi: Any other income (specify nature and amount)</span>
                                <input
                                    type="number"
                                    name="otherIncomeNature"
                                    value={values.otherIncomeNature}
                                    onChange={(e) => handleInputChange('otherIncomeNature', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1 mr-2"
                                />
                                <input
                                    type="number"
                                    name="otherIncomeAmount"
                                    value={values.otherIncomeAmount}
                                    onChange={(e) => handleInputChange('otherIncomeAmount', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>14xii: Total of other income (i + ii<br /> + iii + iv + v + vi + vii + viii + ix + x + xi)</span>
                                <input
                                    type="number"
                                    name="totalOtherIncome"
                                    value={values.totalOtherIncome}
                                    onChange={(e) => handleInputChange('totalOtherIncome', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>15: Total of credits to profit <br /> and loss account (13+14xii)</strong></span>
                        <input
                            type="number"
                            name="totalCreditsToPLAccount"
                            value={values.totalCreditsToPLAccount}
                            onChange={(e) => handleInputChange('totalCreditsToPLAccount', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                            readOnly
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>16: Freight outward</strong></span>
                        <input
                            type="number"
                            name="freightOutward"
                            value={values.freightOutward}
                            onChange={(e) => handleInputChange('freightOutward', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>17: Consumption of stores and<br /> spare parts</strong></span>
                        <input
                            type="number"
                            name="consumptionOfStoresAndSpareParts"
                            value={values.consumptionOfStoresAndSpareParts}
                            onChange={(e) => handleInputChange('consumptionOfStoresAndSpareParts', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>18: Power and fuel</strong></span>
                        <input
                            type="number"
                            name="powerAndFuel"
                            value={values.powerAndFuel}
                            onChange={(e) => handleInputChange('powerAndFuel', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>19: Rents</strong></span>
                        <input
                            type="number"
                            name="rents"
                            value={values.rents}
                            onChange={(e) => handleInputChange('rents', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>20: Repairs to building</strong></span>
                        <input
                            type="number"
                            name="repairsToBuilding"
                            value={values.repairsToBuilding}
                            onChange={(e) => handleInputChange('repairsToBuilding', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>21: Repairs to machinery</strong></span>
                        <input
                            type="number"
                            name="repairsToMachinery"
                            value={values.repairsToMachinery}
                            onChange={(e) => handleInputChange('repairsToMachinery', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>22: Compensation to employees</strong></span>
                        <input
                            type="number"
                            name="compensationToEmployees"
                            value={values.compensationToEmployees}
                            onChange={(e) => handleInputChange('compensationToEmployees', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22i: Salaries and wages</span>
                                <input
                                    type="number"
                                    name="salariesAndWages"
                                    value={values.salariesAndWages}
                                    onChange={(e) => handleInputChange('salariesAndWages', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22ii: Bonus</span>
                                <input
                                    type="number"
                                    name="bonus"
                                    value={values.bonus}
                                    onChange={(e) => handleInputChange('bonus', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22iii: Reimbursement of medical expenses</span>
                                <input
                                    type="number"
                                    name="reimbursementOfMedicalExpenses"
                                    value={values.reimbursementOfMedicalExpenses}
                                    onChange={(e) => handleInputChange('reimbursementOfMedicalExpenses', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22iv: Leave encashment</span>
                                <input
                                    type="number"
                                    name="leaveEncashment"
                                    value={values.leaveEncashment}
                                    onChange={(e) => handleInputChange('leaveEncashment', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                  
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22v: Leave travel benefits</span>
                                <input
                                    type="number"
                                    name="leaveTravelBenefits"
                                    value={values.leaveTravelBenefits}
                                    onChange={(e) => handleInputChange('leaveTravelBenefits', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                    
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22vi: Contribution to approved superannuation fund</span>
                                <input
                                    type="number"
                                    name="contributionToSuperannuationFund"
                                    value={values.contributionToSuperannuationFund}
                                    onChange={(e) => handleInputChange('contributionToSuperannuationFund', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22vii: Contribution to recognised provident fund</span>
                                <input
                                    type="number"
                                    name="contributionToProvidentFund"
                                    value={values.contributionToProvidentFund}
                                    onChange={(e) => handleInputChange('contributionToProvidentFund', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                 
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22viii: Contribution to recognised gratuity fund</span>
                                <input
                                    type="number"
                                    name="contributionToGratuityFund"
                                    value={values.contributionToGratuityFund}
                                    onChange={(e) => handleInputChange('contributionToGratuityFund', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                   
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22ix: Contribution to any other fund</span>
                                <input
                                    type="number"
                                    name="contributionToOtherFund"
                                    value={values.contributionToOtherFund}
                                    onChange={(e) => handleInputChange('contributionToOtherFund', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                            
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22x: Any other benefit to <br /> employees in respect of which <br />an expenditure has been incurred</span>
                                <input
                                    type="number"
                                    name="otherBenefitToEmployees"
                                    value={values.otherBenefitToEmployees}
                                    onChange={(e) => handleInputChange('otherBenefitToEmployees', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                            
                                />
                            </div>
                            
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22xii: Whether any compensation<br />, included in 22xi, paid to non-residents</span>
                                <input
                                    type="number"
                                    name="compensationToNonResidents"
                                    value={values.compensationToNonResidents}
                                    onChange={(e) => handleInputChange('compensationToNonResidents', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                              
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22xiii: If Yes, amount paid to non-residents</span>
                                <input
                                    type="number"
                                    name="amountPaidToNonResidents"
                                    value={values.amountPaidToNonResidents}
                                    onChange={(e) => handleInputChange('amountPaidToNonResidents', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                          
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>22xi: Total compensation to <br />employees (22i + 22ii + 22iii +<br /> 22iv + 22v + 22vi + 22vii + 22viii +22ix + 22x)</span>
                                <input
                                    type="number"
                                    name="totalCompensationToEmployees"
                                    value={values.totalCompensationToEmployees}
                                    onChange={(e) => handleInputChange('totalCompensationToEmployees', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PANDL;