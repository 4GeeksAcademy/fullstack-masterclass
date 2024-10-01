import React from "react";
import "../styles/home.css";

function UserRectangle({ name, quote, todosAmount, onUserClick }) {
  return (
    <div className="rectangle" onClick={onUserClick}>
      <div className="rectangle-row">
        <div>{name}</div>
        <div>X</div>
      </div>
      <div className="rectangle-row">
        <div>{quote}</div>
        <div>{`Todos: ${todosAmount.completed}/${todosAmount.total}`}</div>
      </div>
    </div>
  );
}

export default UserRectangle;
