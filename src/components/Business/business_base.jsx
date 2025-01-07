import React from 'react';
import { useNavigate } from "react-router-dom";
import RemunerationForm from './AddBusiness/BSPL/remuneration';
import BSPLIncomeForm from './AddBusiness/BSPL/bspl_income';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const BusinessSection = ({ title, items }) => {
  const navigate = useNavigate();
  return (
  <div className="row mt-5 inr_tabs_button">
    <div className="col-md-12">
      <strong>{title}</strong>
    </div>
    {items.map((item, index) => (
      <div className="col-md-8 mt-4" key={index}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="headin_iner row w-100">
            <div className="col-9">
              <strong>{item.number}</strong> {item.description}
            </div>
            <button
              onClick={() =>navigate(item.link)}
              className="buton_tabs_ac btn col-3 w-auto btn-block bg-gradient-info btn-flat text-sm"
            >
              {item.buttonText}
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)};

const BusinessIncome = ({ clientRelId }) => {
  const businessIncomeItems = [
    {
      number: '01',
      description: 'Remuneration from Partnership Firms',
      buttonText: 'Add Remuneration',
      link: `/client/business_remuneration/${clientRelId}`,
    },
    {
      number: '02',
      description: 'Balance Sheet with Profit & Loss Account',
      buttonText: 'Add BSPL Income',
      link: `/catalog_2024/business_bspl/${clientRelId}`,
    },
    {
      number: '03',
      description: 'Books of Account are Not Maintained',
      buttonText: 'Add No Books of Account Income',
      link: `/catalog_2024/business_no_book/${clientRelId}`,
    },
    {
      number: '04',
      description: 'Speculative Income',
      buttonText: 'Add Speculative Income',
      link: `/catalog_2024/business_speculative/${clientRelId}`,
    },
  ];

  const financialStatementsItems = [
    {
      number: '01',
      description: 'GST Details',
      buttonText: 'Add GST Details',
      link: `/catalog_2024/business_gst/${clientRelId}`,
    },
    {
      number: '02',
      description: 'Schedule BP',
      buttonText: 'Fill Schedule BP',
      link: `/catalog_2024/schedule_bp/${clientRelId}`,
    },
    {
      number: '03',
      description: 'Schedule OI (Other Information)',
      buttonText: 'Fill Schedule OI',
      link: `/catalog_2024/schedule_oi/${clientRelId}`,
    },
  ];

  const auditInformationItems = [
    {
      number: '01',
      description: 'Auditor Details',
      buttonText: 'Fill Auditor Details',
      link: `/catalog_2024/audit/${clientRelId}`,
    },
    {
      number: '02',
      description: 'Form 3CA/3CB - 3CD',
      buttonText: 'Fill Form 3CA/3CB - 3CD',
      link: `/catalog_2024/cacbcd3/${clientRelId}`,
    },
  ];

  const quantitativeDetailsItems = [
    {
      number: '01',
      description: 'Details of Trading Concern',
      buttonText: 'Fill Details',
      link: `/catalog_2024/tradin/${clientRelId}`,
    },
    {
      number: '02',
      description: 'Details of Manufacturing Concern (Raw Materials)',
      buttonText: 'Fill Details',
      link: `/catalog_2024/manufacturing_materials/${clientRelId}`,
    },
    {
      number: '03',
      description: 'Details of Manufacturing Concern (Finished Products)',
      buttonText: 'Fill Details',
      link: `/catalog_2024/manufacturing_products/${clientRelId}`,
    },
  ];

  return (
    <div className="card card-body p-4">
      <BusinessSection title="Add A Business" items={businessIncomeItems} />
      <BusinessSection
        title="Financial Statements & Schedules"
        items={financialStatementsItems}
      />
      <BusinessSection title="Audit Information" items={auditInformationItems} />
      <BusinessSection
        title="Quantitative Details"
        items={quantitativeDetailsItems}
      />
    </div>
  );
};

const BuisinessBase = ({ clientRelId }) => (
  <div className="col-12 mt-3">
    <BusinessIncome clientRelId={clientRelId} year={2024} />

  </div>

);

export default BuisinessBase;
