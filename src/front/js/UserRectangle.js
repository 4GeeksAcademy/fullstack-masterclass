import React from "react";
import "../styles/home.css";

function UserRectangle({ name, quote, todosAmount }) {
  return (
    <div className="rectangle">
      <div className="rectangle-row">
        <div>{name}</div>
        <div>X</div>
      </div>
      <div className="rectangle-row">
        <div>{quote}</div>
        <div>
          {`Todos: ${todosAmount.completed}/${todosAmount.incompleted}`}
        </div>
      </div>
    </div>
  );
}

export default UserRectangle;
