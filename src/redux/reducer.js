import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actiontypes";

const init = {
  tasks: [
    { id: Math.random(), action: "testtask", isdone: false },
    { id: Math.random(), action: "testtask22", isdone: false },
  ],
  filter:false
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isdone: !el.isdone } : el
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, action: payload.action } : task
        ),
      };

    case FILTER_TASK:
      return {
        ...state,
        filter: !state.filter,
      };

    default:
      return state;
  }
};

export default reducer;
