import * as AT from "../actions/action-types";

const initialState = {
  todos: [],
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case AT.ADD_TODO:
      console.log("reducer: ", action.payload);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            is_complete: action.payload.is_complete,
          },
        ],
      };

    case AT.COMPLETE_TODO:
      const target = state.todos.find(
        (item, index) => item.id === action.payload
      );
      target.is_complete = true;
      return {
        ...state,
      };
    case AT.DELETE_TODO:
      console.log('delete ',action.payload)
     return {
        ...state,
        todos:[
          ...state.todos.filter((item, index) => item.id !== action.payload)
        ]
      };

    default:
      return state;
  }
}
