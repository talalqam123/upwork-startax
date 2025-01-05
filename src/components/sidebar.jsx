import React, { useState } from "react";

const Sidebar = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sidebarStyle = {
    width: isHovered ? "250px" : "60px", // Adjust the expanded and collapsed widths
    transition: "width 0.3s ease",
  };

  const navItemStyle = {
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={sidebarStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="/home/" className="brand-link">
        <img
          src="../static/dist/img/favicon.ico"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span
          className="brand-text font-weight-light"
          style={navItemStyle}
        >
          Star Tax
        </span>
      </a>
      <div className="sidebar">
        <div
          className="user-panel mt-3 pb-3 mb-3 d-flex"
          style={navItemStyle}
        >
          <div className="image">
            <img
              src="../static/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {user?.get_full_name || "User Name"}
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column nav-flat"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li
              className="nav-item has-treeview menu-open"
              style={navItemStyle}
            >
              <a href="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item has-treeview" style={navItemStyle}>
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy"></i>
                <p>
                  Client <i className="fas fa-angle-left right"></i>
                </p>
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
};

export default Sidebar;
