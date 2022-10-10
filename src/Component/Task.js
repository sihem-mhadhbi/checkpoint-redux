import React from "react";
import { connect } from "react-redux";
import EditTask from "./EditTask";
import "../App.css";
import { deleteTask, doneUndoneTask, editTask } from "../redux/action/action";

<div className="" />;

function Task({ task, doneUndoneTask, deleteTask }) {
  return (
    <div className="card">
      <p
        onClick={() => doneUndoneTask(task.id)}
        style={
          task.isComplete
            ? { textDecoration: "line-through", opacity: "0.3" }
            : { cursor: "pointer" }
        }
      >
        {task.text}
      </p>
      <div className="buttons">
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <EditTask oldTask={task} />
      </div>
    </div>
  );
}

export default connect(null, { deleteTask, doneUndoneTask, editTask })(Task);
