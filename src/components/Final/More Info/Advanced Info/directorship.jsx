import React, { useState } from "react";

const DirectorshipDetails = () => {
  const [directorships, setDirectorships] = useState([
    {
      company_name: "",
      company_type: "",
      company_pan: "",
      share_type: "",
      din: "",
      errors: {},
    },
  ]);

  const validateField = (field, value) => {
    const errors = {};

    if (field === "company_name") {
      if (!value) {
        errors[field] = "The Name of Company is required and cannot be empty.";
      } else if (value.length > 125) {
        errors[field] = "The Name of Company must be 125 characters or less.";
      }
    }

    if (field === "company_type") {
      if (!value) {
        errors[field] = "The Company Type is required and cannot be empty.";
      } else if (!["D", "F"].includes(value)) {
        errors[field] = "The Company Type must be either Domestic (D) or Foreign (F).";
      }
    }

    if (field === "company_pan") {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      if (!value) {
        errors[field] = "The PAN of Company is required.";
      } else if (!panRegex.test(value)) {
        errors[field] = "The PAN of Company must be in the format XXXXX0000X.";
      }
    }

    if (field === "share_type") {
      if (!value) {
        errors[field] = "The Share Type is required and cannot be empty.";
      } else if (!["L", "U"].includes(value)) {
        errors[field] = "The Share Type must be either Listed (L) or Unlisted (U).";
      }
    }

    if (field === "din") {
      const dinRegex = /^[0-9]{8}$/;
      if (!value) {
        errors[field] = "The DIN is required.";
      } else if (!dinRegex.test(value)) {
        errors[field] = "The DIN must be exactly 8 digits long.";
      }
    }

    return errors;
  };

  const validateRow = (row) => {
    let rowErrors = {};
    Object.keys(row).forEach((field) => {
      if (field !== "errors") {
        const fieldErrors = validateField(field, row[field]);
        rowErrors = { ...rowErrors, ...fieldErrors };
      }
    });
    return rowErrors;
  };

  const handleChange = (index, field, value) => {
    const updatedDirectorships = directorships.map((directorship, i) => {
      if (i === index) {
        const errors = validateField(field, value);
        return { ...directorship, [field]: value, errors: { ...directorship.errors, ...errors } };
      }
      return directorship;
    });
    setDirectorships(updatedDirectorships);
  };

  const handleAddDirectorship = () => {
    setDirectorships([
      ...directorships,
      {
        company_name: "",
        company_type: "",
        company_pan: "",
        share_type: "",
        din: "",
        errors: {},
      },
    ]);
  };

  const handleRemoveDirectorship = (index) => {
    if (directorships.length > 1) {
      setDirectorships(directorships.filter((_, i) => i !== index));
    } else {
      setDirectorships([
        {
          company_name: "",
          company_type: "",
          company_pan: "",
          share_type: "",
          din: "",
          errors: {},
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = directorships.map(validateRow);
    const hasErrors = validationErrors.some((errors) => Object.keys(errors).length > 0);

    if (hasErrors) {
      const updatedDirectorships = directorships.map((row, i) => ({
        ...row,
        errors: validationErrors[i],
      }));
      setDirectorships(updatedDirectorships);
    } else {
      console.log("Submitted Data: ", directorships);
    }
  };

  return (
    <div className="TDS-Taxes-form-active">
      <div className="pt-3">
        <strong>Directorship Details</strong>
      </div>
      <form onSubmit={handleSubmit} id="directorshipForm" method="POST">
        <div className="card card-body">
          <span className="mb-4">
            <strong>
              If you are a director of a company, please fill these details.
            </strong>
          </span>
          <div className="row text-content">
            <div className="col-md-12">
              <table className="table table-responsive directorship-table">
                <tbody>
                  <tr>
                  <td>
                      <label className="m-0">Name of Company</label>
                    </td>
                    <td>
                      <label className="m-0">Company Type</label>
                    </td>
                    <td>
                      <label className="m-0">PAN of Company</label>
                    </td>
                    <td>
                      <label className="m-0">Listed or Unlisted Shares</label>
                    </td>
                    <td>
                      <label className="m-0">
                        Director Identification Number (DIN)
                      </label>
                    </td>
                    <td>
                      <label className="m-0">Cancel</label>
                    </td>
                  </tr>
                  {directorships.map((directorship, index) => (
                    <tr key={index} className="directorship-details align-items-baseline">
                      <td>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          value={directorship.company_name}
                          onChange={(e) =>
                            handleChange(index, "company_name", e.target.value)
                          }
                        />
                        <small className="text-danger">
                          {directorship.errors.company_name}
                        </small>
                      </td>
                      <td>
                        <select
                          className="form-control rounded-0"
                          value={directorship.company_type}
                          onChange={(e) =>
                            handleChange(index, "company_type", e.target.value)
                          }
                        >
                          <option value="">Select Option</option>
                          <option value="D">Domestic</option>
                          <option value="F">Foreign</option>
                        </select>
                        <small className="text-danger">
                          {directorship.errors.company_type}
                        </small>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          value={directorship.company_pan}
                          onChange={(e) =>
                            handleChange(index, "company_pan", e.target.value)
                          }
                        />
                        <small className="text-danger">
                          {directorship.errors.company_pan}
                        </small>
                      </td>
                      <td>
                        <select
                          className="form-control rounded-0"
                          value={directorship.share_type}
                          onChange={(e) =>
                            handleChange(index, "share_type", e.target.value)
                          }
                        >
                          <option value="">Select Option</option>
                          <option value="L">Listed Share</option>
                          <option value="U">Unlisted Share</option>
                        </select>
                        <small className="text-danger">
                          {directorship.errors.share_type}
                        </small>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          value={directorship.din}
                          onChange={(e) =>
                            handleChange(index, "din", e.target.value)
                          }
                        />
                        <small className="text-danger">{directorship.errors.din}</small>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleRemoveDirectorship(index)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddDirectorship}
              >
                Add More
              </button>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DirectorshipDetails;
