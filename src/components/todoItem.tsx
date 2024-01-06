import React from "react";

import { TodoItemType } from "../types/todoItem.type";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/slice";
import { AppDispatch } from "../redux/store";

export default function TodoItem({ id, title, completed }: TodoItemType) {
  const dispatch:AppDispatch = useDispatch();

  const handleToggleCheckbox = () => {
    dispatch(
      toggleComplete({
        id,
        completed: !completed,
      })
    );
  };
  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };
  return (
    <li key={id} className={`${completed && "list-item-success"}`}>
      <div className="d-flex justify-content-btw">
        <span className="d-flex align-item-center">
          <input
            type="checkbox"
            checked={completed}
            onClick={handleToggleCheckbox}
            readOnly
          ></input>
          {title}
        </span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}
