import React from "react";
import UserRectangle from "./UserRectangle";
import "../styles/home.css";
function Users() {
  return (
    <div className="rectangle-wrapper">
      {[
        {
          name: "Hannah Garcia",
          quote: "This is a quote",
          completed: 0,
          incompleted: 5,
        },
        {
          name: "Monalissa singh",
          quote: "This is a quote",
          completed: 2,
          incompleted: 3,
        },
        {
          name: "Joe Gallop",
          quote: "This is a quote",
          completed: 1,
          incompleted: 4,
        },
      ].map((user) => (
        <UserRectangle
          name={user.name}
          quote={user.quote}
          todosAmount={{
            completed: user.completed,
            incompleted: user.incompleted,
          }}
        />
      ))}
    </div>
  );
}

export default Users;
