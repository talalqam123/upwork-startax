import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';



const Home = ({ csrfToken }) => {
const navigate = useNavigate()
  const columns = [
    { field: 'id', headerName: 'SNO#', width: 100 },
    { field: 'full_name', headerName: 'Name', width: 200 },
    { field: 'pan_number', headerName: 'Pan Number', width: 200 },
    { field: 'fathers_name', headerName: 'Father Name', width: 200 },
    { field: 'client_type', headerName: 'Type', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => (
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-info mr-2">
            <i className="fa fa-edit" aria-hidden="true"></i>
          </button>
          <button className="btn btn-danger" data-toggle="modal" data-target="#deleteClient">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      ),
    },
  ];

  // Dummy data for the table rows
  const rows = [
    { id: 1, full_name: 'John Doe', pan_number: 'ABC123456', fathers_name: 'Robert Doe', client_type: 'Individual' },
    { id: 2, full_name: 'Jane Smith', pan_number: 'XYZ987654', fathers_name: 'Edward Smith', client_type: 'Business' },
    { id: 3, full_name: 'Sam Wilson', pan_number: 'LMN456789', fathers_name: 'Peter Wilson', client_type: 'Individual' },
    { id: 4, full_name: 'Nancy Drew', pan_number: 'PQR123789', fathers_name: 'Thomas Drew', client_type: 'Trust' },
    { id: 5, full_name: 'Harry Potter', pan_number: 'GHI321654', fathers_name: 'James Potter', client_type: 'Individual' },
  ];

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                  <button className="mx-4 btn btn-primary" data-toggle="modal" data-target="#addClientModal">Add Client</button>
                </div>
              </div>
              <div className="card-body">
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 15]}
                    checkboxSelection
                    onRowClick={() => navigate(`/client`)} // Navigate on row click
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modals */}
      <div className="modal fade" id="addClientModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add new Client</h4>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <div className="button-group mb-3">
                <button className="btn btn-primary mx-2">Add Client</button>
                <button className="btn btn-info mx-2">Add By Id Password</button>
                <button className="btn btn-secondary mx-2">Add By JSON Upload</button>
              </div>
              <div className="modal-footer justify-content-center">
                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="deleteClient">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Client</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form method="POST" action="/remove_client">
              <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
              <div className="modal-body">
                Do you want to delete client permanently?
                <input type="hidden" id="delete-client-id" name="client_rel_id" />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
