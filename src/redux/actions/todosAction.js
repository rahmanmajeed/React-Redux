import * as AT from "./action-types";

export function addTodo(payload) {
  // console.log('payload consoled from action: ', payload);
  return {
    type: AT.ADD_TODO,
    payload: payload,
  };
}

export function completeTodo(payload) {
  console.log(payload);
  return {
    type: AT.COMPLETE_TODO,
    payload: payload,
  };
}

export function deleteTodo(payload) {
     return{
          type: AT.DELETE_TODO,
          payload: payload
     }
}
