


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completetask, deletetask, edittask } from "../redux/actions";

const Task = ({ task }) => {
  const [editText, setEditText] = useState(task.action);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setEditText(task.action);
    setOpen(false);
  };
  const handleConfirm = () => {
    dispatch(edittask(task.id, editText));
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setEditText(event.target.value);
  };

  return (
    <div className="task">
      {open ? (
        <div>
          <input type="text" value={editText} onChange={handleInputChange} />
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2 className={task.isdone ? "done" : ""}>{task.action}</h2>
          <button onClick={() => dispatch(deletetask(task.id))}>Delete</button>
          <button onClick={() => dispatch(completetask(task.id))}>Complete</button>
        </div>
      )}
      <button onClick={handleOpen}>Edit</button>
    </div>
  );
};

export default Task;


