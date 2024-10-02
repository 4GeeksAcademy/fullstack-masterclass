import React, { useEffect, useMemo, useState } from "react";
import TodoRectangle from "./TodoRectangle";
import { useParams } from "react-router-dom";
import { addNewTodo, fetchTodos, removeTodo } from "./store/actions";

function UsersDetails() {
  const [newTodo, setNewTodo] = useState("");
  const { userId } = useParams();

  const { state, dispatch } = useContext(AppContext);

  const user = useMemo(() => selectUserDetails(state), []);

  useEffect(() => {
    fetchTodos(dispatch);
  }, []);

  const switchTodoCompletedStatus = async (todoId, todoCompletedStatus) => {
    await updateTodo(dispatch, todoId, { complete: !todoCompletedStatus });
  };

  const handleOnNewTodoInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const onAddTodoButtonClick = async () => {
    await addNewTodo(dispatch, { content: newTodo, userId });
  };

  const onTodoDelete = async (todoId) => {
    await removeTodo(dispatch, todoId);
  };

  return (
    <div>
      <h2>{`You are currently reading ${user.name} Todos`}</h2>
      <input
        type="text"
        value={newTodo}
        onChange={handleOnNewTodoInputChange}
      />
      <button onClick={onAddTodoButtonClick}>Add Todo</button>
      {state.todos.map((todo) => (
        <TodoRectangle
          onTodoClick={() => {
            switchTodoCompletedStatus(todo.id, todo.completed);
          }}
          content={todo.content}
          isCompleted={todo.completed}
          onTodoDelete={() => {
            onTodoDelete(todo.id);
          }}
        />
      ))}
    </div>
  );
}

export default UsersDetails;
