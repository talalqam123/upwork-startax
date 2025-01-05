import React, { useState, useEffect } from "react";
// import "./AddClient.css"; // Optional for custom styles if needed

const AddClient = () => {
  const [client, setClient] = useState({
    id: "", // Incremental ID
    client_type: "Individual",
    first_name: "",
    middle_name: "",
    last_name: "",
    fathers_name: "",
    date_of_birth: "",
    pan_number: "",
    cin_number: "",
    gender: "",
    date_of_commencement: "",
  });

  const [nextId, setNextId] = useState(1); // Next incremental ID

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedClients = JSON.parse(localStorage.getItem("clientData")) || [];
    if (savedClients.length > 0) {
      const lastId = savedClients[savedClients.length - 1].id;
      setNextId(lastId + 1); // Set next ID based on the last saved ID
    }
  }, []);

  const formatInput = (value) => {
    return value
      .replace(/^(\d\d)(\d)$/g, "$1/$2")
      .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
      .replace(/[^\d\/]/g, "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: name === "date_of_birth" || name === "date_of_commencement" ? formatInput(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assign the next available ID
    const newClient = { ...client, id: nextId };

    // Save to localStorage
    const savedClients = JSON.parse(localStorage.getItem("clientData")) || [];
    savedClients.push(newClient);
    localStorage.setItem("clientData", JSON.stringify(savedClients));

    // Increment the ID for the next client
    setNextId(nextId + 1);

    alert("Client added successfully!");
    console.log("Saved Client Data:", newClient);

    // Reset the form
    setClient({
      id: "",
      client_type: "Individual",
      first_name: "",
      middle_name: "",
      last_name: "",
      fathers_name: "",
      date_of_birth: "",
      pan_number: "",
      cin_number: "",
      gender: "",
      date_of_commencement: "",
    });
  };

  return (
   <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add Customer</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Add Customer</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-default">
            <div className="card-header">
              <h3 className="card-title">Add Customer</h3>
            </div>
            <div className="card-body">
              <form id="editClientForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="offset-md-4 col-md-6">
                      <div className="form-group">
                        <label className="m-0">Client Type</label>
                        <select
                          name="client_type"
                          id="client_type"
                          className="form-control rounded-0"
                          value={client.client_type}
                          onChange={handleInputChange}
                        >
                          <option value="Individual">Individual</option>
                          <option value="HUF">HUF</option>
                          <option value="Company Public">Company Public</option>
                          <option value="Company Private">Company Private</option>
                          <option value="LLP">LLP</option>
                          <option value="Firm">Firm</option>
                          <option value="AOP/BOI">AOP/BOI</option>
                          <option value="Cooperative Society">Cooperative Society</option>
                        </select>
                      </div>
                    </div>
                    <div className="offset-md-4 col-md-6">
                      <div className="form-group">
                        <label className="m-0">First Name <small>(optional)</small></label>
                        <input
                          type="text"
                          name="first_name"
                          className="form-control rounded-0 text-capitalize"
                          value={client.first_name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="m-0">Middle Name <small>(optional)</small></label>
                        <input
                          type="text"
                          name="middle_name"
                          className="form-control rounded-0 text-capitalize"
                          value={client.middle_name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="m-0">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          className="form-control rounded-0 text-capitalize"
                          required
                          value={client.last_name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="m-0">Father's Name <small>(optional)</small></label>
                        <input
                          type="text"
                          name="fathers_name"
                          className="form-control rounded-0 text-capitalize"
                          value={client.fathers_name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="offset-md-4 col-md-6">
                      <div className="form-group">
                        <label className="m-0">
                          Date Of Birth <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="date_of_birth"
                          className="form-control rounded-0 date-input"
                          required
                          maxLength="10"
                          value={client.date_of_birth}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="m-0">PAN Number <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="pan_number"
                          className="form-control rounded-0 text-uppercase"
                          required
                          maxLength="10"
                          value={client.pan_number}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="m-0">Gender <small>(optional)</small></label>
                        <select
                          className="form-control rounded-0"
                          name="gender"
                          value={client.gender}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Option</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="offset-md-4 col-md-6">
                      <input
                        type="submit"
                        className="btn btn-block rounded-0 btn-primary"
                        value="Submit"
                        style={{ width: "fit-content" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default AddClient;
