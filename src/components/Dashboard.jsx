import React from 'react';
import Home from './Home';
import ClientDetails from './ClientDetails';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Navbar = ({ darkMode }) => (
  
  <nav className={`main-header navbar navbar-expand navbar-light ${darkMode === 'true' ? 'navbar-dark' : ''}`}>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#">
          <i className="fas fa-bars"></i>
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/home/" className="nav-link">Home</a>
      </li>
      {[...Array(3)].map((_, index) => (
        <li key={index} className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Uplinks</a>
        </li>
      ))}
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link" data-toggle="modal" data-target="#helpModal">Help</a>
      </li>
    </ul>
    <div className="drkMode ml-auto">
      <div className="inner_div_drk mr-3">
        <img src="../static/dist/img/moon.png" alt="" className="drkimg" />
        <img src="../static/dist/img/sun.png" alt="" className="lightimg" />
      </div>
    </div>
    <div className="ml-auto ml-md-0">
      <a data-toggle="modal" data-target="#logoutModal" className="logout-navbar px-3 py-2 rounded-0" role="button">
        <i className="nav-icon fas fa-sign-out-alt mr-0 mr-md-1"></i>&nbsp;
        <p className="m-0 d-none d-md-block">Logout</p>
      </a>
    </div>
  </nav>
 
);

const Sidebar = ({ user }) => (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/home/" className="brand-link">
      <img src="../static/dist/img/favicon.ico" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: 0.8 }} />
      <span className="brand-text font-weight-light">Star Tax</span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="../static/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">get_full_name</a>
        </div>
      </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item has-treeview menu-open">
            <a href="/" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy"></i>
              <p>Client <i className="fas fa-angle-left right"></i></p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/add_client" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Add Client</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/add_client_by_id_password" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Add By Id Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/add_client_by_json" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Add By JSON Upload</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

const Dashboard = ({ darkMode, user,data, csrfToken }) => (
 
  <div className='body hold-transition layout-fixed sidebar-mini-md sidebar-collapse'>
  <div className={`wrapper ${darkMode === 'true' ? 'dark-mode' : ''}`}>
    <Navbar darkMode={darkMode} />
    <Sidebar user={user} />
    <div className="content-wrapper">
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<ClientDetails />} />
            {/* Add more routes as needed */}
          </Routes>
      </div>
  </div>
  </div>
);

export default Dashboard;