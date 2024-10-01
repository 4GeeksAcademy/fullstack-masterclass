import React from "react";
import "../styles/home.css";

function TodoRectangle({ content, isCompleted, onTodoClick, onTodoDelete }) {
  return (
    <div
      onClick={onTodoClick}
      className={`rectangle ${isCompleted ? "green-border" : "red-border"}`}
    >
      <div className="rectangle-row">
        <div>{content}</div>
        <div onClick={onTodoDelete}>X</div>
      </div>
    </div>
  );
}

export default TodoRectangle;
