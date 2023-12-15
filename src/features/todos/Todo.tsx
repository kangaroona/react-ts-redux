import React, { useState } from "react";
import {
  addTodo,
  delTodo,
  toggleTodo,
  selectTodo,
  ToDoState,
} from "./todoReducer";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
function Todo() {
  const todos: ToDoState = useAppSelector(selectTodo);
  const [textValue, setText] = useState("");
  const dispatch = useAppDispatch();
  function handleAdd() {
    dispatch(addTodo({ id: todos.length, text: textValue }));
    setText("");
    // addTodo(e.target.value)
  }
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={textValue}
      />
      <button onClick={(e) => handleAdd()}>add item</button>
    </div>
  );
}

export default Todo;
