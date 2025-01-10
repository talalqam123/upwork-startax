import React, { useState } from 'react';

const AdditionalDetails = ({
  clientId,
  clientYear,
  clientRelId,
  notes,
  additionalDetails,
  udyamDetails,
}) => {
  const [noteText, setNoteText] = useState('');
  const [notesList, setNotesList] = useState(notes);
  
  const handleCheckboxChange = (noteId, e) => {
    const updatedNotes = notesList.map(note => 
      note.id === noteId ? { ...note, is_compleated: e.target.checked } : note
    );
    setNotesList(updatedNotes);

    // Submit the form for checkbox change
    submitForm(noteId, 'post', e.target.checked);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notesList.filter(note => note.id !== noteId);
    setNotesList(updatedNotes);
    submitForm(noteId, 'delete');
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    // Assuming there's an API endpoint to add new notes
    const newNote = { id: Date.now(), note: noteText, date_created: new Date(), is_compleated: false };
    setNotesList([...notesList, newNote]);
    setNoteText('');
    // Submit the form to add new note (you can replace this with actual API call)
    submitForm(newNote.id, 'post');
  };

  const submitForm = (noteId, actionType, isCompleted) => {
    // Action based on type (post or delete)
    if (actionType === 'post') {
      console.log(`Post action for note ${noteId} with completion: ${isCompleted}`);
    } else if (actionType === 'delete') {
      console.log(`Delete action for note ${noteId}`);
    }
  };

  return (
    <div className="card card-body">
      <div className="card">
        <div className="card-header">
          <strong>
            <i className="fas fa-clipboard mr-2"></i> Notes
          </strong>
        </div>
        <div className="card-body">
          <ul className="todo-list" id="todo-list-items" data-widget="todo-list">
            {notesList.map(note => (
              <li key={note.id}>
                <div className="icheck-primary d-inline ml-2">
                  <input
                    type="checkbox"
                    checked={note.is_compleated}
                    onChange={(e) => handleCheckboxChange(note.id, e)}
                  />
                  <label htmlFor={`checkbox-${note.id}`} />
                </div>
                <span className="text">{note.note}</span>
                <small className="badge badge-danger float-right">
                  <i className="far fa-clock"></i> {new Date(note.date_created).toLocaleDateString()} {new Date(note.date_created).toLocaleTimeString()}
                </small>
                <div className="tools">
                  <i
                    className="fas fa-trash"
                    onClick={() => handleDeleteNote(note.id)}
                  ></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <form onSubmit={handleNoteSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="note"
                name="note"
                className="form-control h-auto rounded-0"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
              <span className="input-group-append">
                <button type="submit" id="submit-task-form" className="btn btn-primary">
                  Save
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Additional Details Form */}
      <form method="POST" action={`/basic_details/permanent_additional/${clientYear}/${clientRelId}`}>
        <input type="hidden" name="client_id" value={clientId} />
        <div className="row text-content">
          <div className="col-md-6">
            <div className="form-group">
              <label className="m-1">Passport number</label>
              <input
                type="number"
                name="passport_no"
                className="form-control rounded-0"
                value={additionalDetails.passport_no || ''}
              />
            </div>
            <div className="form-group">
              <label className="m-1">Voter Id number</label>
              <input
                type="number"
                name="voter_id_no"
                className="form-control rounded-0"
                value={additionalDetails.voter_id_no || ''}
              />
            </div>
            <div className="form-group">
              <label className="m-1">Nationality</label>
              <input
                type="text"
                name="nationality"
                className="form-control rounded-0"
                value={additionalDetails.nationality || ''}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="m-1">Qualification</label>
              <input
                type="text"
                name="qualification"
                className="form-control rounded-0"
                value={additionalDetails.qualification || ''}
              />
            </div>
            <div className="form-group">
              <label className="m-1">Occupation</label>
              <input
                type="text"
                name="occupation"
                className="form-control rounded-0"
                value={additionalDetails.occupation || ''}
              />
            </div>
            <div className="form-group">
              <label className="m-1">Marital Status <small>(optional)</small></label>
              <select
                className="form-control rounded-0"
                name="marital_status"
                value={additionalDetails.marital_status || ''}
              >
                <option value="">Select Option</option>
                <option value="Married">Married</option>
                <option value="UnMarried">UnMarried</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card card-primary w-100">
          <div className="card-header">
            <div><strong>Udyam Registration Details (MSME)</strong></div>
          </div>
          <div className="card-body">
            <div className="row text-content">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="m-1">Whether MSME?</label>
                  <select
                    name="is_msme"
                    className="form-control rounded-0"
                    value={udyamDetails.is_msme || ''}
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="m-1">Registration Date</label>
                  <input
                    type="text"
                    name="registration_date"
                    value={udyamDetails.registration_date || ''}
                    className="form-control rounded-0"
                  />
                </div>
                <div className="form-group">
                  <label className="m-1">Major Activity</label>
                  <select
                    name="major_activity"
                    className="form-control rounded-0"
                    value={udyamDetails.major_activity || ''}
                  >
                    <option value="">Select Option</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Services">Services</option>
                    <option value="Trading">Trading</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="m-1">MSME Registration No.</label>
                  <input
                    type="text"
                    name="msme_registration_no"
                    value={udyamDetails.msme_registration_no || ''}
                    className="form-control rounded-0"
                  />
                </div>
                <div className="form-group">
                  <label className="m-1">Type of Enterprises</label>
                  <select
                    name="enterpris_type"
                    className="form-control rounded-0"
                    value={udyamDetails.enterpris_type || ''}
                  >
                    <option value="">Select Option</option>
                    <option value="micro">Micro Enterprises</option>
                    <option value="small">Small Enterprises</option>
                    <option value="medium">Medium Enterprises</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <input
              type="submit"
              style={{ width: 'fit-content' }}
              id="submit_client_details_form"
              className="btn btn-block btn-primary"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdditionalDetails;
