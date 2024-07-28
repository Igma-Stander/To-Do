import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, edit, remove, completed } from "../store/counterState";
import {
  Button,
  FormControl,
  Alert,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import AddModal from "./AddModal";
import Info from "./Info";
import icon from "../Images/info-icon.png";

export default function Counter() {
  //Redux state and dispatch
  const todoList = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  //states for all the functions below
  const [inputValue, setInputValue] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [warning, setWarning] = useState(false);

  // used for to-do counter
  const todoCount = todoList.length;

  // adding new item with error statement
  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      dispatch(add(inputValue));
      setInputValue("");
    } else {
      setWarning(true);
    }
  };

  // function allowing to add item when pressing enter
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  // opening of edit modal
  const handleEditModal = (index) => {
    setEditIndex(index);
    setShowAddModal(true);
  };

  // close modals and reset edit index
  const handleCloseModal = () => {
    setShowAddModal(false);
    setShowInfoModal(false);
    setEditIndex(null);
  };

  //dispatch to edit item
  const handleEditItem = (index, content) => {
    dispatch(edit({ index, content }));
  };

  // remove item function
  const handleRemoveItem = (index) => {
    dispatch(remove(index));
  };

  // marking to-do item as complete
  const handleCompleted = (index) => {
    dispatch(completed(index));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p className="counter">To-Do counter: {todoCount}</p>
          </Col>
          <Col xs={10}>
            <h1 className="heading">Taskify</h1>
          </Col>

          {/* logo modal */}
          <Col>
            <img
              className="logo"
              src={icon}
              alt="Info"
              onClick={() => setShowInfoModal(true)}
            />
          </Col>
        </Row>
      </Container>
      <div>
        {/* adding new items with enter key or button */}
        <FormControl
          style={{ textAlign: "center" }}
          type="text"
          placeholder="Add an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleEnter}
        />

        {/* using alert from bootstrap not browser */}
        {warning && (
          <Alert variant="danger" onClose={() => setWarning(false)} dismissible>
            Please enter your to-do task
          </Alert>
        )}

        <Button
          className="button"
          variant="success"
          onClick={handleAdd}
          style={{ marginTop: "6px" }}
        >
          Add
        </Button>

        <div>
          {todoList.map((todo, index) => (
            // if box checked opacity is lower
            <div
              key={index}
              style={{ opacity: todo.completed ? 0.5 : 1, padding: "10px" }}
            >
              {/* checkbox for marking complete */}
              <input
                type="checkbox"
                checked={todo.completed}
                onClick={() => handleCompleted(index)}
                style={{ marginRight: "5px" }}
              />

              {/* displaying to-do tasks */}
              <span>{todo.content}</span>

              {/* when box is checked edit button loses styling */}
              <Button
                variant="primary"
                onClick={() => handleEditModal(index)}
                disabled={todo.completed}
                className="button"
              >
                Edit
              </Button>

              <Button
                variant="success"
                onClick={() => handleRemoveItem(index)}
                className="button"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* adding the modals */}
      <AddModal
        show={showAddModal}
        handleClose={handleCloseModal}
        handleEdit={handleEditItem}
        itemIndex={editIndex}
      />

      <Info show={showInfoModal} handleClose={handleCloseModal} />
    </div>
  );
}
