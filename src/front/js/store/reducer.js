import { REDUCER_ACTION_TYPES } from "./actions.const";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.USERS.FETCH:
      return {
        ...state,
        users: action.payload,
      };

    case REDUCER_ACTION_TYPES.USERS.ADD:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case REDUCER_ACTION_TYPES.USERS.REMOVE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case REDUCER_ACTION_TYPES.TODOS.FETCH:
      return {
        ...state,
        todos: action.payload,
      };

    case REDUCER_ACTION_TYPES.TODOS.REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case REDUCER_ACTION_TYPES.TODOS.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REDUCER_ACTION_TYPES.TODOS.UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };

    default:
      return state;
  }
};
