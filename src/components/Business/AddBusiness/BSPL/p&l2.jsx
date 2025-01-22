import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';

const PANDL2 = () => {
    const [values, setValues] = useState({
        // Insurance related
        medicalInsurance: "",
        lifeInsurance: "",
        keyMansInsurance: "",
        otherInsurance: "",
        totalExpenditureOnInsurance: "",
        
        // General expenses
        workmenStaffWelfareExpenses: "",
        entertainmentExpenses: "",
        hospitalityExpenses: "",
        conferenceExpenses: "",
        salesPromotionExpenses: "",
        advertisementExpenses: "",
        
        // Commission related
        commissionExpenses: "",
        commissionPaidOutsideIndia: "",
        commissionToOthers: "",
        totalCommission: "",
        
        // Royalty related
        royaltyPaidOutsideIndia: "",
        royaltyToOthers: "",
        totalRoyalty: "",
        
        // Professional fees related
        professionalFeesPaidOutsideIndia: "",
        professionalFeesToOthers: "",
        totalProfessionalFees: "",
        
        // Other expenses
        hotelBoardingLodgingExpenses: "",
        travelingExpenses: "",
        foreignTravelingExpenses: "",
        conveyanceExpenses: "",
        telephoneExpenses: "",
        guestHouseExpenses: "",
        clubExpenses: "",
        festivalCelebrationExpenses: "",
        scholarshipExpenses: "",
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
            // Calculate Total Insurance Expenditure (23v)
            totalExpenditureOnInsurance:
                parseFloat(prev.medicalInsurance || 0) +
                parseFloat(prev.lifeInsurance || 0) +
                parseFloat(prev.keyMansInsurance || 0) +
                parseFloat(prev.otherInsurance || 0),

            // Calculate Total Commission (30iii)
            totalCommission:
                parseFloat(prev.commissionExpenses || 0) +
                parseFloat(prev.commissionPaidOutsideIndia || 0) +
                parseFloat(prev.commissionToOthers || 0),

            // Calculate Total Royalty (31iii)
            totalRoyalty:
                parseFloat(prev.royaltyPaidOutsideIndia || 0) +
                parseFloat(prev.royaltyToOthers || 0),

            // Calculate Total Professional Fees (32iii)
            totalProfessionalFees:
                parseFloat(prev.professionalFeesPaidOutsideIndia || 0) +
                parseFloat(prev.professionalFeesToOthers || 0)
        }));
    }, [
        values.medicalInsurance,
        values.lifeInsurance,
        values.keyMansInsurance,
        values.otherInsurance,
        values.commissionExpenses,
        values.commissionPaidOutsideIndia,
        values.commissionToOthers,
        values.royaltyPaidOutsideIndia,
        values.royaltyToOthers,
        values.professionalFeesPaidOutsideIndia,
        values.professionalFeesToOthers
    ]);

    return (
        <form method="POST">
            <div className="card card-body text-content">
                {/* Insurance Section */}
                <div className="">
                    <div>
                        <strong>23: Insurance</strong>
                    </div>
                    <div className="row mt-3">
                        {/* Left Column */}
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>23i: Medical Insurance</span>
                                <input
                                    type="number"
                                    name="medicalInsurance"
                                    value={values.medicalInsurance}
                                    onChange={(e) => handleInputChange('medicalInsurance', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>

                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>23iii: Key-man's Insurance</span>
                                <input
                                    type="number"
                                    name="keyMansInsurance"
                                    value={values.keyMansInsurance}
                                    onChange={(e) => handleInputChange('keyMansInsurance', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>

                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>23v: Total expenditure on insurance (23i + 23ii + 23iii + 23iv)</span>
                                <input
                                    type="number"
                                    name="totalExpenditureOnInsurance"
                                    value={values.totalExpenditureOnInsurance}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>23ii: Life Insurance</span>
                                <input
                                    type="number"
                                    name="lifeInsurance"
                                    value={values.lifeInsurance}
                                    onChange={(e) => handleInputChange('lifeInsurance', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>23iv: Other Insurance including factory, office, car, goods etc.</span>
                                <input
                                    type="number"
                                    name="otherInsurance"
                                    value={values.otherInsurance}
                                    onChange={(e) => handleInputChange('otherInsurance', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* General Expenses Section - Fixed structure */}
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>24: Workmen and staff welfare expenses</strong></span>
                        <input
                            type="number"
                            name="workmenStaffWelfareExpenses"
                            value={values.workmenStaffWelfareExpenses}
                            onChange={(e) => handleInputChange('workmenStaffWelfareExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>25: Entertainment</strong></span>
                        <input
                            type="number"
                            name="entertainmentExpenses"
                            value={values.entertainmentExpenses}
                            onChange={(e) => handleInputChange('entertainmentExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>26: Hospitality</strong></span>
                        <input
                            type="number"
                            name="hospitalityExpenses"
                            value={values.hospitalityExpenses}
                            onChange={(e) => handleInputChange('hospitalityExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>27: Conference</strong></span>
                        <input
                            type="number"
                            name="conferenceExpenses"
                            value={values.conferenceExpenses}
                            onChange={(e) => handleInputChange('conferenceExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>28: Sales promotion including<br /> publicity (other than advertisement)</strong></span>
                        <input
                            type="number"
                            name="salesPromotionExpenses"
                            value={values.salesPromotionExpenses}
                            onChange={(e) => handleInputChange('salesPromotionExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>29: Advertisement</strong></span>
                        <input
                            type="number"
                            name="advertisementExpenses"
                            value={values.advertisementExpenses}
                            onChange={(e) => handleInputChange('advertisementExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>30: Commission</strong></span>
                        <input
                            type="number"
                            name="commissionExpenses"
                            value={values.commissionExpenses}
                            onChange={(e) => handleInputChange('commissionExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>

                {/* Commission Section - Fixed structure */}
                <div className="">
                    <div>
                        <strong>30: Commission</strong>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30i: Paid outside India, or paid in<br /> India to a non-resident other<br /> than a company or a foreign company</span>
                                <input
                                    type="number"
                                    name="commissionPaidOutsideIndia"
                                    value={values.commissionPaidOutsideIndia}
                                    onChange={(e) => handleInputChange('commissionPaidOutsideIndia', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>

                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30iii: Total (i + ii)</span>
                                <input
                                    type="number"
                                    name="totalCommission"
                                    value={values.totalCommission}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30ii: To others</span>
                                <input
                                    type="number"
                                    name="commissionToOthers"
                                    value={values.commissionToOthers}
                                    onChange={(e) => handleInputChange('commissionToOthers', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Royalty Section - Fixed structure */}
                <div className="">
                    <div>
                        <strong>31: Royalty</strong>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30i: Paid outside India, or paid in<br /> India to a non-resident other<br /> than a company or a foreign company</span>
                                <input
                                    type="number"
                                    name="royaltyPaidOutsideIndia"
                                    value={values.royaltyPaidOutsideIndia}
                                    onChange={(e) => handleInputChange('royaltyPaidOutsideIndia', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>

                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30iii: Total (i + ii)</span>
                                <input
                                    type="number"
                                    name="totalRoyalty"
                                    value={values.totalRoyalty}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30ii: To others</span>
                                <input
                                    type="number"
                                    name="royaltyToOthers"
                                    value={values.royaltyToOthers}
                                    onChange={(e) => handleInputChange('royaltyToOthers', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professional Fees Section */}
                <div className="">
                    <div>
                        <strong>32: Professional / Consultancy fees / Fee for technical services</strong>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30i: Paid outside India, or paid in<br /> India to a non-resident other<br /> than a company or a foreign company</span>
                                <input
                                    type="number"
                                    name="professionalFeesPaidOutsideIndia"
                                    value={values.professionalFeesPaidOutsideIndia}
                                    onChange={(e) => handleInputChange('professionalFeesPaidOutsideIndia', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>

                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30iii: Total (i + ii)</span>
                                <input
                                    type="number"
                                    name="totalProfessionalFees"
                                    value={values.totalProfessionalFees}
                                    className="form-control rounded-0 flex-grow-1"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group d-flex align-items-center">
                                <span style={{ marginLeft: '30px', minWidth: '200px' }}>30ii: To others</span>
                                <input
                                    type="number"
                                    name="professionalFeesToOthers"
                                    value={values.professionalFeesToOthers}
                                    onChange={(e) => handleInputChange('professionalFeesToOthers', e.target.value)}
                                    className="form-control rounded-0 flex-grow-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Expenses Section */}
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>33: Hotel, boarding and lodging</strong></span>
                        <input
                            type="number"
                            name="hotelBoardingLodgingExpenses"
                            value={values.hotelBoardingLodgingExpenses}
                            onChange={(e) => handleInputChange('hotelBoardingLodgingExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>34: Traveling expenses other than<br /> on foreign traveling</strong></span>
                        <input
                            type="number"
                            name="travelingExpenses"
                            value={values.travelingExpenses}
                            onChange={(e) => handleInputChange('travelingExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>35: Foreign travelling expenses</strong></span>
                        <input
                            type="number"
                            name="foreignTravelingExpenses"
                            value={values.foreignTravelingExpenses}
                            onChange={(e) => handleInputChange('foreignTravelingExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>36: Conveyance expenses</strong></span>
                        <input
                            type="number"
                            name="conveyanceExpenses"
                            value={values.conveyanceExpenses}
                            onChange={(e) => handleInputChange('conveyanceExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>37: Telephone expenses</strong></span>
                        <input
                            type="number"
                            name="telephoneExpenses"
                            value={values.telephoneExpenses}
                            onChange={(e) => handleInputChange('telephoneExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>38: Guest House expenses</strong></span>
                        <input
                            type="number"
                            name="guestHouseExpenses"
                            value={values.guestHouseExpenses}
                            onChange={(e) => handleInputChange('guestHouseExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>39: Club expenses</strong></span>
                        <input
                            type="number"
                            name="clubExpenses"
                            value={values.clubExpenses}
                            onChange={(e) => handleInputChange('clubExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>40: Festival celebration expenses</strong></span>
                        <input
                            type="number"
                            name="festivalCelebrationExpenses"
                            value={values.festivalCelebrationExpenses}
                            onChange={(e) => handleInputChange('festivalCelebrationExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="form-group d-flex align-items-center">
                        <span style={{ marginRight: '30px', minWidth: '200px' }}><strong>41: Scholarship</strong></span>
                        <input
                            type="number"
                            name="scholarshipExpenses"
                            value={values.scholarshipExpenses}
                            onChange={(e) => handleInputChange('scholarshipExpenses', e.target.value)}
                            className="form-control rounded-0 flex-grow-1"
                            style={{ maxWidth: 'calc(100% - 230px)' }}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PANDL2;