import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actiontypes";

export const deletetask = (id) => {
    return {
        type: DELETE_TASK,
        payload : id,
    }
};
export const completetask = (id) => ({
    type: COMPLETE_TASK,
    payload: id
});


 export const addtask = (newtask) => {
    return {
        type: ADD_TASK,
        payload : newtask,
    }
};


export const edittask = (id, action) => ({
  type: EDIT_TASK,
  payload: { id, action },
});

export const filtertask = () => {
  return { type: FILTER_TASK };
};

