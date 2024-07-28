//using modal form react bootstrap
import React from "react";
import { Modal } from "react-bootstrap";

//handleClose very important otherwise modal won't go away
export default function Info({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "rgb(0, 168, 224)" }}>
          User Instructions for Taskify - Your To-Do Website
        </Modal.Title>
      </Modal.Header>
      {/* making layout of instructions easy to read */}
      <Modal.Body>
        <p>
          Welcome to Taskify, your go-to platform for organizing your tasks
          efficiently! Below are step-by-step instructions on how to use the
          website to manage your to-do list effectively:
        </p>
        <h5>1.Adding Tasks:</h5>
        <p>
          When you want to add a task simply fill in the block containing "Add
          an item". Once you are happy with what you typed, press enter or the
          add button. Your task will now show in the list below.
        </p>
        <h5> 2.Editing Tasks:</h5>
        <p>
          If you need to modify any task details, locate the task you want to
          edit and click on the "Edit" button. A form will apear allowing you to
          make changes. Once you've made your changes click the "Save changes"
          button.
        </p>
        <h5>3.Marking tasks as complete:</h5>
        <p>
          Once you finished a task and want to mark it as complete simply click
          the checkbox infront of your task. This will make your to-do counter
          go lower and prevent you from editing the finished task.
        </p>
        <h5> 4.Deleting tasks:</h5>
        <p>
          When you want to remove your task entirely locate the delete button
          next to your task and click it. This will delete your task
          permanently.
        </p>
        <h5> 5. Additional feature:</h5>
        In the top left corner you will see a to-do counter displaying the
        number of tasks you still have to complete.
      </Modal.Body>
    </Modal>
  );
}
