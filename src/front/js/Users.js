import React, { useEffect, useState } from "react";
import UserRectangle from "./UserRectangle";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", quote: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const rawResponse = await fetch(
          `${process.env.BACKEND_URL}/api/users`,
          { method: "GET" }
        );
        const translatedResponse = await rawResponse.json();

        setUsers(translatedResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const goToUserDetails = (userId) => {
    navigate(`users/${userId}`);
  };

  const onNewUserInputChange = (event, field) => {
    setNewUser({ ...newUser, [field]: event.target.value });
  };

  const onAddTodoButtonClick = async () => {
    try {
      const rawResponse = await fetch(`${process.env.BACKEND_URL}/api/users`, {
        method: "POST",
        body: JSON.stringify({
          name: newUser.name,
          quote: newUser.quote,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const translatedResponse = await rawResponse.json();

      const newUsers = [...users, translatedResponse];
      setUsers(newUsers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newUser.name}
        placeholder="Insert your name..."
        onChange={(event) => {
          onNewUserInputChange(event, "name");
        }}
      />
      <input
        type="text"
        value={newUser.quote}
        placeholder="Insert your quote..."
        onChange={(event) => {
          onNewUserInputChange(event, "quote");
        }}
      />
      <button onClick={onAddTodoButtonClick}>Add User</button>
      <div className="rectangle-wrapper">
        {users.map((user) => (
          <UserRectangle
            name={user.name}
            quote={user.quote}
            todosAmount={{
              completed: user.completed_todos,
              total: user.total_todos,
            }}
            onUserClick={() => {
              goToUserDetails(user.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Users;
