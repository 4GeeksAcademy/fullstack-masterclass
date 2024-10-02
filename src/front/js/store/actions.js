import {
  createNewTodoService,
  createNewUserService,
  fetchTodosService,
  fetchUsersService,
  removeTodoService,
  removeUserService,
  updateTodoService,
} from "../service";
import { REDUCER_ACTION_TYPES } from "./actions.const";

export const fetchUsers = async (dispatch) => {
  try {
    const translatedResponse = await fetchUsersService();
    dispatch({
      type: REDUCER_ACTION_TYPES.USERS.FETCH,
      payload: translatedResponse,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addNewUser = async (dispatch, newUser) => {
  try {
    const translatedResponse = await createNewUserService(newUser);

    dispatch({
      type: REDUCER_ACTION_TYPES.USERS.ADD,
      payload: translatedResponse,
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeUser = async (dispatch, userId) => {
  try {
    await removeUserService(userId);

    dispatch({
      type: REDUCER_ACTION_TYPES.USERS.REMOVE,
      payload: userId,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchTodos = async (dispatch, userId) => {
  try {
    const translatedResponse = await fetchTodosService(userId);

    dispatch({
      type: REDUCER_ACTION_TYPES.TODOS.FETCH,
      payload: translatedResponse,
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeTodo = async (dispatch, todoId) => {
  try {
    await removeTodoService(todoId);

    dispatch({
      type: REDUCER_ACTION_TYPES.TODOS.REMOVE,
      payload: todoId,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addNewTodo = async (dispatch, newTodo) => {
  try {
    const translatedResponse = await createNewTodoService(newTodo);

    dispatch({
      type: REDUCER_ACTION_TYPES.TODOS.ADD,
      payload: translatedResponse,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (dispatch, todoId, payload) => {
  try {
    await updateTodoService(todoId, payload);

    dispatch({
      type: REDUCER_ACTION_TYPES.TODOS.UPDATE,
      payload: {
        id: todoId,
        ...payload,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
