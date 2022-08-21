import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json";
// import editOnlyRow from "./components/editOnlyRow";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditAbleRow from "./components/EditAbleRow";

const App = () => {
  const [feedback, setFeedback] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
    rating: "",
    description: "",
  });
  const [editFormData, setEditFormData] = useState({
    title: "",
    rating: "",
    description: "",
  });

  const [editFeedbackId, setFeedbackId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      title: addFormData.title,
      rating: addFormData.rating,
      description: addFormData.description,
    };
    const newReviews = [...feedback, newReview];
    setFeedback(newReviews);
  };
  const handleEditClick = (event, feedback) => {
    event.preventDefault();
    setFeedbackId(feedback.id);
    const formValues = {
      title: feedback.title,
      rating: feedback.rating,
      description: feedback.description,
    };
    setEditFormData(formValues);
  };
  const handleDeleteClick = (contactId) => {
    const newFeedback = [...feedback];
    const index = feedback.findIndex((feedback) => feedback.id === contactId);
    newFeedback.splice(index, 1);
    setFeedback(newFeedback);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedFeedback = {
      id: editFeedbackId,
      title: editFormData.title,
      rating: editFormData.rating,
      description: editFormData.description,
    };
    const newFeedback = [...feedback];
    const index = feedback.findIndex((cur) => cur.id === editFeedbackId);
    newFeedback[index] = editedFeedback;
    setFeedback(newFeedback);
    setFeedbackId(null);
  };
  const handleCancelClick = () => {
    setFeedbackId(null);
  };
  return (
    <div className="app-container">
      <h2>Give Your Review</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="title...."
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          className="form-control"
          name="rating"
          placeholder="Rating...."
          required="required"
          onChange={handleAddFormChange}
        />
        <textarea
          type="text"
          className="form-control"
          name="description"
          placeholder="description....."
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      <h2>Display Review</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table id="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Rating</th>
              <th>description</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((value) => (
              <Fragment>
                {editFeedbackId === value.id ? (
                  <EditAbleRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    // handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    value={value}
                    handleDeleteClick={handleDeleteClick}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
