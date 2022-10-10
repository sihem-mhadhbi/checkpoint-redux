import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((el) => (
        <Task task={el} key={el.id} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.tasks,
});

export default connect(mapStateToProps)(TodoList);
