import React from "react";
import { delTodo, toggleTodo, ToDoState, TodoItem } from "./todoReducer";
import { useAppDispatch } from "../../app/hooks";
function Checkbox({ item }: { item: TodoItem }) {
  const dispatch = useAppDispatch();
  const checked = item.completed ? true : false;
  const handleCheck = (e: any) => {
    // handleToggle(value);
    dispatch(toggleTodo(parseInt(e.target.value)));
  };
  return (
    <input
      type="checkbox"
      checked={checked}
      value={item.id}
      name="radioitem"
      onChange={handleCheck}
    />
  );
}

export default Checkbox;
