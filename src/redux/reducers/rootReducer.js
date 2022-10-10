import {
  Add_Todo,
  Edit_Todo,
  Done_Undone_Todo,
  Delete_Todo,
} from "../action/typeAction";

const init = {
  tasks: [{ text: "", isComplete: false, id: 0 }],
};

function rootReducer(state = init, action) {
  switch (action.type) {
    case Add_Todo:
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case Delete_Todo:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case Done_Undone_Todo:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isComplete: !task.isComplete }
            : task
        ),
      };
    case Edit_Todo:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
