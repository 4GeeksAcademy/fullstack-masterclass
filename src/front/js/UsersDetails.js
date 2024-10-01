import React, { useEffect, useState } from "react";
import TodoRectangle from "./TodoRectangle";
import { useParams } from "react-router-dom";

function UsersDetails() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [newTodo, setNewTodo] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const rawResponse = await fetch(
          `${process.env.BACKEND_URL}/api/users/${userId}/todos`,
          { method: "GET" }
        );
        const translatedResponse = await rawResponse.json();

        setTodos(translatedResponse);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUser = async () => {
      try {
        const rawResponse = await fetch(
          `${process.env.BACKEND_URL}/api/users/${userId}`,
          { method: "GET" }
        );
        const translatedResponse = await rawResponse.json();

        setUser(translatedResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
    fetchUser();
  }, []);

  const switchTodoCompletedStatus = async (todoId, todoCompletedStatus) => {
    try {
      await fetch(`${process.env.BACKEND_URL}/api/todos/${todoId}`, {
        method: "PUT",
        body: JSON.stringify({ completed: !todoCompletedStatus }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const newTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todoCompletedStatus };
        } else return todo;
      });

      setTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnNewTodoInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const onAddTodoButtonClick = async () => {
    try {
      const rawResponse = await fetch(`${process.env.BACKEND_URL}/api/todos`, {
        method: "POST",
        body: JSON.stringify({
          completed: false,
          content: newTodo,
          user_id: userId,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const translatedResponse = await rawResponse.json();

      const newTodos = [...todos, translatedResponse];
      setTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const onTodoDelete = async (todoId) => {
    try {
      await fetch(`${process.env.BACKEND_URL}/api/todos/${todoId}`, {
        method: "DELETE",
      });

      const newTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
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
      {todos.map((todo) => (
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
