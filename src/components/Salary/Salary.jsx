import React, { useState } from "react";
import GrossSalary from "./SalaryDetailsForm";
import OverallExemptionDeduction from "./OverallExemption";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
// import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const EmployerWiseSalary = () => {
  const theme = useTheme();
  const [tabs, setTabs] = useState([
    {
      EmployerName: "Employer 1",
      EmployerCategory: "CGOV",
      EmployerAddress: {
        TanNumber: "ABCDE1234F",
        TDSDeducted: "1000",
        Address: "123 Main St",
        PinCode: "123456",
        StateCode: "KA",
        City: "Bangalore",
        showAddress: true,
      },
    },
  ]);
  const [value, setValue] = useState(0);
 

  const states = {
    KA: "Karnataka",
    TN: "Tamil Nadu",
    MH: "Maharashtra",
    DL: "Delhi",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addTab = () => {
    setTabs([
      ...tabs,
      {
        EmployerName: `Employer ${tabs.length + 1}`,
        EmployerCategory: "",
        EmployerAddress: {
          TanNumber: "",
          TDSDeducted: "",
          Address: "",
          PinCode: "",
          StateCode: "",
          City: "",
          showAddress: false,
        },
      },
    ]);
    setValue(tabs.length);
  };

  const removeTab = (index) => {
    setTabs(tabs.filter((_, i) => i !== index));
    if (value === index && index > 0) {
      setValue(index - 1);
    } else if (value > index) {
      setValue(value - 1);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedTabs = [...tabs];
    if (field.includes("EmployerAddress.")) {
      const addressField = field.split(".")[1];
      updatedTabs[index].EmployerAddress[addressField] = value;
    } else {
      updatedTabs[index][field] = value;
    }
    setTabs(updatedTabs);
  };

  const toggleAddressVisibility = (index) => {
    const updatedTabs = [...tabs];
    updatedTabs[index].EmployerAddress.showAddress = !updatedTabs[index].EmployerAddress.showAddress;
    setTabs(updatedTabs);
  };
 
    const sampleData = {
      AllwncExemptUs10: {
        TotalAllwncExemptUs10: 60000,
      },
      DeductionUs16: 25000,
      DeductionUs16ia: 55000,
      EntertainmntalwncUs16ii: 3500,
      ProfessionalTaxUs16iii: 3000,
    };
  

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        position: "relative",
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="white" sx={{
        boxShadow: "none", // Removes shadow
        borderBottom: "none", // Removes any bottom border if applicable
      }} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="employer-tabs"
          sx={{
            "& .MuiTab-root": {
              color: "black", // Default text color
              fontWeight: "bold",
              textTransform: "none", // Removes uppercase
            },
            "& .MuiTab-root.Mui-selected": {
              color: "blue", // Selected tab color
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "blue", // Tab indicator color
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <Box display="flex" alignItems="center">
                  {tab.EmployerName || `Employer ${index + 1}`}
                  <DeleteIcon
                    sx={{ ml: 1, cursor: "pointer", color: "red" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTab(index);
                    }}
                  />
                </Box>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>


      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index} dir={theme.direction}>
          <Box className="tab-content">
            <div className="card card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="m-1 text-content">Name of the Employer *</label>
                    <input
                      type="text"
                      className="form-control rounded-0 emp_name"
                      value={tab.EmployerName}
                      onChange={(e) =>
                        handleInputChange(index, "EmployerName", e.target.value)
                      }
                      maxLength="125"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="m-1 text-content">Employer Type/Category *</label>
                    <select
                      className="form-control rounded-0"
                      value={tab.EmployerCategory}
                      onChange={(e) =>
                        handleInputChange(index, "EmployerCategory", e.target.value)
                      }
                    >
                      <option value="">Select Option</option>
                      <option value="CGOV">Central Government</option>
                      <option value="SGOV">State Government</option>
                      <option value="PSU">Public Sector Unit</option>
                      <option value="PE">Pensioners - Central Government</option>
                      <option value="PESG">Pensioners - State Government</option>
                      <option value="PEPS">Pensioners - PSU</option>
                      <option value="PEO">Pensioners - Others</option>
                      <option value="OTH">Others</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label className="m-1 text-content">Tan Number</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={tab.EmployerAddress.TanNumber}
                      onChange={(e) =>
                        handleInputChange(index, "EmployerAddress.TanNumber", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label className="m-1 text-content">Salary TDS Deducted</label>
                    <input
                      type="number"
                      className="form-control rounded-0"
                      value={tab.EmployerAddress.TDSDeducted}
                      onChange={(e) =>
                        handleInputChange(index, "EmployerAddress.TDSDeducted", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              <p className="pt-1 m-0 mb-1 d-flex">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={tab.EmployerAddress.showAddress}
                    onChange={() => toggleAddressVisibility(index)}
                  />
                  <span className="slider-switch round"></span>
                </label>
                <span className="toggleAddressLabel">
                  {tab.EmployerAddress.showAddress ? "Hide" : "Show"} Address (Address is Mandatory in ITR-2 or ITR-3)
                </span>
              </p>

              {tab.EmployerAddress.showAddress && (
                <div className="row address-row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="m-0">Address full Line</label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        value={tab.EmployerAddress.Address}
                        onChange={(e) =>
                          handleInputChange(index, "EmployerAddress.Address", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="m-0">Pincode</label>
                      <input
                        type="number"
                        className="form-control rounded-0"
                        value={tab.EmployerAddress.PinCode}
                        onChange={(e) =>
                          handleInputChange(index, "EmployerAddress.PinCode", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="m-0">State Code</label>
                      <select
                        className="form-control rounded-0"
                        value={tab.EmployerAddress.StateCode}
                        onChange={(e) =>
                          handleInputChange(index, "EmployerAddress.StateCode", e.target.value)
                        }
                      >
                        <option value="">Select Option</option>
                        {Object.entries(states).map(([code, name]) => (
                          <option key={code} value={code}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="m-0">City / Town / District</label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        value={tab.EmployerAddress.City}
                        onChange={(e) =>
                          handleInputChange(index, "EmployerAddress.City", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>
            <GrossSalary/>
            <OverallExemptionDeduction previousClientSalaryDetails={sampleData} />
          </Box>
        </TabPanel>
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <button
          className="btn btn-primary rounded-pill px-4"
          onClick={addTab}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AddIcon /> Add Employer
        </button>
      </Box>
    </Box>
  );
};

export default EmployerWiseSalary;
