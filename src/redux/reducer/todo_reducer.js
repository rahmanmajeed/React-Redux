import * as AT from "../actions/action-types";

const initialState = {
  todos: [],
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case AT.ADD_TODO:
      return {
        ...state,
        todos: [
          {
            id: 1,
            todo_title: "abc",
          },
        ],
      };

    default:
		return state;
  }
}
