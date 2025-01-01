import React, { useState } from 'react';

const DeductionForm = () => {
    const [formData, setFormData] = useState({
        client_id: '',
        total_80c_investments: '',
        "80d_medical_for_self_and_family": '',
        "80d_medical_for_parents": '',
        "80d_medical_insurance_premium_1": '',
        "80d_medical_insurance_premium_2": '',
        "80d_preventive_health_checkup_fee_1": '',
        "80d_preventive_health_checkup_fee_2": ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        console.log('Form submitted:', formData);
    };


    const [donations, setDonations] = useState([
        {
            donationIndex: '',
            commonOrganization: '',
            nameOfDonee: '',
            donationAmountCash: '',
            donationAmountOther: '',
            panOfDonee: '',
            limitOnDeduction: '',
            qualifyingPercentage: '',
            doneePincode: '',
            doneeAddress: '',
            doneeCity: '',
        },
    ]);

    const addDonation = () => {
        setDonations([
            ...donations,
            {
                donationIndex: '',
                commonOrganization: '',
                nameOfDonee: '',
                donationAmountCash: '',
                donationAmountOther: '',
                panOfDonee: '',
                limitOnDeduction: '',
                qualifyingPercentage: '',
                doneePincode: '',
                doneeAddress: '',
                doneeCity: '',
            },
        ]);
    };

    const removeDonation = (index) => {
        if (donations.length === 1) {
            const updatedDonations = donations.map((donation) => ({
                ...donation,
                commonOrganization: '',
                nameOfDonee: '',
                donationAmountCash: '',
                donationAmountOther: '',
                panOfDonee: '',
                limitOnDeduction: '',
                qualifyingPercentage: '',
                doneePincode: '',
                doneeAddress: '',
                doneeCity: '',
            }));
            setDonations(updatedDonations);
        } else {
            setDonations(donations.filter((_, i) => i !== index));
        }
    };

    const handleChange = (index, field, value) => {
        const updatedDonations = donations.map((donation, i) =>
            i === index ? { ...donation, [field]: value } : donation
        );
        setDonations(updatedDonations);
    };
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
    return (
        <div className="pt-3">
            <strong>Deduction under Section 80C</strong>

            <form
                method="POST"
                action="#" // Add appropriate URL here
                className="deducTion_form_remove"
                onSubmit={handleSubmit}
            >
                <input
                    type="hidden"
                    name="client_id"
                    value={formData.client_id}
                    onChange={handleInputChange}
                />

                <div className="row card card-body">
                    <div className="row mt-3 text-content">
                        <div className="col-md-12">
                            <div className="form-group row align-items-center">
                                <label className="col-3">Total 80C Investments</label>
                                <span className="col-2 text-danger text-right">1234</span>
                                <input
                                    type="text"
                                    name="total_80c_investments"
                                    value={formData.total_80c_investments}
                                    className="form-control rounded-0 col-4"
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="button"
                                    className="align-self-center income-info-button tooltips"
                                    data-toggle="modal"
                                    data-target="#deduction80c"
                                >
                                    <i className="fas fa-info-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row card card-body">
                    <div className="form_heading">
                        <div>
                            <strong>Section 80D: Deductions for Medical Insurance</strong>
                        </div>
                    </div>

                    <div className="row mt-3 text-content">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>For Self / Spouse or Dependent Children</label>
                                <select
                                    name="80d_medical_for_self_and_family"
                                    className="form-control rounded-0"
                                    value={formData["80d_medical_for_self_and_family"]}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Option</option>
                                    <option value="N">Below 60 years</option>
                                    <option value="Y">Above 60 years</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>For Parents</label>
                                <select
                                    name="80d_medical_for_parents"
                                    className="form-control rounded-0"
                                    value={formData["80d_medical_for_parents"]}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Option</option>
                                    <option value="N">Below 60 years</option>
                                    <option value="Y">Above 60 years</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="row text-content">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Medical Insurance Premium</label>
                                </div>
                            </div>

                            <div className="col-md-4 row">
                                <span className="col-2 text-danger text-right">1234</span>
                                <div className="form-group col-10">
                                    <input
                                        type="text"
                                        name="80d_medical_insurance_premium_1"
                                        value={formData["80d_medical_insurance_premium_1"]}
                                        className="form-control rounded-0"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4 row">
                                <span className="col-2 text-danger text-right">1234</span>
                                <div className="form-group col-10">
                                    <input
                                        type="text"
                                        name="80d_medical_insurance_premium_2"
                                        value={formData["80d_medical_insurance_premium_2"]}
                                        className="form-control rounded-0"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="row text-content">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Preventive Health Check-Up Fees</label>
                                </div>
                            </div>

                            <div className="col-md-4 row">
                                <span className="col-2 text-danger text-right">1234</span>
                                <div className="form-group col-10">
                                    <input
                                        type="text"
                                        name="80d_preventive_health_checkup_fee_1"
                                        value={formData["80d_preventive_health_checkup_fee_1"]}
                                        className="form-control rounded-0"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4 row">
                                <span className="col-2 text-danger text-right">1234</span>
                                <div className="form-group col-10">
                                    <div className="d-flex flex-row">
                                        <input
                                            type="text"
                                            name="80d_preventive_health_checkup_fee_2"
                                            value={formData["80d_preventive_health_checkup_fee_2"]}
                                            className="form-control rounded-0"
                                            onChange={handleInputChange}
                                        />
                                        <button
                                            type="button"
                                            className="align-self-center tooltips income-info-button"
                                            data-toggle="modal"
                                            data-target="#deduction80d"
                                        >
                                            <i className="fas fa-info-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body">
                        <div className="form_heading">
                            <div>
                                <strong>Section 80G: Donations to charitable organizations</strong>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <span>The government requires itemized details of donations for Section 80G.</span>
                            </div>
                        </div>

                        {donations.map((donation, index) => (
                            <div className="row mt-3 80g_donation callout callout-info position-relative text-content" key={index}>
                                <button
                                    className="btn btn-sm btn-danger remove-btn-80g_donation"
                                    type="button"
                                    onClick={() => removeDonation(index)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                                <input type="text" hidden name="80g_donation_index[]" value={donation.donationIndex} />
                                <div className="col-md-12 card card-body">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="form-group row">
                                                <label className="col-md-4">Common 80G Organizations</label>
                                                <div className="col-md-8 d-flex flex-row">
                                                    <select
                                                        name="80g_common_organization[]"
                                                        className="form-control rounded-0"
                                                        value={donation.commonOrganization}
                                                        onChange={(e) => handleChange(index, 'commonOrganization', e.target.value)}
                                                    >
                                                        <option value="">Common 80G Organizations</option>
                                                        <option value="AAETP3993P">PM CARES - COVID-19 RELIEF FUND</option>
                                                        <option value="AAATC0294J">MAHARASHTRA CM COVID-19 RELIEF FUND</option>
                                                        <option value="AAAAC6443N">WEST BENGAL STATE EMERGENCY RELIEF FUND</option>
                                                        <option value="AAAGC0038F">
                                                            TAMIL NADU CM PUBLIC RELIEF FUND-COVID 19
                                                        </option>
                                                        <option value="AAATL5393B">
                                                            NCT DELHI LT. GOVERNER/CHIEF
                                                            MINISTER RELIEF FUND-COVID 19
                                                        </option>
                                                        <option value="AACTP4637Q">
                                                            PRIME MINISTERS NATIONAL RELIEF
                                                            FUND
                                                        </option>
                                                        <option value="AAATI4485R">
                                                            INDIAN NAVAL BENEVOLENT
                                                            ASSOCIATION (INBA)
                                                        </option>
                                                        <option value="AAATG2587L">
                                                            GUJARAT CHIEF MINISTER'S RELIEF
                                                            FUND
                                                        </option>
                                                        <option value="AAAAB5052C">
                                                            BAL RAKSHA BHARAT
                                                        </option>
                                                        <option value="AAAAK7721R">
                                                            KALINGA INSTITUTE OF SOCIAL
                                                            SCIENCES
                                                        </option>
                                                        <option value="AAATV4341F">
                                                            VIDYARAMBHAM TRUST
                                                        </option>
                                                        <option value="AAATL0949F">
                                                            LITTLE SISTERS OF THE POOR
                                                        </option>
                                                        <option value="AAAAW0007G">
                                                            WORLD VISION INDIA
                                                        </option>
                                                        <option value="AAAGA0132Q">
                                                            ANDGRAPRADESH CHIEF MINISTER
                                                            RELIEF FUND
                                                        </option>
                                                        <option value="AAATS4990B">
                                                            SHRI VINAYAKARAO SHIRGAOKAR
                                                            PRATISTHAN
                                                        </option>
                                                        <option value="AAATC0742K">
                                                            CHARITIES AID FOUNDATION OF INDIA
                                                        </option>
                                                        <option value="AAATC2812Q">
                                                            CRY CHILD RELIEF AND YOU
                                                        </option>
                                                        <option value="AAAGM0036M">
                                                            MUKHYA MANTRI RAHAT KOSH
                                                            UTTARAKHAND
                                                        </option>
                                                        <option value="AABCG2322D">
                                                            GIVE FOUNDATION
                                                        </option>
                                                        <option value="AAATC8468J">
                                                            CHILD CARE FOUNDATION
                                                        </option>
                                                        <option value="AABTR7683M">
                                                            RELIEF INDIA TRUST
                                                        </option>
                                                        <option value="AADTS5435N">
                                                            SOS CHILDRENS VILLAGE OF INDIA
                                                        </option>
                                                        <option value="AABAJ0569M">
                                                            JKG EDUCATIONAL AND WELFARE
                                                            SOCIETY
                                                        </option>
                                                        <option value="AAATS6567N">
                                                            SAMARTHANAM TRUST FOR DISABLED
                                                        </option>
                                                        <option value="AAATT1309F">
                                                            THE TATA RELIEF COMMITTEE
                                                        </option>
                                                        <option value="AAATC4667K">
                                                            ASSAM CHIEF MINISTER's RELIEF FUND
                                                        </option>
                                                        <option value="AAAGD0584M">
                                                            KERALA CHIEF MINISTER's DISTRESS
                                                            RELIEF FUND
                                                        </option>
                                                        <option value="GGGGG0000G">
                                                            KARNATAKA CM RELIEF FUND
                                                        </option>
                                                        <option value="AAATO4364P">
                                                            ODISHA - CHIEF MINISTER'S RELIEF
                                                            FUND
                                                        </option>
                                                    </select >
                                                    <button
                                                        type="button"
                                                        className="align-self-center tooltips income-info-button"
                                                        data-toggle="modal"
                                                        data-target="#deduction80g"
                                                    >
                                                        <i className="fas fa-info-circle"></i>
                                                    </button>
                                                </div >
                                            </div >
                                        </div >
                                    </div >
                                </div >

                                <div className="col-md-12 card card-body">
                                    <div className="row text-content">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-md-4">Name of Donee</label>
                                                <input
                                                    type="text"
                                                    name="80g_name_of_donee[]"
                                                    value={donation.nameOfDonee}
                                                    className="form-control rounded-0 col-md-8"
                                                    onChange={(e) => handleChange(index, 'nameOfDonee', e.target.value)}
                                                />
                                            </div>

                                            <div className="row mt-3">
                                                <label className="col-md-4">Donation Amount (Cash)</label>
                                                <input
                                                    type="text"
                                                    name="80g_donation_amount_cash[]"
                                                    value={donation.donationAmountCash}
                                                    className="form-control rounded-0 col-md-8"
                                                    onChange={(e) => handleChange(index, 'donationAmountCash', e.target.value)}
                                                />
                                            </div>

                                            <div className="row mt-3">
                                                <label className="col-md-4">Donation Amount (Other modes like e-pay, cheque, DD etc)</label>
                                                <input
                                                    type="text"
                                                    name="80g_donation_amount_other[]"
                                                    value={donation.donationAmountOther}
                                                    className="form-control rounded-0 col-md-8"
                                                    onChange={(e) => handleChange(index, 'donationAmountOther', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-md-4">PAN of Donee</label>
                                                <input
                                                    type="text"
                                                    name="80g_pad_of_donee[]"
                                                    value={donation.panOfDonee}
                                                    className="form-control rounded-0 col-md-8"
                                                    onChange={(e) => handleChange(index, 'panOfDonee', e.target.value)}
                                                />
                                            </div>

                                            <div className="row mt-3">
                                                <label className="col-md-4">Limit On Deduction *</label>
                                                <select
                                                    name="80g_limit_on_deduction[]"
                                                    className="form-control rounded-0 col-md-8"
                                                    value={donation.limitOnDeduction}
                                                    onChange={(e) => handleChange(index, 'limitOnDeduction', e.target.value)}
                                                >
                                                    <option value="">No Limit</option>
                                                    <option value="AAETP3993P">Subject To Income</option>
                                                </select>
                                            </div>

                                            <div className="row mt-3">
                                                <label className="col-md-4">Qualifying Percentage *</label>
                                                <select
                                                    name="80g_qualifying_percentage[]"
                                                    className="form-control rounded-0 col-md-8"
                                                    value={donation.qualifyingPercentage}
                                                    onChange={(e) => handleChange(index, 'qualifyingPercentage', e.target.value)}
                                                >
                                                    <option value="AAETP3993P">50%</option>
                                                    <option value="">100%</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 card card-body">
                                    <div>
                                        <strong>Address of Donee</strong>
                                    </div>
                                    <div className="row text-content">
                                        <div className="form-group row col-md-4">
                                            <label className="col-12">Pincode</label>
                                            <input
                                                type="number"
                                                name="80g_donee_pincode[]"
                                                value={donation.doneePincode}
                                                className="form-control rounded-0 mx-3"
                                                onChange={(e) => handleChange(index, 'doneePincode', e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group row col-md-4">
                                            <label className="col-12">Address Line *</label>
                                            <input
                                                type="text"
                                                name="80g_donee_address[]"
                                                value={donation.doneeAddress}
                                                className="form-control rounded-0 mx-3"
                                                onChange={(e) => handleChange(index, 'doneeAddress', e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group row col-md-4">
                                            <label className="col-12">Town / City *</label>
                                            <input
                                                type="text"
                                                name="80g_donee_city[]"
                                                value={donation.doneeCity}
                                                className="form-control rounded-0 mx-3"
                                                onChange={(e) => handleChange(index, 'doneeCity', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div >
                        ))}

                        <div className="80g_donation_btn">
                            <button
                                className="btn btn-info btn-sm add_80g_donation rounded-0"
                                type="button"
                                onClick={addDonation}
                            >
                                Add More
                            </button>
                        </div>
                    </div >

                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input
                                type="submit"
                                style={{ width: 'fit-content' }}
                                className="btn btn-block btn-primary"
                                value="Submit"
                            />
                        </div>
                    </div>
                </div >
            </form >
            {/* <div className="modal fade" id="deduction80g" style={{ display: showModal ? "block" : "none" }}>
                <div
                    className="modal-dialog modal-dialog-centered"
                    style={{ maxWidth: "800px" }}
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title" id="exampleModalLongTitle">
                                <strong>Deduction 80G</strong>
                            </div>
                            <button
                                type="button"
                                className="close"
                                onClick={toggleModal}
                                aria-label="Close"
                            >
                                <span aria-hidden="true" style={{ fontSize: "xx-large" }}>
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body text-content">
                            <ol>
                                <li>
                                    Deduction is available to all the assesses for donation made to
                                    eligible funds or institutions.
                                </li>
                                <li>Donations in kind shall not qualify for deduction.</li>
                                <li>
                                    No deduction shall be allowed in respect of donation exceeding
                                    ₹2,000 unless such sum is paid by any mode other than cash.
                                </li>
                                <li>
                                    Quantum of deduction: Category 1: Donation qualifying for
                                    100% deduction, without any qualifying limit
                                    <ol style={{ listStyleType: "upper-roman" }}>
                                        <li>The National Defence Fund set up by the Central Government</li>
                                        <li>Prime Minister’s National Relief Fund</li>
                                        <li>Prime Minister’s Armenia Earthquake Relief Fund</li>
                                        <li>The National Children’s Fund</li>
                                        <li>The National Foundation for Communal Harmony</li>
                                        <li>Approved University or educational institution of national eminence</li>
                                        <li>Chief Minister’s Earthquake Relief Fund, Maharashtra</li>
                                        <li>Any Zila Saksharta Samiti</li>
                                        <li>Any State Government Fund set up to provide medical relief to the poor</li>
                                        <li>
                                            The Army Central Welfare Fund or Indian Naval Benevolent
                                            Fund or Air Force Central Welfare Fund established by the
                                            armed forces of the Union for the welfare of past and
                                            present members of such forces or their dependents
                                        </li>
                                        <li>The National Illness Assistance Fund</li>
                                        <li>
                                            The Chief Minister’s Relief Fund or Lieutenant Governor’s
                                            Relief Fund in respect of any State or Union Territory
                                        </li>
                                        <li>The National Sports Fund set up by the Central Government</li>
                                        <li>The National Cultural Fund set up by the Central Government</li>
                                        <li>The Fund for Technology Development and Application set up by the Central Government</li>
                                        <li>The Swachh Bharat Kosh</li>
                                        <li>The Clean Ganga Fund</li>
                                        <li>The National Fund for Control of Drug Abuse</li>
                                    </ol>
                                    <h5>
                                        Category 2: Donation qualifying for 50% deduction, without
                                        any qualifying limit
                                    </h5>
                                    <ol style={{ listStyleType: "upper-roman" }}>
                                        <li>Prime Minister’s Drought Relief Fund</li>
                                    </ol>
                                    <h5>
                                        Category 3: Donation qualifying for 100% deduction, subject
                                        to qualifying limit
                                    </h5>
                                    <ol style={{ listStyleType: "upper-roman" }}>
                                        <li>
                                            The Government or to any approved local authority,
                                            institution or association for promotion of family
                                            planning
                                        </li>
                                        <li>
                                            Sum paid by a company as donation to the Indian Olympic
                                            Association or any other association/institution
                                            established in India
                                        </li>
                                    </ol>
                                    <h5>
                                        Category 4: Donation qualifying for 50% deduction, subject
                                        to qualifying limit
                                    </h5>
                                    <ol style={{ listStyleType: "upper-roman" }}>
                                        <li>Any Institution or Fund established in India for charitable purposes</li>
                                        <li>
                                            The Government or any local authority for utilization for
                                            any charitable purpose other than the purpose of
                                            promoting family planning
                                        </li>
                                        <li>
                                            An authority constituted in India by or under any other
                                            law enacted either for dealing with and satisfying the
                                            need for housing accommodation or for the purpose of
                                            planning, development or improvement of cities, towns and
                                            villages, or both
                                        </li>
                                        <li>
                                            Any Corporation established by the Central Government or
                                            any State Government for promoting the interests of the
                                            members of a minority community
                                        </li>
                                        <li>
                                            For renovation or repair of notified temple, mosque,
                                            gurdwara, church or any other similar place
                                        </li>
                                    </ol>
                                    <p>
                                        <strong>Qualifying limit:</strong> The eligible donations
                                        referred to in Category 3 and 4 should be aggregated and
                                        the sum total should be limited to 10% of the adjusted
                                        gross total income.
                                    </p>
                                    <p>
                                        <strong>Adjusted Total Income:</strong> Means GTI as
                                        reduced by LTCG (u/s 112/112A) & STCG u/s 111A & All
                                        Deductions except 80G.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default DeductionForm;
