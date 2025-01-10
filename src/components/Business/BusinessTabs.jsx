import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BusinessTabs = () => {
  const location = useLocation();
  const baseUrl = "/client/business";

  const tabs = [
    {
      path: `${baseUrl}/44ad`,
      label: "Income Under 44AD"
    },
    {
      path: `${baseUrl}/44ada`,
      label: "Income Under 44ADA"
    },
    {
      path: `${baseUrl}/44ae`,
      label: "Income Under 44AE"
    }
  ];

  return (
    <div className="card-header p-0 pt-1 border-bottom-0">
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li key={index} className="nav-item d-flex flex-row">
            <NavLink
              to={tab.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {tab.label}
              <button type="button" className="align-self-center tooltips income-info-button ml-2">
                <i className="fas fa-info-circle" />
              </button>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessTabs;
