import React, { useState, useEffect, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, useOutletContext } from "react-router-dom";
import AddClientModal from "./AddclientModal";
import { clientAPI } from '../../services/api';
import { toast } from 'react-toastify';
import LoadingBar from '../LoadingBar';

const Home = () => {
  // Add useEffect for title
  useEffect(() => {
    document.title = "Startax: Dashboard";
  }, []);

  const darkMode = useOutletContext(); // Get darkMode from context
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [searchText, setSearchText] = useState('');

  // Define columns
  const columns = [
    { field: "_id", headerName: "SNO#", minWidth: 80, flex: 0.5 },
    { field: "first_name", headerName: "Name", minWidth: 150, flex: 1 },
    { field: "pan_number", headerName: "Pan Number", minWidth: 150, flex: 1 },
    { field: "fathers_name", headerName: "Father Name", minWidth: 150, flex: 1 },
    { field: "client_type", headerName: "Type", minWidth: 150, flex: 0.75 },
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      flex: 0.75,
      renderCell: (params) => (
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-info mr-2"
            onClick={(event) => {
              event.stopPropagation(); // Prevent row click
              handleEdit(params.row);
            }}
          >
            <i className="fa fa-edit" aria-hidden="true"></i>
          </button>
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#deleteClient"
            onClick={(event) => {
              event.stopPropagation(); // Prevent row click
              handleDelete(params.row._id); // Changed to _id
            }}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      ),
    },
  ];

  // State to hold row data
  const [rows, setRows] = useState([]);

  // Fetch clients from API
  const fetchClients = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await clientAPI.getAllClients();
      console.log('Fetched data:', response.data); // Debug log
      setRows(response.data.map(client => ({
        ...client,
        id: client._id // DataGrid needs an id field
      })));
    } catch (err) {
      console.error('Error details:', err);
      toast.error(err.response?.data?.message || 'Failed to fetch clients');
      setError('Failed to load clients');
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchClients();
  }, []);

  // Add initial loading effect
  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second initial loading

    return () => clearTimeout(timer);
  }, []);

  // Handle client deletion
  const handleDelete = async (id) => {
    try {
      await clientAPI.deleteClient(id);
      toast.success('Client deleted successfully');
      fetchClients(); // Refresh the list
    } catch (err) {
      console.error('Delete error:', err);
      toast.error(err.response?.data?.message || 'Failed to delete client');
    }
  };

  // Handle client edit
  const handleEdit = async (row) => {
    try {
      const { _id, ...updateData } = row;
      await clientAPI.updateClient(_id, updateData);
      toast.success('Client updated successfully');
      fetchClients(); // Refresh the list
    } catch (err) {
      console.error('Update error:', err);
      toast.error(err.response?.data?.message || 'Failed to update client');
    }
  };

  // Add search filter function
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      return Object.values(row).some((value) => {
        if (value === null || value === undefined) return false;
        return value.toString().toLowerCase().includes(searchText.toLowerCase());
      });
    });
  }, [rows, searchText]);

  // Add search box above DataGrid
  const searchBox = (
    <div className="col-4 d-flex justify-content-end">
      <div className="input-group mb-3" style={{ maxWidth: '300px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search clients..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setSearchText('')}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // Update the DataGrid onRowClick to properly pass state and navigate
  const handleRowClick = (params) => {
    console.log('Row data:', params.row); // Debug log
    const clientData = {
      client: {
        ...params.row,
        fullName: params.row.first_name
      }
    };
    console.log('Navigating with state:', clientData); // Debug log
    navigate("/client/permanent/basic", { 
      state: clientData,
      replace: true 
    });
  };

  return (
    <>
      <LoadingBar isLoading={isLoading} duration={1000} />
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header row m-0">
                <div className="col-8 d-flex align-items-center">
                  <h3 className="card-title mb-0">All Clients</h3>
                  <button
                    className="mx-4 btn btn-primary"
                    onClick={() => setShowModal(true)}
                  >
                    Add Client
                  </button>
                </div>
                {searchBox}
              </div>
              <div className="card-body" style={{ overflow: 'hidden' }}>
                <div style={{ 
                  height: 400, 
                  width: "100%",
                  overflow: "hidden", // Prevent scrollbar from affecting layout
                  paddingRight: 0, // Remove right padding
                }}>
                  <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 15]}
                    getRowId={(row) => row._id} // Important: tell DataGrid to use _id
                    onRowClick={handleRowClick}
                    loading={loading}
                    error={error}
                    components={{
                      NoRowsOverlay: () => (
                        <div style={{ padding: '1rem', textAlign: 'center' }}>
                          {error ? 'Error loading data' : 'No clients found'}
                        </div>
                      ),
                      LoadingOverlay: () => (
                        <div style={{ padding: '1rem', textAlign: 'center' }}>
                          Loading clients...
                        </div>
                      )
                    }}
                    sx={{
                      "& .MuiDataGrid-cell:focus": {
                        outline: "none",
                        cursor: "pointer",
                      },
                      "& .MuiDataGrid-row:hover": {
                        backgroundColor: darkMode ? "#2c3e50" : "#f5f5f5",
                      },
                      "& .MuiDataGrid-main": {
                        overflow: "hidden !important",
                        paddingRight: "0 !important",
                        backgroundColor: darkMode ? "#1a1a1a" : "#F2F2F2",
                        color: darkMode ? "#fff" : "inherit",
                      },
                      "& .MuiDataGrid-root": {
                        overflow: "hidden !important",
                        paddingRight: "0 !important",
                      },
                      "& .MuiDataGrid-virtualScroller": {
                        overflow: "auto !important",
                        paddingRight: "0 !important",
                      },
                      "& .MuiDataGrid-cell": {
                        border: darkMode ? "1px solid #444" : "1px solidrgb(27, 98, 170)",
                        display: "flex",
                        alignItems: "center",
                        color: darkMode ? "#fff" : "inherit",
                      },
                      "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: darkMode ? "#1a1a1a" : "#fff",
                        color: darkMode ? "#fff" : "#000",
                        fontWeight: "bold",
                        borderBottom: `1px solid ${darkMode ? "#444" : "#dee2e6"}`,
                      },
                      "& .MuiDataGrid-columnHeader": {
                        backgroundColor: darkMode ? "#1a1a1a" : "#fff",
                        color: darkMode ? "#fff" : "#000",
                      },
                      "& .MuiDataGrid-columnHeaderTitle": {
                        color: darkMode ? "#ffffff" : "#000000",
                        fontWeight: "bold",
                      },
                      "& .MuiDataGrid-columnSeparator": {
                        color: darkMode ? "#444" : "#dee2e6",
                      },
                      "& .MuiDataGrid-iconButtonContainer": {
                        color: darkMode ? "#444" : "#dee2e6",
                      },
                      "& .MuiDataGrid-sortIcon": {
                        color: darkMode ? "#fff" : "#000",
                      },
                      "& .MuiDataGrid-menuIcon": {
                        color: darkMode ? "#fff" : "#000",
                      },
                      "& .MuiDataGrid-footerContainer": {
                        backgroundColor: darkMode ? "#2c3e50" : "inherit",
                        color: darkMode ? "#fff" : "inherit",
                      },
                      "& .MuiTablePagination-root": {
                        color: darkMode ? "#fff" : "inherit",
                      },
                      "& .MuiDataGrid-row": {
                        backgroundColor: darkMode ? "#1a1a1a" : "inherit",
                        "&:nth-of-type(odd)": {
                          backgroundColor: darkMode ? "#2c2c2c" : "inherit",
                        },
                      }
                    }}
                    autoHeight={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Delete Client Modal */}
      <div className="modal fade" id="deleteClient">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Client</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Do you want to delete this client permanently?
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete()} // Hook up delete logic here
                data-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddClientModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Home;