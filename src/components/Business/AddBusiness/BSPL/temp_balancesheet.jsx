import React, { useState } from 'react';

const BSPLBalanceSheet = ({ balancesheetProfitLoss }) => {
    const [expandable, setExpandable] = useState(false);

    const toggleExpandable = () => {
        setExpandable(!expandable);
    };

    return (
        <div className="rows_data bspl_tab">
            <div className="bspl_rows_data w-100 px-2">
                <div className="form_heading mb-4">
                    <div className="mt-3">
                        <strong>Balance Sheet + P&L Account</strong>
                    </div>
                </div>
                <div className="mb-3">
                    <table className="bspl_table col-md-8 text-content">
                        <tbody>
                            <tr
                                data-widget="expandable-table"
                                aria-expanded={expandable}
                                className="header"
                                onClick={toggleExpandable}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="header">
                                    <strong>
                                        <i
                                            className={`expandable-table-caret fas fa-caret-${expandable ? 'down' : 'right'} fa-fw`}
                                        ></i>
                                        1. Sources of Funds
                                    </strong>
                                </td>
                            </tr>
                            {expandable && (
                                <tr className="expandable-body">
                                    <td>
                                        <div className="p-0">
                                            <table className="w-100 table table-hover m-0">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="2">1: Proprietor's fund</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1a: Proprietor's capital</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="proprtrCapital"
                                                                defaultValue={balancesheetProfitLoss.proprtrCapital || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1b: Reserves and Surplus</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="resrveSurplus"
                                                                defaultValue={balancesheetProfitLoss.resrveSurplus || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1bi: Revaluation Reserve</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="revalReserve"
                                                                defaultValue={balancesheetProfitLoss.revalReserve || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1bii: Capital Reserve</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="capitlReserve"
                                                                defaultValue={balancesheetProfitLoss.capitlReserve || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1biii: Statutory Reserve</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="statutoryReserve"
                                                                defaultValue={balancesheetProfitLoss.statutoryReserve || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1biv: Any other Reserve</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="otherReserve"
                                                                defaultValue={balancesheetProfitLoss.otherReserve || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1bv: Total (bi+bii+biii+biv)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                readOnly
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalReserve"
                                                                defaultValue={balancesheetProfitLoss.totalReserve || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1c: Total proprietor's fund (a + bv)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                readOnly
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalProprtrFund"
                                                                defaultValue={balancesheetProfitLoss.totalProprtrFund || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                   
               
                                               </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                             
                            )}
<tr
                                data-widget="expandable-table"
                                aria-expanded={expandable}
                                className="header"
                                onClick={toggleExpandable}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="header">
                                    <strong>
                                        <i
                                            className={`expandable-table-caret fas fa-caret-${expandable ? 'down' : 'right'} fa-fw`}
                                        ></i>
                                        2. Applications of Funds
                                    </strong>
                                </td>
                            </tr>
                            {expandable && (
                                <tr className="expandable-body">
                                    <td>
                                        <div className="p-0">
                                            <table className="table table-hover w-100 m-0 text-content">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="2">1: Fixed assets</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1a: Gross: Block</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="grossBlock"
                                                                defaultValue={balancesheetProfitLoss.grossBlock || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1b: Depreciation</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="depreciation"
                                                                defaultValue={balancesheetProfitLoss.depreciation || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1c: Net Block (1a-1b)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                readOnly
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="netBlock"
                                                                defaultValue={balancesheetProfitLoss.netBlock || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1d: Capital work in progress</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="capitalWorkInProgress"
                                                                defaultValue={balancesheetProfitLoss.capitalWorkInProgress || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1e: Total (1c + 1d)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                readOnly
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalFixedAssets"
                                                                defaultValue={balancesheetProfitLoss.totalFixedAssets || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2">2: Investments</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>2a: Long-term investments</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="longTermInvestments"
                                                                defaultValue={balancesheetProfitLoss.longTermInvestments || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    {/* Add remaining rows from the HTML as needed */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            )}
                             <tr
                                data-widget="expandable-table"
                                aria-expanded={expandable}
                                className="header"
                                onClick={toggleExpandable}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="header">
                                    <strong>
                                        <i
                                            className={`expandable-table-caret fas fa-caret-${expandable ? 'down' : 'right'} fa-fw`}
                                        ></i>
                                        3. Manufacturing Account
                                    </strong>
                                </td>
                            </tr>
                            {expandable && (
                                <tr className="expandable-body">
                                    <td>
                                        <div className="p-0">
                                            <table className="w-100 table table-hover m-0">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="2">1: Opening Inventory</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1ai: Opening stock of raw-material</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="openingStockRawMaterial"
                                                                defaultValue={balancesheetProfitLoss.openingStockRawMaterial || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1aii: Opening stock of Work in progress</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="openingStockWorkInProgress"
                                                                defaultValue={balancesheetProfitLoss.openingStockWorkInProgress || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1aiii: Total (i + ii)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                readOnly
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalOpeningStock"
                                                                defaultValue={balancesheetProfitLoss.totalOpeningStock || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1b: Purchases (net of refunds and duty or tax, if any)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="purchasesNet"
                                                                defaultValue={balancesheetProfitLoss.purchasesNet || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1c: Direct wages</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="directWages"
                                                                defaultValue={balancesheetProfitLoss.directWages || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1d: Direct expenses</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="directExpenses"
                                                                defaultValue={balancesheetProfitLoss.directExpenses || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1di: Carriage inward</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="carriageInward"
                                                                defaultValue={balancesheetProfitLoss.carriageInward || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1dii: Power and fuel</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="powerFuel"
                                                                defaultValue={balancesheetProfitLoss.powerFuel || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1diii: Other direct expenses</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="otherDirectExpenses"
                                                                defaultValue={balancesheetProfitLoss.otherDirectExpenses || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1e: Factory Overheads</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="factoryOverheads"
                                                                defaultValue={balancesheetProfitLoss.factoryOverheads || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1ei: Indirect wages</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="indirectWages"
                                                                defaultValue={balancesheetProfitLoss.indirectWages || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1eii: Factory rent and rates</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="factoryRentRates"
                                                                defaultValue={balancesheetProfitLoss.factoryRentRates || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1eiii: Factory Insurance</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="factoryInsurance"
                                                                defaultValue={balancesheetProfitLoss.factoryInsurance || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1eiv: Factory fuel and power</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="factoryFuelPower"
                                                                defaultValue={balancesheetProfitLoss.factoryFuelPower || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1ev: Factory general expenses</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="factoryGeneralExpenses"
                                                                defaultValue={balancesheetProfitLoss.factoryGeneralExpenses || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1evi: Depreciation of factory machinery</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="depreciationFactoryMachinery"
                                                                defaultValue={balancesheetProfitLoss.depreciationFactoryMachinery || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>1evii: Total (i+ii+iii+iv+v+vi)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalFactoryOverheads"
                                                                defaultValue={balancesheetProfitLoss.totalFactoryOverheads || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>1f: Total of Debits to Manufacturing Account (Aiii+B+C+D+Evii)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                readOnly
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalDebitsManufacturingAccount"
                                                                value={balancesheetProfitLoss.totalDebitsManufacturingAccount || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2">2: Closing Stock</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>2ai: Raw material</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="closingStockRawMaterial"
                                                                value={balancesheetProfitLoss.closingStockRawMaterial || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>2aii: Work-in-progress</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="closingStockWorkInProgress"
                                                                value={balancesheetProfitLoss.closingStockWorkInProgress || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>2aiii: Total (2i +2ii)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                readOnly
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalClosingStock"
                                                                defaultValue={balancesheetProfitLoss.totalClosingStock || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>3: Cost of Goods Produced – transferred to Trading Account (1F-2)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="costGoodsProduced"
                                                                value={balancesheetProfitLoss.costGoodsProduced || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            )}
                             <tr
                                data-widget="expandable-table"
                                aria-expanded={expandable}
                                className="header"
                                onClick={toggleExpandable}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="header">
                                    <strong>
                                        <i
                                            className={`expandable-table-caret fas fa-caret-${expandable ? 'down' : 'right'} fa-fw`}
                                        ></i>
                                        4. Trading Account
                                    </strong>
                                </td>
                            </tr>
                            {expandable && (
                                <tr className="expandable-body">
                                    <td>
                                        <div className="p-0">
                                            <table className="w-100 table table-hover m-0">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="2">4: Revenue from operations</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '30px' }}>
                                                                4a: Sales/ Gross receipts of business (net of returns and refunds and duty or tax, if any)
                                                            </span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="salesGrossReceipts"
                                                                defaultValue={balancesheetProfitLoss.salesGrossReceipts || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4ai: Sale of goods</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="saleOfGoods"
                                                                defaultValue={balancesheetProfitLoss.saleOfGoods || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4aii: Sale of services</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="saleOfServices"
                                                                defaultValue={balancesheetProfitLoss.saleOfServices || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4aiii: Other operating revenues (specify nature and amount)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="otherOperatingRevenues"
                                                                defaultValue={balancesheetProfitLoss.otherOperatingRevenues || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr className="other_operating_rvn">
                                                        <td className="td_input">
                                                            <div className="d-flex" style={{ marginLeft: '70px' }}>
                                                                <span>1:</span>
                                                                <input
                                                                    className="w-100 border-0 form-control"
                                                                    type="text"
                                                                    name="additionalRevenue"
                                                                />
                                                                <button className="btn btn-info btn-sm add_other_operating_rvn" type="button">
                                                                    <i className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="additionalRevenueAmount"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '70px' }}>4aiiiA: Total</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalOtherOperatingRevenue"
                                                                defaultValue={balancesheetProfitLoss.totalOtherOperatingRevenue || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4aiv: Total(i+ii+iiic)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalRevenue"
                                                                defaultValue={balancesheetProfitLoss.totalRevenue || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4b: Gross receipts from Profession</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="grossReceiptsFromProfession"
                                                                defaultValue={balancesheetProfitLoss.grossReceiptsFromProfession || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4c: Duties, taxes and cess received or receivable in respect of goods and services sold or supplied</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="dutiesTaxesReceivable"
                                                                defaultValue={balancesheetProfitLoss.dutiesTaxesReceivable || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4ci: Union Excise duties</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="unionExciseDuties"
                                                                defaultValue={balancesheetProfitLoss.unionExciseDuties || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    {/* Continue the rest of the fields similarly */}
                                                    
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4cix: Total (i + ii + iii + iv +v+ vi+vii+viii)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalDutiesTaxes"
                                                                defaultValue={balancesheetProfitLoss.totalDutiesTaxes || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style={{ marginLeft: '50px' }}>4d: Total Revenue from operations (Aiv + B +Cix)</span>
                                                        </td>
                                                        <td className="td_input">
                                                            <input
                                                                className="w-100 border-0 form-control"
                                                                type="number"
                                                                name="totalRevenueFromOperations"
                                                                defaultValue={balancesheetProfitLoss.totalRevenueFromOperations || ''}
                                                            />
                                                        </td>
                                                    </tr>
                                                    {/* Continue other rows similarly */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BSPLBalanceSheet;
