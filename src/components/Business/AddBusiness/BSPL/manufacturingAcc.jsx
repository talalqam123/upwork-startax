import React, { useState, useEffect } from "react";

const ManufacturingAcc = () => {
    const [values, setValues] = useState({
        // Opening Inventory
        openingStockRawMaterial: 0,
        openingStockWorkInProgress: 0,
        totalOpeningStock: 0,
        
        // Purchases and Direct Expenses
        purchases: 0,
        directWages: 0,
        directExpenses: 0,
        carriageInward: 0,
        powerAndFuel: 0,
        otherDirectExpenses: 0,
        totalDirectExpenses: 0,
        
        // Factory Overheads
        factoryOverheads: 0,
        indirectWages: 0,
        factoryRentAndRates: 0,
        factoryInsurance: 0,
        factoryFuelAndPower: 0,
        factoryGeneralExpenses: 0,
        depreciationOfFactoryMachinery: 0,
        totalFactoryOverheads: 0,
        totalDebitsToManufacturingAccount: 0,
        
        // Closing Stock
        closingStockRawMaterial: 0,
        closingStockWorkInProgress: 0,
        totalClosingStock: 0,
        
        // Cost of Goods
        costOfGoodsProduced: 0
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
            // Calculate Total Opening Stock (1aiii)
            totalOpeningStock:
                parseFloat(prev.openingStockRawMaterial || 0) +
                parseFloat(prev.openingStockWorkInProgress || 0),

            // Calculate Total Direct Expenses (1d)
            totalDirectExpenses:
                parseFloat(prev.carriageInward || 0) +
                parseFloat(prev.powerAndFuel || 0) +
                parseFloat(prev.otherDirectExpenses || 0),

            // Calculate Total Factory Overheads (1evii)
            totalFactoryOverheads:
                parseFloat(prev.indirectWages || 0) +
                parseFloat(prev.factoryRentAndRates || 0) +
                parseFloat(prev.factoryInsurance || 0) +
                parseFloat(prev.factoryFuelAndPower || 0) +
                parseFloat(prev.factoryGeneralExpenses || 0) +
                parseFloat(prev.depreciationOfFactoryMachinery || 0),

            // Calculate Total Debits to Manufacturing Account (1f)
            totalDebitsToManufacturingAccount:
                (parseFloat(prev.openingStockRawMaterial || 0) +
                parseFloat(prev.openingStockWorkInProgress || 0)) +
                parseFloat(prev.purchases || 0) +
                parseFloat(prev.directWages || 0) +
                (parseFloat(prev.carriageInward || 0) +
                parseFloat(prev.powerAndFuel || 0) +
                parseFloat(prev.otherDirectExpenses || 0)) +
                parseFloat(prev.totalFactoryOverheads || 0),

            // Calculate Total Closing Stock (2aiii)
            totalClosingStock:
                parseFloat(prev.closingStockRawMaterial || 0) +
                parseFloat(prev.closingStockWorkInProgress || 0),

            // Calculate Cost of Goods Produced (3)
            costOfGoodsProduced:
                parseFloat(prev.totalDebitsToManufacturingAccount || 0) -
                (parseFloat(prev.closingStockRawMaterial || 0) +
                parseFloat(prev.closingStockWorkInProgress || 0))
        }));
    }, [
        values.openingStockRawMaterial,
        values.openingStockWorkInProgress,
        values.purchases,
        values.directWages,
        values.carriageInward,
        values.powerAndFuel,
        values.otherDirectExpenses,
        values.indirectWages,
        values.factoryRentAndRates,
        values.factoryInsurance,
        values.factoryFuelAndPower,
        values.factoryGeneralExpenses,
        values.depreciationOfFactoryMachinery,
        values.closingStockRawMaterial,
        values.closingStockWorkInProgress,
        values.totalFactoryOverheads
    ]);

    return (
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
    );
}
export default ManufacturingAcc;