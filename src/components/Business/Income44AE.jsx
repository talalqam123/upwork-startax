import React, { useState } from 'react';
import BusinessTabs from './BusinessTabs';

const Income44AE = () => {
    const [formData, setFormData] = useState({
        nature_of_business: [{
            CodeAE_label: '',
            CodeAE: '',
            NameOfBusinessAE: '',
            DescriptionAE: ''
        }],
        vehicles: [{
            RegNumberGoodsCarriage: '',
            TonnageCapacity: '',
            HoldingPeriod: '',
            OwnedLeasedHiredFlag: 'OWN',
            PresumptiveIncome: ''
        }]
    });

    // Format currency in Indian format
    const formatCurrency = (value) => {
        if (!value) return '';
        value = value.toString().replace(/,/g, '');
        const number = parseInt(value, 10);
        if (isNaN(number)) return '';
        return number.toLocaleString('en-IN');
    };

    const handleBusinessChange = (index, field, value) => {
        const updatedBusinesses = [...formData.nature_of_business];
        updatedBusinesses[index][field] = value;
        setFormData(prev => ({
            ...prev,
            nature_of_business: updatedBusinesses
        }));
    };

    const handleAddBusiness = () => {
        setFormData(prev => ({
            ...prev,
            nature_of_business: [
                ...prev.nature_of_business,
                {
                    CodeAE_label: '',
                    CodeAE: '',
                    NameOfBusinessAE: '',
                    DescriptionAE: ''
                }
            ]
        }));
    };

    const handleRemoveBusiness = (index) => {
        if (formData.nature_of_business.length === 1) {
            setFormData(prev => ({
                ...prev,
                nature_of_business: [{
                    CodeAE_label: '',
                    CodeAE: '',
                    NameOfBusinessAE: '',
                    DescriptionAE: ''
                }]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                nature_of_business: prev.nature_of_business.filter((_, i) => i !== index)
            }));
        }
    };

    const handleVehicleChange = (index, field, value) => {
        const updatedVehicles = [...formData.vehicles];
        if (field === 'PresumptiveIncome') {
            value = formatCurrency(value);
        }
        updatedVehicles[index][field] = value;

        // Auto calculate presumptive income based on tonnage
        if (field === 'TonnageCapacity' || field === 'HoldingPeriod') {
            const tonnage = parseInt(updatedVehicles[index].TonnageCapacity) || 0;
            const months = parseInt(updatedVehicles[index].HoldingPeriod) || 0;
            let income = 0;

            if (tonnage >= 12) {
                income = 1000 * tonnage * months;
            } else {
                income = 7500 * months;
            }

            updatedVehicles[index].PresumptiveIncome = formatCurrency(income);
        }

        setFormData(prev => ({
            ...prev,
            vehicles: updatedVehicles
        }));
    };

    const handleAddVehicle = () => {
        setFormData(prev => ({
            ...prev,
            vehicles: [
                ...prev.vehicles,
                {
                    RegNumberGoodsCarriage: '',
                    TonnageCapacity: '',
                    HoldingPeriod: '',
                    OwnedLeasedHiredFlag: 'OWN',
                    PresumptiveIncome: ''
                }
            ]
        }));
    };

    const handleRemoveVehicle = (index) => {
        if (formData.vehicles.length > 1) {
            setFormData(prev => ({
                ...prev,
                vehicles: prev.vehicles.filter((_, i) => i !== index)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
     <>
                    {/* Business Nature Details Card */}
                    <div className="card card-primary">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <strong>Nature of Business Details</strong>
                                <button className="btn btn-outline-light mr-2 rounded-0" type="button">
                                    Copy From Previous Year
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            {formData.nature_of_business.map((business, index) => (
                                <div key={index} className="row business_list">
                                    <div className="form-group col-md-3 custom-select2">
                                        <label className="m-1 text-content">
                                            Nature of Business <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className="form-control business_name"
                                            value={business.CodeAE}
                                            onChange={(e) => handleBusinessChange(index, 'CodeAE', e.target.value)}
                                            required
                                        >
                                            <option value="">Select Business</option>
                                            <option value="08001">Goods Carriage</option>
                                            <option value="11002">Transport Business</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label className="m-1 text-content">
                                            Trade Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-0"
                                            value={business.NameOfBusinessAE}
                                            onChange={(e) => handleBusinessChange(index, 'NameOfBusinessAE', e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label className="m-1 text-content">Description</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-0"
                                            value={business.DescriptionAE}
                                            onChange={(e) => handleBusinessChange(index, 'DescriptionAE', e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <button
                                            className="btn btn-danger remove_business btn-sm mt-4"
                                            type="button"
                                            onClick={() => handleRemoveBusiness(index)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button
                                className="btn btn-info add_more_business rounded-0"
                                type="button"
                                onClick={handleAddBusiness}
                            >
                                Add More
                            </button>
                        </div>
                    </div>

                    {/* Vehicle Income Card */}
                    <div className="card card-primary">
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <strong>Vehicle Income</strong>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="w-100 fixed-table text-content" id="vehicle_income_table">
                                <thead>
                                    <tr>
                                        <th>Registration No</th>
                                        <th>No. of Tons</th>
                                        <th>No. of Months</th>
                                        <th>Ownership Status</th>
                                        <th>Income Per Vehicle Per Month</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.vehicles.map((vehicle, index) => (
                                        <tr key={index} style={{ verticalAlign: 'baseline' }}>
                                            <td className="form-group">
                                                <input
                                                    className="w-100 vehicle_row_input form-control rounded-0"
                                                    type="text"
                                                    value={vehicle.RegNumberGoodsCarriage}
                                                    onChange={(e) => handleVehicleChange(index, 'RegNumberGoodsCarriage', e.target.value)}
                                                />
                                            </td>
                                            <td className="form-group">
                                                <input
                                                    className="w-100 vehicle_row_input form-control rounded-0"
                                                    type="number"
                                                    value={vehicle.TonnageCapacity}
                                                    onChange={(e) => handleVehicleChange(index, 'TonnageCapacity', e.target.value)}
                                                />
                                            </td>
                                            <td className="form-group">
                                                <input
                                                    className="w-100 vehicle_row_input form-control rounded-0"
                                                    type="number"
                                                    value={vehicle.HoldingPeriod}
                                                    onChange={(e) => handleVehicleChange(index, 'HoldingPeriod', e.target.value)}
                                                />
                                            </td>
                                            <td className="form-group">
                                                <select
                                                    className="w-100 form-control"
                                                    value={vehicle.OwnedLeasedHiredFlag}
                                                    onChange={(e) => handleVehicleChange(index, 'OwnedLeasedHiredFlag', e.target.value)}
                                                >
                                                    <option value="OWN">Owned</option>
                                                    <option value="LEASE">Leased</option>
                                                    <option value="HIRED">Hired</option>
                                                </select>
                                            </td>
                                            <td className="form-group">
                                                <input
                                                    className="w-100 vehicle_row_input form-control rounded-0 inr_field"
                                                    type="text"
                                                    value={vehicle.PresumptiveIncome}
                                                    onChange={(e) => handleVehicleChange(index, 'PresumptiveIncome', e.target.value)}
                                                />
                                            </td>
                                            <td className="form-group">
                                                <i
                                                    className="fas fa-times remove_vehile"
                                                    onClick={() => handleRemoveVehicle(index)}
                                                    style={{ cursor: 'pointer' }}
                                                ></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                type="button"
                                className="btn btn-info mt-3"
                                onClick={handleAddVehicle}
                            >
                                Add Vehicle
                            </button>
                        </div>
                    </div>
                

               
</>
    );
};

export default Income44AE;
