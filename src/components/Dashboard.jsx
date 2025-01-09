import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import ClientDetails from "./ClientDetails";
import AddClientInfo from "./add_clientdetails";
import RemunerationForm from "./Business/AddBusiness/BSPL/remuneration";
import AddClient from "./add_client_by_id";
import AppRoutes from "../App";
import ClientSummary from "./26AS_AIS";
const Layout = ({ darkMode, toggleDarkMode }) => {

  return (
    <>
      <nav className={`main-header navbar navbar-expand navbar-light ${darkMode ? "navbar-dark" : ""}`} style={{ margin: "0" }}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="brand-link">
              <img
                src="../static/dist/img/favicon.ico"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: 0.8 }}
              />
              <span className="brand-text font-weight-light">Star Tax</span>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Uplinks
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Uplinks
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link" data-toggle="modal" data-target="#helpModal">
              Help
            </a>
          </li>
        </ul>

        <div className="drkMode ml-auto" onClick={toggleDarkMode}>
          <div className="inner_div_drk mr-3">
            <img src="../static/dist/img/moon.png" alt="Dark Mode" className={`drkimg ${darkMode ? "active" : ""}`} />
            <img src="../static/dist/img/sun.png" alt="Light Mode" className={`lightimg ${!darkMode ? "active" : ""}`} />
          </div>
        </div>

        <div className="ml-auto ml-md-0">
          <a
            data-toggle="modal"
            data-target="#logoutModal"
            className="logout-navbar px-3 py-2 rounded-0"
            role="button"
          >
            <i className="nav-icon fas fa-sign-out-alt mr-0 mr-md-1"></i>&nbsp;
            <p className="m-0 d-none d-md-block">Logout</p>
          </a>
        </div>
      </nav>


      <div className="modal fade" id="helpModal" tabIndex="-1" role="dialog" aria-labelledby="helpModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="helpModalLabel">Help Options</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex" style={{ justifyContent: "space-evenly" }}>
              <a href="/home/feedback_and_help?type=feedback">
                <button type="button" className="btn btn-primary btn-block">
                  Feedback and Suggestion
                </button>
              </a>
              <a href="/home/feedback_and_help?type=help">
                <button type="button" className="btn btn-secondary btn-block">
                  Help and Support
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-body text-center">
              <p>Are you sure you want to logout?</p>
              <div>
                <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">
                  Cancel
                </button>
                <a href="/logout" className="btn btn-sm btn-danger">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };


  return (
    <div className={`body hold-transition layout-fixed sidebar-closed ${darkMode ? "dark-mode" : ""}`}>
      <div className="wrapper">
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="content-wrapper" style={{ margin: "0" }}>
          <Outlet />
        </div>
      </div>
    </div>
  )



}
export default Dashboard;