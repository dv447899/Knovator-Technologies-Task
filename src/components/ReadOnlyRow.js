import React from "react";
import "../App.css";
const ReadOnlyRow = ({ value, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{value.title}</td>
      <td>{value.rating}</td>
      <td>{value.description}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(event) => handleEditClick(event, value)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
