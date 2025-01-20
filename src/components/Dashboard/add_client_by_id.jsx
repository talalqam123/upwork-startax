import React, { useState } from "react";

const AddClient = () => {
  const [clientAddType, setClientAddType] = useState("prefill");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector("input[name='csrfmiddlewaretoken']").value;

    const formData = new FormData();
    formData.append("client_add_type", clientAddType);
    formData.append("user_name", username);
    formData.append("password", password);

    fetch("/your-endpoint-url/", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add Client</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Add Client By Id Password</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-default">
            <div className="card-body">
              <form id="createClientByIdPasswordForm" onSubmit={handleSubmit}>
                <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
                <div className="row justify-content-center my-5">
                  <div className="col-md-6">
                    <div className="card card-default">
                      <div className="card-header">
                        <h3 className="card-title">Add Client</h3>
                      </div>
                      <div className="card-body">
                        <div className="form-group w-100">
                          <label className="m-0">Client add type</label>
                          <div className="clearfix col-md-6 d-flex form-group justify-content-between">
                            <div className="icheck-primary d-inline">
                              <input
                                type="radio"
                                id="prefill"
                                checked={clientAddType === "prefill"}
                                name="client_add_type"
                                value="prefill"
                                onChange={() => setClientAddType("prefill")}
                              />
                              <label htmlFor="prefill">Prefill</label>
                            </div>
                            <div className="icheck-primary d-inline">
                              <input
                                type="radio"
                                id="previous_year"
                                name="client_add_type"
                                value="previous_year"
                                checked={clientAddType === "previous_year"}
                                onChange={() => setClientAddType("previous_year")}
                              />
                              <label htmlFor="previous_year">Previous Year JSON</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="m-0">Username</label>
                          <input
                            type="text"
                            name="user_name"
                            className="form-control rounded-0"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label className="m-0">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control rounded-0"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="col-md-12">
                          <input
                            type="submit"
                            style={{ width: "fit-content" }}
                            className="btn btn-block btn-primary"
                            value="Add Client"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
