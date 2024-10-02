export const fetchUsersService = async () => {
  const rawResponse = await fetch(`${process.env.BACKEND_URL}/api/users`, {
    method: "GET",
  });
  return await rawResponse.json();
};

export const createNewUserService = async (newUser) => {
  const rawResponse = await fetch(`${process.env.BACKEND_URL}/api/users`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await rawResponse.json();
};

export const removeUserService = async (userId) => {
  await fetch(`${process.env.BACKEND_URL}/api/users/${userId}`, {
    method: "DELETE",
  });
};

export const fetchTodosService = async (userId) => {
  const rawResponse = await fetch(
    `${process.env.BACKEND_URL}/api/users/${userId}/todos`,
    { method: "GET" }
  );
  return await rawResponse.json();
};

export const removeTodoService = async (todoId) => {
  await fetch(`${process.env.BACKEND_URL}/api/todos/${todoId}`, {
    method: "DELETE",
  });
};

export const createNewTodoService = async (newTodo) => {
  const rawResponse = await fetch(`${process.env.BACKEND_URL}/api/todos`, {
    method: "POST",
    body: JSON.stringify({
      completed: false,
      content: newTodo.content,
      user_id: newTodo.userId,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await rawResponse.json();
};

export const updateTodoService = async (todoId, payload) => {
  await fetch(`${process.env.BACKEND_URL}/api/todos/${todoId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
