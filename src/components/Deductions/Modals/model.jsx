import React, { useState } from "react";

const Section80G = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="row">
            <div className="card card-body">
                <div className="form_heading">
                    <div>
                        <strong>
                            Section 80G: Donations to charitable
                            organizations
                        </strong>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span>
                            The government requires itemized details of donations for Section
                            80G.
                        </span>
                    </div>
                </div>

                <div className="row mt-3 callout callout-info position-relative text-content">
                    <button
                        className="btn btn-sm btn-danger"
                        type="button"
                    >
                        <i className="fas fa-trash"></i>
                    </button>

                    <div className="col-md-12 card card-body">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="form-group row">
                                    <label className="col-md-4">Common 80G Organizations</label>
                                    <div className="col-md-8 d-flex flex-row">
                                        <select
                                            className="form-control rounded-0"
                                        >
                                            <option value="">Common 80G Organizations</option>
                                            <option value="AAETP3993P">PM CARES - COVID-19 RELIEF FUND</option>
                                            <option value="AAATC0294J">MAHARASHTRA CM COVID-19 RELIEF FUND</option>
                                            <option value="AAAAC6443N">WEST BENGAL STATE EMERGENCY RELIEF FUND-COVID 19</option>
                                        </select>
                                        <button
                                            type="button"
                                            className="align-self-center tooltips income-info-button"
                                            onClick={toggleModal}
                                        >
                                            <i className="fas fa-info-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="80g_donation_btn">
                    <button className="btn btn-info btn-sm rounded-0" type="button">
                        Add More
                    </button>
                </div>
            </div>

            <div className="modal fade" id="deduction80g" style={{ display: showModal ? "block" : "none" }}>
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
            </div>
        </div>
    );
};

export default Section80G;
