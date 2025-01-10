// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useNavigate } from 'react-router-dom';
// import AddClientModal from './AddclientModal';
// const Home = ({ csrfToken }) => {
//   const navigate = useNavigate();


//   const [showModal, setShowModal] = useState(false); 
//   // Define columns
//   const columns = [
//     // { field: 'id', headerName: 'SNO#', width: 100 },
//     // { field: 'first_name'  , headerName: 'Name', width: 200 },
//     // { field: 'pan_number', headerName: 'Pan Number', width: 200 },
//     // { field: 'fathers_name', headerName: 'Father Name', width: 200 },
//     // { field: 'client_type', headerName: 'Type', width: 150 },
//     { field: 'id', headerName: 'SNO#', flex: 0.5 }, // Smaller proportion for SNO
//   { field: 'first_name', headerName: 'Name', flex: 1 },
//   { field: 'pan_number', headerName: 'Pan Number', flex: 1 },
//   { field: 'fathers_name', headerName: 'Father Name', flex: 1 },
//   { field: 'client_type', headerName: 'Type', flex: 0.75 },
//     {
//       field: 'action',
//       headerName: 'Action',
//       flex: 0.75, 
//       renderCell: (params) => (
//         <div className="d-flex align-items-center justify-content-center">
//           <button
//             className="btn btn-info mr-2"
//             onClick={(event) => {
//               event.stopPropagation(); // Prevent row click
//               handleEdit(params.row);
//             }}
//           >
//             <i className="fa fa-edit" aria-hidden="true"></i>
//           </button>
//           <button
//             className="btn btn-danger"
//             data-toggle="modal"
//             data-target="#deleteClient"
//             onClick={(event) => {
//               event.stopPropagation(); // Prevent row click
//               handleDelete(params.row.id);
//             }}
//           >
//             <i className="fa fa-trash" aria-hidden="true"></i>
//           </button>
//         </div>
//       ),
//     }
//   ];

//   // State to hold row data
//   const [rows, setRows] = useState([]);

//   // Fetch data from localStorage on component mount
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('clientData')) || [];
//     setRows(storedData);
//   }, []);

//   // Save data to localStorage whenever rows update
//   // useEffect(() => {
//   //   localStorage.setItem('clients', JSON.stringify(rows));
//   // }, [rows]);

//   // Add a new client
//   const handleAddClient = () => {
//     const newClient = {
//       id: rows.length + 1,
//       full_name: 'New Client',
//       pan_number: 'PAN123456',
//       fathers_name: 'Father Name',
//       client_type: 'Individual',
//     };
//     setRows([...rows, newClient]);
//   };

//   // Edit a client
//   const handleEdit = (row) => {
//     const updatedRows = rows.map((client) =>
//       client.id === row.id
//         ? { ...client, full_name: 'Updated Name' } // Example: Updating name
//         : client
//     );
//     setRows(updatedRows);
//   };

//   // Delete a client
//   const handleDelete = (id) => {
//     const filteredRows = rows.filter((client) => client.id !== id);
//     setRows(filteredRows);
//   };

//   return (
//    <>
//       <section className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1>Dashboard</h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <a href="#">Home</a>
//                 </li>
//                 <li className="breadcrumb-item active">Dashboard</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="content">
//         <div className="row">
//           <div className="col-12">
//             <div className="card">
//               <div className="card-header row m-0">
//                 <div className="col-8 d-flex align-items-center">
//                   <h3 className="card-title mb-0">All Clients</h3>
//                   <button
//                     className="mx-4 btn btn-primary"
//                     onClick={() => setShowModal(true)} 
//                   >
//                     Add Client
//                   </button>
//                 </div>
//               </div>
//               <div className="card-body">
//                 <div style={{ height: 400, width: '100%' }}>
//                   <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={5}
//                     rowsPerPageOptions={[5, 10, 15]}
//                     onRowClick={(params) =>
//                       navigate("/client", { state: { client: params.row } })
//                     }
//                     sx={{
//                       "& .MuiDataGrid-cell:focus": {
//                         outline: "none", // Remove the blue border
//                         cursor: "pointer"
//                       },
//                       "& .MuiDataGrid-row:hover": {
//                         backgroundColor: "#f5f5f5", // Optional: Add a hover effect for rows
//                       },
                       
//                     }}
//                     disableColumnResize
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Delete Client Modal */}
//       <div className="modal fade" id="deleteClient">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Delete Client</h5>
//               <button type="button" className="close" data-dismiss="modal">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               Do you want to delete this client permanently?
//             </div>
//             <div className="modal-footer">
//               <button
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Cancel
//               </button>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => handleDelete()} // Hook up delete logic here
//                 data-dismiss="modal"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AddClientModal showModal={showModal} onClose={() => setShowModal(false)} />
//       </>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import AddClientModal from "./AddclientModal";
const Home = ({ csrfToken }) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  // Define columns
  const columns = [
    { field: "id", headerName: "SNO#", minWidth: 80, flex: 0.5 },
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
              handleDelete(params.row.id);
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

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("clientData")) || [];
    setRows(storedData);
  }, []);

  // Save data to localStorage whenever rows update
  // useEffect(() => {
  //   localStorage.setItem('clients', JSON.stringify(rows));
  // }, [rows]);

  // Add a new client
  const handleAddClient = () => {
    const newClient = {
      id: rows.length + 1,
      full_name: "New Client",
      pan_number: "PAN123456",
      fathers_name: "Father Name",
      client_type: "Individual",
    };
    setRows([...rows, newClient]);
  };

  // Edit a client
  const handleEdit = (row) => {
    const updatedRows = rows.map((client) =>
      client.id === row.id
        ? { ...client, full_name: "Updated Name" } // Example: Updating name
        : client
    );
    setRows(updatedRows);
  };

  // Delete a client
  const handleDelete = (id) => {
    const filteredRows = rows.filter((client) => client.id !== id);
    setRows(filteredRows);
  };

  return (
    <>
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
              </div>
              <div className="card-body">
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 15]}
                    onRowClick={(params) =>
                      navigate("/client", { state: { client: params.row } })
                    }
                    sx={{
                      "& .MuiDataGrid-cell:focus": {
                        outline: "none",
                        cursor: "pointer",
                      },
                      "& .MuiDataGrid-row:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                      "& .MuiDataGrid-main": {
                        overflow: "auto",
                        backgroundColor: "#F2F2F2"
                      },
                      "& .MuiDataGrid-cell": {
                        border: "1px solid #dee2e6",
                        display: "flex",
                        alignItems: "center"
                      },
                      "& .MuiDataGrid-columnHeaders": {
                        fontWeight: "bold !important"
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