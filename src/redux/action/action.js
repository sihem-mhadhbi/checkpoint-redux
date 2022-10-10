import {
  Add_Todo,
  Delete_Todo,
  Done_Undone_Todo,
  Edit_Todo,
} from "./typeAction";

export const addTask = (newTask) => ({
  type: Add_Todo,
  payload: newTask,
});

export const deleteTask = (id) => ({
  type: Delete_Todo,
  payload: id,
});

export const doneUndoneTask = (id) => ({
  type: Done_Undone_Todo,
  payload: id,
});

export const editTask = (editedTask) => ({
  type: Edit_Todo,
  payload: editedTask,
});
