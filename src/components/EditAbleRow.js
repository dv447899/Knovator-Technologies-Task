import React from "react";

const EditAbleRow = ({
  editFormData,
  handleEditFormChange,
  // handleCancelClick,
}) => {
  return (
    <>
      <td>
        <input
          type="text"
          required="required"
          placeholder="enter a title... "
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="enter a rating...."
          name="rating"
          value={editFormData.rating}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="enter a description...."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        {/* <button type="button" onSubmit={handleCancelClick}>
          Cancel
        </button> */}
      </td>
    </>
  );
};

export default EditAbleRow;
