import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingBar from './LoadingBar';
import faviconImg from '../../public/static/dist/img/favicon.ico'

const Layout = ({ darkMode, toggleDarkMode, isLoading }) => {
  return (
    <>
      <nav className={`main-header navbar navbar-expand ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"}`} 
           style={{ 
             margin: "0",
             padding: "0.5rem 1rem",
             boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
             position: "sticky",
             top: 0,
             zIndex: 1000
           }}>
        <div className="container-fluid">
          {/* Brand Logo */}
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={faviconImg}
              alt="Star Tax Logo"
              className="brand-image"
              style={{ 
                height: "32px",
                width: "auto",
                marginRight: "10px"
              }}
            />
            <span className="brand-text font-weight-bold">Star Tax</span>
          </a>

          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link px-3 rounded-pill hover-effect">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 rounded-pill hover-effect">
                Uplinks
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 rounded-pill hover-effect">
                Help
              </a>
            </li>
          </ul>

          {/* Right Side Items */}
          <div className="d-flex align-items-center gap-3">
            {/* Dark Mode Toggle */}
            <div className="dark-mode-toggle" 
                 onClick={toggleDarkMode}
                 style={{
                   cursor: "pointer",
                   padding: "8px",
                   borderRadius: "50%",
                   background: darkMode ? "#2c3e50" : "#f8f9fa",
                   transition: "all 0.3s ease"
                 }}>
              {darkMode ? (
                <i className="fas fa-sun" style={{ color: "#ffd700" }}></i>
              ) : (
                <i className="fas fa-moon" style={{ color: "#2c3e50" }}></i>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={() => $('#logoutModal').modal('show')}
              className="btn btn-outline-danger d-flex align-items-center gap-2"
              style={{
                borderRadius: "20px",
                padding: "8px 16px",
                transition: "all 0.3s ease"
              }}
            >
              <i className="fas fa-sign-out-alt"></i>
              <span className="d-none d-md-inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>
      <LoadingBar isLoading={isLoading} />
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
  const [isLoading, setIsLoading] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`body hold-transition layout-fixed sidebar-closed ${darkMode ? "dark-mode" : ""}`}>
      <div className="wrapper">
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} isLoading={isLoading} />
        <div className="content-wrapper" style={{ margin: "0" }}>
          <Outlet context={darkMode} /> {/* Pass darkMode directly as context */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;