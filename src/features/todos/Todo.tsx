import React, { useState } from "react";
import { addTodo, delTodo, selectTodo, ToDoState } from "./todoReducer";
import Checkbox from "./Checkbox";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
function Todo() {
  const todos: ToDoState = useAppSelector(selectTodo);
  const [textValue, setText] = useState("");
  const dispatch = useAppDispatch();
  function handleAdd() {
    dispatch(addTodo({ id: todos.length, text: textValue }));
    setText("");
  }
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <Checkbox item={item} />
            {item.text}
          </li>
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
