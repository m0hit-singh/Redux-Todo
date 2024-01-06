import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/slice";
import { AppDispatch } from "../redux/store";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch:AppDispatch = useDispatch();

  const handleSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (task) {
      dispatch(
        addTodo({
          title: task,
        })
      );
      setTask("");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="Enter a Task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
