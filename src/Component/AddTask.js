import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action/action";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newtodo = {
      text: text,
      id: Date.now(),
      isComplete: false,
    };
    addTask(newtodo);
    setText("");
  };
  return (
    <div>
      <h1>My To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Add</button>
        <div>
          <input type="radio" name="task" value="All" id="All" />
          <label className="form-label" htmlFor="Uncompleted">
            All
          </label>
        </div>
        <div>
          <input type="radio" name="task" value="completed" id="completed" />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="Uncompleted"
            id="Uncompleted"
          />
          <label className="form-label" htmlFor="Uncompleted">
            UnCompleted
          </label>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { addTask })(AddTask);
