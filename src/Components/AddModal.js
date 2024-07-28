import React, { useState } from "react";
import { Modal, Button, FormControl, Alert } from "react-bootstrap";

export default function AddModal({ show, handleClose, handleEdit, itemIndex }) {
  // setting states to be able to input a value and show an error message
  const [editedValue, setEditedValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSave = () => {
    // if input is not empty,save the edited task and close modal
    if (editedValue.trim() !== "") {
      handleEdit(itemIndex, editedValue);
      handleClose();
      setEditedValue("");
    } else {
      setShowError(true);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        style={{ backgroundColor: "rgb(69, 184, 223)", color: "white" }}
      >
        <Modal.Title>Edit Your Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* could have used input but FormControl looked better */}
        <FormControl
          type="text"
          placeholder="Type here"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
        />

        {/* error shows when opening modal and not when save changes is clicked */}
        {showError && (
          <Alert variant="primary" dismissible>
            Please enter your to-do task
          </Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          // tried using App.css but wasn't working
          style={{
            backgroundColor: "rgb(69, 184, 223)",
            border: "solid rgb(69, 184, 223) 1px",
          }}
          variant="primary"
          onClick={handleSave}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
